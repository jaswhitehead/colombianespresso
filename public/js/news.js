// Your API key is: c0b90553d2744b349d015bc4631cd183
$(document).ready(function() {
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("c0b90553d2744b349d015bc4631cd183");

  $("#search_button").on("click", function(event) {
    event.preventDefault();
    var city = $("#search-term")
      .val()
      .trim();

    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2
      .topHeadlines({
        q: city,
        language: "en",
        country: "us",
      })
      .then(function (response) {
        console.log(response);

        // var url = 'http://newsapi.org/v2/top-headlines?' +
        //           'country=us&' +
        //           'apiKey=c0b90553d2744b349d015bc4631cd183';
        //           var req = new Request(url);

        // fetch(req)
        //     .then(function(response) {
        //         console.log(response.json());
        //     })

        // var title = response.title;
        // var author = response.author;
        // var description = response.description;
        // var url = response.url;
        // var urlToImage = response.urlToImage;
        // var content = response.content;

        // $(".title").append(title);
        // $(".author").append(author);
        // $(".description").append(description);
        // $(".url").append(url);
        // $(".urlToImage").append(urlToImage);
        // $(".content").append(content);
      });
  });
});
