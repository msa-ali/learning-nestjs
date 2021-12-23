import { 
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ClassConstructor {
    new (...args: any[]): {}
}

export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {

    constructor(private dto: ClassConstructor) {}

    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // Run something before a request is handled by the request handler
        console.log('Running before Handler');

        return handler.handle().pipe(
            map((data: any) => {
                // Run something before the response is sent out
                console.log('Running before response is sent out', data);

                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true,
                })
                
            })
        )  
    }
}