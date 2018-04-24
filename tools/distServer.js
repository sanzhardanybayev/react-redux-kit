/* eslint-disable prefer-destructuring,no-else-return */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import pug from 'pug/lib/index';

import bodyParser from 'body-parser';

const nodemailer = require('nodemailer');

/*  eslint-disable no-console */

const port = 3003;
const app = express();

app.use(compression());
//  Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // secure:true for port 465, secure:false for port 587
  auth: {
    user: 'excelsior.contacts@gmail.com',
    pass: 'Excelsior567&^%'
  }
});


app.post('/sendemail', (req, res) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');


  const phone = req.body.phone;
  const price = req.body.price;
  const options = JSON.parse(req.body.options);


  const emailTemplate = pug.renderFile(path.join(__dirname, 'email/index.pug'), {
    phone,
    price,
    options
  });


  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Tinki Winki 🎈" <excelsior.contacts@gmail.com>', // sender address
    to: 'dsanjar@rocketmail.com', // list of receivers
    subject: 'Заявка с сайта ✔', // Subject line
    text: 'New Order!', // plain text body
    html: emailTemplate // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error != null) {
      console.log(error);
      return false;
    } else {
      res.sendStatus(200);
      console.log('Message %s sent: %s', info.messageId, info.response);
      return true;
    }

  });

  res.end('{"success" : "Sent Successfully", "status" : 200}');

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is on!');
    open(`http://localhost:${port}`);
  }
});
