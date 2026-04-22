const { DataTypes } = require('sequelize'); 
const sequelize = require('./configurarSequelize')

const articulos = sequelize.define("articulos",
    {IdArticulo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Nombre: {type: DataTypes.STRING(60), allowNull: false, validate: {notEmpty: {args: true, msg: "Nombre es Requerido"}, len: {args: [5, 60], msg: "Nombre debe ser tipo caracteres, entre 5 y 60 de longitud"}}, unique: {args: true, msg: "este nombre ya existe en la tabla!"}}, 
    Precio: {type: DataTypes.DECIMAL(10,2), allowNull: false, validate: {notNull: {args: true, msg: "Precio es requerido"}}}, 
    CodigoDeBarra: {type: DataTypes.STRING(13), allowNull: false, validate: {notNull: {args: true, msg: "Codigo de Barra es requerido"}, is: { args: ["^[0-9]{13}$","i"], msg: "Codigo de barra debe ser numerico de 13 digitos"}}},
    IdCategoria: {type: DataTypes.INTEGER, allowNull: false, validate: {notNull: {zrgs: true, msg: "IdCategoria es requerido"}}},
    Stock: {type: DataTypes.INTEGER, allowNull: false, validate: {notNull: {args: true, msg: "Stock es requerido"}}},
    FechaAlta: {type: DataTypes.STRING, allowNull: false, validate: {notNull: {args: true, msg: "Fecha Alta es requerido"}}},
    Activo: {type: DataTypes.BOOLEAN, allowNull: false, validate: {notNull: {args: true, msg: "Activo es requerido"}}},
    },
    {
        hooks: {
            beforeValidate: function (articulo, options) {
                if (typeof articulo.Nombre === "string") {
          articulo.Nombre = articulo.Nombre.toUpperCase().trim();
        }
      }
    }
  }
)  
        

module.exports = articulos;
