import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto, CreateModelDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('add-brand')
  async create(@Body() createBrandDto: CreateBrandDto) {
    return await this.brandService.create(createBrandDto);
  }

  @Get('all-brand')
  async findAll() {
    return this.brandService.findAll();
  }

  @Post('add-model')
  async addModel(@Body() createModelDto: CreateModelDto) {
    return this.brandService.addModel(createModelDto);
  }

  @Get('all-models-id/:id')
  async allModelsById(@Param('id') id: string) {
    return this.brandService.allModelsById(id);
  }

  @Get('all-models')
  async allModels() {
    return this.brandService.allModels();
  }

}
