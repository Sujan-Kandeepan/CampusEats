import React from "react";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShareClicked: false,
      isReportClicked: false,
      copyButtonLabel: "Copy to Clipboard",
      reportButtonLabel: "Report",
    };
    this.reportReview = this.reportReview.bind(this);
    this.shareReview = this.shareReview.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this);
    this.reportButtonClicked = this.reportButtonClicked.bind(this);
  }

  reportReview() {
    this.setState({
      isReportClicked: true,
    });
  }

  shareReview() {
    this.setState({
      isShareClicked: true,
    });
  }

  // source: https://coderrocketfuel.com/article/how-to-copy-text-to-the-clipboard-in-react-js
  copyCodeToClipboard() {
    const textarea = this.textArea;
    textarea.select();
    document.execCommand("copy");
    this.setState({
      copyButtonLabel: "Copied",
    });
  }

  reportButtonClicked() {
    this.setState({
      reportButtonLabel: "Reported",
    });
  }

  closeModal() {
    if (this.state.isShareClicked) {
      this.setState({
        isShareClicked: false,
        copyButtonLabel: "Copy to Clipboard",
        reportButtonLabel: "Report",
      });
    } else {
      this.setState({
        isReportClicked: false,
        copyButtonLabel: "Copy to Clipboard",
        reportButtonLabel: "Report",
      });
    }
  }

  render() {
    const {
      isShareClicked,
      isReportClicked,
      copyButtonLabel,
      reportButtonLabel,
    } = this.state;

    var starRating = [];
    for (var i = 0; i < this.props.rating; i++) {
      starRating.push(<i className="fas fa-star" key={i}></i>);
    }
    for (var i = 5; i > this.props.rating; i--) {
      starRating.push(
        <i className="fas fa-star" style={{ color: "silver" }} key={i}></i>
      );
    }
    return (
      <React.Fragment>
        <div className="column is-half">
          <div className="box mr-2">
            <div className="media-content">
              <div className="level">
                <div className="level-right">
                  <strong>{this.props.name}</strong> {" "}
                   <small>@{this.props.username}</small> <small> 31m</small>
                </div>
                <div className="level-right mr-2">
                  <span style={{ color: "Tomato" }} className="mx-2">
                    {starRating}
                  </span>
                </div>
              </div>
              {this.props.review}
              <div
                className={`modal ${isShareClicked ? "is-active" : ""}`}
                id="shareModal"
              >
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">
                      Share this review by @{this.props.username}
                    </p>
                    <button
                      className="delete"
                      aria-label="close"
                      onClick={this.closeModal}
                    ></button>
                  </header>
                  <section className="modal-card-body">
                    <textarea
                      class="textarea disabled"
                      ref={(textarea) => (this.textArea = textarea)}
                      value={this.props.review}
                    />
                  </section>
                  <footer className="modal-card-foot">
                    <button
                      onClick={this.copyCodeToClipboard}
                      className="button is-success"
                    >
                      {copyButtonLabel}
                    </button>
                    <button className="button" onClick={this.closeModal}>
                      Close
                    </button>
                  </footer>
                </div>
              </div>

              <div
                className={`modal ${isReportClicked ? "is-active" : ""}`}
                id="reportModal"
              >
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">
                      Report this review by @{this.props.username}?
                    </p>
                    <button
                      className="delete"
                      aria-label="close"
                      onClick={this.closeModal}
                    ></button>
                  </header>
                  <section className="modal-card-body">
                    <div className="control">
                      <textarea
                        class="textarea"
                        value={this.props.review}
                        disabled
                      />
                    </div>
                  </section>
                  <footer className="modal-card-foot">
                    <button
                      className="button is-danger"
                      onClick={this.reportButtonClicked}
                    >
                      {reportButtonLabel}
                    </button>
                    <button className="button" onClick={this.closeModal}>
                      Cancel
                    </button>
                  </footer>
                </div>
              </div>
              <p className="level-right">
                <button
                  onClick={this.shareReview}
                  className="button is-small mr-1 is-ghost"
                >
                  <i className="fas fa-share"></i>
                </button>
                <button
                  onClick={this.reportReview}
                  className="button is-small is-ghost"
                >
                  <i className="far fa-flag"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
