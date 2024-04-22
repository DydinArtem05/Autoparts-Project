import {$api, $authApi } from '../api/api.js'

export class AuthHttp{
    static async registration(payload){
        return await $authApi.post('/registration', payload)  
    }
    static async refresh(payload){
        return await $api.post('/authentication/refresh', payload)  
    }
    static async login(payload){
        return await $authApi.post('/login', payload)  
    }
    static async logout(payload){
        return await $authApi.post('/logout', payload)  
    }
    static async getUserStatistic(){
        return await $authApi.get('/get-user-statistic')  
    }
}