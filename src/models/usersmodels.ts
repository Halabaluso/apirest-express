import { DataReturn } from "./interfaces"
import { User } from "./schema"



const NewUserModel = async (name:string, lastname:string, phone:string, email:string, password: string) => {
    try {
        await User.sync()
        const newuser = User.build({
            email: email,
            phone: phone,
            lastname: lastname,
            name: name,
            password: password
        })
        await newuser.save()
        let object: DataReturn = {
            err: false,
            msg: "User created"
        }
        return object
    } catch (error) {
        console.log("An error happen creating an user")
        let object: DataReturn = {
            err: true,
            msg: "Server error"
        }
        return object
    }
}

const SearchUserByAll = async () => {
    try {
        const data = await User.findAll()
        let object: DataReturn = {
            err: false,
            response: data,
            msg: "Users data"
        }
        return object
    } catch (error) {
        console.log("An error searching all users")
        let object: DataReturn = {
            err: true,
            msg: "Server error"
        }
        return object
    }
}

const SearchUserById = async (query:string) => {
    try {
        const data = await User.findAll({
            where:{
                id: query
            }
        })
        let object: DataReturn = {
            err: false,
            response: data,
            msg: "User data"
        }
        return object
    } catch (error) {
        console.log("An error searching all users")
        let object: DataReturn = {
            err: true,
            msg: "Server error"
        }
        return object
    }
}

const SearchUserByEmail = async (query:string) => {
    try {
        const data = await User.findAll({
            where:{
                email: query
            }
        })
        let object: DataReturn = {
            err: false,
            response: data,
            msg: "User data"
        }
        return object
    } catch (error) {
        console.log("An error searching all users")
        console.log(error)
        let object: DataReturn = {
            err: true,
            msg: "Server error"
        }
        return object
    }
}

export {
    NewUserModel,
    SearchUserByAll,
    SearchUserById,
    SearchUserByEmail
}