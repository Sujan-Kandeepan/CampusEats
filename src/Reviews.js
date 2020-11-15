/*
This is the default react class given by the react documentation
*/

import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import Review from "./component/review.js";
import DetailsCard from "./component/details-card.js";
let restaurantData = require("./data/restaurant_data.json");
let reviewData = require("./data/restaurant_review.json");

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant_id: 0,
      restaurant_name: "",
      restaurant_reviews: [],
      name: "Test User",
      username: "test_username",
      price_range: 0,
      rating: 0,
      comment: "",
    };

    this.updateRating = this.updateRating.bind(this);
    this.updatePriceRating = this.updatePriceRating.bind(this);
    this.setRestaurantDetails = this.setRestaurantDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addReview = this.addReview.bind(this);
  }
  componentDidMount() {
    this.setRestaurantDetails();
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
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
      restaurant_id: query,
      restaurant_name: restaurant.name,
      restaurant_reviews: reviews,
    });
  }

  addReview() {
    let newReview = {
      username: this.state.username,
      name: this.state.name,
      price_range: this.state.price_range,
      rating: this.state.rating,
      comment: this.state.comment,
      time: 0,
    };

    this.setState({
      restaurant_reviews: [newReview, ...this.state.restaurant_reviews],
      price_range: 0,
      rating: 0,
      comment: "",
    });
    console.log(this.state.restaurant_reviews);
  }

  updateRating(newRating, name) {
    this.setState({
      rating: newRating,
    });
  }

  updatePriceRating(newRating, name) {
    this.setState({
      price_range: newRating,
    });
  }

  submitReview() {}

  render() {
    const {
      restaurant_id,
      restaurant_name,
      username,
      restaurant_reviews,
      price_range,
      rating,
      comment,
    } = this.state;

    return (
      <React.Fragment>
        <Header></Header>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="box">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <h1 className="is-size-1 is-family-sans-serifs has-text-weight-bold level-left">
                        {restaurant_name}
                      </h1>
                    </div>
                    <div className="level-right">
                      <Link className="button is-ghost" to={"/details?id=" + restaurant_id}
                        style={{ margin: "auto 20px" }}>
                        <i className="fas fa-info-circle"></i>
                        &ensp;Go to details page
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <div className="columns is-centered is-vcentered ">
                    <div className="column is-narrow box container-form mt-5">
                      <h3 className="is-size-3 is-family-sans-serifs level-left m-2">
                        Write a review
                      </h3>
                      <hr />
                      <div className="field level">
                        <label className="label is-size-4 level-left m-2">
                          Username
                        </label>
                        <span className="is-size-4">@{username}</span>
                      </div>
                      <div className="field level m-2">
                        <label className="label is-size-4">Price Range</label>
                        <span style={{ color: "silver" }}>
                          <ReactStars
                            count={5}
                            onChange={this.updatePriceRating}
                            color="silver"
                            size={32}
                            activeColor="black"
                            char={<i className="fas fa-dollar-sign"></i>}
                          />
                        </span>
                      </div>
                      <div className="field level m-2">
                        <label className="label is-size-4">Experience</label>
                        <span style={{ color: "Tomato" }} className="mx-2">
                          <ReactStars
                            count={5}
                            onChange={this.updateRating}
                            size={40}
                            color="silver"
                            activeColor="Tomato"
                          />
                        </span>
                      </div>
                      {/* <div className="field level m-2">
                        <label className="label is-size-4">Upload Photo</label>
                        <div className="file has-name is-right">
                          <label className="file-label">
                            <input
                              className="file-input is-large"
                              type="file"
                              name="resume"
                            />
                            <span className="file-cta">
                              <span className="file-icon">
                                <i className="fas fa-upload"></i>
                              </span>
                              <span className="file-label ">
                                Choose a file (Optional)
                              </span>
                            </span>
                          </label>
                        </div>
                      </div> */}
                      <div className="field m-2">
                        <label className="label is-size-4">Comment</label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            placeholder="Optional"
                            onChange={this.handleChange}
                            value={comment}
                          ></textarea>
                        </div>
                      </div>

                      <div className=" has-text-centered">
                        <button
                          className="button is-link is-danger is-large has-text-centered box-shadow"
                          onClick={this.addReview}
                        >
                          Post Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div>
              <div className="level">
                <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                  Reviews of {restaurant_name}
                </h2>
              </div>
              {restaurant_reviews.map((item, idx) => (
                <div class="column">
                  <Review
                    key={item.id}
                    name={item.name}
                    username={item.username}
                    rating={item.rating}
                    review={item.comment}
                    time={item.time}
                  ></Review>{" "}
                </div>
              ))}
            </div>

            <hr />
            <div>
              <div className="level">
                <h2 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left mb-2">
                  Review More Restaurants
                </h2>
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
