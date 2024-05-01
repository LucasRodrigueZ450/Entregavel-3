// Importando o Express
const express = require('express');
const app = express();

// Configurando o body-parser para lidar com JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());


function soma(a, b) {
  return a + b;
}


app.post('/soma', function (req, res) {

  const body = req.body;
  

  const resultado = soma(body.a, body.b);


  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtrair', function (req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);
    res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

function subtracao(a, b) {
    return a - b;
  }


app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});


const port = 3001;
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
