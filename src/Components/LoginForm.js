import React, { useState } from 'react'

function LoginForm({ Login, error }) {

  const [details, setDetails] = useState({ name: "", email: "", password: "", })
  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <form className="xlogin" onSubmit={submitHandler}>
      <div className="x-inner">
        <h2 className="loginh2">Login</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <div className="xgroup">
          <label className="x-label" htmlFor="name">Name:</label>
          <input className="xinputs" type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
        </div>
        <div className="xgroup">
          <label className="x-label" htmlFor="email">Email:</label>
          <input className="xinputs" type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
        </div>
        <div className="xgroup">
          <label className="x-label" htmlFor="password">Password:</label>
          <input className="xinputs" type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
        </div>
        <input className="xloginbutton" type="submit" value="LOGIN"></input>
      </div>
    </form >
  )
}

export default LoginForm