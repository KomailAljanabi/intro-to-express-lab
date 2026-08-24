const express = require('express')
const app = express()

app.get('/test',(req,res) => {
    res.send('<p>Success!</p>')
})

app.get('/',(req,res) => {
    res.send('<h1>Welcome to my application YOUR_NAME</h1>')
})

app.get('/about',(req,res) => {
    res.send('<h1>Something to know about me is that I know Tuesday is off</h1>')
})

app.listen(3000, () => {
    console.log('Intro Lab App Running')
})