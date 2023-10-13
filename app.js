const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.port || 8888;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const routes = require('./server/routes/storeRoutes.js');
app.use('/',routes);
app.get('/',(req,res)=>{
    res.send('Welcome to the dressStore application')
})


app.listen(port,()=> console.log(`Listening on port ${port}`));
