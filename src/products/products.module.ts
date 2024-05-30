// Utils
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Services and Controllers
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

// Models
import { Product, ProductImage } from './entities';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
  exports: [ProductsService],
})
export class ProductsModule {}
