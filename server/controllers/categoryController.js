import {Category} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class categoryController {
    async create(req, res) {
        const{name} = req.body
        const categories = await Category.create({name})
        return res.json(categories)    
    }

    async getAll(req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }

}

export default new categoryController()

