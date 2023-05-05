
const express = require('express');
const app = express();
const port = 9001;
const fs = require("fs")
const floramoreFilepath = "floramore.json"
const bodyParser = require("body-parser");

app.use(express.static(__dirname ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
  
app.get("/index", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
}); 

 app.use(express.static(__dirname));
 
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  app.listen(port, () => {
    console.log(`Servern körs på port ${port}`);
    console.log('Servern startad');
  });

app.post("/index", (req, res) => {
    
  const jsonData = JSON.stringify(req.body, null, 2);
  console.log("Hallå");
  //Skriva JSON string till fil
  fs.writeFileSync("floramore.json", jsonData, (err) => {
      //Om error, skriv ut error
      if(err){
          console.log(err);
      }
  });
}); 