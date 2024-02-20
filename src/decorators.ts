import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function MyController(prefix: string, swaggerName: string = '') {
    swaggerName = swaggerName || prefix;

    return target => {
        Controller(prefix)(target);
        ApiTags(swaggerName)(target);
    };
}
