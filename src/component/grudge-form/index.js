import React from 'react'

class GrudgeForm extends React.Component {
  constructor(props) {
    super(props)

    let title = props.grudge ? props.grudge.name : ''
    let reason = props.grudge ? props.grudge.reason : ''

    this.state = {title, reason}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
      reason: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return(
      <form className='grudge-form'
        onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Name your grudge'
          value={this.state.title}
          onChange={this.handleChange} />
        <input
          name='reason'
          type='text'
          placeholder='What is the reason for this grudge?'
          value={this.state.reason}
          onChange={this.handleChange} />
        <button type='submit'>Hold On To A New Grudge</button>
      </form>
    )
  }
}

export default GrudgeForm
