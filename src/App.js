import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { JitsiMeet } from './JitsiMeet'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/:id'>
            <JitsiMeet />
          </Route>
        </Switch>
      </Router>
      <JitsiMeet />
    </>
  )
}

export default App
