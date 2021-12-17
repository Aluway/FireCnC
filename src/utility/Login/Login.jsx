<<<<<<< HEAD
import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
=======
import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";

>>>>>>> master
import openModal from "../../actions/openModal";
import regAction from "../../actions/regAction";

import SignUp from "./SingUp";

import "./Login.css";

<<<<<<< HEAD
class Login extends Component {
  state = {
    email: {},
    password: {},
  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  submitLogin = async (e) => {
=======
function Login(props) {
  const dispatch = useDispatch();

  const [email, changeEmail] = useState({});
  const [password, changePassword] = useState({});

  const submitLogin = async (e) => {
>>>>>>> master
    e.preventDefault();

    const url = `${window.apiHost}/users/login`;
    const data = {
<<<<<<< HEAD
      email: this.state.email,
      password: this.state.password,
=======
      email: email,
      password: password,
>>>>>>> master
    };
    const resp = await axios.post(url, data);
    const repsMsg = resp.data.msg;

    if (repsMsg === "noEmail") {
      swal({
        title: "Please provide an email",
        icon: "error",
      });
    } else if (repsMsg === "badPass") {
      swal({
        title: "Invalid email/password",
        text: "We don't have a match for that user name and password.",
        icon: "error",
      });
    } else if (repsMsg === "loggedIn") {
      swal({
        title: "Success!",
        icon: "success",
      });
      // we call our register action to update our auth reducer!!
<<<<<<< HEAD
      this.props.regAction(resp.data);
    }
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.submitLogin}>
          <button className="facebook-login">Connect With Facebook</button>
          <button className="google-login">Connect With Google</button>
          <div className="login-or center">
            <span>or</span>
            <div className="or-divider"></div>
          </div>
          <input
            onChange={this.changeEmail}
            type="text"
            className="browser-default"
            placeholder="Email address"
          />
          <input
            onChange={this.changePassword}
            type="password"
            className="browser-default"
            placeholder="Password"
          />
          <button className="sign-up-button">Login</button>
          <div className="divider"></div>
          <div>
            Don't have an account?{" "}
            <span
              className="pointer"
              onClick={() => {
                this.props.openModal("open", <SignUp />);
              }}
            >
              Sign up
            </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      openModal: openModal,
      regAction: regAction,
    },
    dispatcher
  );
}

export default connect(null, mapDispatchToProps)(Login);
=======
      dispatch(regAction(resp.data));
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={submitLogin}>
        <button className="facebook-login">Connect With Facebook</button>
        <button className="google-login">Connect With Google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          onChange={(e) => changeEmail(e.target.value)}
          type="text"
          className="browser-default"
          placeholder="Email address"
        />
        <input
          onChange={(e) => changePassword(e.target.value)}
          type="password"
          className="browser-default"
          placeholder="Password"
        />
        <button className="sign-up-button">Login</button>
        <div className="divider"></div>
        <div>
          Don't have an account?{" "}
          <span
            className="pointer"
            onClick={() => dispatch(openModal("open", <SignUp />))}
          >
            Sign up
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
>>>>>>> master
