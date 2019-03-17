const path = require('path');
const express = require('express');
const app = express();
const port =  3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/watson', require('./watson'))
app.use('/reddit', require('./reddit'))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen({port}, function () {
  console.log(`Servin' up the jams on port: ${port}`);
});