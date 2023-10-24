import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';


@Injectable()
export class SandwichService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.sandwich.findMany();
    }
}
