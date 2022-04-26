const Promise = require('bluebird')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect('mongodb://mongodb:27017/test');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
  },
}, {
  collection: 'ts_users',
  timestamps: true
});

const UserModel = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.get('/users-add', async (req, res) => {
  const user = await UserModel.create({ name: Math.random() })
  res.json(user)
})

app.get('/users/:userId', async (req, res) => {
  const user = await UserModel.findOne({ _id: req.params.userId })
  res.json(user)
})

app.listen(port, () => {
  console.log(`demo-api listening on port ${port}`)
})