import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Cardio',
            description: 'Curso de Cardio',
            tags: ['Cardio', 'Categoria'],
        },
    ]
}
