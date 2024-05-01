import { Module } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { ConsumersController } from './consumers.controller';
import { ConsumerSchema } from './entities/consumer.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/UdemyMicroservices'),
    MongooseModule.forFeature([
      {
        name: 'consumer',
        schema: ConsumerSchema,
      },
    ]),
  ],
  controllers: [ConsumersController],
  providers: [ConsumersService],
})
export class ConsumersModule {}
