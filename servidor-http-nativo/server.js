/*
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
*/

import http from 'node:http'
import { url } from 'node:inspector'
import { URL } from 'node:url'

const port = 3000

const status ={ 
    "status": "ok",
    "date": new Date().toISOString()
}

const produtos = [
    { id: 1, nome: "Sabonete" },
    { id: 2, nome: "Monitor" },
    { id: 3, nome: "Cadeira Gamer" }
]

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    
    res.setHeader('Content-Type', 'application/json')

    if (req.method == "GET" && urlObj.pathname == "/contato"){
        res.statusCode = 200
        return res.end(JSON.stringify({"numero_telefone": "67 99999-9999", "endereco": "Rua da Alegria, 99"}))
    }

    if (req.method == "GET" && urlObj.pathname == "/produtos") {
        res.statusCode = 200
        return res.end(JSON.stringify(produtos));
    }

    if (req.method == "GET" && urlObj.pathname == "/status") {
        res.statusCode = 200
        return res.end(JSON.stringify(status));
    }
    if (req.method == "GET" && urlObj.pathname == "/"){
        res.statusCode = 200
        return res.end(JSON.stringify({"data": "Página Inicial"}))
    }
    else {
        res.statusCode = 404
        return res.end(JSON.stringify({"Erro": "404", "mensagem": "pagina não encontrada"}))
    }

    
})
server.listen(port, () =>{
    console.log(`Servidor ouvindo na porta ${port}`)
})
