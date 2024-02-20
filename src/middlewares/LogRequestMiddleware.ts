export async function LogRequestMiddleware(request: any, response, next) {
    if (request.path.indexOf('swagger') >= 0) {
        await next();
        return;
    }
    let bodyS = '';
    try {
        bodyS = JSON.stringify(request.body);
    } catch {}

    bodyS = !bodyS ? '' : ` - Req Obj - ${bodyS}`;
    console.log(`${new Date().toISOString()} | LogMiddleware - Request - ${request.method} - ${request.path}${bodyS}`);
    await next();
}
