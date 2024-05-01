import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('courses')
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    return this.appService.createCourse(createCourseDto);
  }

  @Get('courses')
  getCourses() {
    return this.appService.getCourses();
  }

  @Get('courses/:id')
  getCourse(@Param('id') id: number) {
    return this.appService.getCourse(id);
  }

  @Patch('courses/:id')
  updateCourse(
    @Param('id') id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.appService.updateCourse(id, updateCourseDto);
  }

  @Delete('courses/:id')
  deleteCourse(@Param('id') id: number) {
    return this.appService.deleteCourse(id);
  }

  @Post('consumers')
  createConsumer(@Body() createConsumerDto: any) {
    return this.appService.createConsumer(createConsumerDto);
  }

  @Get('consumers')
  getConsumers() {
    return this.appService.getConsumers();
  }

  @Get('consumers/:id')
  getConsumer(@Param('id') id: number) {
    return this.appService.getConsumer(id);
  }

  @Patch('consumers/:id')
  updateConsumer(@Param('id') id: number, @Body() updateConsumerDto: any) {
    return this.appService.updateConsumer(id, updateConsumerDto);
  }

  @Delete('consumers/:id')
  deleteConsumer(@Param('id') id: number) {
    return this.appService.deleteConsumer(id);
  }

  @Post('creators')
  createCreator(@Body() createCreatorDto: any) {
    return this.appService.createCreator(createCreatorDto);
  }

  @Get('creators')
  getCreators() {
    return this.appService.getCreators();
  }

  @Get('creators/:id')
  getCreator(@Param('id') id: number) {
    return this.appService.getCreator(id);
  }

  @Patch('creators/:id')
  updateCreator(@Param('id') id: number, @Body() updateCreatorDto: any) {
    return this.appService.updateCreator(id, updateCreatorDto);
  }

  @Delete('creators/:id')
  deleteCreator(@Param('id') id: number) {
    return this.appService.deleteCreator(id);
  }
}
