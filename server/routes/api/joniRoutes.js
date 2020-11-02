const db = require('../../DB/db.js');
const emailSender = require('../../EmailSmsSender/emailSender');

module.exports = (app) => {
  app.post('/api/shipping', (req, res) => {
    db.storeDelivery(req.body);
    emailSender.send(req.body);
    res.end();
  });
  
  app.get('/api/getProducts', async (req, res) => {
    const products = await db.getAllProducts()
    // console.log(JSON.stringify(products));
    res.send(products);
  });
  
  // app.get('/api/saleads/:saleCode', (req, res) => {
  //   console.log('the server get a request ......');
    
  //   db.getADS(req.params.saleCode)
  //   .then((dbSchema) => {
  //     console.log('the server get the SCHEMA ......');
  //     res.send(dbSchema);
  //   });
  // });
}