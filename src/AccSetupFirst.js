/*
React code is based heavily off of React docs: https://reactjs.org/docs/forms.html
Bulma code is based heavily off of Bulma docs: https://bulma.io/documentation/form/general/
*/

import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 
import { Redirect } from 'react-router-dom';

export default class AccSetupFirst extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            password: "",
            showPasswordCreationError: false,
            showUsernameCreationError: false,
            signupFirstPartSuccessful: false
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUsername(evt) {
        this.setState({
            username: evt.target.value,
            showUsernameCreationError: false
        })
    }

    onChangePassword(evt) {
        this.setState({
            password: evt.target.value,
            showPasswordCreationError: false
        })
    }



    handleSubmit() {
        this.setState({
            showUsernameCreationError: (this.state.username.length <= 5),
            showPasswordCreationError: (this.state.password.length <= 5)
        });

        if (this.state.username.length > 5 && this.state.password.length > 5) { //create username and password successful
            this.setState({ signupFirstPartSuccessful: true });
            this.props.updateUsername(this.state.username);
            this.props.updatePassword(this.state.password);
        }
    }


    render() {
        return(
            <React.Fragment>
                <Header accSetup></Header>
                {/* React router redirect: https://medium.com/@anneeb/redirecting-in-react-4de5e517354a */}
                { this.state.signupFirstPartSuccessful ? <Redirect to='/accSetup' /> : "" }
                <div className ="container">
               
                    <div className="column is-6 is-offset-3">
                    
                        <br /><br /><br />
                        <h2 className="title is-2">Sign Up</h2>
                        <br />
                        <div className="field">
                        <h5 className="title is-5">Username</h5>
                        <input className="input" type="text" placeholder="Username" value={this.state.username} onChange={(evt) => this.setState({ username: evt.target.value})} />
                        {
                            this.state.showUsernameCreationError ? (
                                <p className="help is-danger">Username must be at least 6 characters</p>
                            ) : ""
                        }
                        </div>
                        <br />
                        <h5 className="title is-5">Password:</h5> 
                        <input className="input" type="password" placeholder="Password" value={this.state.password} onChange={(evt) => this.setState({ password: evt.target.value })}  />
                        
                        {
                            this.state.showPasswordCreationError ? (
                                <p className="help is-danger">Password must be at least 6 characters</p>
                            ) : ""
                        }
                        
                        <br /><br /><br />
                        <button className="button is-primary is-fullwidth" onClick={this.handleSubmit}>Sign up</button>
                        <br /><br /><br />
                    </div>
                </div>
                
                <Footer></Footer>
            </React.Fragment>
        )
    }
}