import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COURSE_SERVICE',
        transport: Transport.REDIS,
        options: {
          port: 6379,
          host: 'localhost',
        },
      },
      {
        name: 'CREATOR_SERVICE',
        transport: Transport.REDIS,
        options: {
          port: 6379,
          host: 'localhost',
        },
      },
      {
        name: 'CONSUMER_SERVICE',
        transport: Transport.REDIS,
        options: {
          port: 6379,
          host: 'localhost',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
