const express = require ('express');
const mongoose = require('mongoose');
const cors =require('cors')

const UserModel = require('./models/Users')
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:3001/crud",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.post("/createUser", (req,res)=>{
    UserModel.create(req.body).then(users=> req.json(users))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("Server Started");
})