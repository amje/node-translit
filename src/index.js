'use strict';

const translit = require('./translit');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 5000);

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    console.log('================== GET   /     ==================');
    console.time('render');
    res.render('index', { title: 'Транслитерация' });
    console.timeEnd('render');
    console.log('=================================================\n\n');
});

app.get('/result', (req, res) => {
    const input = req.query.input;
    const result = translit(input);

    console.log('================== GET /result ==================');
    console.time('render');
    res.render('result', { title: 'Транслитерация', result: result.value });
    console.timeEnd('render');
    console.log('extra length:', result.extraLength);
    console.log('=================================================\n\n');
});

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});
