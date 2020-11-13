/*
There are a lot of templated code from Bulma. An example is:
https://bulma.io/documentation/overview/start/ A lot of the code from Bulma
cards and Bulma footer look very similar to what is here.
*/

import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 
import Card from "./component/card.js"; 

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Header></Header>
                
                <section className="section"/>
                    <div className="container">
                    <div className="columns is-gapless">
                        <div className = "column is-1"></div>
                    <h1 className="title is-2" style={{marginTop :"13px"}}>
                        <b>Never go hungry again.</b>
                    </h1>
                    </div>
                    <div className="columns is-gapless" style={{marginTop :"7px"}}>
                        <div className = "column is-1"></div>
                    <div className = "column is-6"><input className="input" type="text" placeholder="Search"/></div>
                    <div className = "column is-4">
                        <p className="control has-icons-right">
                        <input className="input" type="text" placeholder="Near McMaster University"/> 
                        <a href="">
                        <span className="icon is-right is-small">
                        <button className="button is-danger"><i className="fas fa-search"></i></button>
                        </span></a>
                    </p>
                    </div>
                    <div className = "column is-1"></div>
                    </div>
                    <div className="columns is-gapless">
                    <div className = "column is-1"></div><div className="column">
                        <a href=""><span>Advanced search <i className="fas fa-caret-down"></i></span></a>
                    </div>
                    </div>
                    <br/>
                    <div style={{marginTop :"22px"}}><b><h1 className="title is-4">My Recommendations</h1></b></div>

                <div className="columns">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <br></br>
     </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}