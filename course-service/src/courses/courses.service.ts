import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './entities/course.entity';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(@InjectModel('course') private course: Model<Course>) {}

  create(createCourseDto: CreateCourseDto) {
    const course = new this.course(createCourseDto);
    return course.save();
  }

  findAll() {
    return this.course.find();
  }

  findOne(id: number) {
    return this.course.findById(id);
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.course.findByIdAndUpdate(id, updateCourseDto, { new: true });
  }

  remove(id: number) {
    return this.course.deleteOne({ _id: id });
  }
}
