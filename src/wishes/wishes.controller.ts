import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wish: WishesService) {}

  @Post()
  create(@Body() dto: CreateWishDto) {
    return this.wish.create(dto);
  }

  @Get()
  findAll() {
    return this.wish.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.wish.findOne(parseInt(id))
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWishDto) {
    return this.wish.update(parseInt(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wish.remove(parseInt(id));
  }
}
