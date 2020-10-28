const express = require('express');
const cors = require('cors');
const path = require('path');


const PORT = process.env.PORT || 8080;


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // change bodyparser

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));


app.use(express.static(path.join(__dirname, '../client/build')));


require('./routes/api/joniRoutes')(app);

app.listen(PORT, () => (console.log(`Server listening on port: ${PORT}`)));