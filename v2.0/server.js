//server.js
var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "",
        pass: ""
    }
});

app.get('/',function(req,res){
res.sendfile('index.html');
});

app.get('/send',function(req,res){
    var mailOptions={
        subject: 'Email from personal website from:' + req.query.info,
        from : req.query.address,
        to: 'yujiac8000@gmail.com',
        text : req.query.text
  }
  console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});


});

app.listen(4000,function(){
console.log("Express Started on Port 4000");
});