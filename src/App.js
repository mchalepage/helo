import React from 'react'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import routes from './routes'
import { connect } from 'react-redux'
import './App.css'

function App(props) {
  return (
    <div className="App">
      {routes}
    </div>
  )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(App)
