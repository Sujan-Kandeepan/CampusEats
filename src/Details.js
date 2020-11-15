/*
This is the default react class given by the react documentation
*/

import React from "react";
import { Link, Route } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import Review from "./component/review.js";
import DetailsCard from "./component/details-card.js";
import "./Details.css";
let restaurantData = require("./data/restaurant_data.json");
let reviewData = require("./data/restaurant_review.json");

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_id: 0,
      restaurant_name: "",
      restaruant_description: "",
      restaruant_location: [0, 0],
      restaurant_rating: 0,
      restaurant_review_number: 0,
      restaurant_reviews: [],
      restaurant_tags: [],
      restaurant_price_range: 0,
      restaurant_menu: "",
      is_contact_clicked: false,
    };
    this.setRestaurantDetails = this.setRestaurantDetails.bind(this);
  }
  componentDidMount() {
    this.setRestaurantDetails();
  }
  setRestaurantDetails() {

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const query = params.get("id");

    var restaurant = restaurantData.restaurants.find(
      (restaurant) => restaurant.id === parseInt(query)
    );

    var reviews = reviewData.reviews.filter(
      (review) => review.restaurant_id === parseInt(query)
    );

    this.setState({
      restaurant_id: restaurant.id,
      restaurant_name: restaurant.name,
      restaruant_description: restaurant.description,
      restaruant_location: restaurant.location,
      restaurant_rating: restaurant.rating,
      restaurant_reviews: reviews,
      restaurant_review_number: restaurant.number_of_reviews,
      restaurant_tags: restaurant.tags,
      restaurant_price_range: restaurant.price_range,
      restaurant_menu: restaurant.menu,
    });

  }

  render() {
    const {
      restaurant_id,
      restaurant_name,
      restaruant_description,
      restaurant_rating,
      restaurant_reviews,
      restaurant_review_number,
      restaurant_tags,
      restaurant_price_range
    } = this.state;

    let starRating = [];
    for (let i = 0; i < restaurant_rating; i++) {
      starRating.push(<i className="fas fa-star" key={i}></i>);
    }
    for (let i = 5; i > restaurant_rating; i--) {
      starRating.push(
        <i className="fas fa-star" style={{ color: "silver" }} key={i}></i>
      );
    }

    let priceRangeRating = [];
    for (let i = 0; i < restaurant_price_range; i++) {
      priceRangeRating.push(
        <i className="fas fa-dollar-sign is-size-3 mt-2" key={"price" + i}></i>
      );
    }

    return (
      <React.Fragment>
        <Route
          path={"/review/:restaurant_id"}
          // component={Reviews}
        />
        <Header></Header>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="box">
                  <div className="level mt-5 mb-5">
                    <h1 className="is-size-1 is-family-sans-serifs has-text-weight-bold level-left">
                      {restaurant_name}
                      <span
                        style={{ color: "silver" }}
                        className="ml-5 is-size-1 level-left"
                      >
                        {priceRangeRating}
                      </span>
                    </h1>
                    <div className="level-right mr-2">
                      <span style={{ color: "Tomato" }} className="mx-2">
                        <span className="is-size-1 mx-2">
                          {restaurant_rating}
                        </span>
                        <span className="fa-2x">{starRating}</span>
                      </span>
                      <button className="button is-text">
                        {restaurant_review_number} Reviews
                      </button>
                    </div>
                  </div>
                  <div className="level mt-6 mb-4">
                    <div className="level-left">
                      <span className="tag is-primary is-light mx-1 is-medium ">
                        {restaurant_tags[0]}
                      </span>
                      <span className="tag is-danger is-light mx-1 is-medium">
                        {restaurant_tags[1]}
                      </span>
                      <span className="tag is-info is-light mx-1 is-medium">
                        {restaurant_tags[2]}
                      </span>
                      <span className="tag is-warning is-light mx-1 is-medium">
                        {restaurant_tags[3]}
                      </span>
                    </div>
                    <div className="level-right">
                      <Link to={`/review/?id=${restaurant_id}`}>
                        <button
                          className="button is-danger is-large box-shadow"
                          onClick={this.handleClick}
                        >
                          Write a Review
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="level">
              <h2 className="subtitle">{restaruant_description}</h2>
              {/* <div className="buttons mr-2">
                <button className="button is-primary">
                  <i className="fas fa-phone"></i>
                </button>
                <button className="button is-link">
                  <i className="far fa-envelope"></i>
                </button>
              </div> */}
            </div>
            {/* <div>
              <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                Menu
              </h2>
              <figure className="image is-500x500">
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} />
              </figure>
            </div> */}

            <div className="columns">
              <div className="column">
                <div className="level is-mobile" style={{ marginBottom: "0" }}>
                  <div className="level-left">
                    <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold mb-2">
                      Location
                  </h2>
                  &emsp;&emsp;&emsp;&nbsp;
                  <Link className="button is-ghost" to={`/map/?id=${restaurant_id}`}>
                    <i className="fa fa-expand-arrows-alt" aria-hidden="true"></i>
                    &ensp;Explore on expanded map
                  </Link>
                  </div>
                </div>
                <div className="level">
                  <div>
                    <p className="mb-4">
                      La Piazza McMaster University Student Center, 1280 Main St
                      W, Hamilton, ON L8S 4L8
                    </p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11622.632412631498!2d-79.9081179166667!3d43.25858683237125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b53424aa751%3A0x6726e50cd5bc4ea5!2sLa%20Piazza!5e0!3m2!1sen!2sca!4v1602210643853!5m2!1sen!2sca"
                      width="600"
                      height="450"
                      frameBorder="0"
                      title="map"
                      style={{ border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="level">
              <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                Reviews
              </h2>
              <button className="button is-text level-right">See More</button>
            </div>
            <div className="columns">
              {restaurant_reviews.map((r) => (
                <Review
                  key={r.id}
                  name={r.name}
                  username={r.username}
                  rating={r.rating}
                  review={r.comment}
                  time={r.time}
                ></Review>
              ))}
            </div>
            <hr />
            <div>
              <div className="level">
                <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                  Nearby Restaurants
                </h2>
                <button className="button is-text level-right">See More</button>
              </div>
              <div className="columns">
                <DetailsCard
                  restaurant_name={"Restaurant"}
                  restaurant_tags={["fast food", "burger"]}
                  restaurant_rating={3}
                  restaurant_description={"Test Restaurant"}
                ></DetailsCard>
                <DetailsCard
                  restaurant_name={"Restaurant2"}
                  restaurant_tags={["fast food", "burger"]}
                  restaurant_rating={3}
                  restaurant_description={"Test Restaurant"}
                ></DetailsCard>
                <DetailsCard
                  restaurant_name={"Restaurant3"}
                  restaurant_tags={["fast food", "burger"]}
                  restaurant_rating={3}
                  restaurant_description={"Test Restaurant"}
                ></DetailsCard>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
