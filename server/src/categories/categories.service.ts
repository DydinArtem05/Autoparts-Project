import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCatogoriesDto } from './categories.dto';
import { Categories } from './categories.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class CategoriesService {

    constructor(
        @InjectModel(Categories.name) private categoriesModel: Model<Categories>,
      ) {}
    

    async create(createCategoriesDto: CreateCatogoriesDto) {
        try {
          const { title } = createCategoriesDto;
      
          const brand = await this.categoriesModel.findOne({ title });
      
          if (brand) {
            throw new HttpException('BRAND ALREADY EXISTS', HttpStatus.BAD_REQUEST);
          }

          const newBrand = await this.categoriesModel.create(createCategoriesDto);
      
          return newBrand;
        } catch (error) {
          throw error; 
        }
      }

    async getAll(){
        try {
            return await this.categoriesModel.find()
        } catch (error) {
            throw error; 
        }
    }

 
  
    
}
