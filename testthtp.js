const http = require ('http'); // gunanya untuk memnaggil framework ke halaman http

http.createServer(function (req, res) { 
    res.writeHead(200, { 'content-Type': 'text/html'});
    res.write('Halo Dunia!');
    res.end();
    // membuat server dan menampilkan kata serta res.end untuk menampilkan data pada website
}).listen(8080); // untuk memanggil kata

console.log('Aplikasi berjalan!'); // apabila berhasil maka akan muncul kalimat Aplikasi berjalan!
 