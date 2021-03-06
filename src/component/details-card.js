/*
This is the default react class given by the react documentation
*/

import React from "react";
import { Link } from "react-router-dom";
import brickWall from "./../img/brick-wall.jpg";

export default class DetailsCard extends React.Component {
  render() {
    let starRating = [];
    for (let i = 0; i < this.props.restaurant_rating; i++) {
      starRating.push(
        <i className="fas fa-star" style={{ color: "Tomato" }} key={i}></i>
      );
    }
    for (let i = 5; i > this.props.restaurant_rating; i--) {
      starRating.push(
        <i className="fas fa-star" style={{ color: "silver" }} key={i}></i>
      );
    }

    let priceRangeRating = [];
    for (let i = 0; i < this.props.restaurant_price_range; i++) {
      priceRangeRating.push(
        <i className="fas fa-dollar-sign mt-2" key={"price" + i}></i>
      );
    }
    return (
      <React.Fragment>
        {/* Card template from Bulma: https://bulma.io/documentation/components/card/ */}

        <div className="column is-4">
        <Link to={`/details?id=${this.props.restaurant_id}`} onClick={this.props.update}>
          <div className="card">
            {/* <a href=""> */}
            
              <div className="card-image">
                <figure className="image is-3by3">
                  <img src={brickWall} alt="brick-wall" />
                </figure>
              </div>
              
            {/* </a> */}
            <div className="card-content">
              <h1 className="is-size-4 is-clickable is-family-sans-serifs has-text-weight-bold">
                {this.props.restaurant_name}
              </h1>
              <div className="level">
                <span
                  style={{ color: "grey" }}
                  className="is-size-5 level-left"
                >
                  {priceRangeRating}
                </span>
                <span className="mx-2 level-right">
                  {starRating} ({this.props.restaurant_review_number})
                </span>
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
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
