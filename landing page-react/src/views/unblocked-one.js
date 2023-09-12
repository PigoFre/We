import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './unblocked-one.css'

const UnblockedOne = (props) => {
  return (
    <div className="unblocked-one-container">
      <Helmet>
        <title>Unblocked-one - Landing Page</title>
        <meta property="og:title" content="Unblocked-one - Landing Page" />
      </Helmet>
      <img
        alt="image"
        src="https://e1.pxfuel.com/desktop-wallpaper/686/973/desktop-wallpaper-awesome-socrates-socrates.jpg"
        className="unblocked-one-image"
      />
      <div className="unblocked-one-div">
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
        <input type="text" value="https://64fb512305e289285ad491fd--brilliant-cassata-0a3e78.netlify.app/" placeholder="https://google.com" id='input' autofocus>
        <button onclick='create()'>Create!</button>
    </body>
</html>`}
        ></Script>
      </div>
      <span className="unblocked-one-text">Gun Mayhem 2</span>
      <span className="unblocked-one-text1">Press Create</span>
      <Link to="/" className="unblocked-one-navlink button">
        HOME
      </Link>
    </div>
  )
}

export default UnblockedOne
