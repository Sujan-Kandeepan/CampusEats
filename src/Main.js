/*
There are a lot of templated code from Bulma. An example is:
https://bulma.io/documentation/overview/start/ A lot of the code from Bulma
cards and Bulma footer look very similar to what is here.
*/

import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 
import Card from "./component/card.js"; 
import DetailsCard from "./component/details-card.js";
import RestaurantJSON from "./data/restaurant_data.json";

// let restaurants = require("./data/restaurant_data.json").restaurants;

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.restaurants = RestaurantJSON.restaurants;
        this.restaurantNames = this.restaurants.map(restaurant => restaurant.name.toLowerCase());

        
        this.state = {
            searchItem: "",
            searchLocation: "",
            numberOfCardsShown: 3,
            idOfCards: [0,1,2]
        }

        this.onChangeSearchItem = this.onChangeSearchItem.bind(this);
        this.onChangeSearchLocation = this.onChangeSearchLocation.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onChangeSearchItem(evt) {
        this.setState({
            searchItem: evt.target.value
        })
    }

    onChangeSearchLocation(evt) {
        this.setState({
            searchLocation: evt.target.value
        })
    }

    onButtonClick() {
        console.log("onSearch")
        let temp = [];
        let alreadyInArray = 0;
        for (let i = 0; i < this.restaurantNames.length; i++ ) {
            if (this.restaurantNames[i].includes(this.state.searchItem) && alreadyInArray < 3) {
                temp.push(i);
                alreadyInArray++;
            }
        }
        
        this.setState({
            idOfCards: temp,
            numberOfCardsShown: temp.length
        })
    }

    render() {
        window.happy = this.state;
        console.log("Restaurants", this.restaurants)
        console.log("state", this.state)
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
                    <div className = "column is-8">
                        <input className="input" type="text" placeholder="Search" 
                        value={this.state.searchItem} onChange={this.onChangeSearchItem}/></div>
                    <div className = "column is-4">
                        
                        {/* <input className="input" type="text" placeholder="Near McMaster University"
                        value={this.state.searchLocation} onChange={this.onChangeSearchLocation} /> 
                        <span className="icon is-right is-small">
                        
                        </span> */}
                        {/* <p className="control has-icons-right"> */}
                        <button className="button is-danger" onClick={this.onButtonClick}>
                            <i className="fas fa-search"></i> &nbsp;Search</button>
                        {/* </p> */}
                    </div>
                    <div className = "column is-1"></div>
                    </div>
                    <div className="columns is-gapless">
                    <div className = "column is-1"></div>
                    {/* <div className="column">
                        <span>Advanced search <i className="fas fa-caret-down"></i></span>
                    </div> */}
                    </div>
                    <br/>
                    {/* <div style={{marginTop :"22px"}}><b><h1 className="title is-4">My Recommendations</h1></b></div> */}

                {
                    this.state.numberOfCardsShown == 0 ? 
                    (<div className="columns">
                    <div className="column is-offset-1">
                        <h3 className="title is-3">No results. Please try again.</h3>
                    </div>
                </div>) :
                    (
                        <div className="columns">
                            {
                                this.state.idOfCards.map((cardId) => (
                                   
                                    <DetailsCard
                        restaurant_name={this.restaurants[cardId].name}
                        restaurant_tags={[this.restaurants[cardId].tags[0], this.restaurants[cardId].tags[1]]}
                        restaurant_rating={this.restaurants[cardId].ratings}
                        restaurant_description={this.restaurants[cardId].description}
                        ></DetailsCard>
                                ))
                            }
                            
                        </div>
                    )
                }
                

                
                <br></br>
     </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}