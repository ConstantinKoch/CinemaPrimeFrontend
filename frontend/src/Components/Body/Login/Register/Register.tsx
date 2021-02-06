import Login, {Method} from "../Login";
import React from "react";
import {Link} from "react-router-dom";

export default class Register extends Login {

   handleLogin(event: React.SyntheticEvent) {
       this.handleSubmit(event, Method.REGISTER)
   }

    render() {
        return (
            <div>
                <h3>Sign up!</h3>
                <form onSubmit={this.handleLogin}>
                    <label>
                        Email:
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handlePwdChange} autoComplete="on" />
                    </label>
                    <label>
                        Repeat password:
                        <input type="password" id="validationPassword" pattern={this.state.password} autoComplete="on" />
                    </label>
                    <input type="submit" value="Register!" />
                </form>
                <div>Already have an Account? <Link to="/register">Login here</Link></div>
            </div>
        );
    }
}