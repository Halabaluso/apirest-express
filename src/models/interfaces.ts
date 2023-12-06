interface DataReturn {
    err: boolean,
    response?: any,
    msg: string
}

interface CreateUser {
    name: string,
    lastname: string,
    email: string,
    phone: string,
    password: string
}
export {
    CreateUser,
    DataReturn
}