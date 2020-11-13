/*
This is the default react class given by the react documentation
*/

import React from "react";
import brickWall from "./../img/brick-wall.jpg";

export default class CardRefactored extends React.Component {
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
            <div className="card-content ">
              <h1 className="is-size-3 is-clickable is-family-sans-serifs has-text-weight-bold level-left">
                {this.props.restaurant_name}
                <span style={{ color: "grey" }}>
                  <i class="fas fa-dollar-sign ml-5 is-size-5 mt-2"></i>
                  <i className="fas fa-dollar-sign is-size-5 mt-2"></i>
                  <i className="fas fa-dollar-sign is-size-5 mt-2"></i>
                </span>
              </h1>
              <div className="level-left mr-3">
                <span style={{ color: "Tomato" }} className="mx-2">
                  <span className="is-size-5" className="mx-2">
                    {this.props.restaurant_rating}
                  </span>
                  <i className="fas fa-star fa-sm"></i>
                  <i className="fas fa-star fa-sm"></i>
                  <i className="fas fa-star fa-sm"></i>
                  <i className="fas fa-star fa-sm"></i>
                  <i className="fas fa-star-half-alt fa-sm"></i>
                </span>
                <h3 className="is-clickable">(14)</h3>
              </div>
              <div className="level mt-4 mb-1">
                <div className="level-left">
                  <span className="tag is-primary is-light mx-1 is-medium ">
                    {this.props.restaurant_tags[0]}
                  </span>
                  <span className="tag is-danger is-light mx-1 is-medium">
                    {this.props.restaurant_tags[1]}
                  </span>
                </div>
              </div>
              <br />
              <div className="content">
                {this.props.restaurant_description}
                <br />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
