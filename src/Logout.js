import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 
import { Redirect } from 'react-router-dom';

export default class Logout extends React.Component {
    componentDidMount() {
        this.props.changeLoginState(false);
    }

    render() {
        return(
            <React.Fragment>
                <Header></Header>
                    <Redirect to="/login" />
                <Footer></Footer>
            </React.Fragment>
        )
    }
}