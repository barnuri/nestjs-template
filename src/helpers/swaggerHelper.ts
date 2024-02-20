import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function createSwagger(app): void {
    const options = new DocumentBuilder().setTitle('Swagger').addBearerAuth().build();

    app.use('/api/swagger/swagger.json', (req, res, next) => res.send(document));

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api/swagger', app, document);

    // Load your swagger specification
    const apiSpec = JSON.stringify(document);
}

export function printSwaggerDetails(port): void {
    console.log(' ');
    console.log('\x1b[36m%s\x1b[0m', '---------- Swagger ----------');
    console.log('\x1b[36m%s\x1b[0m', `Swagger Client`);
    console.log('\x1b[36m%s\x1b[0m', `http://localhost:${port}/api/swagger`);
    console.log('\x1b[36m%s\x1b[0m', `Swagger Json`);
    console.log('\x1b[36m%s\x1b[0m', `http://localhost:${port}/api/swagger/swagger.json`);
    console.log(' ');
}
