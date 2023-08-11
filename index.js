const express = require('express');
const User = require('./db/User');
const cors = require('cors');
const Product = require('./db/Product');

require ('./db/config')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/register',async(req,resp)=>{
  const data = new User(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.password
  resp.send(result)
 console.log(req.body)
})



app.post('/login',async (req,resp)=>{
  if(req.body.password && req.body.email)
  {
    let user = await User.findOne(req.body).select("-password");
  if (user)
  {
    resp.send(user)

  }else{
    resp.send({result:'No user Found'})
  }
}else{
    resp.send({result:'No user Found'})

  
} 

})


app.post('/add-product',async(req,resp)=>{
  let product = new Product(req.body);
  let result = await product.save()
  resp.send(result)
  console.log(result)

})



 app.listen(4000);