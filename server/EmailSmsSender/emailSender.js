const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mail',
    pass: 'password'
  }
});

const send = (data) => {
  let str = "\n";

 data.products.forEach((element) => {
  console.log(element.product, element.amount);
  str += "מוצר: " + element.product + " כמות: " + element.amount + " \n";
 });

 console.log(str);


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
      products: {${str}}`
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
