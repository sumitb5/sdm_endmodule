var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Name:Sumit Bhosale");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam Pvt. Ltd.</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Information Mangement Company</li>"+
                    " <li>Human Resource Mangement</li>"+
                    " <li>Account Management</li>"+
                    " <li>Project Management</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(5555);
console.log("Server is running on port 5555");
