import React from 'react';
import './Main.css';
import logo from '../main/images/logo.jpeg';
import pic from '../main/images/user.jfif'

function Main() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Application</a>
              </li>
            </ul>
            <span className="navbar-text">
            <a className="navbar-brand" href="#"><img className='profile-pic' src={pic} alt="profile" /></a>
            </span>
          </div>
        </nav>
      </header>
      <main></main>
      <footer>
        <div className='footer'>
          <p><i class="fa-regular fa-copyright"></i> 2022 DevNation PTE Ltd.. All rights reserved</p>
          <div className='social-links'>
            <ul>
              <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>
              <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href='#'><i class="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Main