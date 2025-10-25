import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Priority } from 'src/generated/enums';

@Injectable()
export class WishesService {
  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateWishDto) {
    const wish = await this.prisma.wish.create({
      data: {
        ...data,
        priority: data.priority ?? Priority.LOW,
      }
    });
    return wish
  }

  async findAll() {
    const wish = await this.prisma.wish.findAll();
    if (!wish) throw new NotFoundException ("Желаний не найдено")
    return wish
  }

  async findOne(id: number) {
    const wish = await this.prisma.wish.findOne({
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
    const wish = await this.prisma.wish.remove({
      where: {id}
    });
    if (!wish) throw new NotFoundException ('Желание №${id} не может быть удалено потому что его не существует')
    return this.prisma.wish.remove({where: {id}});
  }
}
