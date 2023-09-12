import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './strike-force-heroes-2.css'

const StrikeForceHeroes2 = (props) => {
  return (
    <div className="strike-force-heroes2-container">
      <Helmet>
        <title>Strike-Force-Heroes-2 - Landing Page</title>
        <meta
          property="og:title"
          content="Strike-Force-Heroes-2 - Landing Page"
        />
      </Helmet>
      <img
        alt="image"
        src="https://e1.pxfuel.com/desktop-wallpaper/686/973/desktop-wallpaper-awesome-socrates-socrates.jpg"
        className="strike-force-heroes2-image"
      />
      <div className="strike-force-heroes2-div">
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
        <input type="text" value="https://64fb8ca88667875e1617bbab--fanciful-moxie-415609.netlify.app/" placeholder="https://google.com" id='input' autofocus>
        <button onclick='create()'>Create!</button>
    </body>
</html>`}
        ></Script>
      </div>
      <span className="strike-force-heroes2-text">
        <span>Strike Force Heroes 2</span>
        <br></br>
        <br></br>
      </span>
      <span className="strike-force-heroes2-text4">Press Create</span>
      <Link to="/" className="strike-force-heroes2-navlink button">
        HOME
      </Link>
    </div>
  )
}

export default StrikeForceHeroes2
