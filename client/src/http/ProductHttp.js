import {$api } from '../api/api.js'

export class ProductHttp{
    static async addProduct(payload){
        return await $api.post('/product/add-product', payload)  
    }
    
    static async getProduct(filter){
        return await $api.post('/product/all-product', filter)  
    }
     
    static async findAllProductsById(ids){
        return await $api.post('/product/all-product-by-id',ids)  
    }
  
}