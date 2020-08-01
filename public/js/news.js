var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=034dc2010367468aa852b280196c5191';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

    var title = response.title;
    var author = response.author;    
    var description = response.description;
    var url = response.url;
    var urlToImage = response.urlToImage;
    var content = response.content;

    $('.title').append(title);
    $('.author').append(author);
    $('.description').append(description);
    $('.url').append(url);
    $('.urlToImage').append(urlToImage);
    $('.content').append(content);