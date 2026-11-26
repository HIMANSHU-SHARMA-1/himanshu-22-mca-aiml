const express = require('express');

const app = express()

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to my express server!')
})

app.get('/about',(req,res)=>{
    res.send('This is the about page')
})

app.get('/contact',(req,res)=>{
    res.send('This is the contact page')
})

app.get('/form',(req,res)=>{
    res.render('index')
})

app.post('/submit',(req,res)=>{
    
    const name = req.body.name

    res.send(`Hello ${name} ! form submitted successfully.`)
})
const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})