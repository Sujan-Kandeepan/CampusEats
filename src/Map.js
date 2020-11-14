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
        let paths = {
            1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.7103430549241!2d-79.91845098883935!3d43.26356174691129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b53424aa751%3A0x6726e50cd5bc4ea5!2sLa%20Piazza!5e0!3m2!1sen!2sca!4v1605223948583!5m2!1sen!2sca",
            2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.7436682408713!2d-79.9212840870586!3d43.262165179542556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebd32a711a65e1e1!2sWilliams%20Fresh%20Cafe!5e0!3m2!1sen!2sca!4v1605224235941!5m2!1sen!2sca",
            3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.7261327615397!2d-79.91976764200919!3d43.26290004801479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b5337158c33%3A0x4796ee62744faf75!2sWilly%20Dog!5e0!3m2!1sen!2sca!4v1605224346192!5m2!1sen!2sca",
            4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.707791621728!2d-79.92103808535227!3d43.257545585944015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b9a3a91c531%3A0x7415dce634e25ed2!2sPinks%20Burgers!5e0!3m2!1sen!2sca!4v1605224472297!5m2!1sen!2sca",
            5: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.718533306734!2d-79.9297749853523!3d43.25732048595852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84b102a581f7%3A0x25baccbef706bd94!2sMr.%20Gao!5e0!3m2!1sen!2sca!4v1605224605175!5m2!1sen!2sca",
        };

        // Reference: https://stackoverflow.com/a/58611779
        let id = (new URLSearchParams(window.location.search)).get('id');
        let mapSrc = paths[id && 1 <= id && id <= 5 ? id : 1];

        return (
            <React.Fragment>
                <Header></Header>
                <div id="map-page">
                    <a href="/" className="" id="go-to-details">
                        <i className="fas fa-info-circle"></i>
                        &nbsp;Go to details page
                    </a>
                    <div className="columns">
                        <div className="column is-one-third">
                            <h1 className="title" id="other-restaurants-nearby">
                                Other Restaurants Nearby
                            </h1>
                            <div id="nearby-cards">
                                <NearbyCard key="1" name="Restaurant 1"
                                    description="Brief description of first restaurant."
                                    visits="123" reviews="45" rating="4.0" price="3"
                                    keywords="Keyword 1,Keyword 2,Keyword 3" />
                                <NearbyCard key="2" name="Restaurant 2"
                                    description="Brief description of second restaurant."
                                    visits="124" reviews="46" rating="3.0" price="2"
                                    keywords="Keyword 2,Keyword 3,Keyword 1" />
                                <NearbyCard key="3" name="Restaurant 3"
                                    description="Brief description of third restaurant."
                                    visits="125" reviews="47" rating="1.0" price="1"
                                    keywords="Keyword 3,Keyword 1,Keyword 2" />
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