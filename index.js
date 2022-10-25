const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'hbs'); // Set view engine to handlebars
app.set('views', path.join(__dirname, '/templates/views')); // Set views directory
app.use(express.static(path.join(__dirname, 'public'))); // Set static directory
hbs.registerPartials(path.join(__dirname, '/templates/partials')); // Set partials directory


app.get('/', (req, res) => {
    res.render('index', {
        active: { home: true},
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))