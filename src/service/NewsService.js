import axios from 'axios';
const baseURL = 'http://localhost:3000/articles';

export default class NewsService {

    constructor() {
        this.axiosInstance = axios.create({});
    }

    request(method, url, data, config) {
        
        return new Promise((resolve, reject) => {

            const configuracao = Object.assign({}, {
                method: method,
                url: url,
                data: data
            },
                config
            );
        
            resolve(this.axiosInstance.request(configuracao));
        });
    }
    
    getAllNews(){
        return this.request('GET', baseURL);
    }
    
    getNotice(idNotice){
        return this.request('GET', baseURL + '/' + idNotice);
    }

    getTenNews(page, numberOfNews = 10){
        return this.request('GET', baseURL + '?_page=' + page + '&_limit=' + numberOfNews);
    }
};