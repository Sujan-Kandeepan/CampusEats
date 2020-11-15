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
        if (this.props.username.length <= 5) {
            this.setState({
                showUsernameCreationError: true
            })
        }
        if (this.props.password.length <= 5) {
            this.setState({
                showPasswordCreationError: true
            })
        }
        if (this.props.username.length > 5 && this.props.password.length > 5) { //create username and password successful
            
            this.setState({
                signupFirstPartSuccessful: true
            })
            
        }
    }


    render() {
        return(
            <React.Fragment>
                <Header showMinimal={true}></Header>
                {/* React router redirect: https://medium.com/@anneeb/redirecting-in-react-4de5e517354a */}
                { this.state.signupFirstPartSuccessful ? <Redirect to='/accSetup' /> : "" }
                <div className ="container">
                {/* <div className="columns level">
                            
                            
                        </div> */}
                    <div className="column is-6 is-offset-3">
                    
                        <br/><br/><br/>
                        <h2 className="title is-2">Sign Up</h2>
                        <br/>
                        <div className="field">
                        <h5 className="title is-5">Username</h5>
                        <input className="input" type="text" placeholder="Username" value={this.props.username} onChange={(evt) => this.props.updateUsername(evt.target.value)} />
                        {
                            this.state.showUsernameCreationError ? (
                                <p className="help is-danger">Username must be at least 6 characters</p>
                            ) : ""
                        }
                        </div>
                        <br/><br/>
                        <h5 className="title is-5">Password:</h5> 
                        <input className="input" type="password" placeholder="Password" value={this.props.password} onChange={(evt) => this.props.updatePassword(evt.target.value)}  />
                        
                        {
                            this.state.showPasswordCreationError ? (
                                <p className="help is-danger">Password must be at least 6 characters</p>
                            ) : ""
                        }
                        
                        <br/><br/>
                        <button className="button is-primary is-fullwidth" onClick={this.handleSubmit}>Sign up</button>
                        <br/><br/><br/>
                    </div>
                </div>
                
                <Footer></Footer>
            </React.Fragment>
        )
    }
}