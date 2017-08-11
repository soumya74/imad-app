var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
  'article-one' : {
    title : 'Article-One',
    date : '4th August',
    place : 'Jal Vayu Bihar, Noida',
  }, 
  'article-two' : {
    title : 'Article-Two',
    date : '5th August',
    place : 'Jal Vayu Bihar, Noida',      
  },
  'article-three' : {
    title : 'Article-Three',
    date : '6th August',
    place : 'Jal Vayu Bihar, Noida',      
  },
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var place = data.place;
    var htmlTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>
                SSG | ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name = "viewport" content="width=dance-width intital-scale=1"/>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <p>
                    ${title}
                </p>
                <p>
                    Date : ${date}
                    <br/>
                    Place : ${place}<br/>
                </p>
                <p>
                    This is ${title}.This is ${title}.This is ${title}.This is ${title}.This is ${title}.
                    This is ${title}.This is ${title}.This is ${title}.This is ${title}.This is ${title}.
                    This is ${title}.This is ${title}.This is ${title}.This is ${title}.This is ${title}.
                    This is ${title}.This is ${title}.This is ${title}.This is ${title}.This is ${title}.
                    This is ${title}.This is ${title}.This is ${title}.This is ${title}.This is ${title}.
                </p>
            </div>
        </body>
    </html>
    `
   return htmlTemplate;
}

app.get('/ui/main.js', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'main.js')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var nameList = [];
app.get('/submit-name', function(req, res){
   var name = req.query.params; 
   nameList.push(name);
   res.send(JSON.stringfy(nameList));
});

app.get('/:articleName', function(req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
