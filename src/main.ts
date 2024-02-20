import 'colors-ext';
import { NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from './middlewares/AllExceptionsFilter';
import { createSwagger, printSwaggerDetails } from './helpers/swaggerHelper';
import { LogRequestMiddleware } from './middlewares/LogRequestMiddleware';
import { AppModule } from './AppModule';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({ origin: '*', exposedHeaders: ['refresh-token'] });
    app.useGlobalFilters(new AllExceptionsFilter());

    app.use(LogRequestMiddleware);
    const port = process.env['PORT'] || 3000;
    createSwagger(app);
    await app.listen(port);
    console.log('Server is listening on port ' + port);
    printSwaggerDetails(port);
}

bootstrap().catch(err => {
    console.error('app crashed');
    console.error(err);
    console.trace(err);
});
