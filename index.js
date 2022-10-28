const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/categories.json')
const details = require('./data/course-details.json')

app.get('/', (req, res) => {
    res.send('Programming Courses API running');
});

app.get('/details', (req, res) => {
    res.send(courses)
})

app.get('/details/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const deta = details.find(d => d.id == id)
    res.send(deta);
})

app.listen(port, () => {
    console.log('Programming Courses server running on port: ', port);
})