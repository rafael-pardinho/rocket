import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll() {
        return 'listagem de cursos';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso ${id}`;
    }
}
