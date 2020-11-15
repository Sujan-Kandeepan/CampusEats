/*
This is the default react class given by the react documentation
*/

import React from "react";
import brickWall from "./../img/brick-wall.jpg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {/* Card template from Bulma: https://bulma.io/documentation/components/card/ */}

        <div className="column is-4">
          <div className="card">
            <a href="">
              <div className="card-image">
                <figure className="image is-3by3">
                  <img src={brickWall} />
                </figure>
              </div>
            </a>
            <div className="card-content">
              <h1 className="is-size-3 is-family-sans-serifs has-text-weight-bold level-left">
                Restaurant
                <span style={{ color: "grey" }}>
                  <i class="fas fa-dollar-sign ml-5 is-size-5 mt-2"></i>
                  <i className="fas fa-dollar-sign is-size-5 mt-2"></i>
                  <i className="fas fa-dollar-sign is-size-5 mt-2"></i>
                </span>
              </h1>
              <div className="level-left mr-3">
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
              </div>
              <div className="level mt-4 mb-1">
                <div className="level-left">
                  <span className="tag is-primary is-light mx-1 is-medium ">
                    Vegetarian
                  </span>
                  <span className="tag is-danger is-light mx-1 is-medium">
                    Burger
                  </span>
                </div>
              </div>
              <br />
              <div className="content">
                Restaurant information. Restaurant information. Restaurant
                information.
                <a href="#">#Restaurant</a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
