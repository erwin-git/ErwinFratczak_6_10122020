const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

//MongoDB Atlas connection
mongoose.connect('mongodb+srv://new-user01:12345@cluster0.jw3cx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.post('/api/auth/signup', (req, res) => {
    console.log(req.body);
    res.status(201).end('ok')
    res.status(201).json({
        message: "utilisateur inscrit"
    });
});




module.exports = app;