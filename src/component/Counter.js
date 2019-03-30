import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increase, decrease} from '../action/countAction'

class Counter extends Component {

    increase = () => {
        this.props.increase()
    }

    decrease = () => {
        this.props.decrease()
    }

  render() {
    return (
      <div>
        <button onClick={this.increase}>+</button><br/>
        <label>{this.props.count}</label><br />
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    count: state.counter.count
})

export default connect(mapStateToProps, {increase, decrease})(Counter)

