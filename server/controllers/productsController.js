import { v4 as uuid } from 'uuid';
import path from 'path'
import {Products, ProductsInfo} from '../models/models.js'
import ApiError from '../error/ApiError.js'


class productsController {
    async create(req, res, next) {
        try {
            let {name, price, categoryId, info} = req.body
            const {img} = req.files
            let fileName = uuid() + ".jpg"
            img.mv(path.resolve(process.cwd(), 'static', fileName))
            const product = await Products.create({name, price, img: fileName, categoryId})

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductsInfo.create({
                        title: i.title,
                        description: i.description,
                        ProductId: product.id
                    })    
                )
            }

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        const{categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products;
        if(!categoryId) {
            products = await Products.findAndCountAll({limit, offset})
        }
        if(categoryId){
            products = await Products.findAndCountAll({where:{categoryId},limit, offset})
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Products.findOne(
            {
                where: {id},
                include: [{model: ProductsInfo, as: 'info'}]
            },
        )
        return res.json(product)
    }
}

export default new productsController();