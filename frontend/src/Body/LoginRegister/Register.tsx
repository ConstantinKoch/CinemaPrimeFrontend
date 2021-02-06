import React, {useState} from 'react';
import '../../App.css';
import './LoginRegister.css';
import { Link } from 'react-router-dom';

import Customer from "../../Models/Customer";
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";
import ApiService from "../../Services/ApiService";

const RegisterForm = () => {
    const [ status, setStatus ] = useState('Registrieren');
    const handleRegister = async (e: any) => {
        e.preventDefault();
        setStatus('registriert...');
        const { email, password } = e.target.elements;
        let details = {
            email: email.value,
            password: password.value
        };
        const customer = new Customer(details.email, details.password);
        //checken ob email schon vergeben ist -> rückmeldung
        if(customer.readyToLogin()){
            ApiService.apiService?.signup(customer);
        }
    };
    return (
<div className="register_content-text">
                <div className="register_text">

        <Grid
            container
            className="registerForm"
            justify="center"
            spacing={0}
            alignItems="flex-start"
            direction="row"
        >
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <h1>Registration</h1>
                <div className="register_container">
                    <form onSubmit={handleRegister}>
                        <div className="names">
                            <div className="vornameField">
                                <div id="vornameText">Vorname:</div>
                                <input type="text" id="Vorname" required />
                            </div>
                            <div className="nachnameField">
                                <div id="nachnameText">Nachname:</div>
                                <input type="text" id="Nachname" required />
                            </div>
                        </div>
                        <div className="emailField">
                            <div id="emailText">Email:</div>
                            <input type="email" id="email" required />
                        </div>
                        <div className="passwordField">
                            <div id="passwordText">Passwort:</div>
                            <input type="password" id="password" required />
                        </div>
                        <div className="passwordRepeatField">
                            <div id="passwordRepeatText">Passwort Wiederholen:</div>
                            <input type="password" id="passwordRepeat" required />
                        </div>
                        <p>mit der Registrierung akzeptieren Sie unsere <Link to="/AGB">AGB</Link></p>
                        <Button className="input" type="submit" id="submitButton" variant="contained">
                            {status}
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
        </div>
        </div>
    );
};

export default RegisterForm;
