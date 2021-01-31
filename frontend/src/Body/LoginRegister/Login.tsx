import React, {Component, useState} from 'react';
import '../../App.css';
import './LoginRegister.css';
import Customer from "../../Models/Customer";
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";
import ApiService from "../../Services/ApiService";

const LoginForm = () => {
    const [ status, setStatus ] = useState('Submit');
    const handleRegister = async (e: any) => {
        e.preventDefault();
        setStatus('Login...');
        const { email, password } = e.target.elements;
        let details = {
            email: email.value,
            password: password.value
        };
        const customer = new Customer(details.email, details.password);
        if(customer.readyToLogin()){
            ApiService.apiService?.login(customer);
        }
    };
    return (
        <Grid
            container
            className="loginForm"
            justify="center"
            spacing={0}
            alignItems="flex-start"
            direction="row"
        >
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <p>Login:</p>
                <div className="container">
                    <form onSubmit={handleRegister}>
                        <div className="emailField">
                            <div id="emailText">Email:</div>
                            <input type="email" id="email" required />
                        </div>
                        <div className="passwordField">
                            <div id="passwordText">Password:</div>
                            <input type="password" id="password" required />
                        </div>
                        <Button className="input" type="submit" id="submitButton" variant="contained">
                            {status}
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default LoginForm;