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
            idOfCards: [0,1,2],
            showMyRecommendations: true,
            helpTextId: 0
        }

        this.helpText = ["Want Vegetarian options? Search 'Vegetarian'", 
                        "Don't want to spend much? Search 'Cheap'",
                        "Want to go to a cafe? Search 'Cafe'",
                        "Want to go to Pinks Burgers? Search 'Pinks Burgers'"]
        this.helpTextSearch = [
            "Vegetarian",
            "Cheap",
            "Cafe",
            "Pinks Burgers"
        ]
        this.onChangeSearchItem = this.onChangeSearchItem.bind(this);
        this.onChangeSearchLocation = this.onChangeSearchLocation.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.changeHelpText = this.changeHelpText.bind(this);
        this.helpTextAutomaticSearch = this.helpTextAutomaticSearch.bind(this);

        
    }

    componentDidMount() {
        this.changeHelpText()
    }

    helpTextAutomaticSearch() {
        this.setState({
            searchItem: this.helpTextSearch[this.state.helpTextId % this.helpText.length]
        }, () => this.onButtonClick())
        
    }

    changeHelpText() {
        setInterval(() => {
            this.setState({
                helpTextId: this.state.helpTextId + 1
            })
        }, 4500)
        
    }

    onChangeSearchItem(evt) {
        this.setState({
            searchItem: evt.target.value
        })
        console.log("evt.key", evt.key)
    }

    onChangeSearchLocation(evt) {
        this.setState({
            searchLocation: evt.target.value
        })
    }

    onButtonClick() {
        let temp = [];
        let arrayCount = 0;
        for (let i = 0; i < this.restaurants.length; i++ ) {
            let alreadyAdded = false; //check to see if the restaurant has already been added.

            //Checking the restaurant name
            if (alreadyAdded === false && arrayCount < 3
                && this.restaurants[i].name.toLowerCase().includes(this.state.searchItem.toLowerCase())) {
                temp.push(i);
                arrayCount++;
                alreadyAdded = true;
            }
            //Checking the description
            if (alreadyAdded === false && arrayCount < 3
                && this.restaurants[i].description.toLowerCase().includes(this.state.searchItem.toLowerCase())) {
                temp.push(i);
                arrayCount++;
                alreadyAdded = true;
            }

            //Checking the tags
            if (alreadyAdded === false  && arrayCount < 3) {
                let foundTag = false;
                this.restaurants[i].tags.forEach((tag) => {
                    if (tag.toLowerCase().includes(this.state.searchItem.toLowerCase())) foundTag = true;
                })
                if (foundTag) {
                    temp.push(i);
                    arrayCount++;
                    alreadyAdded = true;
                } 
            }

            //Checking the price
            if (alreadyAdded === false  && arrayCount < 3 && this.state.searchItem.toLowerCase() === "cheap" && this.restaurants[i].price_range === 1) {
                temp.push(i);
                arrayCount++;
                alreadyAdded = true;
            }
            if (alreadyAdded === false  && arrayCount < 3 && this.state.searchItem.toLowerCase() === "medium" && this.restaurants[i].price_range === 2) {
                temp.push(i);
                arrayCount++;
                alreadyAdded = true;
            }
            if (alreadyAdded === false  && arrayCount < 3 && this.state.searchItem.toLowerCase() === "expensive" && this.restaurants[i].price_range === 3) {
                temp.push(i);
                arrayCount++;
                alreadyAdded = true;
            }

        }
        
        this.setState({
            idOfCards: temp,
            numberOfCardsShown: temp.length,
            showMyRecommendations: this.state.searchItem ? false : true
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
                        value={this.state.searchItem} onChange={this.onChangeSearchItem}
                        onKeyPress={evt => {
                            if (evt.key === 'Enter') this.onButtonClick();
                        }}
                        /></div>
                    <div className = "column is-4">
                        <button className="button is-danger" onClick={this.onButtonClick}>
                            <i className="fas fa-search"></i> &nbsp;Search
                        </button>
                    </div>
                
                    </div>


                    <div className="columns is-gapless">
                        <div className = "column is-1"></div>
                        <h6 className="subtitle is-6" style={{ cursor: "pointer" }}onClick={this.helpTextAutomaticSearch}>
                            {this.helpText[this.state.helpTextId % this.helpText.length]}
                        </h6>
                    </div>
                    {
                        this.state.showMyRecommendations ? (
                            <React.Fragment>
                            <br/>
                            <div ><b><h4 className="title is-4">My Recommendations</h4></b></div>
                            </React.Fragment>
                        ) : ""
                    }
                    
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