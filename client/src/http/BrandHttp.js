import {$api } from '../api/api.js'

export class BrandHttp{
    static async addBrand(payload){
        return await $api.post('/brand/add-brand', payload)  
    }
    static async getBrands(){
        return await $api.get('/brand/all-brand')  
    }

    static async addModel(payload){
        return await $api.post('/brand/add-model', payload)  
    }
    static async getModels({id}){
        return await $api.get(`/brand/all-models-id/${id}`)  
    }
    static async getAllModels(){
        return await $api.get(`/brand/all-models`)  
    }
   
    
}