/*
This is the default react class given by the react documentation
*/

import React from "react";
import { Link } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import NearbyCard from "./component/nearby-card";
import './Map.css';

export default class Map extends React.Component {
    render() {
        let restaurants = require("./data/restaurant_data.json").restaurants;

        // Reference: https://stackoverflow.com/a/58611779
        let id = (new URLSearchParams(window.location.search)).get('id');
        if (id < 1 || id > 5)
            id = 1;

        let here = restaurants.find(r => r.id === parseInt(id)).location;
        let distance = function (other) {
            return Math.abs(Math.sqrt(Math.pow(here[0] - other[0], 2) + Math.pow(here[1] - other[1], 2)));
        }

        let nearbyCards = restaurants
            .filter(r => r.id !== parseInt(id))
            .sort((r1, r2) => distance(r1.location) - distance(r2.location))
            .map(r => 
                <Link to={"/map?id=" + r.id} onClick={() => this.setState({})}>
                    <NearbyCard key={r.id} name={r.name} description={r.description}
                        visits={r.number_of_visits} reviews={r.number_of_reviews}
                        rating={r.rating} price={r.price_range}
                        keywords={r.tags.join(",")} />
                </Link>
        );

        let mapSrc = restaurants.find(r => r.id === parseInt(id))["iframe-src"];

        return (
            <React.Fragment>
                <Header id={id}></Header>
                <div id="map-page">
                    <Link className="button is-ghost" to={"/details?id=" + id}>
                        <i className="fas fa-info-circle"></i>
                        &ensp;Go to details page
                    </Link>
                    <div className="columns">
                        <div className="column is-one-third">
                            <h1 className="title" id="other-restaurants-nearby">
                                Other Restaurants Nearby
                            </h1>
                            <div id="nearby-cards">
                                {nearbyCards}
                            </div>
                        </div>
                        <div className="column">
                            <div className="container">
                                <div className="box" id="map">
                                    <iframe
                                        src={mapSrc}
                                        width="600" height="450" frameBorder="0"
                                        allowFullScreen="" aria-hidden="false"
                                        tabIndex="0" title="map"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}