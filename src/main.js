import React from 'react'
import Reactdom from 'react-dom'
// import {BrowserRouter, Route} from 'react-router-dom'

import DashboardContainer from './component/dashboard-container'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <DashboardContainer />
    )
  }

}

Reactdom.render(<App />, document.getElementById('root'))
