import sequelize from '../db.js';
import DataTypes from 'sequelize' 


const SuperUser = sequelize.define('superusers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    tnumber: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: true},
    details: {type: DataTypes.STRING, allowNull: true},

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



Products.hasMany(Basket)
Basket.belongsTo(Products)

Products.hasMany(ProductsInfo, {as: 'info'})
ProductsInfo.belongsTo(Products)

Category.hasMany(Products);
Products.belongsTo(Category);


export {
    Basket, 
    Products,
    ProductsInfo,
    Category,
    SuperUser

}


