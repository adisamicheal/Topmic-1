import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.getUserName = this.getUserName.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getFirstName = this.getFirstName.bind(this);
    this.getLastName = this.getFirstName.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <div className="user-signin">
          <div className="wraper">
            <div className="login-box">
              <h1>
                SIGNUP CREDENTIALS
                <span className="glyphicon glyphicon-user" />
              </h1>

              <form className="login-form">
                <div className="yellow-icon" />
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={this.getFirstname}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={this.getLastName}
                  required
                />
                <input
                  type="text"
                  placeholder="Username"
                  onChange={this.getUserName}
                  required
                />
                <input
                  type="text"
                  placeholder="Email"
                  onChange={this.getEmail}
                  required
                />
                <label>
                  Select your role:
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Student">Admin</option>
                    <option value="Teacher">Admin</option>
                  </select>
                
                </label>

                <div className="yellow-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.getPassword}
                  required
                />

                <input
                  type="button"
                  value="Submit"
                  className="login-btn"
                  onClick={this.loginHandler}
                />

                <br />
                {/* {loginData.loginMsg} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
