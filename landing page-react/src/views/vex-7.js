import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './vex-7.css'

const VEX7 = (props) => {
  return (
    <div className="vex7-container">
      <Helmet>
        <title>VEX-7 - Landing Page</title>
        <meta property="og:title" content="VEX-7 - Landing Page" />
      </Helmet>
      <img
        alt="image"
        src="https://e1.pxfuel.com/desktop-wallpaper/686/973/desktop-wallpaper-awesome-socrates-socrates.jpg"
        className="vex7-image"
      />
      <div className="vex7-div">
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
        <input type="text" value="https://famous-churros-d73faf.netlify.app/" placeholder="https://google.com" id='input' autofocus>
        <button onclick='create()'>Create!</button>
    </body>
</html>`}
        ></Script>
      </div>
      <span className="vex7-text">
        <span>VEX 7</span>
        <br></br>
        <br></br>
        <br></br>
      </span>
      <span className="vex7-text5">Press Create</span>
      <Link to="/" className="vex7-navlink button">
        HOME
      </Link>
    </div>
  )
}

export default VEX7
