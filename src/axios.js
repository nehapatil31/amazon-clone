import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/clone-4322d/us-central1/api"
});

export default instance;


// import axios from 'axios'

// export default () => {
//   // __API__ = http://api.service.com
//   return axios.create({baseUrl: "http://127.0.0.1:5001/clone-4322d/us-central1/api"})
// }