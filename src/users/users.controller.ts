import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    userInfo():string{
        return "User Page"
    }

}
