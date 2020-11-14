/*
This is the default react class given by the react documentation
*/

import React from "react";
import { Link, Route } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import Review from "./component/review.js";
import CardRefactored from "./component/cardRefactor.js";
import "./Details.css";
import restaruant_logo from "./img/restaruant_logo.png";
import review_img from "./img/review-img.jpg";
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
      restaurant_tags: [],
      restaurant_price_range: 0,
      restaurant_menu: "",
    };
    this.setRestaurantDetails = this.setRestaurantDetails.bind(this);
  }
  componentDidMount() {
    this.setRestaurantDetails();
  }
  setRestaurantDetails() {
    // var restaurant = restaurantData.restaurants.find(restaurant => restaurant.name === this.props.restaurant_name)

    var restaurant = restaurantData.restaurants.find(
      (restaurant) => restaurant.name === "Creation X"
    );
    this.setState({
      restaurant_id: restaurant.id,
      restaurant_name: restaurant.name,
      restaruant_description: restaurant.description,
      restaruant_location: restaurant.location,
      restaurant_rating: restaurant.rating,
      restaurant_review_number: restaurant.number_of_reviews,
      restaurant_tags: restaurant.tags,
      restaurant_price_range: restaurant.price_range,
      restaurant_menu: 'menu',
    });
  }

  render() {
    const {
      restaurant_id,
      restaurant_name,
      restaruant_description,
      restaruant_location,
      restaurant_rating,
      restaurant_review_number,
      restaurant_tags,
      restaurant_price_range,
      restaurant_menu,
    } = this.state;

    var starRating = [];
    for (var i = 0; i < restaurant_rating; i++) {
      starRating.push(<i className="fas fa-star" key={i}></i>);
    }
    for (var i = 5; i > restaurant_rating; i--) {
      starRating.push(
        <i className="fas fa-star" style={{ color: "silver" }} key={i}></i>
      );
    }

    var priceRangeRating = [];
    for (var i = 0; i < restaurant_price_range; i++) {
      priceRangeRating.push(
        <i className="fas fa-dollar-sign is-size-3 mt-2" key={"price" + i}></i>
      );
    }
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="box">
                  <div className="level level mt-5 mb-5">
                    <h1 className="is-size-1 is-family-sans-serifs has-text-weight-bold level-left">
                      {restaurant_name}
                      <span style={{ color: "silver" }} className="ml-5">
                        {priceRangeRating}
                      </span>
                    </h1>
                    <div className="level-right mr-2">
                      <span style={{ color: "Tomato" }} className="mx-2">
                        <span className="is-size-2" className="mx-2">
                          {restaurant_rating}
                        </span>
                        <span className="fa-2x">{starRating}</span>
                      </span>
                      <h3 className="is-clickable">
                        {restaurant_review_number} Reviews
                      </h3>
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
                      <Link
                        to={{ pathname: "/review", state: restaurant_name }}
                      >
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
              <div className="buttons mr-2">
                <button className="button is-primary">
                  <i className="fas fa-phone"></i>
                </button>
                <button className="button is-link">
                  <i className="far fa-envelope"></i>
                </button>
              </div>
            </div>
            <div>
              <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                Menu
              </h2>
              <figure className="image is-500x500">
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} />
              </figure>
            </div>

            <div className="columns">
              <div className="column">
                <hr />
                <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold mb-2">
                  Location
                </h2>
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
                      style={{ border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* <div>
              <div className="level">
                <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                  Photos
                </h2>
                <a className="level-right text-decoration-none">
                  See More Photos
                </a>
              </div>
              <article className="media">
                <div className="columns">
                  <div className="column">
                    <div className="box mx-5">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>John Doe</strong> <small>@johndoe</small>{" "}
                            <small className="level-right">Oct 9, 2020</small>
                          </p>
                          <figure className="image review-image">
                            <img src={} />
                          </figure>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin ornare magna eros, eu pellentesque tortor
                          vestibulum ut. Maecenas non massa sem. Etiam finibus
                          odio quis feugiat facilisis.
                          <p className="level-right mt-4">
                            <i className="fas fa-share mr-3"></i>
                            <i className="far fa-flag mr-3"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box mx-5">
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Lee Smith</strong> <small>@leeSmith</small>
                            <small className="level-right">Oct 9, 2020</small>
                          </p>
                          <figure className="image review-image">
                            <img src={} />
                          </figure>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin ornare magna eros, eu pellentesque tortor
                          vestibulum ut. Maecenas non massa sem. Etiam finibus
                          odio quis feugiat facilisis.
                          <p className="level-right mt-4">
                            <i className="fas fa-share mr-3"></i>
                            <i className="far fa-flag mr-3"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div> */}
            <div className="level">
              <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                Reviews
              </h2>
              <a className="level-right text-decoration-none">
                See More Reviews
              </a>
            </div>
            <div className="columns">
              <article className="media">
                <Review
                  name={reviewData.reviews[0].name}
                  username={reviewData.reviews[0].username}
                  rating={reviewData.reviews[0].rating}
                  review={reviewData.reviews[0].review}
                ></Review>
                <Review
                  name={reviewData.reviews[1].name}
                  username={reviewData.reviews[1].username}
                  rating={reviewData.reviews[1].rating}
                  review={reviewData.reviews[1].review}
                ></Review>
                {/* <div className="column">
                  <div className="box  mr-2">
                    <div className="media-content">
                      <div>
                        <strong>John Doe</strong> <small>@johndoe</small>{" "}
                        <small>31m</small>
                        <div className="level-right mr-2">
                          <span style={{ color: "Tomato" }} className="mx-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </span>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </div>
                      <p className="level-right">
                        <i className="fas fa-share mr-3"></i>
                        <i className="far fa-flag mr-3"></i>
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="column">
                  <div className="box  mr-2">
                    <div className="media-content">
                      <div>
                        <strong>John Doe</strong> <small>@johndoe</small>{" "}
                        <small>31m</small>
                        <div className="level-right mr-2">
                          <span style={{ color: "Tomato" }} className="mx-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </span>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </div>
                      <p className="level-right">
                        <i className="fas fa-share mr-3"></i>
                        <i className="far fa-flag mr-3"></i>
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="column">
                  <div className="box">
                    <div className="media-content">
                      <div>
                        <strong>John Doe</strong> <small>@johndoe</small>{" "}
                        <small>31m</small>
                        <div className="level-right mr-2">
                          <span style={{ color: "Tomato" }} className="mx-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </span>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </div>
                      <p className="level-right">
                        <i className="fas fa-share mr-3"></i>
                        <i className="far fa-flag mr-3"></i>
                      </p>
                    </div>
                  </div>
                </div> */}
              </article>
            </div>
            <hr />
            <div>
              <div className="level">
                <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                  Nearby Restaurants
                </h2>
                <a className="level-right text-decoration-none">See More</a>
              </div>
              <div className="columns">
                {/* <div className="column">
                  <div className="box">
                    <div className="level level mt-5 mb-5">
                      <h1 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left">
                        Teriyaki Express
                        <span style={{ color: "silver" }}>
                          <i className="fas fa-dollar-sign ml-5 is-size-5 mt-2"></i>
                          <i className="fas fa-dollar-sign is-size-5 mt-2"></i>
                          <i className="fas fa-dollar-sign is-size-5 mt-2"></i>
                        </span>
                      </h1>
                      <div className="level-right mr-2">
                        <span style={{ color: "Tomato" }} className="mx-2">
                          <span className="is-size-5" className="mx-2">
                            4.5
                          </span>
                          <i className="fas fa-star fa-sm"></i>
                          <i className="fas fa-star fa-sm"></i>
                          <i className="fas fa-star fa-sm"></i>
                          <i className="fas fa-star fa-sm"></i>
                          <i className="fas fa-star-half-alt fa-sm"></i>
                        </span>
                        <h3 className="is-clickable">(14)</h3>
                      </div>
                    </div>
                    <div className="level mt-6 mb-4">
                      <div className="level-left">
                        <span className="tag is-primary is-light mx-1 is-medium ">
                          Vegetarian
                        </span>
                        <span className="tag is-danger is-light mx-1 is-medium">
                          Burger
                        </span>
                        <span className="tag is-info is-light mx-1 is-medium">
                          Sandwiches
                        </span>
                        <span className="tag is-warning is-light mx-1 is-medium">
                          All Day Breakfast
                        </span>
                      </div>
                    </div>
                    <figure className="image review-image">
                      <img />
                    </figure>
                  </div>
                </div> */}
                <CardRefactored
                  restaurant_name={"Restaurant"}
                  restaurant_tags={["fast food", "burger"]}
                  restaurant_rating={3}
                  restaurant_description={"Test Restaurant"}
                ></CardRefactored>
                <CardRefactored
                  restaurant_name={"Restaurant2"}
                  restaurant_tags={["fast food", "burger"]}
                  restaurant_rating={3}
                  restaurant_description={"Test Restaurant"}
                ></CardRefactored>
                <CardRefactored
                  restaurant_name={"Restaurant3"}
                  restaurant_tags={["fast food", "burger"]}
                  restaurant_rating={3}
                  restaurant_description={"Test Restaurant"}
                ></CardRefactored>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
