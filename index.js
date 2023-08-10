const express = require('express');
const User = require('./db/User');
const cors = require('cors');

require ('./db/config')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/register',async(req,resp)=>{
  const data = new User(req.body);
  const result = await data.save();
  resp.send(result)
 console.log(req.body)
})





 app.listen(4000);