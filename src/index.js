const cors = require('cors');
const express = require('express'); // Ferramenta de rotas, retornos, middlewares.. etc
const routes = require('./routes.js'); // Rota(s) da aplicação

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen((process.env.PORT || 3333), () => {
    console.log('Server is running!');
});