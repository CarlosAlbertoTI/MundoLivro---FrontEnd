const axios = require('axios')

const api = axios.create({
    baseURL: 'https://sleepy-basin-97464.herokuapp.com',
});

module.exports = api