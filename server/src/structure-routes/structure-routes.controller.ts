import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StructureRoutesService } from './structure-routes.service';
import { AddNodeDto, AddProductNode, GetParentNodeDto } from './structure-routes.dto';

@Controller('structure-routes')
export class StructureRoutesController {
  constructor(private readonly structureRoutesService: StructureRoutesService) {}


  @Post('add-node-graph')
  async addNodeToGraph(@Body() dto:AddNodeDto) {
    return await this.structureRoutesService.addCategoriesGraph(dto);
  }

  @Post('add-product-node-graph')
  async addProductNodeToGraph(@Body() dto:AddProductNode) {
    return await this.structureRoutesService.addProductNodeToGraph(dto);
  }

  @Get('get-nodes-graph/:id')
  async getNodesInGraph(@Param('id') id: string) {
    return await this.structureRoutesService.getNodesInGraph(id);
  }


  @Post('get-main-parent-nodes')
  async getMainParentNodes(@Body() dto:GetParentNodeDto) {
    return await this.structureRoutesService.getMainParentNodes(dto);
  }


}
