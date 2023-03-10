import React from "react";
import News from "../News/News";
import Hero from "../hero/HeroImage";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    alert(`Form is submitted:  ${this.state.value}`);
    e.preventDefault();
  }
  render() {
    return (
      <div id="contact">
        <Hero style={"contact-img"} />
        <div className="contact">
          <div className="row">
            <div className="col-md-6 contactInfo">
              <h2 className="contactH2">Get In Touch</h2>
              <div className="yellowBox" />
              <p className="contactP">
                We are always happy to answer questions about life at School.
                Please do not hesitate to get in touch by telephone or email
              </p>
              <br />
              <br />
            </div>

            <div className="col-md-6 location">
              <div className="col-md-1 glyphicon">
                <p>
                  <span className="glyphicon glyphicon-map-marker" />
                </p>
              </div>
              <div className="col-md-5 address">
                <p>
                  <b>Topmic International Schools</b>
                </p>
                <p>Block 9 </p>
                <p>Adenowo Mabadeje Drive, Valley View Estate</p>
                <p>Off Ebute-Igbogbo Road, Ikorodu. Lagos State Nigeria</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="contactUs">
              <div className="contactForm">
                <h2 className="contactH2">Contact Us</h2>
                <div className="yellowBox" />
                <form
                  className="userInfo"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <input type="text" placeholder="First Name" />
                  <br />
                  <input type="text" placeholder="Last Name" />
                  <br />
                  <input type="text" placeholder="Email" />
                  <br />
                  <input type="text" placeholder="Subject" />
                  <br />
                  <textarea placeholder="Message" />
                  <br />
                  <button
                    value={this.state.value}
                    onSubmit={this.handleSubmit}
                    className="contact-submit-btn"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-news">
          <News />
        </div>
      </div>
    );
  }
}
