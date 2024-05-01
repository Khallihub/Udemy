import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCourseDto } from './dtos/create-course.dto';
import { from, map } from 'rxjs';
import { UpdateCourseDto } from './dtos/update-course.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('COURSE_SERVICE') private readonly courseServiceClient: ClientProxy,
    @Inject('CONSUMER_SERVICE')
    private readonly consumerServiceClient: ClientProxy,
    @Inject('CREATOR_SERVICE')
    private readonly creatorServiceClient: ClientProxy,
  ) {}
  createCourse(createCourseDto: CreateCourseDto) {
    return this.courseServiceClient.send('createCourse', createCourseDto);
  }

  async getCourses() {
    const courses = this.courseServiceClient.send('findAllCourses', {});
    const coursePromise = await from(courses)
      .pipe(
        map((courses) => {
          return courses;
        }),
      )
      .toPromise();
    const result = [];
    for (let i = 0; i < coursePromise.length; i++) {
      const creatorId = await coursePromise[i].CreatorId;
      const creator = from(
        this.creatorServiceClient.send('findOneCreator', creatorId),
      );
      const creatorPromise = from(creator).pipe(
        map((creator) => {
          return creator;
        }),
      );
      result.push({
        course: coursePromise[i],
        creator: await creatorPromise.toPromise(),
      });
    }
    return result;
  }

  async getCourse(id: number) {
    const course = from(this.courseServiceClient.send('findOneCourse', id));

    const coursePromise = await from(course)
      .pipe(
        map((course) => {
          return course;
        }),
      )
      .toPromise();
    const creatorId = await coursePromise.CreatorId;

    const creator = from(
      this.creatorServiceClient.send('findOneCreator', creatorId),
    );

    const creatorPromise = await from(creator)
      .pipe(
        map((creator) => {
          return creator;
        }),
      )
      .toPromise();
    return { course: coursePromise, creator: creatorPromise };
  }

  updateCourse(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseServiceClient.send('updateCourse', {
      id,
      ...updateCourseDto,
    });
  }

  deleteCourse(id: number) {
    return this.courseServiceClient.send('removeCourse', id);
  }

  createConsumer(createConsumerDto: any) {
    return this.consumerServiceClient.send('createConsumer', createConsumerDto);
  }

  getConsumers() {
    return this.consumerServiceClient.send('findAllConsumers', {});
  }
  getConsumer(id: number) {
    return this.consumerServiceClient.send('findOneConsumer', id);
  }
  updateConsumer(id: number, updateConsumerDto: any) {
    return this.consumerServiceClient.send('updateConsumer', {
      id,
      ...updateConsumerDto,
    });
  }
  deleteConsumer(id: number) {
    return this.consumerServiceClient.send('removeConsumer', id);
  }

  createCreator(createCreatorDto: any) {
    return this.creatorServiceClient.send('createCreator', createCreatorDto);
  }

  getCreators() {
    return this.creatorServiceClient.send('findAllCreators', {});
  }

  getCreator(id: number) {
    return this.creatorServiceClient.send('findOneCreator', id);
  }

  updateCreator(id: number, updateCreatorDto: any) {
    return this.creatorServiceClient.send('updateCreator', {
      id,
      ...updateCreatorDto,
    });
  }

  deleteCreator(id: number) {
    return this.creatorServiceClient.send('removeCreator', id);
  }
}
