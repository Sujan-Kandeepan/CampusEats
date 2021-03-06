/*
This is the default react class given by the react documentation
*/

import React from "react";
import { Link, Redirect, Route } from "react-router-dom";
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
      restaurant_description: "",
      restaurant_location: [0, 0],
      restaurant_address: "",
      restaurant_rating: 0,
      restaurant_review_number: 0,
      restaurant_reviews: [],
      restaurant_tags: [],
      restaurant_price_range: 0,
      restaurant_menu: "",
      is_contact_clicked: false,
      nearby_restaurants: [],
      restaurant_iframe: "",
    };
    this.setRestaurantDetails = this.setRestaurantDetails.bind(this);
  }

  componentDidMount() {
    this.setRestaurantDetails();
  }

  setRestaurantDetails() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const query = params.get("id") || "error";

    if (query === "error") {
      this.setState({ error: true });
      return;
    }

    var restaurant = restaurantData.restaurants.find(
      (restaurant) => restaurant.id === parseInt(query)
    );

    var nearbyRestaurant = restaurantData.restaurants.filter(
      (restaurant) => restaurant.id !== parseInt(query)
    );

    var reviews = reviewData.reviews.filter(
      (review) => review.restaurant_id === parseInt(query)
    );
    reviews.sort(function (a, b) {
      return a.time - b.time;
    });
    this.setState({
      restaurant_id: restaurant.id,
      restaurant_name: restaurant.name,
      restaurant_description: restaurant.description,
      restaurant_location: restaurant.location,
      restaurant_address: restaurant.address,
      restaurant_rating: restaurant.rating,
      restaurant_reviews: reviews,
      restaurant_review_number: restaurant.number_of_reviews,
      restaurant_tags: restaurant.tags,
      restaurant_price_range: restaurant.price_range,
      restaurant_menu: restaurant.menu,
      nearby_restaurants: nearbyRestaurant.slice(0, 3),
      restaurant_iframe: restaurant["iframe-src"],
    });
  }

  render() {
    const {
      restaurant_id,
      restaurant_name,
      restaurant_description,
      restaurant_address,
      restaurant_rating,
      restaurant_reviews,
      restaurant_review_number,
      restaurant_tags,
      restaurant_price_range,
      nearby_restaurants,
      restaurant_iframe,
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
        {this.state.error && <Redirect to="/" />}
        <Route
          path={"/review/:restaurant_id"}
          // component={Reviews}
        />
        <Header id={restaurant_id}></Header>
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
                        <span className="is-size-3 mx-2">
                          {restaurant_rating}
                        </span>
                        <span className="fa-2x">{starRating}</span>
                      </span>
                      {restaurant_review_number} Reviews
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
                      <Link to={`/review?id=${restaurant_id}`}>
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
              <h2 className="subtitle">{restaurant_description}</h2>
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
                    &emsp;&emsp;&emsp;
                    <Link
                      className="button is-ghost"
                      to={`/map/?id=${restaurant_id}`}
                    >
                      <i class="fa fa-expand-arrows-alt" aria-hidden="true"></i>
                      &ensp;Explore on expanded map
                    </Link>
                  </div>
                </div>
                <p className="mb-4">{restaurant_address}</p>
                <div style={{ width: "50%" }}>
                  <iframe
                    src={restaurant_iframe}
                    frameBorder="0"
                    title="map"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
                <hr />
              </div>
            </div>
            <div className="level">
              <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                Reviews
              </h2>
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
              </div>
              <div className="columns">
                {nearby_restaurants.map((r) => (
                  <DetailsCard
                    restaurant_name={r.name}
                    restaurant_tags={r.tags}
                    restaurant_price_range={r.price_range}
                    restaurant_rating={r.rating}
                    restaurant_review_number={r.number_of_reviews}
                    restaurant_description={r.description}
                    restaurant_id={r.id}
                    update={() => {
                      setTimeout(() => {
                        this.setRestaurantDetails();
                        window.scrollTo(0, 0);
                      }, 0);
                    }}
                  ></DetailsCard>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
