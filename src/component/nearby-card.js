import React from "react";

export default class NearbyCard extends React.Component {
    render() {
        let numStars = Math.round(this.props.rating);
        let numDollars = Math.floor(this.props.price);
        let inlineIcons = [];
        let keywords = this.props.keywords.split(",").map(keyword =>
            <span className="tag is-light is-info">{keyword}</span>
        );

        for (let i = 1; i <= numStars; i++) {
            inlineIcons.push(<i className="fas fa-star"></i>);
        }

        for (let i = 5; i > numStars; i--) {
            inlineIcons.push(<i className="fas fa-star muted"></i>);
        }

        inlineIcons.push(<i className="fas fa-dollar-sign ml-3"></i>);

        for (let i = 2; i <= numDollars; i++) {
            inlineIcons.push(<i className="fas fa-dollar-sign"></i>);
        }

        return (
            <React.Fragment>
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {this.props.name}
                        </p>
                        <a href="#" className="card-header-icon" aria-label="more options">
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <div className="subtext">
                                <p className="description">
                                    {this.props.description}
                                </p>
                                <div className="level ratings-reviews">
                                    <div className="level-left">
                                        <small>{this.props.visits} visits &middot; {this.props.reviews} reviews</small>
                                    </div>
                                    <div className="level-right">
                                        <span className="ratings">
                                            <span className="star-text">{this.props.rating}&nbsp;</span>
                                            {inlineIcons}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="keywords">
                                {keywords}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}