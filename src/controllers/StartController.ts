import { Response, Request } from "express"

const StartController = (req:Request, res:Response) => {
    console.log("Pong")
    res.send("Pong")
}

export {
    StartController
}