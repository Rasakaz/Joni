/* DATABASE seeder */

// const {v4: uuidv4} =  require('uuid');
// const salesADS = require('./salesADS');
const product = require('../Entities/product');


const products = [
  new product({
    title: "מקלות בקר",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'beef-stick.png',
  }),
  new product({
    title: "רצועות בקר",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'beef-stripes.png',
  }),
  new product({
    title: "רצועות חזה עוף",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'chicken-breast-strips.png',

  }),
  new product({
    title: "משקולות עוף",
    description:"4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'chicken-dumbell.png',
  }),
  new product({
    title: "עצם אורז במילוי עוף",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'chicken-rice-bone.png',
  }),
  new product({
    title: "סושי עוף",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'chicken-sushi.png',
  }),
  new product({
    title: "חזה עוף מיובש",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'dried-chicken-breasts.png',
  }),
  new product({
    title: "חזה אווז מיובש",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'dried-duck-breasts.png',
  }),
  new product({
    title: "דג מיובש",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'dried-fish.png',
  }),
  new product({
    title: "חזה ברווז בצורת עצם",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'duck-breast-bone-shape.png',
  }),
  new product({
    title: "חטיף בקר",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'beef-stick.png',
  }),
  new product({
    title: "חזה ברווז",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'duck-breast.png',
  }),
  new product({
    title: "עצם סידן עטוף בברווז",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'duck-calcium-bone.png',
  }),
  new product({
    title: "מטבעות ברווז",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'duck-coins.png',
  }),
  new product({
    title: "דג שלם עטוף ברווז",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 14.99,
    path: 'duck-fish.png',
  }),
  new product({
    title: "סנדוויץ ברווז",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'duck-sandwich-stripes.png',
  }),
  new product({
    title: "רצועות ברווז ודג",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'duck-wrap-fish.png',
  }),
  new product({
    title: "לבבות עוף ודג",
    description: "4LIFE -  - חטיף לכלב - עשוי מרכיבים טבעיים בלבד, החטיף מתאים לכל סוגי הכלבים ובכל הגילאים. ",
    price: 19.90,
    path: 'sushi-chicken-fish.png',
  })
];


const seed = () => { products.map((p) => {
  p.save((err) => {if (err) console.error(err)});
})};

// const salesToSeed = [
//   new salesADS({
//     saleCode: '123456', 
//     description: 'חטיף בטעמים למשחק ,לניקוי שיניים,מסיע בשמירה על פה נקי ומניעת ריח רע, מפיג את השעמום והרצון של הכלב ללעוס לחטיף ובכך מונע נזקים.',
//     price: 9.99,
//     path: './salsAdsPictures/1.jpg',
//   }),

// new salesADS({
//   saleCode: uuidv4().slice(0,8), 
//   description: 'חטיף בטעמים למשחק ,לניקוי שיניים,מסיע בשמירה על פה נקי ומניעת ריח רע, מפיג את השעמום והרצון של הכלב ללעוס לחטיף ובכך מונע נזקים.',
//   price: 9.99,
//   path: './salsAdsPictures/2.jpg',
// })];


// const seed = () => { salesToSeed.map((seedAds) => {
//     seedAds.save((err) => {if (err) console.error(err)});
//   })};

exports.seed = seed;
