import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './spelunky.css'

const Spelunky = (props) => {
  return (
    <div className="spelunky-container">
      <Helmet>
        <title>Spelunky - Landing Page</title>
        <meta property="og:title" content="Spelunky - Landing Page" />
      </Helmet>
      <img
        alt="image"
        src="https://e1.pxfuel.com/desktop-wallpaper/686/973/desktop-wallpaper-awesome-socrates-socrates.jpg"
        className="spelunky-image"
      />
      <div className="spelunky-div">
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
        <input type="text" value="https://celebrated-muffin-2080f6.netlify.app/" id='input' autofocus>
        <button onclick='create()'>Create!</button>
    </body>
</html>`}
        ></Script>
      </div>
      <span className="spelunky-text">SPELUNKY</span>
      <span className="spelunky-text1">Press Create</span>
      <Link to="/" className="spelunky-navlink button">
        HOME
      </Link>
    </div>
  )
}

export default Spelunky
