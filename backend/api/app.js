var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyparser= require ('body-parser')
var logger = require('morgan');
const cors = require('cors')

var express = require('express');
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri)
const db = client.db('eCarPool')                                                                     
const users = db.collection('users')
const pools = db.collection('pools')                                                                             
var app = express();
app.use(cors({
  origin: '*'
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', async (req, res) => {
  const user = await users.findOne({ username: 'Guhan' });
  res.json(user)
})

app.post('/pool', async (req, res) => {
  const pool = req.body;
  await pools.insertOne(pool);
  res.json({success: true})
})

app.get('/pool', async (req, res) => {
  const pool = req.body;
  const res_pools = []
  const cursor = pools.find(pool)
  for await (let p of cursor)
    res_pools.push(p);
  res.json(res_pools);
})

app.listen(3000, () => console.log('running'))


                                     