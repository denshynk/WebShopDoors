import ApiError from "../error/ApiError.js";
import bcryprt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import {SuperUser} from '../models/models.js'


const generateJwt = (id, login, role ) => {
    return jwt.sign(
        {id, login, role},
         process.env.SECRET_KEY,
         {expiresIn: '24h'}
         )
}

class UserController {
    async registration(req, res) {
        const {login, password, role} = req.body
        if (!login || !password) {
            return next(ApiError.badRequest('Некоректный логин или пароль'))
        }
        const candidate = await SuperUser.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Логин занят'))
        }
        const hashPassword = await bcryprt.hash(password, 5)
        const user = await SuperUser.create({login, role, password: hashPassword})
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }
    async login(req, res, next) {
         const {login, password} = req.body
         const user = await SuperUser.findOne({where:{login}})
         if(!user) {
            return next(ApiError.internal('Пользователь не найден'))
         }
         let comparePassword = bcryprt.compareSync(password, user.password)
         if(!comparePassword) {
            return next(ApiError.internal('Пользователь не найден'))
         }
         const token = generateJwt(user.id, user.login, user.role)
         return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role)
        return res.json({token})
    }
}

export default new UserController();