import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBrandDto, CreateModelDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Brand } from './brand.schema';
import { AutoModel } from './model.schema';

@Injectable()
export class BrandService {

  constructor(
    @InjectModel(Brand.name) private brandModel: Model<Brand>,
    @InjectModel(AutoModel.name) private autoModel: Model<AutoModel>,
    
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    try {
      const { title } = createBrandDto;
  
      const brand = await this.brandModel.findOne({ title });
  
      if (brand) {
        throw new HttpException('BRAND ALREADY EXISTS', HttpStatus.BAD_REQUEST);
      }
  
      const newBrand = await this.brandModel.create(createBrandDto);
  
      return newBrand;
    } catch (error) {
      throw error; 
    }
  }

  async findAll() {

    try {
      return await this.brandModel.find()
    } catch (error) {
      throw error; 
    }

  }

  async addModel(createModelDto: CreateModelDto) {
    try {

      const brandId = new Types.ObjectId(createModelDto.brandId)

      const { title } = createModelDto;
  
      const model = await this.autoModel.findOne({ title });
  
      if (model) {
        throw new HttpException('AUTO MODEL ALREADY EXISTS', HttpStatus.BAD_REQUEST);
      }
  

      return await this.autoModel.create({...createModelDto, brandId})

    } catch (error) {
      throw error; 
    }
  }

  async allModelsById(id: string) {
    try {
      const brandId = new Types.ObjectId(id)
      return await this.autoModel.find({brandId});
    } catch (error) {
      throw error; 
    }

  }

  async allModels(){
    try {
      return await this.autoModel.find();
    } catch (error) {
      
    }
  }

}
