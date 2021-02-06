import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Body/Login/Login";
import Account from "./Body/Account/Account";
import Register from "./Body/Login/Register/Register";

interface IState {
    loggedIn: boolean
}

interface IProps {}

export default class App extends React.Component<IProps, IState>{
    state = {
        loggedIn: false
    }

    constructor(props: IProps) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(b: boolean) {
        this.setState({
            loggedIn: b
        })
    }

    logout() {
        this.setState({loggedIn: false})
    }

    render() {


        let loggedIn;
        if (this.state.loggedIn) {
            loggedIn = <Account logout={this.login}/>;
        } else {
            loggedIn = <Login login={this.login} />;
        }

        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/account">
                            {loggedIn}
                        </Route>
                        <Route path="/cart">
                            <div>This is your cart</div>
                        </Route>
                        <Route path="/register">
                            <Register login={this.login} />
                        </Route>
                        <Route path="/">
                            <Body/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
