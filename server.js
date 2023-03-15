'use strict'

const express = require ('express');
const routerApi = require('./routes');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
  res.send('My App!!')
})

routerApi(app);

app.listen(PORT, () => {
    console.log(`Runnig this app in the port: ${PORT}`);
  })
