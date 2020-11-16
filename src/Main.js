/*
There are a lot of templated code from Bulma. An example is:
https://bulma.io/documentation/overview/start/ A lot of the code from Bulma
cards and Bulma footer look very similar to what is here.
*/

import React from "react";
import Header from "./component/header.js"; 
import Footer from "./component/footer.js"; 
import DetailsCard from "./component/details-card.js";
import RestaurantJSON from "./data/restaurant_data.json";


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
        let temp = [];
        let alreadyInArray = 0;
        for (let i = 0; i < this.restaurantNames.length; i++ ) {
            if (this.restaurantNames[i].includes(this.state.searchItem.toLowerCase()) && alreadyInArray < 3) {
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
                        <button className="button is-danger" onClick={this.onButtonClick}>
                            <i className="fas fa-search"></i> &nbsp;Search
                        </button>
                    </div>
                    </div>
                   
                    <br/>
                {
                    this.state.numberOfCardsShown === 0 ? 
                    (<div className="columns">
                        <div className="column is-offset-1">
                            <h3 className="title is-3" style={{ minHeight: "calc(100vh - 400px)" }}>
                                No results. Please try again.
                            </h3>
                        </div>
                    </div>) 
                   : (
                        <div className="columns">
                            {
                                this.state.idOfCards.map((cardId, i) => (
                                    <DetailsCard key={i}
                                        restaurant_name={this.restaurants[cardId].name}
                                        restaurant_tags={this.restaurants[cardId].tags}
                                        restaurant_price_range={this.restaurants[cardId].price_range}
                                        restaurant_rating={this.restaurants[cardId].rating}
                                        restaurant_review_number={this.restaurants[cardId].number_of_reviews}
                                        restaurant_description={this.restaurants[cardId].description}
                                        restaurant_id={this.restaurants[cardId].id}
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