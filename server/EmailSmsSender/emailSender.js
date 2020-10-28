const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jonidogsfamily@gmail.com',
    pass: '1Joni278'
  }
});

const send = (data) => {
  const mail = {
    from: 'jonidogsfamily@gmail.com',
    to: 'jonidogsfamily@gmail.com',
    subject: `new delivery - ${data.city}, ${data.address}`,
    text: `
      name: ${data.fullName},
      address: ${data.address},
      city: ${data.city},
      phone: ${data.phone},
      price: ${data.price}
      products: ${data.products}`
  };

  transporter.sendMail(mail, (err, info) => {
    if(err){
      console.error(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}



module.exports.send = send;