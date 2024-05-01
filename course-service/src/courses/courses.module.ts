import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './entities/course.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/UdemyMicroservices'),
    MongooseModule.forFeature([
      {
        name: 'course',
        schema: CourseSchema,
      },
    ]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
