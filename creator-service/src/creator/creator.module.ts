import { Module } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreatorController } from './creator.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatorSchema } from './entities/creator.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/UdemyMicroservices'),
    MongooseModule.forFeature([
      {
        name: 'creator',
        schema: CreatorSchema,
      },
    ]),
  ],
  controllers: [CreatorController],
  providers: [CreatorService],
})
export class CreatorModule {}
