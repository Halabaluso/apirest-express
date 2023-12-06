import { sequelize } from "../db/index"
import { DataTypes } from "sequelize"


const User = sequelize.define("User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        indexUser: {
            type: DataTypes.STRING,
            defaultValue: Date.now()
        }
    },
    {
        tableName: 'users'
    }
)

export {
    User,
}