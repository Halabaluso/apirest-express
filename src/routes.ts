import express from "express"
import { StartController } from "./controllers/StartController"
import { CreateUSer, SearchAllUsers, SearchUsersById, SearchUsersByEmail } from "./controllers/userscontroller"

const router = express.Router()

const ping = router.get("/ping", StartController)
const createuser = router.get("/user/new", CreateUSer)
const searchallusers = router.get("/user/searchall", SearchAllUsers)
const searchusersbyid = router.get("/user/searchbyid", SearchUsersById)
const searchusersbyemail = router.get("/user/searchbyemail", SearchUsersByEmail)

export{
    ping,
    createuser,
    searchallusers,
    searchusersbyid,
    searchusersbyemail
}