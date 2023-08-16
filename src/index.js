const express = require('express');
const expressConfigurator = require('./config/expressConfig');
const hbsConfigurator = require('./config/handlebarsConfig')

const app = express();
const PORT = 5000;

expressConfigurator(app);
hbsConfigurator(app);

// Routers
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(PORT, () => console.log(`server ${PORT}`))