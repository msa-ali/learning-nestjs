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
