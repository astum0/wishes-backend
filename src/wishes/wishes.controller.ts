import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('wishes')
@UseGuards(AuthGuard('jwt'))
export class WishesController {
  constructor(private readonly wish: WishesService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateWishDto) {
    return this.wish.create(req.user.userId,dto);
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
