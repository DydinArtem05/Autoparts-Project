import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { AddProductDto, FiltersProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('add-product')
  async create(@Body() createProductDto: AddProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Post('all-product')
  async findAll(@Body() filters: FiltersProductDto) {
    return this.productService.findAll(filters);
  }

  @Post('all-product-by-id')
  async findAllProductsById(@Body() ids: string[]) {
    console.log("ids",ids);
    
    return this.productService.findAllProductsById(ids);
  }
}
