import React from 'react'

class GrudgeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      reason: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let {name} = e.target
    this.setState({
      [name]: e.target.value
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
          placeholder='Reason'
          value={this.state.reason}
          onChange={this.handleChange} />
        <button type='submit'>Hold On To A New Grudge</button>
      </form>
    )
  }
}

export default GrudgeForm
