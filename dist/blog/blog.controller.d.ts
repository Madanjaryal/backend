import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    create(blog: CreateBlogDto): Promise<CreateBlogDto>;
    findAll(): Promise<CreateBlogDto[]>;
    findOne(id: string): string;
    update(id: string, updateBlogDto: UpdateBlogDto): string;
    remove(id: string): Promise<string>;
}
