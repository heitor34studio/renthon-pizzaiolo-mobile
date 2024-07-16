import axios from "axios";
const api = axios.create({
    baseURL: 'https://renthon-pizzaiolo-backend.onrender.com'
})

export {api}