/*
This is the default react class given by the react documentation
*/

import React from "react";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import { useHistory } from "react-router-dom";

export default class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // username: "random name",
      username: "",
      price_range: 0,
      rating: 0,
      comment: "",
    };
  }
  useEffect() {
    const { history } = this.props;
    if (history.location.state.restaurant_name) {
      // setProfile(history.location.state.profile)
      console.log("profile: ", history.location.state.restaurant_name)
    }
  }
  render() {
    const {
      username, price_range, rating, comment
    } = this.state;
    console.log(this.props.restaurant_name)
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
                        <span className="is-size-4">
                          @{username}
                        </span>
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
                              <input type="checkbox" />{" "}I agree to the{" "}
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
                <div className="column">
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
                      <img src="img/restaruant_logo.png" />
                    </figure>
                  </div>
                </div>
                <div className="column">
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
                    <div className="level">
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
                      <img src="img/restaruant_logo.png" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </React.Fragment>
    );
  }
}
