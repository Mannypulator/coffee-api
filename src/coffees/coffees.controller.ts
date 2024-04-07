import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  async findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return await this.coffeeService.findAll(paginationQueryDto);
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.coffeeService.findOne(id);
  }
  @Post()
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return await this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return await this.coffeeService.update(id, updateCoffeeDto);
  }
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.coffeeService.remove(id);
  }
}
