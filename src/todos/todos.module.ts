import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos.entity';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Category } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Category])],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
