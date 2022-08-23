const express = require('express');
const app = express();

const boardRouter = require('./routes/board');

app.set('port', process.env.PORT || 3000);

app.use('/', boardRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), () => {
   console.log(app.get('port'), ' listening...');
});