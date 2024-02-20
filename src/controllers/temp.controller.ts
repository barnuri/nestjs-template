import { Get, Headers, Query, Req, Body } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { MyController } from '../decorators';
import TestResponse from '../models/TestResponse';
import TestRequest from '../models/TestRequest';

@MyController('api/temp', 'Temp')
export class TempController {
    @Get('test')
    @ApiResponse({ status: 200, type: TestResponse })
    TestMethod(
        @Headers('customHeader') customHeader: string,
        @Query('someQuery') someQuery: number,
        @Req() fullReq,
        @Body() body: TestRequest,
    ): TestResponse {
        return { status: 'ok' };
    }
}
