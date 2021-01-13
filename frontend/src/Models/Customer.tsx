export default class Customer {
    email: string;
    password: string = "";

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    getMap() {
        return {
            email: this.email,
            password: this.password
        }
    }

    readyToLogin(): boolean {
        return (this.email !== "" && this.password !== "");
    }
}
