/*
React code is based heavily off of React docs: https://reactjs.org/docs/forms.html
Bulma code is based heavily off of Bulma docs: https://bulma.io/documentation/form/general/
*/

import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            showLoginError: false,
            loginSuccessful: false
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUsername(evt) {
        this.setState({
            username: evt.target.value,
            showLoginError: false
        })
    }

    onChangePassword(evt) {
        this.setState({
            password: evt.target.value,
            showLoginError: false
        })
    }

    handleSubmit() {
        if (this.state.username == this.props.username && this.state.password == this.props.password) {
            this.props.changeLoginState(true);
            this.setState({
                loginSuccessful: true
            })
        } else {
            this.setState({
                showLoginError: true
            })
        }
        
    }

    render() {
        return(
            <React.Fragment>
                <Header></Header>
                {/* React router redirect: https://medium.com/@anneeb/redirecting-in-react-4de5e517354a */}
                { this.state.loginSuccessful || this.props.loginState ? <Redirect to='/' /> : "" }
                <div className ="container">
                    <div className="column is-6 is-offset-3">
                        <br/><br/><br/>
                        <h2 className="title is-2">Login</h2>
                        <br/>
                        <div className="field">
                        <h5 className="title is-5">Username</h5>
                        <input className="input" type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} />
                        </div>
                        <br/><br/>
                        <h5 className="title is-5">Password:</h5> 
                        <input className="input" type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
                        {
                            this.state.showLoginError ? (
                                <p className="help is-danger">Username or password is incorrect</p>
                            ) : ""
                        }
                        
                        <br/><br/>
                        <button className="button is-primary is-fullwidth" onClick={this.handleSubmit}>Login</button>
                        <br/><br/><br/>
                    </div>
                </div>
                
                <Footer></Footer>
            </React.Fragment>
        )
    }
}