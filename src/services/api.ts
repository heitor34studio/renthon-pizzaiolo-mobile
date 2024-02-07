import axios from "axios";
const api = axios.create({
    baseURL: 'https://laughing-wood-92171.pktriot.net'
})

export {api}