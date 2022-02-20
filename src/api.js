const axios = require("axios");
const baseURL = "https://api.github.com";
const gitAPI = axios.create({
    baseURL
});

module.exports = gitAPI;