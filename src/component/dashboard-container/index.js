import React from 'react'
import uuid from 'uuid/v1'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)

    this.grudgeCreate = this.grudgeCreate.bind(this)
    this.grudgeUpdate = this.grudgeUpdate.bind(this)
    this.grudgeForget = this.grudgeForget.bind(this)
  }

  grudgeCreate(grudge) {
    grudge.id = uuid();

    let {app} = this.props;
    app.setState(prevState => ({
      grudges: prevState.grudges.contac([grudge]),
    }))
  }

  grudgeUpdate(grudge) {
    let {app} = this.props
    app.setState(prevState => {
      grudges: prevState.grudges.map((item) => {
        return item.id === grudge.id ? grudge : item
      })
    })
  }

  grudgeForget(grudge) {
    let {app} = this.props
    app.setState(prevState => {
      grudges: prevState.grudges.filter((item) => {
        return item.id !== grudge.id
      })
    })
  }

  render() {
    return <p> did it work?</p>
  }
}

export default DashboardContainer
