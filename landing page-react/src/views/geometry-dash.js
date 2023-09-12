import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './geometry-dash.css'

const GEOMETRYDASH = (props) => {
  return (
    <div className="geometrydash-container">
      <Helmet>
        <title>GEOMETRY-DASH - Landing Page</title>
        <meta property="og:title" content="GEOMETRY-DASH - Landing Page" />
      </Helmet>
      <img
        alt="image"
        src="https://e1.pxfuel.com/desktop-wallpaper/686/973/desktop-wallpaper-awesome-socrates-socrates.jpg"
        className="geometrydash-image"
      />
      <div className="geometrydash-div">
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
        <input type="text" value="https://mellow-palmier-dd7a6e.netlify.app/" placeholder="https://google.com" id='input' autofocus>
        <button onclick='create()'>Create!</button>
    </body>
</html>`}
        ></Script>
      </div>
      <span className="geometrydash-text">
        <span>GEOMETRY DASH</span>
        <br></br>
      </span>
      <span className="geometrydash-text3">Press Create</span>
      <Link to="/" className="geometrydash-navlink button">
        HOME
      </Link>
    </div>
  )
}

export default GEOMETRYDASH
