import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        try {
            exception = exception && exception.response && exception.response.data ? exception.response.data : exception;

            const status = exception.status || 500;
            let message = exception && exception.message ? exception.message : '';
            message = message.message ? message.message : message;

            console.error('Error Handler'.yellow());
            console.error(new Date().toString().yellow());
            const ex = exception && exception.message ? exception.message : exception;
            console.error(JSON.stringify(ex, undefined, 4).red());
            if (status !== 401 && status !== 403) {
                console.trace(exception);
            }

            response.status(status).json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message,
                error: true,
            });
        } catch (err) {
            response.status(500).json({
                statusCode: 500,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: err,
                error: true,
            });
        }
    }
}
