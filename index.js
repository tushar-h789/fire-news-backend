const express = require('express')
const app = express();
const cors  = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const category = require('./data/categories.json');

app.get('/', (req, res)=>{
    res.send('News API running')
})

app.get('/news-categories', (req, res)=>{
    res.send(category)
})

app.listen(port, ()=>{
    console.log("Dragon News Server on port", port);
})

app.listenerCount(port, ()=>{
    console.log("fire news server running port", port);
}) 