var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var articleone={
    title :'article-one',
    heading : 'article-one',
    date: '7-5-07',
    contents: `<p>
                this is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article one
            </p>
            <p>
                this is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article one
            </p><p>
                this is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article onethis is the content of article one
            </p> `,
    
};
function createemplate (data) {
    title = data.title;
    heading = data.heading;
    date = data.date;
    contents = data.content;
    var htmltemplate= `
    <html>
    

    <head>
        <title>
         ${title}
        </title>
        <meta name='viewport' content='width-device-width,intialscale=1' />
        <link href="/ui/style.css" rel= "stylesheet "/>
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">home</a>
            </div>
            <div>
                <h2>${heading}</h2>
                <p>
                    ${date}
                </p>
                <p>
                   ${content}
                </p>
            </div>
        </div>
    </body>
    </html>
    
`;
    return htmltemplate;
}
app.get('/articleone', function(req,res){
    res.send(createtemplate(articleone));
});
app.get('/ui/article-two.html', function (req, res) {
res.sendFile(path.join(__dirname,'ui', 'article-two.html'));
});

app.get('/ui/article-three.html', function (req, res) {
res.sendFile(path.join(__dirname, 'ui','article-three.html'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
