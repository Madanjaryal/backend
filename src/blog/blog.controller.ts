import { Controller, Get, Post, Body, Patch, Param,Res, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Response } from 'express'

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post('add')
  create(@Body() blog:CreateBlogDto):Promise<CreateBlogDto>{
    return this.blogService.create(blog)
  }

  @Get('list')
  async findAll():Promise<CreateBlogDto[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.blogService.remove(+id);
    return "Blog deleted"
  }
}
