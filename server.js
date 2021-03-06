const express= require("express");
const hbs = require('hbs');
var app = express();

app.set('view engine  ','hbs')
app.use(express.static(__dirname + '/public'));
app.get('/',(req, res)=>{
  res.send('hello express!');
});

app.get('/about',(req, res)=>{
  res.send({
    errorMessage: "Wrong"
  });
})
app.listen(3000,()=>{
  console.log("server up");
});
