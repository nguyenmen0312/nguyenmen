import React, { useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import * as ApiCaller from "./../../helpers/index";
import axios from "axios";
import * as Setting from "./../../constants/Setting";
function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmpassword, setComfirmpassword] = useState('');
  let history = useHistory();

  async function handleSignup(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      comfirmpassword: comfirmpassword,
    };
    console.log(data)
    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = (await Setting.URL) + "api/auth/signup";
    try {
      return axios(url, {
        method: "POST",
        data: data,
        config,
      })
        .then((res) => {
          if (res.status === 201) {
            history.push("/login");
          }
        })
        .catch((err) => {
          alert("tài khoản hoặc mật khẩu không đúng");
          console.log(err);
        });
    } catch (err) {
      alert("tài khoản hoặc mật khẩu không đúng");
      console.log(err);
    }

  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mx-4">
            <div className="card-body p-4">
              <h1>Register</h1>
              <form onSubmit={handleSignup}>
                <p className="text-muted" >Create your account</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                    <svg className="c-icon">
                      <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                    </svg></span></div>
                  <input className="form-control"
                    required
                    value={name}
                    onChange={(x) => setName(x.target.value)}
                    type="text" placeholder="Username" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                    <svg className="c-icon">
                      <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
                    </svg></span></div>
                  <input className="form-control" type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><span className="input-group-text">
                    <svg className="c-icon">
                      <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                    </svg></span></div>
                  <input className="form-control" type="password"
                    required
                    value={password}
                    minLength="6"
                    maxLength="8"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                </div>
                <div className="input-group mb-4">
                  <div className="input-group-prepend"><span className="input-group-text">
                    <svg className="c-icon">
                      <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                    </svg></span></div>
                  <input className="form-control" type="password"
                    value={comfirmpassword}
                    onChange={(c) => setComfirmpassword(c.target.value)}
                    placeholder="Repeat password" />
                </div>
                <button className="btn btn-block btn-success" type='submit'>Create Account</button>
              </form>
            </div>
            <div className="card-footer p-4">
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-block btn-facebook" type="button"><span>facebook</span></button>
                </div>
                <div className="col-6">
                  <button className="btn btn-block btn-twitter" type="button"><span>twitter</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Register;