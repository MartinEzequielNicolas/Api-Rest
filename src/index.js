const express = require('express');
const morgan = require('morgan');
const app = express();


app.set('port', process.env.PORT || 3000);


//middleweres
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

app.listen(app.get('port'),() => {
    console.log(`server en el puerto ${app.get('port')}`);
});