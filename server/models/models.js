import sequelize from '../db.js';
import DataTypes from 'sequelize' 


const SuperUser = sequelize.define('superusers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    tnumber: {type: DataTypes.STRING, allowNull: false},
    details: {type: DataTypes.STRING, allowNull: true},
});

const BasketProducts = sequelize.define('basket_products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Products = sequelize.define('Products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}, 
    img: {type: DataTypes.STRING, allowNull: false}, 
});

const Category = sequelize.define('categories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ProductsInfo = sequelize.define('Products_infos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})



Basket.hasMany(BasketProducts)
BasketProducts.belongsTo(Basket)

Products.hasMany(BasketProducts)
BasketProducts.belongsTo(Products)

Products.hasOne(ProductsInfo)
ProductsInfo.belongsTo(Products)

Category.hasMany(Products);
Products.belongsTo(Category);


export {
    Basket, 
    BasketProducts,
    Products,
    ProductsInfo,
    Category,
    SuperUser

}


