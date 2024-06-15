import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [credentials, setCredentials] = useState({name:"", email:"", password:"", geolocation:""})

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/api/createuser', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
        }) // body k andr prameter name same hony chye

        const json = await response.json()
        console.log(json);   // json varib me respon lia json ka or log kia

        if (!json.success) {
            alert('Enter Valid Credentials')
        }

        // idhr hm fetch api ka use krengy fetch api inbuild function ha jo thunder ki api ha wo lgegi idhr hm post use kr rhy hn to res.body bh ayegi 
    // header or body bh json format me bhjna hta ha dta
    }
    
    const onchange = (event) => { // onchnge funct pr setCredential ki ko event k through name or value ko trget kia
        setCredentials({...credentials,[event.target.name]: event.target.value})
    }

    return (
        <>
            <div className="container">
                <h2>SIGNUP</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlfor="username" className="form-label">User-Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onchange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation } onChange={onchange} id="exampleInputPassword1" />
                    </div>
                    
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already have an account?</Link>
                </form>
            </div>

        </>
    )
}
