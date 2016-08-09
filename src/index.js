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
    const translitedInput = translit(input);
    const extraLength = Math.max(0, translitedInput.length - input.length);

    console.log('================== GET /result ==================');
    console.time('render');
    res.render('result', { title: 'Транслитерация', result: translitedInput });
    console.timeEnd('render');
    console.log('extra length:', extraLength);
    console.log('=================================================\n\n');
});

app.listen(app.get('port'), () => {
    console.log('Listen on port', app.get('port'));
});
