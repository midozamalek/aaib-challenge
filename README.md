# AaibChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## start Appliation 

using command 'npm start'

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## BackEnd Node js

you can run both server and client using npm start

there are 2 api created :

1 read json file and return as it

/report

and another put api that change state to : Closed or Blocked

/report/:id
and use body 
{
    "ticketState": "Closed"
}

return data after updated

## Frontend

using angular also there are 2 buttons

block which update state to blocked so button block disapear
resolve whcih upstae state to closed so will be filtered and not showed in list

## test

I tried to add unit test using chai-http but due time i didn`t add any test as there is a problem to use a chai with karma and then 3 hours finished :D





