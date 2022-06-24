import React from 'react';
import Instagram from './Instagram.png';
import "./Home.css";



const Home = () => {
  return (
    <React.Fragment>
    <div id="wrapper">
      <div className="container">
        <div className="phone-app-demo" />
        <div className="form-data">
          <form action="">
            <div className="logo">
              <h1><img style={{paddingTop:'5px', height: 60, width: 150 }} alt='logo' src={Instagram} />
            </h1>
            </div>
            <input
              type="text"
              placeholder="Phone number, username, or email"
            />
            <input type="password" placeholder="Password" />
            <button className="form-btn" type="submit">
              Log in
            </button>
            <span className="has-separator">Or</span>
            <a href="https://www.facebook.com/login/" className="facebook-login">
              <i className="fab fa-facebook" /> Log in with Facebook
            </a>
            <a className="password-reset" href="#">
              Forgot password?
            </a>
          </form>
          <div className="sign-up">
            Don't an account? <a href="#">Sign up</a>
          </div>
          <div className="get-the-app">
            <span>Get the app</span>
            <div className="badge">
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="android App"
              />
              </a>
              <a href="https://apps.apple.com/in/app/instagram/id389801252">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt="ios app"
              />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <nav className="footer-nav">
            <ul>
            <li>
                <a href="#">Meta</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Api</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Top accounts</a>
              </li>
              <li>
                <a href="#">Hashtags</a>
              </li>
              <li>
                <a href="https://www.instagram.com/explore/locations/">Locations</a>
              </li>
              <li>
                <a href="https://play.google.com/store/search?q=instagram%20lite&c=apps">Instagram Lite</a>
              </li>
              <li>
                <a href="#">Contact uploading and non-users</a>
              </li>
              <li>
                <a href="#">Dance</a>
              </li><li>
                <a href="#">Food&drink</a>
              </li><li>
                <a href="#">Home&garden</a>
              </li><li>
                <a href="#">Music</a>
              </li><li>
                <a href="#">Visual arts</a>
              </li>
            </ul>
          </nav>
          {/* <div class="dropdown"> */}
            {/* <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="#">English(UK)</a>
                <a href="#">English</a>
                <a href="#">African</a>
            </div>
          </div> */}
          <div className="copyright-notice">&copy; 2022 Instagram from Meta</div>
        </div>
      </footer>
    </div>
  </React.Fragment>
  );
}

export default Home;