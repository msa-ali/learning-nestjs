import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {

    @Get()
    getRootRoute() {
        return 'Hello From Nest.js';
    }

    @Get('/greet')
    greetUser() {
        return 'Hello User';
    }

}