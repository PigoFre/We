import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import Home from './views/home'
import UnblockedOne from './views/unblocked-one'
import BTD4 from './views/btd-4'
import Spelunky from './views/spelunky'
import RETROBOWL from './views/retro-bowl'
import StrikeForceHeroes2 from './views/strike-force-heroes-2'
import VEX7 from './views/vex-7'
import DUCKLIFE3 from './views/duck-life-3'
import GEOMETRYDASH from './views/geometry-dash'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NotFound} path="**" />
        <Route component={Home} exact path="/" />
        <Route component={UnblockedOne} exact path="/unblocked-one" />
        <Route component={BTD4} exact path="/btd-4" />
        <Route component={Spelunky} exact path="/spelunky" />
        <Route component={RETROBOWL} exact path="/retro-bowl" />
        <Route
          component={StrikeForceHeroes2}
          exact
          path="/strike-force-heroes-2"
        />
        <Route component={VEX7} exact path="/vex-7" />
        <Route component={DUCKLIFE3} exact path="/duck-life-3" />
        <Route component={GEOMETRYDASH} exact path="/geometry-dash" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
