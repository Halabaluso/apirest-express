import { Response, Request } from "express"
import { NewUserModel, SearchUserByAll, SearchUserById, SearchUserByEmail } from "../models/usersmodels"
import {  CreateUser, DataReturn } from "../models/interfaces"
import CryptoJS from "crypto-js"


const CreateUSer = async (req:Request, res:Response) => {
    //http://localhost:3000/user/new?name=Julian&lastname=Mart%C3%ADn%20D%C3%ADaz&email=gran.dani@gmail.com&phone=663561898&password=2287y2287Y.
    try {
        const { name, phone, email, lastname, password } = req.query as unknown as CreateUser
        const PasswordEncripted = CryptoJS.AES.encrypt(password, process.env.ENCRIPTED_PASSWORD as string).toString();
        const response = await NewUserModel(name, lastname, phone, email, PasswordEncripted)
        res.json(response) 
    } catch (error) {
        const response:DataReturn = {
            err: true,
            msg: "Error in body"
        }
        res.json(response)
        console.log("Server error")
    }
}

const SearchAllUsers = async (req:Request, res:Response) => {
    try {
        const { name, phone, email, lastname } = req.query as unknown as CreateUser
        const response = await SearchUserByAll()
        res.json(response)  
    } catch (error) {
        const response:DataReturn = {
            err: true,
            msg: "Error in body"
        }
        res.json(response)
        console.log("Server error")
    }
}

const SearchUsersById = async (req:Request, res:Response) => {
    try {
        const { id } = req.query as any
        const response = await SearchUserById(id)
        res.json(response)  
    } catch (error) {
        const response:DataReturn = {
            err: true,
            msg: "Error in body"
        }
        res.json(response)
        console.log("Server error")
    }
}

const SearchUsersByEmail = async (req:Request, res:Response) => {
    try {
        const { email } = req.query as any
        const response = await SearchUserByEmail(email)
        res.json(response)  
    } catch (error) {
        const response:DataReturn = {
            err: true,
            msg: "Error in body"
        }
        res.json(response)
        console.log("Server error")
    }
}

export {
    CreateUSer,
    SearchAllUsers,
    SearchUsersById,
    SearchUsersByEmail
}