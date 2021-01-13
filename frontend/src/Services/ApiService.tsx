import axios from "axios";
import Customer from "../Models/Customer";
import Token from "../Models/Token";

export default class ApiService {
    token?: Token;
    static apiService?: ApiService;

    private constructor() {
    }

    static getInstance(): ApiService {
        if (this.apiService === undefined) {
            return new ApiService();
        } else {
            return this.apiService;
        }
    }

    async customerFetch(token: Token): Promise<Customer> {
        return axiosInstance.get<Customer>(`/customer/find/${token.token}`)
            .then(res => res.data)?.catch(null);
    }

    loginFetch(customer: Customer): Promise<Token> {
        return axiosInstance.post<Token>("customer/login", customer).then(res => res.data).catch(err => err);
    }

    login(customer: Customer): Promise<boolean> {
        let token = this.loginFetch(customer);
        return token.then(res => {
            this.token = res;
            return res;
        }).then(res => (res.token !== undefined));
    }

    static logout() {this.apiService = new ApiService()}

    registerFetch(customer: Customer): Promise<Token> {
        return axiosInstance.post<Token>("/customer/register", customer).then(res => res.data).catch(err => err);
    }

    signup(customer: Customer) {
        let token = this.registerFetch(customer);
        return token.then(res => {
            this.token = res;
            return res;
        }).then(res => (res !== undefined));
    }

    getToken(): Token | undefined {
        return this.token
    }


    async whoAmI(): Promise<Customer | null> {
        if (this.token === undefined) {
            return null;
        }
        let customerPromise = this.customerFetch(this.token);
        return customerPromise.then(res => res).catch(null);
    }
}

let axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        'Content-Type': 'application/json'
    }
})