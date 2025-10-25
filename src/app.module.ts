import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WishesModule } from './wishes/wishes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, WishesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
