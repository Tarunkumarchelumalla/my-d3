import React, { useState } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HCMore from 'highcharts/highcharts-more';
HCMore(Highcharts);

const App = () => {

 const calculateHeight=()=>{
    return window.innerHeight - 50;
  }

  const [chartOptions, setChartOptions] = useState({

      chart: {
        type: "packedbubble",
        height: calculateHeight(),
      },
      // tooltip: {
      //   useHTML: true,
      //   pointFormat: "<b>{point.name}:</b> {point.value}",
      // },
      plotOptions: {
        packedbubble: {
          minSize: '100%',
          maxSize: '120%',
  
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
          },
          states:{
            hover:{
              enabled:false
            }
          },
          dataLabels: {
            enabled: true,
            useHTML: true,
            formatter: function () {
              return (
                "<div class='container'>"+
                this.point.name +
                `<img class='rounded' src=${this.point.url} width='60' height='60'/>`+
               
                "</div>"
              );
            },
            parentNodeFormat: "{point.series.name}",
          },
        },
      },
      series: [
        {
          name: "ASEAN",
          data: [
            // {
            //   name: "ASEAN",
            //   value: -88.2,
            //   percentage:'+80%',
            //   url:"https://cryptobubbles.net/backend/data/logos/25417.png"
            // },
            // {
            //   name: "ASEAN",
            //   value: -88.2,
            //   percentage:'+80%',
            //   url:"https://cryptobubbles.net/backend/data/logos/25417.png"
            // },
              {
                  "id": "1",
                  "name": "Bitcoin",
                  "slug": "bitcoin",
                  "rank": 1,
                  "symbol": "BTC",
                  "symbols": {
                      "binance": "BTC_USDT",
                      "kucoin": "BTC-USDT",
                      "bybit": "BTC/USDT",
                      "gateio": "BTC_USDT",
                      "coinbase": "BTC-USD",
                      "mexc": "BTC_USDT",
                      "okx": "BTC-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/1.png",
                  "stable": false,
                  "circulating_supply": 19661343,
                  "dominance": 0.5078,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 0,
                      "year": 0
                  },
                  "cg_id": "bitcoin",
                  "price": 64087.25214285222,
                  "marketcap": 1260041446308,
                  "volume": 41776157083,
                  "performance": {
                      "hour": 0.52,
                      "min1": -0.05,
                      "min5": 0,
                      "min15": 0.34,
                      "day": -1.72,
                      "week": -6.5,
                      "month": 24.2,
                      "year": 130.24
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/1.png",
                  "value": 41776157083
              },
              {
                  "id": "1027",
                  "name": "Ethereum",
                  "slug": "ethereum",
                  "rank": 2,
                  "symbol": "ETH",
                  "symbols": {
                      "binance": "ETH_USDT",
                      "kucoin": "ETH-USDT",
                      "bybit": "ETH/USDT",
                      "gateio": "ETH_USDT",
                      "coinbase": "ETH-USD",
                      "mexc": "ETH_USDT",
                      "okx": "ETH-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/1027.png",
                  "stable": false,
                  "circulating_supply": 120073507,
                  "dominance": 0.1623,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 0,
                      "year": 0
                  },
                  "cg_id": "ethereum",
                  "price": 3354.070000000018,
                  "marketcap": 402734947623,
                  "volume": 20186245325,
                  "performance": {
                      "hour": 0.41,
                      "min1": -0.01,
                      "min5": 0.05,
                      "min15": 0.26,
                      "day": -2.51,
                      "week": -9.42,
                      "month": 14.16,
                      "year": 90.12
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/1027.png",
                  "value": 20186245325
              },
              {
                  "id": "825",
                  "name": "Tether",
                  "slug": "tether",
                  "rank": 3,
                  "symbol": "USDT",
                  "symbols": {
                      "binance": "USDC_USDT",
                      "kucoin": "USDT-USDC",
                      "bybit": "USDC/USDT",
                      "gateio": "USDT_USD",
                      "coinbase": "USDT-USD",
                      "mexc": "USDC_USDT",
                      "okx": "USDT-USDC"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/825.png",
                  "stable": true,
                  "circulating_supply": 104053987756,
                  "dominance": 0.0419,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 0,
                      "year": 0
                  },
                  "cg_id": "tether",
                  "price": 0.9998335714285715,
                  "marketcap": 104036670199,
                  "volume": 81921851322,
                  "performance": {
                      "hour": 0,
                      "min1": 0,
                      "min5": 0,
                      "min15": 0,
                      "day": 0,
                      "week": 0,
                      "month": 0,
                      "year": 0.04
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/825.png",
                  "value": 81921851322
              },
              {
                  "id": "1839",
                  "name": "BNB",
                  "slug": "bnb",
                  "rank": 4,
                  "symbol": "BNB",
                  "symbols": {
                      "binance": "BNB_USDT",
                      "kucoin": "BNB-USDT",
                      "bybit": "BNB/USDT",
                      "gateio": "BNB_USDT",
                      "coinbase": null,
                      "mexc": "BNB_USDT",
                      "okx": "BNB-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/1839.png",
                  "stable": false,
                  "circulating_supply": 149537486,
                  "dominance": 0.0332,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 0,
                      "year": 0
                  },
                  "cg_id": "binancecoin",
                  "price": 551.2482666666667,
                  "marketcap": 82432279959,
                  "volume": 2908084285,
                  "performance": {
                      "hour": 1.03,
                      "min1": -0.11,
                      "min5": -0.02,
                      "min15": 0.57,
                      "day": -0.12,
                      "week": -8.13,
                      "month": 53.6,
                      "year": 71.3
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/1839.png",
                  "value": 2908084285
              },
              {
                  "id": "5426",
                  "name": "Solana",
                  "slug": "solana",
                  "rank": 5,
                  "symbol": "SOL",
                  "symbols": {
                      "binance": "SOL_USDT",
                      "kucoin": "SOL-USDT",
                      "bybit": "SOL/USDT",
                      "gateio": "SOL_USDT",
                      "coinbase": "SOL-USD",
                      "mexc": "SOL_USDT",
                      "okx": "SOL-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/5426.png",
                  "stable": false,
                  "circulating_supply": 444079125,
                  "dominance": 0.031,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 0,
                      "year": 6
                  },
                  "cg_id": "solana",
                  "price": 173.39871428571442,
                  "marketcap": 77002749316,
                  "volume": 4350591834,
                  "performance": {
                      "hour": 0.78,
                      "min1": -0.1,
                      "min5": -0.06,
                      "min15": 0.52,
                      "day": -2.53,
                      "week": -5.93,
                      "month": 65.32,
                      "year": 738.65
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/5426.png",
                  "value": 4350591834
              },
              {
                  "id": "52",
                  "name": "XRP",
                  "slug": "xrp",
                  "rank": 6,
                  "symbol": "XRP",
                  "symbols": {
                      "binance": "XRP_USDT",
                      "kucoin": "XRP-USDT",
                      "bybit": "XRP/USDT",
                      "gateio": "XRP_USDT",
                      "coinbase": "XRP-USD",
                      "mexc": "XRP_USDT",
                      "okx": "XRP-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/52.png",
                  "stable": false,
                  "circulating_supply": 54884241878,
                  "dominance": 0.0136,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 0,
                      "year": 0
                  },
                  "cg_id": "ripple",
                  "price": 0.6136585714285714,
                  "marketcap": 33680185464,
                  "volume": 2216450067,
                  "performance": {
                      "hour": 0.32,
                      "min1": -0.08,
                      "min5": -0.12,
                      "min15": 0.11,
                      "day": -3.49,
                      "week": -2.91,
                      "month": 12.21,
                      "year": 44.36
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/52.png",
                  "value": 2216450067
              },
              {
                  "id": "3408",
                  "name": "USDC",
                  "slug": "usd-coin",
                  "rank": 7,
                  "symbol": "USDC",
                  "symbols": {
                      "binance": "USDC_USDT",
                      "kucoin": "USDC-USDT",
                      "bybit": "USDC/USDT",
                      "gateio": "USDC_USDT",
                      "coinbase": "USDT-USDC",
                      "mexc": "USDC_USDT",
                      "okx": "USDC-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3408.png",
                  "stable": true,
                  "circulating_supply": 31870364516,
                  "dominance": 0.0128,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 0,
                      "year": -2
                  },
                  "cg_id": "usd-coin",
                  "price": 1.0000078571428572,
                  "marketcap": 31870614926,
                  "volume": 9090461562,
                  "performance": {
                      "hour": 0,
                      "min1": 0,
                      "min5": 0,
                      "min15": 0,
                      "day": -0.01,
                      "week": -0.02,
                      "month": 0,
                      "year": 0.09
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3408.png",
                  "value": 9090461562
              },
              {
                  "id": "74",
                  "name": "Dogecoin",
                  "slug": "dogecoin",
                  "rank": 8,
                  "symbol": "DOGE",
                  "symbols": {
                      "binance": "DOGE_USDT",
                      "kucoin": "DOGE-USDT",
                      "bybit": "DOGE/USDT",
                      "gateio": "DOGE_USDT",
                      "coinbase": "DOGE-USD",
                      "mexc": "DOGE_USDT",
                      "okx": "DOGE-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/74.png",
                  "stable": false,
                  "circulating_supply": 143575156383,
                  "dominance": 0.0088,
                  "rankDiffs": {
                      "hour": 1,
                      "day": 1,
                      "week": 1,
                      "month": 3,
                      "year": 1
                  },
                  "cg_id": "dogecoin",
                  "price": 0.15242757142857144,
                  "marketcap": 21884812404,
                  "volume": 2813273578,
                  "performance": {
                      "hour": 0.69,
                      "min1": -0.19,
                      "min5": -0.2,
                      "min15": 0.18,
                      "day": 0.76,
                      "week": -6.53,
                      "month": 80.91,
                      "year": 103.86
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/74.png",
                  "value": 2813273578
              },
              {
                  "id": "2010",
                  "name": "Cardano",
                  "slug": "cardano",
                  "rank": 9,
                  "symbol": "ADA",
                  "symbols": {
                      "binance": "ADA_USDT",
                      "kucoin": "ADA-USDT",
                      "bybit": "ADA/USDT",
                      "gateio": "ADA_USDT",
                      "coinbase": "ADA-USD",
                      "mexc": "ADA_USDT",
                      "okx": "ADA-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/2010.png",
                  "stable": false,
                  "circulating_supply": 35569481168,
                  "dominance": 0.0088,
                  "rankDiffs": {
                      "hour": -1,
                      "day": -1,
                      "week": -1,
                      "month": -1,
                      "year": -1
                  },
                  "cg_id": "cardano",
                  "price": 0.6143928571428571,
                  "marketcap": 21853635161,
                  "volume": 601916277,
                  "performance": {
                      "hour": 0.35,
                      "min1": -0.08,
                      "min5": 0.04,
                      "min15": 0.45,
                      "day": -2.86,
                      "week": -14.42,
                      "month": 3.35,
                      "year": 68.97
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/2010.png",
                  "value": 601916277
              },
              {
                  "id": "5805",
                  "name": "Avalanche",
                  "slug": "avalanche",
                  "rank": 10,
                  "symbol": "AVAX",
                  "symbols": {
                      "binance": "AVAX_USDT",
                      "kucoin": "AVAX-USDT",
                      "bybit": "AVAX/USDT",
                      "gateio": "AVAX_USDT",
                      "coinbase": "AVAX-USD",
                      "mexc": "AVAX_USDT",
                      "okx": "AVAX-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/5805.png",
                  "stable": false,
                  "circulating_supply": 377416536,
                  "dominance": 0.0082,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": -1,
                      "year": 7
                  },
                  "cg_id": "avalanche-2",
                  "price": 53.998157142857124,
                  "marketcap": 20379797419,
                  "volume": 1343807173,
                  "performance": {
                      "hour": 0.61,
                      "min1": -0.1,
                      "min5": 0,
                      "min15": 0.53,
                      "day": 0.54,
                      "week": -4.84,
                      "month": 44.56,
                      "year": 217.32
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/5805.png",
                  "value": 1343807173
              },
              {
                  "id": "5994",
                  "name": "Shiba Inu",
                  "slug": "shiba-inu",
                  "rank": 11,
                  "symbol": "SHIB",
                  "symbols": {
                      "binance": "SHIB_USDT",
                      "kucoin": "SHIB-USDT",
                      "bybit": "SHIB/USDT",
                      "gateio": "SHIB_USDT",
                      "coinbase": "SHIB-USD",
                      "mexc": "SHIB_USDT",
                      "okx": "SHIB-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/5994.png",
                  "stable": false,
                  "circulating_supply": 589289410812691,
                  "dominance": 0.0063,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 6,
                      "year": 4
                  },
                  "cg_id": "shiba-inu",
                  "price": 0.000026616585714285714,
                  "marketcap": 15684872113,
                  "volume": 1225710406,
                  "performance": {
                      "hour": 0.61,
                      "min1": -0.04,
                      "min5": 0,
                      "min15": 0.38,
                      "day": -1.44,
                      "week": -8.74,
                      "month": 179.33,
                      "year": 152.65
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/5994.png",
                  "value": 1225710406
              },
              {
                  "id": "11419",
                  "name": "Toncoin",
                  "slug": "toncoin",
                  "rank": 12,
                  "symbol": "TON",
                  "symbols": {
                      "binance": null,
                      "kucoin": "TON-USDT",
                      "bybit": "TON/USDT",
                      "gateio": "TON_USDT",
                      "coinbase": null,
                      "mexc": "TON_USDT",
                      "okx": "TON-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/11419.png",
                  "stable": false,
                  "circulating_supply": 3470040649,
                  "dominance": 0.0062,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 1,
                      "month": 3,
                      "year": 14
                  },
                  "cg_id": "the-open-network",
                  "price": 4.41806,
                  "marketcap": 15330847789,
                  "volume": 176221488,
                  "performance": {
                      "hour": 1.6,
                      "min1": -0.04,
                      "min5": 0.03,
                      "min15": 0.5,
                      "day": 8.25,
                      "week": 12.67,
                      "month": 102.72,
                      "year": 106.08
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/11419.png",
                  "value": 176221488
              },
              {
                  "id": "6636",
                  "name": "Polkadot",
                  "slug": "polkadot-new",
                  "rank": 13,
                  "symbol": "DOT",
                  "symbols": {
                      "binance": "DOT_USDT",
                      "kucoin": "DOT-USDT",
                      "bybit": "DOT/USDT",
                      "gateio": "DOT_USDT",
                      "coinbase": "DOT-USD",
                      "mexc": "DOT_USDT",
                      "okx": "DOT-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/6636.png",
                  "stable": false,
                  "circulating_supply": 1425158522,
                  "dominance": 0.0051,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -1,
                      "month": 0,
                      "year": 0
                  },
                  "cg_id": "polkadot",
                  "price": 8.913714285714287,
                  "marketcap": 12703455876,
                  "volume": 316170999,
                  "performance": {
                      "hour": 0.32,
                      "min1": -0.1,
                      "min5": -0.01,
                      "min15": 0.44,
                      "day": -3.37,
                      "week": -14.58,
                      "month": 20.25,
                      "year": 46.82
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/6636.png",
                  "value": 316170999
              },
              {
                  "id": "1975",
                  "name": "Chainlink",
                  "slug": "chainlink",
                  "rank": 14,
                  "symbol": "LINK",
                  "symbols": {
                      "binance": "LINK_USDT",
                      "kucoin": "LINK-USDT",
                      "bybit": "LINK/USDT",
                      "gateio": "LINK_USDT",
                      "coinbase": "LINK-USD",
                      "mexc": "LINK_USDT",
                      "okx": "LINK-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/1975.png",
                  "stable": false,
                  "circulating_supply": 587099970,
                  "dominance": 0.0043,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": -2,
                      "year": 6
                  },
                  "cg_id": "chainlink",
                  "price": 18.262257142857145,
                  "marketcap": 10721770620,
                  "volume": 503764933,
                  "performance": {
                      "hour": 2.03,
                      "min1": 0.03,
                      "min5": 0.25,
                      "min15": 0.79,
                      "day": -1.48,
                      "week": -5.75,
                      "month": -2.56,
                      "year": 150.51
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/1975.png",
                  "value": 503764933
              },
              {
                  "id": "1958",
                  "name": "TRON",
                  "slug": "tron",
                  "rank": 15,
                  "symbol": "TRX",
                  "symbols": {
                      "binance": "TRX_USDT",
                      "kucoin": "TRX-USDT",
                      "bybit": "TRX/USDT",
                      "gateio": "TRX_USDT",
                      "coinbase": null,
                      "mexc": "TRX_USDT",
                      "okx": "TRX-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/1958.png",
                  "stable": false,
                  "circulating_supply": 87796046963,
                  "dominance": 0.0041,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 1,
                      "month": -5,
                      "year": 1
                  },
                  "cg_id": "tron",
                  "price": 0.11728333333333334,
                  "marketcap": 10297013041,
                  "volume": 415957952,
                  "performance": {
                      "hour": 0.41,
                      "min1": -0.13,
                      "min5": 0.05,
                      "min15": 0.27,
                      "day": -2.84,
                      "week": -7.07,
                      "month": -16.25,
                      "year": 84.26
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/1958.png",
                  "value": 415957952
              },
              {
                  "id": "3890",
                  "name": "Polygon",
                  "slug": "polygon",
                  "rank": 16,
                  "symbol": "MATIC",
                  "symbols": {
                      "binance": "MATIC_USDT",
                      "kucoin": "MATIC-USDT",
                      "bybit": "MATIC/USDT",
                      "gateio": "MATIC_USDT",
                      "coinbase": "MATIC-USD",
                      "mexc": "MATIC_USDT",
                      "okx": "MATIC-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3890.png",
                  "stable": false,
                  "circulating_supply": 9906635095,
                  "dominance": 0.0039,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -1,
                      "month": -2,
                      "year": -6
                  },
                  "cg_id": "matic-network",
                  "price": 0.9806142857142858,
                  "marketcap": 9714587897,
                  "volume": 390490865,
                  "performance": {
                      "hour": 0.72,
                      "min1": -0.11,
                      "min5": 0.06,
                      "min15": 0.44,
                      "day": -0.47,
                      "week": -12.7,
                      "month": 0.1,
                      "year": -9.87
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3890.png",
                  "value": 390490865
              },
              {
                  "id": "1831",
                  "name": "Bitcoin Cash",
                  "slug": "bitcoin-cash",
                  "rank": 17,
                  "symbol": "BCH",
                  "symbols": {
                      "binance": "BCH_USDT",
                      "kucoin": "BCH-USDT",
                      "bybit": "BCH/USDT",
                      "gateio": "BCH_USDT",
                      "coinbase": "BCH-USD",
                      "mexc": "BCH_USDT",
                      "okx": "BCH-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/1831.png",
                  "stable": false,
                  "circulating_supply": 19675825,
                  "dominance": 0.0033,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 2,
                      "year": 10
                  },
                  "cg_id": "bitcoin-cash",
                  "price": 410.46499999999986,
                  "marketcap": 8076237508,
                  "volume": 527340589,
                  "performance": {
                      "hour": -0.03,
                      "min1": -0.16,
                      "min5": -0.04,
                      "min15": 0.25,
                      "day": -1.19,
                      "week": -0.08,
                      "month": 55.62,
                      "year": 230.54
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/1831.png",
                  "value": 527340589
              },
              {
                  "id": "7083",
                  "name": "Uniswap",
                  "slug": "uniswap",
                  "rank": 18,
                  "symbol": "UNI",
                  "symbols": {
                      "binance": "UNI_USDT",
                      "kucoin": "UNI-USDT",
                      "bybit": "UNI/USDT",
                      "gateio": "UNI_USDT",
                      "coinbase": "UNI-USD",
                      "mexc": "UNI_USDT",
                      "okx": "UNI-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/7083.png",
                  "stable": false,
                  "circulating_supply": 598736139,
                  "dominance": 0.0028,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 4,
                      "year": 1
                  },
                  "cg_id": "uniswap",
                  "price": 11.750199999999998,
                  "marketcap": 7035269380,
                  "volume": 192104130,
                  "performance": {
                      "hour": 0.48,
                      "min1": -0.15,
                      "min5": 0,
                      "min15": 0.3,
                      "day": -1.28,
                      "week": -8.74,
                      "month": 61.19,
                      "year": 98.22
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/7083.png",
                  "value": 192104130
              },
              {
                  "id": "6535",
                  "name": "NEAR Protocol",
                  "slug": "near-protocol",
                  "rank": 19,
                  "symbol": "NEAR",
                  "symbols": {
                      "binance": "NEAR_USDT",
                      "kucoin": "NEAR-USDT",
                      "bybit": "NEAR/USDT",
                      "gateio": "NEAR_USDT",
                      "coinbase": "NEAR-USD",
                      "mexc": "NEAR_USDT",
                      "okx": "NEAR-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/6535.png",
                  "stable": false,
                  "circulating_supply": 1054016312,
                  "dominance": 0.0027,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 0,
                      "month": 13,
                      "year": 17
                  },
                  "cg_id": "near",
                  "price": 6.433014285714286,
                  "marketcap": 6780501992,
                  "volume": 563717393,
                  "performance": {
                      "hour": 1.21,
                      "min1": -0.03,
                      "min5": 0.2,
                      "min15": 0.89,
                      "day": -1.84,
                      "week": -10.98,
                      "month": 99.23,
                      "year": 224.05
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/6535.png",
                  "value": 563717393
              },
              {
                  "id": "21794",
                  "name": "Aptos",
                  "slug": "aptos",
                  "rank": 20,
                  "symbol": "APT",
                  "symbols": {
                      "binance": "APT_USDT",
                      "kucoin": "APT-USDT",
                      "bybit": "APT/USDT",
                      "gateio": "APT_USDT",
                      "coinbase": "APT-USD",
                      "mexc": "APT_USDT",
                      "okx": "APT-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/21794.png",
                  "stable": false,
                  "circulating_supply": 395842044,
                  "dominance": 0.0027,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 1,
                      "week": 4,
                      "month": 11,
                      "year": 10
                  },
                  "cg_id": "aptos",
                  "price": 16.92044285714286,
                  "marketcap": 6697822685,
                  "volume": 584709998,
                  "performance": {
                      "hour": 2.48,
                      "min1": -0.17,
                      "min5": 0.11,
                      "min15": 1.51,
                      "day": 12.34,
                      "week": 26.73,
                      "month": 83.3,
                      "year": 30.03
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/21794.png",
                  "value": 584709998
              },
              {
                  "id": "8916",
                  "name": "Internet Computer",
                  "slug": "internet-computer",
                  "rank": 21,
                  "symbol": "ICP",
                  "symbols": {
                      "binance": "ICP_USDT",
                      "kucoin": "ICP-USDT",
                      "bybit": "ICP/USDT",
                      "gateio": "ICP_USDT",
                      "coinbase": "ICP-USD",
                      "mexc": "ICP_USDT",
                      "okx": "ICP-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/8916.png",
                  "stable": false,
                  "circulating_supply": 461164330,
                  "dominance": 0.0026,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 1,
                      "week": 0,
                      "month": -5,
                      "year": 19
                  },
                  "cg_id": "internet-computer",
                  "price": 13.855242857142855,
                  "marketcap": 6389543789,
                  "volume": 348903459,
                  "performance": {
                      "hour": 1.65,
                      "min1": -0.42,
                      "min5": -0.37,
                      "min15": 0.79,
                      "day": 10.16,
                      "week": 7.85,
                      "month": 5.35,
                      "year": 178.78
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/8916.png",
                  "value": 348903459
              },
              {
                  "id": "2",
                  "name": "Litecoin",
                  "slug": "litecoin",
                  "rank": 22,
                  "symbol": "LTC",
                  "symbols": {
                      "binance": "LTC_USDT",
                      "kucoin": "LTC-USDT",
                      "bybit": "LTC/USDT",
                      "gateio": "LTC_USDT",
                      "coinbase": "LTC-USD",
                      "mexc": "LTC_USDT",
                      "okx": "LTC-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/2.png",
                  "stable": false,
                  "circulating_supply": 74338862,
                  "dominance": 0.0025,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -2,
                      "week": -2,
                      "month": -2,
                      "year": -8
                  },
                  "cg_id": "litecoin",
                  "price": 83.0742857142857,
                  "marketcap": 6175647861,
                  "volume": 479631116,
                  "performance": {
                      "hour": 0.2,
                      "min1": -0.01,
                      "min5": -0.07,
                      "min15": 0.1,
                      "day": -4.32,
                      "week": -6.91,
                      "month": 20.5,
                      "year": -8.75
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/2.png",
                  "value": 479631116
              },
              {
                  "id": "3957",
                  "name": "UNUS SED LEO",
                  "slug": "unus-sed-leo",
                  "rank": 23,
                  "symbol": "LEO",
                  "symbols": {
                      "binance": null,
                      "kucoin": null,
                      "bybit": null,
                      "gateio": "LEO_USDT",
                      "coinbase": null,
                      "mexc": null,
                      "okx": "LEO-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3957.png",
                  "stable": false,
                  "circulating_supply": 926878830,
                  "dominance": 0.0022,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -1,
                      "month": 2,
                      "year": -1
                  },
                  "cg_id": "leo-token",
                  "price": 6.0095,
                  "marketcap": 5570078328,
                  "volume": 2934421,
                  "performance": {
                      "hour": 0.06,
                      "min1": 0,
                      "min5": 0,
                      "min15": -0.1,
                      "day": -0.57,
                      "week": -0.8,
                      "month": 37.99,
                      "year": 75.92
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3957.png",
                  "value": 2934421
              },
              {
                  "id": "4943",
                  "name": "Dai",
                  "slug": "multi-collateral-dai",
                  "rank": 24,
                  "symbol": "DAI",
                  "symbols": {
                      "binance": "USDT_DAI",
                      "kucoin": "USDT-DAI",
                      "bybit": "DAI/USDT",
                      "gateio": "DAI_USDT",
                      "coinbase": "DAI-USD",
                      "mexc": "DAI_USDT",
                      "okx": "DAI-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/4943.png",
                  "stable": true,
                  "circulating_supply": 5347888595,
                  "dominance": 0.0022,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -1,
                      "month": -6,
                      "year": -6
                  },
                  "cg_id": "dai",
                  "price": 1.0000499999999999,
                  "marketcap": 5348155989,
                  "volume": 706748576,
                  "performance": {
                      "hour": -0.01,
                      "min1": 0,
                      "min5": 0.01,
                      "min15": -0.01,
                      "day": -0.02,
                      "week": 0.06,
                      "month": -0.01,
                      "year": 0.06
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/4943.png",
                  "value": 706748576
              },
              {
                  "id": "4847",
                  "name": "Stacks",
                  "slug": "stacks",
                  "rank": 25,
                  "symbol": "STX",
                  "symbols": {
                      "binance": "STX_USDT",
                      "kucoin": "STX-USDT",
                      "bybit": "STX/USDT",
                      "gateio": "STX_USDT",
                      "coinbase": "STX-USD",
                      "mexc": "STX_USDT",
                      "okx": "STX-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/4847.png",
                  "stable": false,
                  "circulating_supply": 1446866486,
                  "dominance": 0.002,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 1,
                      "week": 6,
                      "month": 1,
                      "year": 13
                  },
                  "cg_id": "blockstack",
                  "price": 3.4278685714285717,
                  "marketcap": 4959668154,
                  "volume": 473564936,
                  "performance": {
                      "hour": 1.39,
                      "min1": 0.09,
                      "min5": 0.86,
                      "min15": 0.85,
                      "day": 3.88,
                      "week": 23.7,
                      "month": 22.09,
                      "year": 236.73
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/4847.png",
                  "value": 473564936
              },
              {
                  "id": "2280",
                  "name": "Filecoin",
                  "slug": "filecoin",
                  "rank": 26,
                  "symbol": "FIL",
                  "symbols": {
                      "binance": "FIL_USDT",
                      "kucoin": "FIL-USDT",
                      "bybit": "FIL/USDT",
                      "gateio": "FIL_USDT",
                      "coinbase": "FIL-USD",
                      "mexc": "FIL_USDT",
                      "okx": "FIL-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/2280.png",
                  "stable": false,
                  "circulating_supply": 526693015,
                  "dominance": 0.0018,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -1,
                      "month": 2,
                      "year": 3
                  },
                  "cg_id": "filecoin",
                  "price": 8.672657142857142,
                  "marketcap": 4567827938,
                  "volume": 388258699,
                  "performance": {
                      "hour": 1.1,
                      "min1": -0.1,
                      "min5": 0.21,
                      "min15": 0.77,
                      "day": -5.01,
                      "week": -8.51,
                      "month": 21.35,
                      "year": 56.1
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/2280.png",
                  "value": 388258699
              },
              {
                  "id": "3794",
                  "name": "Cosmos",
                  "slug": "cosmos",
                  "rank": 27,
                  "symbol": "ATOM",
                  "symbols": {
                      "binance": "ATOM_USDT",
                      "kucoin": "ATOM-USDT",
                      "bybit": "ATOM/USDT",
                      "gateio": "ATOM_USDT",
                      "coinbase": "ATOM-USD",
                      "mexc": "ATOM_USDT",
                      "okx": "ATOM-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3794.png",
                  "stable": false,
                  "circulating_supply": 390930671,
                  "dominance": 0.0018,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -1,
                      "month": -4,
                      "year": -6
                  },
                  "cg_id": "cosmos",
                  "price": 11.387100000000002,
                  "marketcap": 4451566643,
                  "volume": 210078998,
                  "performance": {
                      "hour": 0.71,
                      "min1": -0.04,
                      "min5": 0.03,
                      "min15": 0.26,
                      "day": -2.72,
                      "week": -8.85,
                      "month": 13.55,
                      "year": 1.54
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3794.png",
                  "value": 210078998
              },
              {
                  "id": "1321",
                  "name": "Ethereum Classic",
                  "slug": "ethereum-classic",
                  "rank": 28,
                  "symbol": "ETC",
                  "symbols": {
                      "binance": "ETC_USDT",
                      "kucoin": "ETC-USDT",
                      "bybit": "ETC/USDT",
                      "gateio": "ETC_USDT",
                      "coinbase": "ETC-USD",
                      "mexc": "ETC_USDT",
                      "okx": "ETC-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/1321.png",
                  "stable": false,
                  "circulating_supply": 146165609,
                  "dominance": 0.0017,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 1,
                      "week": -1,
                      "month": -1,
                      "year": -5
                  },
                  "cg_id": "ethereum-classic",
                  "price": 29.175299999999993,
                  "marketcap": 4264425492,
                  "volume": 244238716,
                  "performance": {
                      "hour": 0.48,
                      "min1": -0.08,
                      "min5": -0.03,
                      "min15": 0.33,
                      "day": -3.03,
                      "week": -11.32,
                      "month": 10.49,
                      "year": 44.31
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/1321.png",
                  "value": 244238716
              },
              {
                  "id": "11841",
                  "name": "Arbitrum",
                  "slug": "arbitrum",
                  "rank": 29,
                  "symbol": "ARB",
                  "symbols": {
                      "binance": "ARB_USDT",
                      "kucoin": "ARB-USDT",
                      "bybit": "ARB/USDT",
                      "gateio": "ARB_USDT",
                      "coinbase": "ARB-USD",
                      "mexc": "ARB_USDT",
                      "okx": "ARB-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/11841.png",
                  "stable": false,
                  "circulating_supply": 2653939384,
                  "dominance": 0.0017,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": 24,
                      "month": 13,
                      "year": 5
                  },
                  "cg_id": "arbitrum",
                  "price": 1.6049142857142857,
                  "marketcap": 4259345230,
                  "volume": 565121204,
                  "performance": {
                      "hour": 0.43,
                      "min1": -0.12,
                      "min5": -0.01,
                      "min15": 0.18,
                      "day": -5.14,
                      "week": -14.11,
                      "month": -15.29,
                      "year": 23.65
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/11841.png",
                  "value": 565121204
              },
              {
                  "id": "5690",
                  "name": "Render",
                  "slug": "render",
                  "rank": 30,
                  "symbol": "RNDR",
                  "symbols": {
                      "binance": "RNDR_USDT",
                      "kucoin": "RNDR-USDT",
                      "bybit": "RNDR/USDT",
                      "gateio": "RNDR_USDT",
                      "coinbase": "RNDR-USD",
                      "mexc": "RNDR_USDT",
                      "okx": "RNDR-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/5690.png",
                  "stable": false,
                  "circulating_supply": 381860659,
                  "dominance": 0.0016,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -1,
                      "month": 11,
                      "year": 0
                  },
                  "cg_id": "render-token",
                  "price": 10.606235714285715,
                  "marketcap": 4050104159,
                  "volume": 352820074,
                  "performance": {
                      "hour": 0.77,
                      "min1": -0.07,
                      "min5": 0.18,
                      "min15": 0.45,
                      "day": -1.66,
                      "week": -2.66,
                      "month": 70.88,
                      "year": 762.44
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/5690.png",
                  "value": 352820074
              },
              {
                  "id": "10603",
                  "name": "Immutable",
                  "slug": "immutable-x",
                  "rank": 31,
                  "symbol": "IMX",
                  "symbols": {
                      "binance": "IMX_USDT",
                      "kucoin": "IMX-USDT",
                      "bybit": "IMX/USDT",
                      "gateio": "IMX_USDT",
                      "coinbase": "IMX-USD",
                      "mexc": "IMX_USDT",
                      "okx": "IMX-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/10603.png",
                  "stable": false,
                  "circulating_supply": 1397489784,
                  "dominance": 0.0015,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -3,
                      "month": -10,
                      "year": 21
                  },
                  "cg_id": "immutable-x",
                  "price": 2.7380757142857144,
                  "marketcap": 3826432838,
                  "volume": 73320236,
                  "performance": {
                      "hour": 0.35,
                      "min1": -0.12,
                      "min5": -0.02,
                      "min15": 0.2,
                      "day": -4.14,
                      "week": -9.45,
                      "month": -17.09,
                      "year": 145.48
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/10603.png",
                  "value": 73320236
              },
              {
                  "id": "22974",
                  "name": "Bittensor",
                  "slug": "bittensor",
                  "rank": 32,
                  "symbol": "TAO",
                  "symbols": {
                      "binance": null,
                      "kucoin": "TAO-USDT",
                      "bybit": null,
                      "gateio": "TAO_USDT",
                      "coinbase": null,
                      "mexc": "TAO_USDT",
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/22974.png",
                  "stable": false,
                  "circulating_supply": 6462228,
                  "dominance": 0.0015,
                  "rankDiffs": {
                      "hour": 1,
                      "day": 0,
                      "week": 2,
                      "month": 1,
                      "year": 0
                  },
                  "cg_id": "bittensor",
                  "price": 580.65,
                  "marketcap": 3752292688,
                  "volume": 46501524,
                  "performance": {
                      "hour": 2.92,
                      "min1": 0.05,
                      "min5": -0.11,
                      "min15": 0.06,
                      "day": -4.9,
                      "week": -4.33,
                      "month": -1.3,
                      "year": 574.94
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/22974.png",
                  "value": 46501524
              },
              {
                  "id": "512",
                  "name": "Stellar",
                  "slug": "stellar",
                  "rank": 33,
                  "symbol": "XLM",
                  "symbols": {
                      "binance": "XLM_USDT",
                      "kucoin": "XLM-USDT",
                      "bybit": "XLM/USDT",
                      "gateio": "XLM_USDT",
                      "coinbase": "XLM-USD",
                      "mexc": "XLM_USDT",
                      "okx": "XLM-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/512.png",
                  "stable": false,
                  "circulating_supply": 28731612976,
                  "dominance": 0.0015,
                  "rankDiffs": {
                      "hour": -1,
                      "day": 0,
                      "week": 2,
                      "month": 1,
                      "year": -5
                  },
                  "cg_id": "stellar",
                  "price": 0.12820535714285713,
                  "marketcap": 3683546702,
                  "volume": 126894204,
                  "performance": {
                      "hour": 0.34,
                      "min1": -0.11,
                      "min5": -0.06,
                      "min15": 0.28,
                      "day": -3.09,
                      "week": -4.9,
                      "month": 11.74,
                      "year": 44.68
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/512.png",
                  "value": 126894204
              },
              {
                  "id": "4642",
                  "name": "Hedera",
                  "slug": "hedera",
                  "rank": 34,
                  "symbol": "HBAR",
                  "symbols": {
                      "binance": "HBAR_USDT",
                      "kucoin": "HBAR-USDT",
                      "bybit": "HBAR/USDT",
                      "gateio": "HBAR_USDT",
                      "coinbase": "HBAR-USD",
                      "mexc": "HBAR_USDT",
                      "okx": "HBAR-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/4642.png",
                  "stable": false,
                  "circulating_supply": 33700898672,
                  "dominance": 0.0015,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -2,
                      "month": -4,
                      "year": -1
                  },
                  "cg_id": "hedera-hashgraph",
                  "price": 0.10706714285714285,
                  "marketcap": 3608258932,
                  "volume": 57563358,
                  "performance": {
                      "hour": 0.5,
                      "min1": 0.13,
                      "min5": 0.42,
                      "min15": 0.63,
                      "day": -2.18,
                      "week": -8.66,
                      "month": -0.41,
                      "year": 77.23
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/4642.png",
                  "value": 57563358
              },
              {
                  "id": "3635",
                  "name": "Cronos",
                  "slug": "cronos",
                  "rank": 35,
                  "symbol": "CRO",
                  "symbols": {
                      "binance": null,
                      "kucoin": "CRO-USDT",
                      "bybit": null,
                      "gateio": "CRO_USDT",
                      "coinbase": "CRO-USD",
                      "mexc": "CRO_USDT",
                      "okx": "CRO-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3635.png",
                  "stable": false,
                  "circulating_supply": 26571560696,
                  "dominance": 0.0014,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": 4,
                      "month": 9,
                      "year": 0
                  },
                  "cg_id": "crypto-com-chain",
                  "price": 0.13472,
                  "marketcap": 3579720656,
                  "volume": 19091803,
                  "performance": {
                      "hour": 1.64,
                      "min1": 0.02,
                      "min5": 0.2,
                      "min15": 0.79,
                      "day": -0.7,
                      "week": -3.94,
                      "month": 49.07,
                      "year": 96.96
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3635.png",
                  "value": 19091803
              },
              {
                  "id": "3897",
                  "name": "OKB",
                  "slug": "okb",
                  "rank": 36,
                  "symbol": "OKB",
                  "symbols": {
                      "binance": null,
                      "kucoin": null,
                      "bybit": null,
                      "gateio": "OKB_USDT",
                      "coinbase": null,
                      "mexc": "OKB_USDT",
                      "okx": "OKB-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3897.png",
                  "stable": false,
                  "circulating_supply": 60000000,
                  "dominance": 0.0014,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 1,
                      "week": -3,
                      "month": 0,
                      "year": -11
                  },
                  "cg_id": "okb",
                  "price": 58.03799999999999,
                  "marketcap": 3482279999,
                  "volume": 13486104,
                  "performance": {
                      "hour": 0.15,
                      "min1": -0.02,
                      "min5": 0.01,
                      "min15": 0.26,
                      "day": -1.63,
                      "week": -10.25,
                      "month": 14.21,
                      "year": 36.56
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3897.png",
                  "value": 13486104
              },
              {
                  "id": "6719",
                  "name": "The Graph",
                  "slug": "the-graph",
                  "rank": 37,
                  "symbol": "GRT",
                  "symbols": {
                      "binance": "GRT_USDT",
                      "kucoin": "GRT-USDT",
                      "bybit": "GRT/USDT",
                      "gateio": "GRT_USDT",
                      "coinbase": "GRT-USD",
                      "mexc": "GRT_USDT",
                      "okx": "GRT-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/6719.png",
                  "stable": false,
                  "circulating_supply": 9456194466,
                  "dominance": 0.0014,
                  "rankDiffs": {
                      "hour": 1,
                      "day": -1,
                      "week": 0,
                      "month": 8,
                      "year": 7
                  },
                  "cg_id": "the-graph",
                  "price": 0.3675528571428571,
                  "marketcap": 3475651293,
                  "volume": 149526049,
                  "performance": {
                      "hour": 0.55,
                      "min1": -0.09,
                      "min5": 0.05,
                      "min15": 0.31,
                      "day": -3.12,
                      "week": -8.14,
                      "month": 54.78,
                      "year": 156.33
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/6719.png",
                  "value": 149526049
              },
              {
                  "id": "11840",
                  "name": "Optimism",
                  "slug": "optimism-ethereum",
                  "rank": 38,
                  "symbol": "OP",
                  "symbols": {
                      "binance": "OP_USDT",
                      "kucoin": "OP-USDT",
                      "bybit": "OP/USDT",
                      "gateio": "OP_USDT",
                      "coinbase": "OP-USD",
                      "mexc": "OP_USDT",
                      "okx": "OP-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/11840.png",
                  "stable": false,
                  "circulating_supply": 1006141600,
                  "dominance": 0.0014,
                  "rankDiffs": {
                      "hour": -1,
                      "day": 1,
                      "week": -2,
                      "month": -9,
                      "year": 24
                  },
                  "cg_id": "optimism",
                  "price": 3.449128571428571,
                  "marketcap": 3470311739,
                  "volume": 429040556,
                  "performance": {
                      "hour": 0.36,
                      "min1": -0.2,
                      "min5": -0.06,
                      "min15": 0.59,
                      "day": 1.9,
                      "week": -8.99,
                      "month": -7.05,
                      "year": 36.27
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/11840.png",
                  "value": 429040556
              },
              {
                  "id": "20396",
                  "name": "Kaspa",
                  "slug": "kaspa",
                  "rank": 39,
                  "symbol": "KAS",
                  "symbols": {
                      "binance": null,
                      "kucoin": "KAS-USDT",
                      "bybit": "KAS/USDT",
                      "gateio": "KAS_USDT",
                      "coinbase": null,
                      "mexc": "KAS_USDT",
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/20396.png",
                  "stable": false,
                  "circulating_supply": 23095619773,
                  "dominance": 0.0014,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 1,
                      "week": 2,
                      "month": -15,
                      "year": 99
                  },
                  "cg_id": "kaspa",
                  "price": 0.148404,
                  "marketcap": 3427482356,
                  "volume": 107238681,
                  "performance": {
                      "hour": 0.92,
                      "min1": -0.08,
                      "min5": 0.18,
                      "min15": 0.45,
                      "day": 2.92,
                      "week": 8.9,
                      "month": -14.73,
                      "year": 812.69
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/20396.png",
                  "value": 107238681
              },
              {
                  "id": "7226",
                  "name": "Injective",
                  "slug": "injective",
                  "rank": 40,
                  "symbol": "INJ",
                  "symbols": {
                      "binance": "INJ_USDT",
                      "kucoin": "INJ-USDT",
                      "bybit": "INJ/USDT",
                      "gateio": "INJ_USDT",
                      "coinbase": "INJ-USD",
                      "mexc": "INJ_USDT",
                      "okx": "INJ-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/7226.png",
                  "stable": false,
                  "circulating_supply": 93400000,
                  "dominance": 0.0013,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -2,
                      "week": -10,
                      "month": -5,
                      "year": 92
                  },
                  "cg_id": "injective-protocol",
                  "price": 35.28442857142856,
                  "marketcap": 3295565628,
                  "volume": 173341832,
                  "performance": {
                      "hour": 0.62,
                      "min1": -0.11,
                      "min5": 0.04,
                      "min15": 0.18,
                      "day": -5.58,
                      "week": -19.45,
                      "month": -0.2,
                      "year": 739.91
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/7226.png",
                  "value": 173341832
              },
              {
                  "id": "3513",
                  "name": "Fantom",
                  "slug": "fantom",
                  "rank": 41,
                  "symbol": "FTM",
                  "symbols": {
                      "binance": "FTM_USDT",
                      "kucoin": "FTM-USDT",
                      "bybit": "FTM/USDT",
                      "gateio": "FTM_USDT",
                      "coinbase": null,
                      "mexc": "FTM_USDT",
                      "okx": "FTM-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3513.png",
                  "stable": false,
                  "circulating_supply": 2803634835,
                  "dominance": 0.0013,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 3,
                      "week": 16,
                      "month": 25,
                      "year": 2
                  },
                  "cg_id": "fantom",
                  "price": 1.1577866666666667,
                  "marketcap": 3246011030,
                  "volume": 810233885,
                  "performance": {
                      "hour": 0.6,
                      "min1": -0.31,
                      "min5": -0.14,
                      "min15": 0.45,
                      "day": 9.38,
                      "week": 48.69,
                      "month": 187.09,
                      "year": 150.82
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3513.png",
                  "value": 810233885
              },
              {
                  "id": "24478",
                  "name": "Pepe",
                  "slug": "pepe",
                  "rank": 42,
                  "symbol": "PEPE",
                  "symbols": {
                      "binance": "PEPE_USDT",
                      "kucoin": "PEPE-USDT",
                      "bybit": "PEPE/USDT",
                      "gateio": "PEPE_USDT",
                      "coinbase": null,
                      "mexc": "PEPE_USDT",
                      "okx": "PEPE-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/24478.png",
                  "stable": false,
                  "circulating_supply": 420689899999994,
                  "dominance": 0.0013,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -4,
                      "month": 93,
                      "year": 0
                  },
                  "cg_id": "pepe",
                  "price": 0.000007427316666666666,
                  "marketcap": 3124597105,
                  "volume": 913943934,
                  "performance": {
                      "hour": 0.96,
                      "min1": -0.1,
                      "min5": -0.13,
                      "min15": 0.43,
                      "day": -5.25,
                      "week": -16.56,
                      "month": 548.33,
                      "year": null
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/24478.png",
                  "value": 913943934
              },
              {
                  "id": "3077",
                  "name": "VeChain",
                  "slug": "vechain",
                  "rank": 43,
                  "symbol": "VET",
                  "symbols": {
                      "binance": "VET_USDT",
                      "kucoin": "VET-USDT",
                      "bybit": null,
                      "gateio": "VET_USDT",
                      "coinbase": "VET-USD",
                      "mexc": "VET_USDT",
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3077.png",
                  "stable": false,
                  "circulating_supply": 72714516834,
                  "dominance": 0.0012,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -3,
                      "month": -6,
                      "year": -6
                  },
                  "cg_id": "vechain",
                  "price": 0.04015,
                  "marketcap": 2919487850,
                  "volume": 73468177,
                  "performance": {
                      "hour": 0.48,
                      "min1": -0.11,
                      "min5": 0,
                      "min15": 0.39,
                      "day": -2.94,
                      "week": -8.86,
                      "month": -5.35,
                      "year": 75.3
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3077.png",
                  "value": 73468177
              },
              {
                  "id": "1518",
                  "name": "Maker",
                  "slug": "maker",
                  "rank": 44,
                  "symbol": "MKR",
                  "symbols": {
                      "binance": "MKR_USDT",
                      "kucoin": "MKR-USDT",
                      "bybit": "MKR/USDT",
                      "gateio": "MKR_USDT",
                      "coinbase": "MKR-USD",
                      "mexc": "MKR_USDT",
                      "okx": "MKR-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/1518.png",
                  "stable": false,
                  "circulating_supply": 924385,
                  "dominance": 0.0012,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": 5,
                      "month": 5,
                      "year": 29
                  },
                  "cg_id": "maker",
                  "price": 3146.1650000000404,
                  "marketcap": 2908267733,
                  "volume": 168437317,
                  "performance": {
                      "hour": 0.32,
                      "min1": -0.06,
                      "min5": -0.04,
                      "min15": 0.34,
                      "day": -3.2,
                      "week": 12.63,
                      "month": 50.88,
                      "year": 370.91
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/1518.png",
                  "value": 168437317
              },
              {
                  "id": "2416",
                  "name": "Theta Network",
                  "slug": "theta-network",
                  "rank": 45,
                  "symbol": "THETA",
                  "symbols": {
                      "binance": "THETA_USDT",
                      "kucoin": "THETA-USDT",
                      "bybit": "THETA/USDT",
                      "gateio": "THETA_USDT",
                      "coinbase": null,
                      "mexc": null,
                      "okx": "THETA-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/2416.png",
                  "stable": false,
                  "circulating_supply": 1000000000,
                  "dominance": 0.0011,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 1,
                      "week": -2,
                      "month": 20,
                      "year": 9
                  },
                  "cg_id": "theta-token",
                  "price": 2.8134400000000004,
                  "marketcap": 2813440000,
                  "volume": 77700674,
                  "performance": {
                      "hour": 0.67,
                      "min1": -0.11,
                      "min5": 0.04,
                      "min15": 0.42,
                      "day": 0.42,
                      "week": -7.61,
                      "month": 139.67,
                      "year": 177.54
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/2416.png",
                  "value": 77700674
              },
              {
                  "id": "4157",
                  "name": "THORChain",
                  "slug": "thorchain",
                  "rank": 46,
                  "symbol": "RUNE",
                  "symbols": {
                      "binance": "RUNE_USDT",
                      "kucoin": "RUNE-USDT",
                      "bybit": "RUNE/USDT",
                      "gateio": "RUNE_USDT",
                      "coinbase": null,
                      "mexc": "RUNE_USDT",
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/4157.png",
                  "stable": false,
                  "circulating_supply": 336206866,
                  "dominance": 0.0011,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -4,
                      "month": 4,
                      "year": 45
                  },
                  "cg_id": "thorchain",
                  "price": 8.098400000000002,
                  "marketcap": 2722737683,
                  "volume": 532710447,
                  "performance": {
                      "hour": 0.41,
                      "min1": -0.12,
                      "min5": -0.02,
                      "min15": 0.35,
                      "day": -3.52,
                      "week": -12.59,
                      "month": 59.22,
                      "year": 484.72
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/4157.png",
                  "value": 532710447
              },
              {
                  "id": "26081",
                  "name": "First Digital USD",
                  "slug": "first-digital-usd",
                  "rank": 47,
                  "symbol": "FDUSD",
                  "symbols": {
                      "binance": "FDUSD_USDT",
                      "kucoin": null,
                      "bybit": null,
                      "gateio": "FDUSD_USDT",
                      "coinbase": null,
                      "mexc": null,
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/26081.png",
                  "stable": true,
                  "circulating_supply": 2622415529,
                  "dominance": 0.0011,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -3,
                      "month": -9,
                      "year": 0
                  },
                  "cg_id": "first-digital-usd",
                  "price": 0.99885,
                  "marketcap": 2619399751,
                  "volume": 9172717841,
                  "performance": {
                      "hour": 0.01,
                      "min1": 0,
                      "min5": 0,
                      "min15": 0,
                      "day": 0.01,
                      "week": -0.11,
                      "month": -0.39,
                      "year": null
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/26081.png",
                  "value": 9172717841
              },
              {
                  "id": "27075",
                  "name": "Mantle",
                  "slug": "mantle",
                  "rank": 48,
                  "symbol": "MNT",
                  "symbols": {
                      "binance": null,
                      "kucoin": "MNT-USDT",
                      "bybit": "MNT/USDT",
                      "gateio": "MNT_USDT",
                      "coinbase": null,
                      "mexc": "MNT_USDT",
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/27075.png",
                  "stable": false,
                  "circulating_supply": 3231662126,
                  "dominance": 0.001,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -2,
                      "month": -5,
                      "year": 0
                  },
                  "cg_id": "mantle",
                  "price": 0.798,
                  "marketcap": 2578866376,
                  "volume": 256528529,
                  "performance": {
                      "hour": 0.32,
                      "min1": -0.04,
                      "min5": 0.06,
                      "min15": 0.4,
                      "day": -3.25,
                      "week": -10.57,
                      "month": 8.49,
                      "year": null
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/27075.png",
                  "value": 256528529
              },
              {
                  "id": "8000",
                  "name": "Lido DAO",
                  "slug": "lido-dao",
                  "rank": 49,
                  "symbol": "LDO",
                  "symbols": {
                      "binance": "LDO_USDT",
                      "kucoin": "LDO-USDT",
                      "bybit": "LDO/USDT",
                      "gateio": "LDO_USDT",
                      "coinbase": "LDO-USD",
                      "mexc": "LDO_USDT",
                      "okx": "LDO-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/8000.png",
                  "stable": false,
                  "circulating_supply": 891704657,
                  "dominance": 0.001,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 2,
                      "week": -1,
                      "month": -9,
                      "year": -17
                  },
                  "cg_id": "lido-dao",
                  "price": 2.779714285714286,
                  "marketcap": 2478684173,
                  "volume": 159700564,
                  "performance": {
                      "hour": -0.74,
                      "min1": -0.21,
                      "min5": 0.28,
                      "min15": 0.2,
                      "day": 0.82,
                      "week": -4.81,
                      "month": -10.9,
                      "year": 24.87
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/8000.png",
                  "value": 159700564
              },
              {
                  "id": "328",
                  "name": "Monero",
                  "slug": "monero",
                  "rank": 50,
                  "symbol": "XMR",
                  "symbols": {
                      "binance": null,
                      "kucoin": "XMR-USDT",
                      "bybit": null,
                      "gateio": "XMR_USDT",
                      "coinbase": null,
                      "mexc": "XMR_USDT",
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/328.png",
                  "stable": false,
                  "circulating_supply": 18413685,
                  "dominance": 0.001,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -3,
                      "month": -4,
                      "year": -26
                  },
                  "cg_id": "monero",
                  "price": 133.98999999999998,
                  "marketcap": 2467249653,
                  "volume": 49784088,
                  "performance": {
                      "hour": 0.17,
                      "min1": -0.08,
                      "min5": 0.04,
                      "min15": 0.25,
                      "day": -3.5,
                      "week": -5.94,
                      "month": 11.5,
                      "year": -14.99
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/328.png",
                  "value": 49784088
              },
              {
                  "id": "22861",
                  "name": "Celestia",
                  "slug": "celestia",
                  "rank": 51,
                  "symbol": "TIA",
                  "symbols": {
                      "binance": "TIA_USDT",
                      "kucoin": "TIA-USDT",
                      "bybit": "TIA/USDT",
                      "gateio": "TIA_USDT",
                      "coinbase": "TIA-USD",
                      "mexc": "TIA_USDT",
                      "okx": "TIA-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/22861.png",
                  "stable": false,
                  "circulating_supply": 172385993,
                  "dominance": 0.001,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -1,
                      "month": -12,
                      "year": 0
                  },
                  "cg_id": "celestia",
                  "price": 13.758842857142854,
                  "marketcap": 2371831788,
                  "volume": 148296141,
                  "performance": {
                      "hour": 0.46,
                      "min1": -0.07,
                      "min5": 0.15,
                      "min15": 0.31,
                      "day": -6.98,
                      "week": -8.22,
                      "month": -19.33,
                      "year": null
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/22861.png",
                  "value": 148296141
              },
              {
                  "id": "5632",
                  "name": "Arweave",
                  "slug": "arweave",
                  "rank": 52,
                  "symbol": "AR",
                  "symbols": {
                      "binance": "AR_USDT",
                      "kucoin": "AR-USDT",
                      "bybit": "AR/USDT",
                      "gateio": "AR_USDT",
                      "coinbase": null,
                      "mexc": "AR_USDT",
                      "okx": "AR-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/5632.png",
                  "stable": false,
                  "circulating_supply": 65454185,
                  "dominance": 0.0009,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 2,
                      "week": 3,
                      "month": 32,
                      "year": 90
                  },
                  "cg_id": "arweave",
                  "price": 34.928216666666664,
                  "marketcap": 2286197955,
                  "volume": 99566886,
                  "performance": {
                      "hour": 0.71,
                      "min1": -0.1,
                      "min5": 0.18,
                      "min15": 0.43,
                      "day": 3.13,
                      "week": -1.24,
                      "month": 154.82,
                      "year": 327.26
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/5632.png",
                  "value": 99566886
              },
              {
                  "id": "28752",
                  "name": "dogwifhat",
                  "slug": "dogwifhat",
                  "rank": 53,
                  "symbol": "WIF",
                  "symbols": {
                      "binance": "WIF_USDT",
                      "kucoin": "WIF-USDT",
                      "bybit": null,
                      "gateio": "WIF_USDT",
                      "coinbase": null,
                      "mexc": "WIF_USDT",
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/28752.png",
                  "stable": false,
                  "circulating_supply": 998920172,
                  "dominance": 0.0009,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -8,
                      "month": 125,
                      "year": 0
                  },
                  "cg_id": "dogwifcoin",
                  "price": 2.2471275,
                  "marketcap": 2244700988,
                  "volume": 355233347,
                  "performance": {
                      "hour": 1.44,
                      "min1": -0.42,
                      "min5": 0.18,
                      "min15": 0.44,
                      "day": -1.56,
                      "week": -22.04,
                      "month": 545.11,
                      "year": null
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/28752.png",
                  "value": 355233347
              },
              {
                  "id": "10804",
                  "name": "FLOKI",
                  "slug": "floki-inu",
                  "rank": 54,
                  "symbol": "FLOKI",
                  "symbols": {
                      "binance": "FLOKI_USDT",
                      "kucoin": "FLOKI-USDT",
                      "bybit": "FLOKI/USDT",
                      "gateio": "FLOKI_USDT",
                      "coinbase": null,
                      "mexc": "FLOKI_USDT",
                      "okx": "FLOKI-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/10804.png",
                  "stable": false,
                  "circulating_supply": 9557806355755,
                  "dominance": 0.0009,
                  "rankDiffs": {
                      "hour": 1,
                      "day": 3,
                      "week": -2,
                      "month": 140,
                      "year": 65
                  },
                  "cg_id": "floki",
                  "price": 0.00022855816666666668,
                  "marketcap": 2184514698,
                  "volume": 893193320,
                  "performance": {
                      "hour": 0.85,
                      "min1": -0.32,
                      "min5": 0.23,
                      "min15": 1.01,
                      "day": 6.22,
                      "week": -9.67,
                      "month": 612.95,
                      "year": 532.07
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/10804.png",
                  "value": 893193320
              },
              {
                  "id": "20947",
                  "name": "Sui",
                  "slug": "sui",
                  "rank": 55,
                  "symbol": "SUI",
                  "symbols": {
                      "binance": "SUI_USDT",
                      "kucoin": "SUI-USDT",
                      "bybit": "SUI/USDT",
                      "gateio": "SUI_USDT",
                      "coinbase": "SUI-USD",
                      "mexc": "SUI_USDT",
                      "okx": "SUI-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/20947.png",
                  "stable": false,
                  "circulating_supply": 1230916717,
                  "dominance": 0.0009,
                  "rankDiffs": {
                      "hour": -1,
                      "day": -2,
                      "week": 9,
                      "month": -7,
                      "year": 0
                  },
                  "cg_id": "sui",
                  "price": 1.7632071428571428,
                  "marketcap": 2170361147,
                  "volume": 517375077,
                  "performance": {
                      "hour": -0.84,
                      "min1": -0.01,
                      "min5": 0.22,
                      "min15": 0.8,
                      "day": -3.97,
                      "week": 23.35,
                      "month": 6.05,
                      "year": null
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/20947.png",
                  "value": 517375077
              },
              {
                  "id": "23149",
                  "name": "Sei",
                  "slug": "sei",
                  "rank": 56,
                  "symbol": "SEI",
                  "symbols": {
                      "binance": "SEI_USDT",
                      "kucoin": "SEI-USDT",
                      "bybit": "SEI/USDT",
                      "gateio": "SEI_USDT",
                      "coinbase": "SEI-USD",
                      "mexc": "SEI_USDT",
                      "okx": null
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/23149.png",
                  "stable": false,
                  "circulating_supply": 2675000000,
                  "dominance": 0.0009,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -5,
                      "month": -9,
                      "year": 0
                  },
                  "cg_id": "sei-network",
                  "price": 0.7933583333333334,
                  "marketcap": 2122233541,
                  "volume": 185765076,
                  "performance": {
                      "hour": -0.2,
                      "min1": -0.13,
                      "min5": 0.18,
                      "min15": 0.1,
                      "day": -3.29,
                      "week": -12.73,
                      "month": -9.68,
                      "year": null
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/23149.png",
                  "value": 185765076
              },
              {
                  "id": "3773",
                  "name": "Fetch.ai",
                  "slug": "fetch",
                  "rank": 57,
                  "symbol": "FET",
                  "symbols": {
                      "binance": "FET_USDT",
                      "kucoin": "FET-USDT",
                      "bybit": "FET/USDT",
                      "gateio": "FET_USDT",
                      "coinbase": "FET-USD",
                      "mexc": "FET_USDT",
                      "okx": "FET-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/3773.png",
                  "stable": false,
                  "circulating_supply": 839807411,
                  "dominance": 0.0008,
                  "rankDiffs": {
                      "hour": 0,
                      "day": -1,
                      "week": -1,
                      "month": 38,
                      "year": 71
                  },
                  "cg_id": "fetch-ai",
                  "price": 2.4333142857142858,
                  "marketcap": 2043515370,
                  "volume": 292381562,
                  "performance": {
                      "hour": 1.04,
                      "min1": -0.03,
                      "min5": 0.23,
                      "min15": 0.66,
                      "day": -4.18,
                      "week": -11.65,
                      "month": 141.72,
                      "year": 560.87
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/3773.png",
                  "value": 292381562
              },
              {
                  "id": "4030",
                  "name": "Algorand",
                  "slug": "algorand",
                  "rank": 58,
                  "symbol": "ALGO",
                  "symbols": {
                      "binance": "ALGO_USDT",
                      "kucoin": "ALGO-USDT",
                      "bybit": "ALGO/USDT",
                      "gateio": "ALGO_USDT",
                      "coinbase": "ALGO-USD",
                      "mexc": "ALGO_USDT",
                      "okx": "ALGO-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/4030.png",
                  "stable": false,
                  "circulating_supply": 8074010329,
                  "dominance": 0.0008,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -4,
                      "month": -5,
                      "year": -19
                  },
                  "cg_id": "algorand",
                  "price": 0.2413971428571429,
                  "marketcap": 1949043024,
                  "volume": 74335624,
                  "performance": {
                      "hour": 0.8,
                      "min1": -0.11,
                      "min5": 0.14,
                      "min15": 0.35,
                      "day": -2.67,
                      "week": -17.64,
                      "month": 28.66,
                      "year": 14.87
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/4030.png",
                  "value": 74335624
              },
              {
                  "id": "4558",
                  "name": "Flow",
                  "slug": "flow",
                  "rank": 59,
                  "symbol": "FLOW",
                  "symbols": {
                      "binance": "FLOW_USDT",
                      "kucoin": "FLOW-USDT",
                      "bybit": "FLOW/USDT",
                      "gateio": "FLOW_USDT",
                      "coinbase": "FLOW-USD",
                      "mexc": "FLOW_USDT",
                      "okx": "FLOW-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/4558.png",
                  "stable": false,
                  "circulating_supply": 1496257868,
                  "dominance": 0.0007,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 0,
                      "week": -1,
                      "month": 3,
                      "year": -8
                  },
                  "cg_id": "flow",
                  "price": 1.2435428571428573,
                  "marketcap": 1860660784,
                  "volume": 99484732,
                  "performance": {
                      "hour": 0.43,
                      "min1": -0.08,
                      "min5": 0.16,
                      "min15": 0.48,
                      "day": -4.93,
                      "week": -9.02,
                      "month": 38.6,
                      "year": 26.53
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/4558.png",
                  "value": 99484732
              },
              {
                  "id": "7278",
                  "name": "Aave",
                  "slug": "aave",
                  "rank": 60,
                  "symbol": "AAVE",
                  "symbols": {
                      "binance": "AAVE_USDT",
                      "kucoin": "AAVE-USDT",
                      "bybit": "AAVE/USDT",
                      "gateio": "AAVE_USDT",
                      "coinbase": "AAVE-USD",
                      "mexc": "AAVE_USDT",
                      "okx": "AAVE-USDT"
                  },
                  "image": "https://cryptobubbles.net/backend/data/logos/7278.png",
                  "stable": false,
                  "circulating_supply": 14764612,
                  "dominance": 0.0007,
                  "rankDiffs": {
                      "hour": 0,
                      "day": 1,
                      "week": 1,
                      "month": 0,
                      "year": -10
                  },
                  "cg_id": "aave",
                  "price": 118.1164857142857,
                  "marketcap": 1743944082,
                  "volume": 128887688,
                  "performance": {
                      "hour": 0.59,
                      "min1": -0.09,
                      "min5": 0.02,
                      "min15": 0.41,
                      "day": -2.08,
                      "week": -7.74,
                      "month": 29.58,
                      "year": 60.11
                  },
                  "url": "https://cryptobubbles.net/backend/data/logos/7278.png",
                  "value": 128887688
              }
          
            
          ]
        },
       
        // {
        //   name: "JP ",
        //   data: [
        //     {
        //       name: "JP1",
        //       value: -22470857.0,
        //       percentage:'+80%',
        //       url:"https://cryptobubbles.net/backend/data/logos/24600.png"
        //     },
        //     {
        //       name: "JP2",
        //       value: -21470857.0,
        //       percentage:'+80%',
        //       url:"https://cryptobubbles.net/backend/data/logos/28541.png"
        //     },
        //   ],
        // },
      ],

   
  });




  return (
      <div>
        <HighchartsReact
          height={'500px'}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    )
}

export default App