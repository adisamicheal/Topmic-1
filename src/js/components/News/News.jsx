import React, { Component } from "react";

export default class News extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="News">
        <div className="news-Box">
          <div className="uper-box">
            <h2>Latest News</h2>
            <p>
              {" "}
              Cultural day .... Students from different cultural backgrounds came
              together to showcase their traditional costumes, food, music, and
              dance.
              <br />
              <span>03.28.18 </span>
            </p>
          </div>

          <div className="lower-box">
            <div className="des-box">
              <h3>Education Blogs</h3>
            </div>
            <div className="des-box box-3">
              <h3>Topmic Gallery</h3>
            </div>
          </div>
        </div>

        <div className="clear" />
      </div>
    );
  }
}
