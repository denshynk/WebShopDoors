import sequelize from '../db.js';
import {DataTypes} from 'sequelize' 




const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    tnumber: {type: DataTypes.STRING, allowNull: false},
    details: {type: DataTypes.STRING, allowNull: true},
});

const BasketDoors = sequelize.define('basket_doors', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


const Doors = sequelize.define('Doors', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}, 
    img: {type: DataTypes.STRING, allowNull: false}, 
});

const Info = sequelize.define('info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
    characteristics: {type: DataTypes.STRING, allowNull: false},
    guarantee: {type: DataTypes.STRING, allowNull: false},

});



Basket.hasMany(BasketDoors)
BasketDoors.belongsTo(Basket)

Doors.hasMany(BasketDoors)
BasketDoors.belongsTo(Doors)

Doors.hasOne(Info)
Info.belongsTo(Doors)


export default  {
    Basket, 
    BasketDoors,
    Doors,
    
    Info
}


