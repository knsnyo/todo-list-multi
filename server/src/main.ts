import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { MainModule } from 'src/main.module';

async function main() {
  const server = await NestFactory.create(MainModule);
  server.useGlobalFilters(new HttpExceptionFilter());
  await server.listen(3000);
}
main();
