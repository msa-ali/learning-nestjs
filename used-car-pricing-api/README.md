# Used Car Pricing API

A simple Nest.js API for finding estimates for used car pricing.

## Basic Requirements

- Users sign up with email/password
- Users get an estimate for how much their car is worth based on the make/model/year/mileage
- Users can report what they sold their vehicles for
- Admins have to approve reported sales.

## API Design

1. POST /auth/signup - Body {email, password} - create a new user and sign in
2. POST /auth/signin - Body {email, password} - sign in as an existing user
3. GET /reports - QueryString - make, model, year, mileage, longitude, latitude - Get an estimate for the car value
4. POST /reports - Body - {make, model, year, mileage, longitude, latitude, price} - Report how much a vehicle sold for
5. PATH /reports - Body { approved } - Approved or reject a report submitted by a user

## Module Design

### Authentication or Users Module

User Controllers
User Service
User Repository

### Reports Module

Reports Controllers
Reports Service
Reports Repository

## Notes

### Creating an Entity

1. Create an entity file, and  create a class in it that lists all the properties that your entities will have
2. Connect the entity to its parent module. This creates a repository.
3. Connect the entity to the root connection (in app module).

### Setting up session

- Cookie-Session library looks at the Cookie Header
- Decodes the string, resulting in an object
- We get access to session object in a request handler using a decorator
- We add/remove/change properties on the session object
- Cookie session sees the updated session and turns it into an encrypted string
- String sent back in the Set-Cookie header on the response object
  