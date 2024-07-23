import React, { Component } from 'react'
import loading from '/home/ayush007/newsapp/src/components/loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading' style={{ width: '15px', height: '15px' }} />
      </div>
    )
  }
}

export default Spinner

