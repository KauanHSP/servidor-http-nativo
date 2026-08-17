const http = require('node:http')

const porta = 3000

const server = http.createServer();// metodo que cria o servidor

server.on('request', (req, res) => {//Arrow function 
    console.log(`Requisição recebida! ${req.method} ${req.url}`);

    console.log(new Date().toISOString())

    res.statusCode = 201// status 
    res.setHeader('Content-Type', 'application/json; charset=utf-8');// tipo que aparece no cabeçario
    res.end(JSON.stringify({ "status": "ok" })); //converte com JSON
    //EX4: Quando nós excluimos a linha res.end(), o navegador fica carregando eternamente a página e trava ele, pois ela fecha o ciclo "req e res"
});

server.listen(porta, ()=> {
    console.log(`Servidor ouvindo na porta ${porta}`)
});
//objetos são instancias de uma classe ou qualquer variavel do javascript