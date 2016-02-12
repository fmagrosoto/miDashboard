var express = require('express');
var app = express();

// Esto es un direccionamiento
app.get('/',function(req,res){
    // res.send('Probando Express');
    res.sendFile('Dist/portero.html',{ root : __dirname});
});

// Uso general en cualquier árbol de directorios
// ¡Esta es la ley!
app.use(express.static('Dist/'));

app.listen(3000,function(){
    console.log('!Corriendo Express en el puerto 3000!');
});