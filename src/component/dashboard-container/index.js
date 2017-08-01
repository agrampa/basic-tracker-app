import React from 'react'
import uuid from 'uuid/v1'

import GrudgeForm from '../grudge-form'
import GrudgeList from '../grudge-list'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.grudgeCreate = this.grudgeCreate.bind(this)
  }

  grudgeCreate(grudge) {
    grudge.id = uuid();

    let {app} = this.props;
    app.setState(prevState => ({
      grudges: prevState.grudges.concat([grudge]),
    }))
  }

  render() {
    let {app} = this.props
    let {grudges} = app.state

    return(
      <div className='dashboard-container'>
      <p>Grudge Tracker</p>

      <GrudgeForm handleSubmit={this.grudgeCreate} submitTitle='Add a New Grudge' />

      <GrudgeList
        grudges={grudges} />
      </div>
    )
  }
}

export default DashboardContainer
