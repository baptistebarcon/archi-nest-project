import { Controller, Get } from '@nestjs/common';
import { SandwichService } from './sandwich.service';

@Controller('sandwich')
export class SandwichController {
    constructor(private sandwichService: SandwichService) {}

    @Get()
    async GetAllSandwichs() {
        return this.sandwichService.getAll();
    }
}
