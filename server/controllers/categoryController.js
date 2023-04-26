import {Category} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class categoryController {
    async create(req, res) {
        const{name} = req.body
        const categories = await Category.create({name})
        return res.json(categories)    
    }

    async getAll(req, res) {

    }

}

export default new categoryController()

