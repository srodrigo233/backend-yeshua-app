import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [CatsModule, PrismaModule, ArticlesModule],
  controllers: [AppController, CatsController, ],
  providers: [AppService, ],
})
export class AppModule {}
