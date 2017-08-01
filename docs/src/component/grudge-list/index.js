import React from 'react'

import GrudgeForm from '../grudge-form'

class GrudgeList extends React.Component {
  render() {
    return (
      <div className='grudge-list'>
        <ul>
          {this.props.grudges.map((item, i) =>
            <li key={i}>
            <p>Grudge: {item.title}</p>
            <p>Reason: {item.reason}</p>
            <button onClick={() => console.log('Never forget a grudge')}>Forget This Grudge</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default GrudgeList
