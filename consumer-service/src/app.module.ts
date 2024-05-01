import { Module } from '@nestjs/common';
import { ConsumersModule } from './consumers/consumers.module';

@Module({
  imports: [ConsumersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
