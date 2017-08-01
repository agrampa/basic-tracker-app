import React from 'react'
import Reactdom from 'react-dom'
// import {BrowserRouter, Route} from 'react-router-dom'

import DashboardContainer from './component/dashboard-container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grudges: []
    }

    this.getApp = this.getApp.bind(this)
  }

  componentDidUpdate() {
    console.log(':::STATE:::', this.state)
  }

  getApp() {
    return{
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  render() {
    return(
      <DashboardContainer app={this.getApp()}/>
    )
  }

}

Reactdom.render(<App />, document.getElementById('root'))
