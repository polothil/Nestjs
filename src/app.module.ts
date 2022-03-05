import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController], // Handles Requests and sends back Rresponses
  providers: [AppService], // Analogous to components in react
})
export class AppModule {}
