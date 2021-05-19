const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
// promeses
mongoose.Promise=global.Promise;
//conectar a mongo db
mongoose.connect(`mongodb://${process.env.MONGO_DB}:27017/crud-mongo`,{
    useMongoClient: true,
});
if(!mongoose){
    console.log('conectado 0% fallo')
} else
    console.log('conectado 100% factible')
//import routes
const indexRoutes = require('./routes/index');
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//routes
app.use('/', indexRoutes);
// files
app.use(express.static('views'))
app.use('/css', express.static(__dirname+'/views/css'))
app.use('/img', express.static(__dirname+'/views/css/img'))
//starting the server
app.get('/', (req, res) => res.send('Bienvenido al systema de datos'));
app.listen(app.get('port'), () => {
    console.log(`servidor esta en el puerto ${app.get('port')}`);
});

module.exports=mongoose;
    

