import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { StructureRoutes } from './structure-routes.schema';
import { AddNodeDto, AddProductNode, GetParentNodeDto } from './structure-routes.dto';

@Injectable()
export class StructureRoutesService {

    constructor(
        @InjectModel(StructureRoutes.name) private structureRoutesModel: Model<StructureRoutes>,
    ) { }

    async addCategoriesGraph(dto: AddNodeDto) {
        try {

            let parentId = new Types.ObjectId()
            const brandId = new Types.ObjectId(dto.brandId)
            const modelId = new Types.ObjectId(dto.modelId)

            if (dto?.parentId) {
                parentId = new Types.ObjectId(dto.parentId)
            }

            const isExistNode = await this.structureRoutesModel.findOne({
                $and: [
                    { parentId },
                    { title: dto.title },
                    { isMainPatent: dto.isMainPatent },
                ]
            })

            if (isExistNode) {
                throw new HttpException('NODE ALREADY EXISTS', HttpStatus.BAD_REQUEST);
            }

            return await this.structureRoutesModel.create({ ...dto, parentId, brandId, modelId })

        } catch (error) {
            throw error
        }
    }

    async addProductNodeToGraph( dto:AddProductNode){
        try {
            const { idNode, idProduct } = dto;

            const structureRoute = await this.structureRoutesModel.findOne({ _id: new Types.ObjectId(idNode)  });

            if (structureRoute) {

                structureRoute.productId.push(idProduct);

                const updatedStructureRoute = await structureRoute.save();

                return updatedStructureRoute;
            }

            return null; 
        } catch (error) {
            throw error;
        }
    }

    async getNodesInGraph(id: string) {
        try {
            const parentId = new Types.ObjectId(id)
            return await this.structureRoutesModel.find({ parentId })
        } catch (error) {
            throw error
        }

    }

    async getMainParentNodes(dto: GetParentNodeDto) {
        try {

            const brandId = new Types.ObjectId(dto.brandId)
            const modelId = new Types.ObjectId(dto.modelId)
            return await this.structureRoutesModel.find({
                $and: [
                    { brandId },
                    { modelId },
                    { isMainPatent: true },
                ]
            })
        } catch (error) {
            throw error
        }

    }

}
