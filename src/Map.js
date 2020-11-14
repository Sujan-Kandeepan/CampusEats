/*
This is the default react class given by the react documentation
*/

import React from "react";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import NearbyCard from "./component/nearby-card";
import './Map.css';

export default class Map extends React.Component {
    render() {
        let restaurants = [
            {
                "id": 1,
                "name": "Creation X",
                "description": "Grilled items and build your own burger station located in Student Centre",
                "location": [43.263516, -79.917367],
                "rating": 4.5,
                "number_of_reviews": 276,
                "number_of_visits": 1652,
                "tags": ["Vegetarian", "Burger", "Sandwiches", "All-day Breakfast"],
                "price_range": 1,
                "menu": "./img/menu1.jpg",
                "iframe-src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.7103430549241!2d-79.91845098883935!3d43.26356174691129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b53424aa751%3A0x6726e50cd5bc4ea5!2sLa%20Piazza!5e0!3m2!1sen!2sca!4v1605223948583!5m2!1sen!2sca"
            },
            {
                "id": 2,
                "name": "Williams Cafe",
                "description": "Food and beverages for take-out located in Burke Science Building",
                "location": [43.262246, -79.920287],
                "rating": 3.9,
                "number_of_reviews": 318,
                "number_of_visits": 1786,
                "tags": ["Vegetarian", "Beverages", "Sandwiches", "All-day Breakfast"],
                "price_range": 1,
                "menu": "./img/menu2.jpg",
                "iframe-src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.7436682408713!2d-79.9212840870586!3d43.262165179542556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebd32a711a65e1e1!2sWilliams%20Fresh%20Cafe!5e0!3m2!1sen!2sca!4v1605224235941!5m2!1sen!2sca"
            },
            {
                "id": 3,
                "name": "Willy Dog McMaster",
                "description": "Hot dogs served quickly and with a smile outside Student Centre",
                "location": [43.262908, -79.918677],
                "rating": 4.3,
                "number_of_reviews": 298,
                "number_of_visits": 1479,
                "tags": ["Vegetarian", "Non-vegetarian", "Burger", "Hot dog"],
                "price_range": 1,
                "menu": "./img/menu3.jpg",
                "iframe-src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.7261327615397!2d-79.91976764200919!3d43.26290004801479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b5337158c33%3A0x4796ee62744faf75!2sWilly%20Dog!5e0!3m2!1sen!2sca!4v1605224346192!5m2!1sen!2sca"
            },
            {
                "id": 4,
                "name": "Pinks Burgers",
                "description": "Burgers, gyros, and more with comfortable eating just off McMaster campus",
                "location": [43.257543, -79.918850],
                "rating": 4.8,
                "number_of_reviews": 398,
                "number_of_visits": 1892,
                "tags": ["Vegetarian", "Non-vegetarian", "Burger", "Gyro", "Sandwiches"],
                "price_range": 3,
                "menu": "./img/menu4.jpg",
                "iframe-src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.707791621728!2d-79.92103808535227!3d43.257545585944015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b9a3a91c531%3A0x7415dce634e25ed2!2sPinks%20Burgers!5e0!3m2!1sen!2sca!4v1605224472297!5m2!1sen!2sca"
            },
            {
                "id": 5,
                "name": "Mr. Gao",
                "description": "Traditional Chinese dishes located near McMaster Campus",
                "location": [43.257316, -79.927586],
                "rating": 3.6,
                "number_of_reviews": 170,
                "number_of_visits": 1659,
                "tags": ["Vegetarian", "Chinese", "Noodles", "Appetizer"],
                "price_range": 2,
                "menu": "./img/menu5.jpg",
                "iframe-src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.718533306734!2d-79.9297749853523!3d43.25732048595852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84b102a581f7%3A0x25baccbef706bd94!2sMr.%20Gao!5e0!3m2!1sen!2sca!4v1605224605175!5m2!1sen!2sca"
            }
        ];

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
                <a href={"/map?id=" + r.id}>
                    <NearbyCard key={r.id} name={r.name} description={r.description}
                        visits={r.number_of_visits} reviews={r.number_of_reviews}
                        rating={r.rating} price={r.price_range}
                        keywords={r.tags.join(",")} />
                </a>
        );

        let mapSrc = restaurants.find(r => r.id === parseInt(id))["iframe-src"];

        return (
            <React.Fragment>
                <Header></Header>
                <div id="map-page">
                    <a href={"/details?id=" + id} id="go-to-details">
                        <i className="fas fa-info-circle"></i>
                        &nbsp;Go to details page
                    </a>
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