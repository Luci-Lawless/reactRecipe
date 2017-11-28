import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }
  render() {
    const { content } = this.props

    return (
      <h1>{ content }</h1> //  or { this.props.content }
    )
  }
}
export default Title
