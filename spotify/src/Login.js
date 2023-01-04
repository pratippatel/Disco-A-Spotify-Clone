import React from 'react'
import "./Login.css";
import SpotifyLogo from './Images/SpotifyLogo.jpg'
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
        {/* Spotify logo */}
        {/* Login with Spotify button */}
        
        <img src = {SpotifyLogo} alt="Spotify Logo"/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login