# Nestjs Notes

@nestjs/common --> contains vast majority of functions, classes etc. that we need from nest

@nestjs/platform-express --> lets Nest use expressjs for handling http requests

reflect-metadata --> helps make decorators work.

typescript --> we write nest apps with typescript.

@nestjs/core  -->  

## Server Basic Flow and corresponding Nest tools

Request -> validate data contained in req (PIPE) -> make sure user is authenticated (GUARD) -> route the request to a particular function(CONTROLLER) -> run some business logic(SERVICE) -> access a DB(REPOSITORY) --> Response

## Part of Nest

- *Controllers*: Handles incoming requests
- *Services*: Handles data access and business logic
- *Modules*: Groups together code
- *Pipes*: Validates incoming data
- *Filters*: Handles errors that occur during request handling
- *Guard*: Handles authentication
- *Interceptors*: Adds extra logic to incoming requests or outgoing responses
- *Repositories*: Handles data stored in a DB

main.ts is the first file that gets executed in any nestjs app. Starting point of the application.

## File nameing convention in nest

- One class per file(some exceptions)
- Class name should include the kind of thing we are creating
- Name of class and name of file should always match up
- Filename template: name.type_of_thing.ts

-> main.ts
function bootstrap

-> app.controller.ts
class AppController {}

-> app.module.ts
class AppModule{}

## Using Nest CLI to generate Project

- npm install -g @nestjs/cli
- nest new [project_name]
- nest generate module messages
- nest generate controller messages/messages --flat

## Difference betweem Services and Repositories

- Both are classes
- Services are placed to put any business logic while repositories are places to put storage-related logic(directly interact with DB or read/write to a file).
- Service uses one or more repositories to find or store data while repositories ends up being an TypeORM entity, a Mongoose schema or similar.
- Frequently end up having very simiar method names.
