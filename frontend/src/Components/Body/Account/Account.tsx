import React from "react";
import ApiService from "../../../Services/ApiService";

interface IProps {
    logout: Function
}

interface IState {
    loggedIn: boolean
}

export default class Account extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loggedIn: true
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        console.log("Logged Out");
        this.setState({loggedIn: false});
        this.props.logout();
        ApiService.logout();
    }

    render() {
        return (
            <div>
                Logged In
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}