import { Axios, AxiosError } from 'axios';
import { api } from '../../api';
import { Alert } from 'react-native';

export interface IUser {
    name?: string
    email?: string
    password?: string
    message?: string
}

export interface IResponseUser {
    name: string
    email: string
    created_at: string
    update_at: string
    id: number
}

export interface IAuthenticated {
    user: IResponseUser
    token: {
        token: string
        expires_at: string
    }
}
/*
export interface IError {
    errors: {
        rule: string
        field: string 
        message: string
    }[]
}*/

class UserData {
    register(data: IUser) {
        return api.post<IResponseUser>('/register', data)
    }
    login(data: IUser) {
        return api.post<IAuthenticated>('/login', data)
    }
}

export default new UserData()