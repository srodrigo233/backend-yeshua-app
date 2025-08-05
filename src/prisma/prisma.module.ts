import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Article } from 'src/articles/entities/article.entity';
import { ArticlesService } from 'src/articles/articles.service';

@Module({
  
  providers: [PrismaService, ArticlesService],
  exports: [PrismaService],
})
export class PrismaModule {}
