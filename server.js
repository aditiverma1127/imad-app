var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
   'article-one':{
    title: 'Article one | Aditi Verma' ,
    heading: ' Article one',
    date: 'April 20,2018',
    content: ` <p>
                This is my first content of artcile one.
                </p>` 
    },
    
    'article-two':{
    title: 'Article two | Aditi Verma' ,
    heading: ' Article two',
    date: 'April 21,2018',
    content: ` <p>
                This is my first content of article second.
                
            </p>` 
    },
    
   'article-three':{
    title: 'Article three | Aditi Verma' ,
    heading: ' Article one',
    date: 'April 22,2018',
    content: ` <p>
                This is my first content of article third.
                
            </p>` 
    }
};
    
 function createTemplate(data) {
     var title = data.title;
     var heading = data.heading;
     var date =data.date;
     var content = data.content;
 
    var htmlTemplate = `
    <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name ="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>    
    <body>
        <div class ="container">
            <div>
        
                <a href = "/"> Home </a>
            </div>
            <hr/>
            <h3>
               ${heading}
            </h3>
            <div>
            
               ${date}
            </div>
            <div>
          ${content}
            </div>
        </div>
        
    </body>
</html>
`;
    return  htmlTemplate;
    
  }  

    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
counter=counter + 1;
res.send(counter.toString());
});

app.get('/:articleName',function(req,res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/Submit-name/:name',function(req,res) {
    //get name from req object
    var name = req.params.name;
    
    names.push(name);
    //json
    res.send(JSON.stringify(names));
    res.send(names);
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
