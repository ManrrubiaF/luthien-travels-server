import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { comments } from 'src/Entities/comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([comments])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
