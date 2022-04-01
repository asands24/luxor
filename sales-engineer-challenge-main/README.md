# Luxor Sales Engineer Interview

## Intro
As a sales engineer for Luxor you will be working with customers helping them integrate with our GraphQL APIs, developing software for them, and helping on internal tasks as well.

This is a casual coding challenge that should take around 2 hours to complete. You'll have a full 24 hours to submit the code, but we definitely don't expect the task to take the entire day.

## Instructions
Once you've completed your code, give us access to the repo or create an MR to the upstream.  We'll review the code for completeness, testability, documentation and organization.

## The Challenge - Historical pool hashrate amount
The goal is to build a simple rest service to retrieve Luxor's bitcoin hashrate and bitcoin USD price within a time range. The endpoint must receive at least: since, from, and hashrate unit.

To achieve this, we expect to query and store the data in the provided Postgres SQL database. Then, the API can retrieve data from it to expose to the user based on the params accepted by the API. 

### Ground Rules
The goal is to have functional code that can be the basis of a conversation around design trade-offs during the face-to-face interview process.  The most important goal is making a functional piece of code you would want to be reviewed by a colleague.

Include all source code, test code, and a README describing how to build and run the solution.

We think of languages as tools and good engineers can adapt to the right tool for the job.  As we primarily program in Golang at Luxor (and it happens to be a great language for this type of project), Golang will be preferred but not required.

Bonus points for unit tests.

## Helpful commands
We've provided a `docker-compose.yaml` which should help you bootstrap a Postgres environment.

`docker-compose up` will bring the database up.  The files under `./etc/postgres` will be applied automatically

`docker-compose down -v` will bring down the database as well as deleting the volume.

The Compose environment will automatically provision a database:

`dbname=luxor`

`username=luxor`

`password=luxor`

`host=localhost`

`port=5432`

## Helpful resources
* [What is hashrate, and which units exists] (https://en.bitcoinwiki.org/wiki/Hashrate)
* [For getting the Luxor wallet balance](https://docs.luxor.tech/docs/schema/queries/get-wallet)
* [For getting the current price of any cryptocurrency](https://www.coingecko.com/api/documentations/v3#/simple/get_simple_price)
* Luxor ApiKey = lxk.5c61ce16498047b29d7535a128395a5a

## Stuck?
If you get stuck, jump into Discord (https://discord.com/invite/5qPRbDS) or email us (recruiting@luxor.tech)

