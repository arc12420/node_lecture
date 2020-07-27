// bring in express s owe can use it
const express = require('express');
// bring in our users.json file
const users = require('./users.json')
// instance of express invoked
const app = express();
// Parsing json from our requests into javascript
app.use(express.json());
// declaring a variable for our server port on our machine
app.get('/api/users', (req,res) => {
    res.status(200).send(users);
})
// localhost:4000/api/user/5
app.get('/api/user/:id', (req,res)=> {
    const oneUser = users.filter( elm => elm.id === +req.params.id)
    res.status(200).send(oneUser)
})

app.get('/api/user', (req,res) => {
    // console.log(req.query.color)
    const byEmail = users.filter( elm => elm.email === req.querey.email)
    res.status(200).send(byEmail)
})
//endpoint
const port = 4000;
// where our server listens for requests coming into this port
app.listen(port, () => console.log(`server listening on port ${port}`));

