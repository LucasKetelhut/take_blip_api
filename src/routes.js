const api = require("./api.js");
const routes = require("express").Router();


// Definindo variáveis constantes do código
const LANGUAGE = "C#";

routes.get("/repositories", async (request, response) => {
    try{
        const apiResponse = await api.get("/orgs/takenet/repos?&sort=created&direction=asc");

        // pegando o json de repositórios da empresa e filtrando os que tem lingugem C#,
        // depois, cortando a lista para ter somente 5 objetos (os 5 primeiros)
        const filtered = apiResponse.data.filter(repository => repository.language === LANGUAGE).slice(0, 5);

        //  populando com os dados
        const result = filtered.map(repository => ({
            name: repository.full_name,
            description: repository.description,
            image: repository.owner.avatar_url,
        }));

        response.status(200).json(result);
    } catch(e) {
        response.send({ Error: e.message });
    }
});

module.exports = routes;