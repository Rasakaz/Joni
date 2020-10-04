/* DATABASE seeder */

/* work wo do: 

[ ] - require fs module.
[ ] - for each picture fit the salesads.
[ ] - save it to the data base in sale.
*/

const {v4: uuidv4} =  require('uuid');
const salesADS = require('./salesADS');

const salesToSeed = [
  new salesADS({
    saleCode: uuidv4().slice(0,8), 
    description: 'חטיף בטעמים למשחק ,לניקוי שיניים,מסיע בשמירה על פה נקי ומניעת ריח רע, מפיג את השעמום והרצון של הכלב ללעוס לחטיף ובכך מונע נזקים.',
    price: 9.99,
    path: 'C:\Users\ניב\Desktop\joni\landing-sale-page\server\salsAdsPictures\1.jpg'
  }),

  new salesADS({
    saleCode: uuidv4().slice(0,8), 
    description: 'חטיף בטעמים למשחק ,לניקוי שיניים,מסיע בשמירה על פה נקי ומניעת ריח רע, מפיג את השעמום והרצון של הכלב ללעוס לחטיף ובכך מונע נזקים.',
    price: 9.99,
    path: 'C:\Users\ניב\Desktop\joni\landing-sale-page\server\salsAdsPictures\2.jpg'
  })];

console.log('db seeder db seeder db seeder db seeder db seeder');
const seed = () => { salesToSeed.map((seedAds) => {
  seedAds.save((err) => {if (err) console.error(err)});
})};

module.exports.deSeeder;
