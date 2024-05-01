import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConsumersService } from './consumers.service';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';

@Controller()
export class ConsumersController {
  constructor(private readonly consumersService: ConsumersService) {}

  @MessagePattern('createConsumer')
  create(@Payload() createConsumerDto: CreateConsumerDto) {
    return this.consumersService.create(createConsumerDto);
  }

  @MessagePattern('findAllConsumers')
  findAll() {
    return this.consumersService.findAll();
  }

  @MessagePattern('findOneConsumer')
  findOne(@Payload() id: number) {
    return this.consumersService.findOne(id);
  }

  @MessagePattern('updateConsumer')
  update(@Payload() updateConsumerDto: UpdateConsumerDto) {
    return this.consumersService.update(
      updateConsumerDto.id,
      updateConsumerDto,
    );
  }

  @MessagePattern('removeConsumer')
  remove(@Payload() id: number) {
    return this.consumersService.remove(id);
  }
}
