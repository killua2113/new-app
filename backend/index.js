const connectToMongo=require('./db');
const express = require('express')
let Newsdata=require('./models/News.js')
let Healthdata=require('./models/Health.js')
let Entertainmentdata=require('./models/Entertainment.js')
let Sciencedata=require('./models/Science.js')
let Sportsdata=require('./models/Sports.js')
const dotenv=require('dotenv');
var cors=require('cors')
require('dotenv').config();
connectToMongo();
const app = express()
const port = 5000||process.env.PORT;
app.use(cors())
app.use(express.json())
app.get('/', async (req,res)=>{
  let data =  await Newsdata.aggregate([{ $sample: { size: 18} }]);
  res.send(data);
  console.log(data.length);
})
app.get('/health', async (req,res)=>{
  let data =  await Healthdata.aggregate([{ $sample: { size: 18} }]);
  res.send(data);
  console.log(data.length);
})
app.get('/entertainment', async (req,res)=>{
  let data =  await Entertainmentdata.aggregate([{ $sample: { size: 18} }]);
  res.send(data);
  console.log(data.length);
})
app.get('/science', async (req,res)=>{
  let data =  await Sciencedata.aggregate([{ $sample: { size: 18} }]);
  res.send(data);
  console.log(data.length);
})
app.get('/sports', async (req,res)=>{
  let data =  await Sportsdata.aggregate([{ $sample: { size: 18} }]);
  res.send(data);
  console.log(data.length);
})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../build'));
  app.get('*', (res, req)=>res.sendFile(path.resolve(__dirname,  'build', 'index.html')))
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})