import axios from 'axios';

export class HttpClient {

    private axios: any;
    /**
     *
     */
    constructor(baseUrl: string) {
        this.axios = axios.create({
            baseURL: baseUrl,
            headers: { 
                'Content-Type': 'application/json'
            }
        });
    }

    public get(endpoint: string): Promise<any>{
        return this.axios.get(endpoint).then((res: any) => res.data);
    }

    public post(endpoint: string, data: any): Promise<any> {
        return this.axios.post(`${endpoint}`, data).then((res: any) => res.data);
    }

    public put(endpoint: string, data: any): Promise<any> {
        return this.axios.put(`${endpoint}`, data).then((res: any) => res.data);
    }

    public delete(endpoint: string): Promise<any> {
        return this.axios.delete(`${endpoint}`).then((res: any) => res.data);
    }
    
}

export default new HttpClient(process.env.VUE_APP_API_ROOT);