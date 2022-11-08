import axios from "axios";
import qs from "qs";

const instanceAxios = axios.create({
    baseURL : "https://picsum.photos/v2/",
    headers: {
        "Content-Type": "application/json"
    },
    // paramsSerializer: params => qs.stringify({...params, limit: 30})
})

instanceAxios.interceptors.request.use(async (config) => config);
instanceAxios.interceptors.response.use(
    (response) => {
        if (response && response.data){
            return response.data;
        } 
        return response;
    },
    (error) =>{
        throw error;
    }
);
export default instanceAxios;