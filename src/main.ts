import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Bật CORS (cho phép mọi Frontend gọi API vào backend này)
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Tự động lọc bỏ các trường không có trong DTO
      transform: true, // Tự ép kiểu dữ liệu từ request khớp với DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
