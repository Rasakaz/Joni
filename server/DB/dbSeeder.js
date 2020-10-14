/* DATABASE seeder */

const {v4: uuidv4} =  require('uuid');
const salesADS = require('./salesADS');

const salesToSeed = [
  new salesADS({
    saleCode: '123456', 
    description: 'חטיף בטעמים למשחק ,לניקוי שיניים,מסיע בשמירה על פה נקי ומניעת ריח רע, מפיג את השעמום והרצון של הכלב ללעוס לחטיף ובכך מונע נזקים.',
    price: 9.99,
    path: './salsAdsPictures/1.jpg',
  }),

  new salesADS({
    saleCode: uuidv4().slice(0,8), 
    description: 'חטיף בטעמים למשחק ,לניקוי שיניים,מסיע בשמירה על פה נקי ומניעת ריח רע, מפיג את השעמום והרצון של הכלב ללעוס לחטיף ובכך מונע נזקים.',
    price: 9.99,
    path: './salsAdsPictures/2.jpg',
  })];


const seed = () => { salesToSeed.map((seedAds) => {
    seedAds.save((err) => {if (err) console.error(err)});
  })};

exports.seed = seed;
