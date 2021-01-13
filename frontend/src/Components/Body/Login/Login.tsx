import React from "react";
import "./Login.css"
import ApiService from "../../../Services/ApiService";
import Customer from "../../../Models/Customer";
import {Link} from "react-router-dom";

export interface IProps {
    login: Function
}
export interface IState {
    email: string,
    fetchEmail?: string,
    password: string,
    loggedIn: boolean,
    apiService: ApiService
}

export enum Method {
    LOGIN, REGISTER
}

export default class Login extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
            fetchEmail: '',
            loggedIn: false,
            apiService: ApiService.getInstance()
        }

        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleEmailChange(event: React.SyntheticEvent) {
        this.setState({email: (event.target as HTMLInputElement).value});
    }

    handlePwdChange(event: React.SyntheticEvent) {
        this.setState({password: (event.target as HTMLInputElement).value});
    }

    handleSubmit(event: React.SyntheticEvent, method: Method) {
        let customer = new Customer(this.state.email, this.state.password);
        if (!customer.readyToLogin()) {
            event.preventDefault();
            this.setState({loggedIn: false});
            return;
        } else {
            event.preventDefault();
            let func = method === Method.LOGIN ? this.state.apiService.login : this.state.apiService.signup
            func(customer).then(res => {
                this.setState({loggedIn: res});
                this.props.login(res);
            });
        }
    }

    handleLogin(event: React.SyntheticEvent) {
        this.handleSubmit(event, Method.LOGIN);
    }

    render(): JSX.Element {
        return (
            <div>
                <form onSubmit={this.handleLogin} className="LoginForm">
                    <label>
                        Email:
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handlePwdChange} autoComplete="false" />
                    </label>
                    <input type="submit" value="Login!"/>
                </form>
                <div>No Account? <Link to="/register">Register here</Link></div>
            </div>
        );
    }


    getEmail(): void {
        this.state.apiService.whoAmI().then(res => this.setState({fetchEmail: res?.email}));
    }
}
