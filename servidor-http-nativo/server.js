const http = require('node:http');

const server = http.createServer();//variavel vira o servidor e vira objeto

const port = 3000;

server.on('request', (req, res) => {//metodo "on" parametros: req= requisicao res= resposta
    console.log(`Requisicao recebida! Metodo ${req.method} e Rota: ${req.url}`);//objetos tem atributos e metodos
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("Servidor HTTP nativo Funcional!");
});

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});

