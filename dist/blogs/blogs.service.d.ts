import { Blog } from 'src/entities/blog.entity';
import { Repository } from 'typeorm';
export declare class BlogsService {
    private blogRepository;
    constructor(blogRepository: Repository<Blog>);
    findAll(): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    remove(id: string): Promise<void>;
}
