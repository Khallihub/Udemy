import { Injectable } from '@nestjs/common';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { Model } from 'mongoose';
import { Consumer } from './entities/consumer.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ConsumersService {
  constructor(@InjectModel('consumer') private consumer: Model<Consumer>) {}

  create(createConsumerDto: CreateConsumerDto) {
    const consumer = new this.consumer(createConsumerDto);
    return consumer.save();
  }

  findAll() {
    return this.consumer.find();
  }

  findOne(id: number) {
    return this.consumer.findById(id);
  }

  update(id: number, updateConsumerDto: UpdateConsumerDto) {
    return this.consumer.findByIdAndUpdate(id, updateConsumerDto, {
      new: true,
    });
  }

  remove(id: number) {
    return this.consumer.deleteOne({ _id: id });
  }
}
