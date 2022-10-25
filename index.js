const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const courses = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Programming Courses API running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('Programming Courses server running on port: ', port);
})