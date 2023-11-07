import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { comments } from 'src/Entities/comments.entity';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(comments) private commentsRepo:Repository<comments>
    ){}
    getAll(){
        return this.commentsRepo.find()
    }  
    async create(body:any){
        const newComment = this.commentsRepo.create(body);
        await this.commentsRepo.save(newComment)
        return 'Comentario añadido';
    }  
    async delete(id:number){
        await this.commentsRepo.delete(id);
        return 'Eliminado correctamente';
    }
}
