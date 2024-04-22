import {$api } from '../api/api.js'

export class NodeHttp{

    static async addNodeToGraph(payload){
        return await $api.post('/structure-routes/add-node-graph', payload)  
    }

    static async addProductNodeToGraph(payload){
        return await $api.post('/structure-routes/add-product-node-graph', payload)  
    }
    
    static async getNodesInGraph(id){
        return await $api.get(`/structure-routes/get-nodes-graph/${id}`)  
    }
     
    static async getMainParentNodes(payload){
        return await $api.post('/structure-routes/get-main-parent-nodes',payload)  
    }
     
}