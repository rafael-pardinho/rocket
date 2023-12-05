import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param,  Post, Put, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll(@Res() response) {
        return response.status(200).json({message: 'Listagem de cursos'});
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso ${id}`;
    }

    @HttpCode(204)
    @Post()
    create(@Body() body) {
        return body;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        console.log(body)
        return `Update course com ID ${id}`;
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Delete course com ID ${id}`
    }
}
