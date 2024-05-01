import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatorService } from './creator.service';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';

@Controller()
export class CreatorController {
  constructor(private readonly creatorService: CreatorService) {}

  @MessagePattern('createCreator')
  create(@Payload() createCreatorDto: CreateCreatorDto) {
    return this.creatorService.create(createCreatorDto);
  }

  @MessagePattern('findAllCreators')
  findAll() {
    return this.creatorService.findAll();
  }

  @MessagePattern('findOneCreator')
  findOne(@Payload() id: number) {
    return this.creatorService.findOne(id);
  }

  @MessagePattern('updateCreator')
  update(@Payload() updateCreatorDto: UpdateCreatorDto) {
    return this.creatorService.update(updateCreatorDto.id, updateCreatorDto);
  }

  @MessagePattern('removeCreator')
  remove(@Payload() id: number) {
    return this.creatorService.remove(id);
  }
}
