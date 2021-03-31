import axios from 'axios';

export const api_key = '8aeaab54';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;