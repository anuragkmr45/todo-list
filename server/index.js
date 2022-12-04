import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Connection from './database/db.js'; 
import Routes from './routes/route.js';

const app = express()
const port = 8000

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Routes);

Connection();

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})