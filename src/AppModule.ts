import { Module } from '@nestjs/common';
import { TempController } from './controllers/temp.controller';

@Module({
    controllers: [TempController],
})
export class AppModule {}
