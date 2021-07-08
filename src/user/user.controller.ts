import { Controller, Get } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    // Dependency Injection
    constructor(private userService: UserService) {

    }
    
    @Get()
    async all(): Promise<User[]> {
        return this.userService.all();
    }
}
