const express = require('express'); // gunanya untuk memnaggil framework ke halaman express
const app = express(); 
const port = 8080; // memanggil kata

app.set('view engine', 'ejs'); // mendefinisikan ejs sebagai format tampilan
app.use(express.static('public')); // menampilkan data di folder public

app.get('/', function (req, res) { // membuat route '/'
    res.render('index.ejs'); // menyambung pada index.js
});

app.listen(port, function(){ // membuat server localhost
    console.log(`server di ${port}`) // memanggil data dari terminal
});