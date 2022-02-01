const Binance = require('node-binance-api');
const Twit = require('twit');
const binance = new Binance().options({
  APIKEY: 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A',
  APISECRET: 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j'
});
var T = new Twit({
    consumer_key:         '...',
    consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })
 const test = (req,res)=>{
    try {
        binance.candlesticks("BTCUSDT", "5m", (error, ticks, symbol) => {
            res.status(200).json(ticks);
          console.info("candlesticks()", ticks);
          let last_tick = ticks[ticks.length - 1];
          let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
          console.info(symbol+" last close: "+close);
        }, {limit: 500, startTime: 1514754800000, endTime: 4151476800000});
      } catch (err) {
        res.status(500).json(err);
      }
}
 const tickers = (req,res)=>{
    try {
      binance.bookTickers((error, ticker) => {
        console.info("bookTickers", ticker);
        res.status(200).json(ticker.length);
      });

      } catch (err) {
        res.status(500).json(err);
      }
}
 const twit = (req,res)=>{
    try {
    
        T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
            console.log(data)
        })
    } catch (err) {
        res.status(500).json(err);
      }
      res.status(200).json(true);

}
module.exports = {test,twit,tickers};