const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY';
const apikey = '6S0FY177DA49BUA8'

function buildUrl(symbol) {
    return url + "&symbol=" + symbol + "&apikey=" + apikey;
}

Vue.component('sidebar', {
     data: function () {
       return {
         symbols: ['MSFT', 'AAPL', 'INTC', 'NFLEX', 'ORCL', 'CMCSA', 'GOOG', 'LUV', 'HOG', 'GOOGL', 'AMZN'],
         itemClass: 'nav-item',
         isActive: false
       }
     },
     methods: {
          fetchStocks(event) {
               this.$emit('request-data', event.target.innerText);
          }
     },
     template: '<nav class="col-md-2 d-none d-md-block bg-light sidebar"><div class="sidebar-sticky"><ul class="nav flex-column"><li v-for="symbol in symbols" v-on:click.prevent="fetchStocks($event)" class="nav-item"><a v-bind:href="symbol" ref="stockSymbol" class="nav-link">{{ symbol }}</a></li></ul></div></nav>'
});

Vue.component('stock-chart', {
     computed: {
          notifiy() {
               return this.msg;
          }
     },
     template: '<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"><div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3"><h3>Stock Chart</h3></div><div id="chartContainer"></div></main>'
});

const vm = new Vue({
     el: '#app',
     data() {
          return {
               isLoading: false,
               stockName: '',
               stocks: [],
               msg: ''
          }
     },
     created() {
          let getSymbol = localStorage.getItem('symbol') !== null ? localStorage.getItem('symbol') : 'MSFT';
          this.fetchStocks(getSymbol);
     },
     methods: {
          loadChart() {
              var chart = new CanvasJS.Chart("chartContainer", {
                    animationEnabled: true,
                    theme: "light2",
                    exportEnabled: false,
                    axisX: {
                         interval: 1,
                         valueFormatString: "DD-MMM"
                    },
                    axisY: {
                         includeZero: false,
                         prefix: "$"
                    },
                    toolTip: {
                     content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
                    },
                    data: [{
                         type: "candlestick",
                         yValueFormatString: "$##0.00",
                         dataPoints: this.stocks
                    }]
              });
              chart.render();
          },
          fetchStocks(stockName){
              this.stocks = []; //empty array for recurring push data
              this.isLoading = true;
              this.stockName = stockName; // get the request value from user
              localStorage.setItem('symbol', this.stockName);
              let url = buildUrl(this.stockName);
              this.$http.get(url).then(function(response){
                   var vm = this;
                   var stockObj = response.body["Time Series (Daily)"];
                   let msg = typeof response.body["Information"] !== 'undefined' ? response.body["Information"] : '';
                   this.msg = msg;
                   this.isLoading = false;
                   for (var key in stockObj) {
                        vm.stocks.push({
                             x: new Date(key),
                             y: [parseFloat(stockObj[key]["1. open"]), parseFloat(stockObj[key]["2. high"]), parseFloat(stockObj[key]["3. low"]), parseFloat(stockObj[key]["4. close"])]
                        });
                   }
                   vm.loadChart();
              });
          }
     }
});