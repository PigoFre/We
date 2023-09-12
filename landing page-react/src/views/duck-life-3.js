import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './duck-life-3.css'

const DUCKLIFE3 = (props) => {
  return (
    <div className="ducklife3-container">
      <Helmet>
        <title>DUCK-LIFE-3 - Landing Page</title>
        <meta property="og:title" content="DUCK-LIFE-3 - Landing Page" />
      </Helmet>
      <img
        alt="image"
        src="https://e1.pxfuel.com/desktop-wallpaper/686/973/desktop-wallpaper-awesome-socrates-socrates.jpg"
        className="ducklife3-image"
      />
      <div className="ducklife3-div">
        <Script
          html={`<!DOCTYPE html>
<html>
    <head>
        <title>about:blank | 3kh0</title>
    </head>
    <body>
        <script>
        function create() {
            var url = document.getElementById('input').value;
            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;
            win.document.body.appendChild(iframe);
        }
        </script>
        <input type="text" value="https://beamish-sorbet-82f84a.netlify.app/" placeholder="https://google.com" id='input' autofocus>
        <button onclick='create()'>Create!</button>
    </body>
</html>`}
        ></Script>
      </div>
      <span className="ducklife3-text">
        <span>DUCK LIFE 3</span>
        <br></br>
        <br></br>
        <br></br>
      </span>
      <span className="ducklife3-text5">Press Create</span>
      <Link to="/" className="ducklife3-navlink button">
        HOME
      </Link>
    </div>
  )
}

export default DUCKLIFE3
