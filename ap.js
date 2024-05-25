const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var item="";
var items=[];
let workitems=[];
let sportsitems=[];
app.get("/",function(req,res){

  var today = new Date();
  //var day ="";
  var options={
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US",options);
/*  var currentDay = today.getDay();
  switch  (currentDay ){
  case 0:day = "sunday";
  break;
  case 1:day = "monday";
  break;
  case 2:day = "tuesday";
  break;
  case 3:day = "wednesday";
  break;
  case 4:day = "thrusday";
  break;
  case 5:day = "friday";
  break;
  case 6:day = "saturday";
  break;
  default: Day = "not valid";

}*/
res.render("list",{ListTitle:day,newListItem:items});
});

app.post("/",function(req,res){
  let item=req.body.newItem;
  if(req.body.list == "work"){
        workitems.push(item);
      res.redirect("/work") ;
     }
  else{
   items.push(item);
  res.redirect("/");
}
});
app.post("/",function(req,res){
  let item=req.body.newItem;
  if(req.body.list == "sports"){
        workitems.push(item);
      res.redirect("/sports") ;
     }
  else{
   items.push(item);
  res.redirect("/");
}
});
app.get("/work",function(req,res){
  res.render("list",{ListTitle:"work List",newListItem:workitems});
});
app.get("/sports",function(req,res){
  res.render("list",{ListTitle:"sports List",newListItem:sportsitems});
});
/*app.post("/work",function(req,res){
  let item=req.body.newItem;
   workitems.push(item);
  res.redirect("/work");
});*/

app.listen(3000,function(){
  console.log("server is up at the port 3000");
});
