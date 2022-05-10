const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json);
app.use(cors({ credentials: true, origin: 'http://locahost:3000' }));
app.use(express.static('public'));


//rotas


app.listen(3000);