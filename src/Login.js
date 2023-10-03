import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = (e) => {
    e.preventDefault()   //to avoid page reload

    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }
  const register = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }
  return (
    <div className='login'>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322" className='login__logo' />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button className='login__signInButton' onClick={signIn} type="submit">Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and Privacy Notice.
        </p>

        {/* <button className='login__registerButton' onClick={register}>Create your Amazon Account</button> */}
        <button onClick={register}>Remove from basket</button>
      </div>
    </div>
  )
}

export default Login
