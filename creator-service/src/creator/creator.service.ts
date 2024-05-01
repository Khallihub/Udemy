import { Injectable } from '@nestjs/common';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Creator } from './entities/creator.entity';
import { Model } from 'mongoose';

@Injectable()
export class CreatorService {
  constructor(@InjectModel('creator') private consumer: Model<Creator>) {}

  create(createCreatorDto: CreateCreatorDto) {
    const creator = new this.consumer(createCreatorDto);
    return creator.save();
  }

  findAll() {
    return this.consumer.find();
  }

  findOne(id: number) {
    return this.consumer.findById(id);
  }

  update(id: number, updateCreatorDto: UpdateCreatorDto) {
    return this.consumer.findByIdAndUpdate(id, updateCreatorDto, { new: true });
  }

  remove(id: number) {
    return this.consumer.deleteOne({ _id: id });
  }
}
