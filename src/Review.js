/*
This is the default react class given by the react documentation
*/

import React from "react";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import CardRefactored from "./component/cardRefactor.js";
let restaurantData = require("./data/restaurant_data.json");

export default class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      price_range: 0,
      rating: 0,
      comment: "",
    };
  }
  render() {
    const { username, price_range, rating, comment } = this.state;
    return (
      <React.Fragment>
        <Header></Header>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="box">
                  <div className="level">
                    {/* <h1 className="is-size-1 is-family-sans-serifs has-text-weight-bold level-left">
                      Creation X
                    </h1> */}
                    <h1 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left">
                      {this.props.restaurant_name}
                    </h1>
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
                          <i className="fas fa-dollar-sign is-size-3"></i>

                          <i className="fas fa-dollar-sign is-size-3 ml-3"></i>
                          <i className="fas fa-dollar-sign is-size-3"></i>

                          <i className="fas fa-dollar-sign is-size-3  ml-3"></i>
                          <i className="fas fa-dollar-sign is-size-3 "></i>
                          <i className="fas fa-dollar-sign is-size-3"></i>
                        </span>
                      </div>
                      <div className="field level m-2">
                        <label className="label is-size-4">Experience</label>
                        <span style={{ color: "Tomato" }} className="mx-2">
                          <i className="fas fa-star fa-2x"></i>
                          <i className="fas fa-star fa-2x"></i>
                          <i className="fas fa-star fa-2x"></i>
                          <i className="fas fa-star fa-2x"></i>
                          <i className="fas fa-star-half-alt fa-2x"></i>
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
                          ></textarea>
                        </div>
                      </div>

                      <div className=" has-text-centered">
                        <div className="field">
                          <div className="control">
                            <label className="checkbox">
                              <input type="checkbox" /> I agree to the{" "}
                              <a href="#">terms and conditions</a>
                            </label>
                          </div>
                        </div>
                        <button className="button is-link is-danger is-large has-text-centered box-shadow">
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
                  Review More Restaurants
                </h2>
              </div>
              <div className="columns">
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
