const CoinGecko = require('coingecko-api');

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'luxor',
  host: 'localhost',
  database: 'luxor',
  password: 'luxor',
  port: 5432,
})

const CoinGeckoClient = new CoinGecko();

const getCurrentPrice = async event => {
  let currency1API= "bitcoin";
  let currencies="usd";
  let string = "https://api.coingecko.com/api/v3/simple/price?ids="+ currency1API + "&vs_currencies="+currencies+"&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false"
  await fetch(string)
  .then(resp => resp.json())
  .then(data => console.log(data.market_data.current_price.usd))}

const getHistoricalPrice = async event => {
  let currency1API= "bitcoin";
  let indexDate="01-01-2020";
  let string = "https://api.coingecko.com/api/v3/coins/" + currency1API +"/history?date="+indexDate+"&localization=false";
  await fetch(string)
  .then(resp => resp.json())
  .then(data => console.log(data.market_data.current_price.usd))}

const getLuxorPrice = async event => {
  let currency1API = "bitcoin";
  let string = "https://api.beta.luxor.tech/graphql/lxk.5c61ce16498047b29d7535a128395a5a" + currency1API;
  await fetch(string)
  .then(resp=> resp.json())
  .then(data => console.log(data.market_data.current_price.usd))}

  pool.query(
    "INSERT INTO coin(from, since, hashrate)VALUES('getHistoricalPrice', 'getCurrentPrice')",
    (err, res) => {
      console.log(err, res);
      pool.end();
    }
  );


module.exports = {
  getHistoricalPrice,
  getCurrentPrice,
  getLuxorPrice
}