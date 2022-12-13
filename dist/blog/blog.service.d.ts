import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Repository } from 'typeorm';
import { Blog } from 'src/entities/blog.entity';
export declare class BlogService {
    private blogRepository;
    constructor(blogRepository: Repository<Blog>);
    create(blog: CreateBlogDto): Promise<CreateBlogDto>;
    findAll(): Promise<Blog[]>;
    findOne(id: number): string;
    update(id: number, updateBlogDto: UpdateBlogDto): string;
    remove(id: number): string;
}
