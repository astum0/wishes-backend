import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishesService {
  constructor(private readonly prisma: PrismaService){}

  async create(userId: number, dto: CreateWishDto) {
    const wish = await this.prisma.wish.create({
      data: { ...dto, userId}
    });
    return wish
  }

  async findAll() {
    const wish = await this.prisma.wish.findMany();
    if (!wish) throw new NotFoundException ("Желаний не найдено")
    return wish
  }

  async findOne(id: number) {
    const wish = await this.prisma.wish.findUnique({
      where: {id}
    });
    if (!wish) throw new NotFoundException ('Желание №${id} не найдено')
    return wish
  }

  async update(id: number, dto: UpdateWishDto) {
    const wish = await this.prisma.wish.update({
      where: {id},
      data: {...dto}
    });
    return wish
  }

  async remove(id: number) {
    const wish = await this.prisma.wish.findUnique({
      where: {id}
    });
    if (!wish) throw new NotFoundException ('Желание №${id} не может быть удалено потому что его не существует')
    return this.prisma.wish.delete({where: {id}});
  }
}
