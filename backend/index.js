const express = require('express');
const app = express();
const cors = require('cors');
const UserRoutes = require('./routes/UserRoutes');

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://locahost:3000' }));
app.use(express.static('public'));


//rotas
app.use('/users', UserRoutes);

app.listen(5000);