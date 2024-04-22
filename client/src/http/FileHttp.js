import {$api } from '../api/api.js'

export class FilesHttp{
    static async uploadFile(formdata){
        return await $api.post('/files/upload-files', formdata)  
    }
}