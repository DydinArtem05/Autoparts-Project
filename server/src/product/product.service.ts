import { Injectable } from '@nestjs/common';
import { AddProductDto, FiltersProductDto } from './product.dto';
import { Product } from './product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name) private productsModel: Model<Product>,
    ){}
    async create (dto: AddProductDto){
        try {
            return this.productsModel.create(dto)
        } catch (error) {
            
        }
    }   

    async findAll (filters:FiltersProductDto){
        try {
            // Построение объекта фильтрации на основе входных параметров
            const filterQuery: any = {};

            if (filters.categorieIds && filters.categorieIds.length > 0) {
                filterQuery.categorieId = { $in: filters.categorieIds };
            }

            if (filters.brandIds && filters.brandIds.length > 0) {
                filterQuery.brandId = { $in: filters.brandIds };
            }

            if (filters.modelIds && filters.modelIds.length > 0) {
                filterQuery.modelId = { $in: filters.modelIds };
            }

            if (filters.minPrice) {
                filterQuery.price = { $gte: filters.minPrice };
            }

            if (filters.maxPrice) {
                filterQuery.price = { ...filterQuery.price, $lte: filters.maxPrice };
            }

            return this.productsModel.find(filterQuery).exec();
        } catch (error) {
           
            throw error;
        }
    }

    async findAllProductsById(ids: string[]) {
       
        try {
            const idsObject = ids?.map(id => new Types.ObjectId(id))

            const products = await this.productsModel.find({
                _id: { $in: idsObject },
            }).exec();
    
            return products;
        } catch (error) {
            // Обработка ошибок при поиске по _id
            throw error;
        }
    }
}
