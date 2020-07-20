const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


app.get('/', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'troyerlogan@gmail.com',
      pass: '1OG@@qSoQ26F'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'troyerlogan@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}, From: ${mailOptions.from}`)
    }
  });
});

app.get('/test', function(req, res) {
  var doc = jsPDF();
  doc.text(20, 20, 'Hello, world.');
  doc.save('Test.pdf', function(err){console.log('saved!');});var doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
})

app.listen(5000);
console.log("Server running on port 5000");