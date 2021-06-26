const express = require ('express');
const app = express();
const port = 9911;
const dbSetup = require('./src/database/setup')

app.use(express.json());

dbSetup();

app.listen(port, () => console.log(`app is listening on ${port}`))