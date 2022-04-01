## Documentation for Postgresql hashrate

Through this coding excercise I was able to get a good practice of gathering Bitcoin data from Luxor's Bitcoin Wallet.

To get started, I had to make sure I had Docker installed as well as the right API keys provided by Luxor.

I created two files, a query.js file which queries the data into the running Postgresql DB. 

Another file named index.js which serves as the entry point of the API server. 

### Getting started

I started by obtaining the Luxor Python LIbrary and Command Line GraphQL API Client.  It is available on github here: https://github.com/LuxorLabs/graphql-python-client

I then ran the command: python3 luxor.py -h

### query.js

Within the query.js file I created a GET method which would get the data from coingecko.  Coingecko provides the current Bitcoin rate in reference to the type of country currency.  

This GET request serves as the first endpoint for PostgreSQL REST API database.  

The PostgreSQL REST API will take a GET and POST request to the /coins endpoint. 

I input a PUT method to update data when changing time frames.  At this point the endpoint will take two HTTP requests: the GET request and a PUT request.  

The PUT request is idempotent, which means the exact same call can be made over and over and will produce the same result.  

I added the URL to coingecko in the 

### index.js

In the index.js file, we pull the queries over and make endpoint routes for all the query functions we created.  

To get all the exported functions from queries.js, I input the file and assigned it to a variable.

`const db = require('./queries')`

For each endpoint, set the HTTP request method, the endpoint URL path, and the relevant function.

### note.test.js

This is the file used for unit testing.  

In order to confirm that the API functions correctly, it is important to test that the right values are retreived from the database.  We can utilize the 'mocha chai supertest' node package that allows us to test the HTTP servers.  

First start up the terminal and input the following commands: 

```
mkdir pg-test-example && cd pg-test-example
npm init -y
npm install express pg-pool pg
npm install --save-dev mocha chai supertest
```
To run the tests open a terminal at the root of the project and execute the `test` script.

``` npm run test ```

