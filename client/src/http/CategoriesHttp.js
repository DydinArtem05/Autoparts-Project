import {$api } from '../api/api.js'

export class CategoriesHttp{
    static async addCategories(payload){
        return await $api.post('/categories/add-categories', payload)  
    }
    static async getCategories(){
        return await $api.get('/categories/all-categories')  
    }
     
}