import React from 'react'
import "./Login.css";
import SpotifyLogo from './Images/SpotifyLogo.jpg'

function Login() {
  return (
    <div className='login'>
        {/* Spotify logo */}
        {/* Login with Spotify button */}
        
        <img src = {SpotifyLogo} alt="Spotify Logo"/> 
        <a href='www.spotify.com'>Login with Spotify</a>
    </div>
  )
}

export default Login