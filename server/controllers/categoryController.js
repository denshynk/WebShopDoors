import {Category} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class categoryController {
    async create(req, res) {
        const{name} = req.body
        const category = await Category.create({name})
        return res.json(category)    
    }

    async getAll(req, res) {

    }

}

export default new categoryController()

