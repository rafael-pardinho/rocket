import { Injectable, NotFoundException } from '@nestjs/common';
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

    finAll() {
        return this.courses;
    }

    findOne(id: number) {
        const course = this.courses.find(course => course.id === id)
        if(!course) {
            throw new NotFoundException(`Course ID ${id} not found`)
        }
        return course

    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO)
        return createCourseDTO
    }

    update(id: number, updateCourseDTO: any) {
        const existCourse = this.findOne(id)
        if (existCourse) {
            const index = this.courses.findIndex(course => course.id === id)
            this.courses[index] = {
                id,
                ...updateCourseDTO,
            }
        }
    }

    remove(id: number) {
        const index = this.courses.findIndex(course => course.id === id)
        if (index >= 0) {
            this.courses.splice(index, 1)
        }
    }
}
