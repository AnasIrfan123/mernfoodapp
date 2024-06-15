import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    }) // body k andr prameter name same hony chye

    const json = await response.json();
    console.log(json);   // json varib me respon lia json ka or log kia
    


    if (!json.success) {
      alert('Enter Valid Credentials')
    }

    // idhr hm fetch api ka use krengy fetch api inbuild function ha jo thunder ki api ha wo lgegi idhr hm post use kr rhy hn to res.body bh ayegi 
    // header or body bh json format me bhjna hta ha dta

    if (json.success) {
// ---------------------------- LOCAL STORAGE ME SAVE TOKEN --------------------------
      localStorage.setItem("authToken", json.authToken); //user=> json.success ha to localStorage me save krden token ko  authToken name sy  
      console.log(localStorage.getItem("authToken"));  // or log me lia getItem sy he ayega authtoken 

      navigate('/')   // json format pass eml par login par dashboard pr lejaye
    }
  }

  const onchange = (event) => { // onchnge funct pr setCredential ki ko event k through name or value ko trget kia
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (

    <>
      <div className="container">
        <label htmlFor='exampleInputheader' className='form-label'>LOGIN</label>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onchange} id="exampleInputPassword1" />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>Don't have an account?</Link>
        </form>
      </div>

    </>

  )
}
