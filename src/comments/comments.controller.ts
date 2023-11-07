import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(
        private commentServ: CommentsService
    ) { }
    @Get()
    getComments() {
        return this.commentServ.getAll()
    }

    @Post()
    postComment(@Body() body: any) {
        return this.commentServ.create(body)
    }
    @Delete('/:id')
    deleteComment(@Param('id') id: number){
        return this.commentServ.delete(id)
    }

}
