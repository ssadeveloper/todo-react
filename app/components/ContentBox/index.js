import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

export default class ContentBox extends React.Component {
  render() {
    return (
      <div className={ styles.box }>
        { this.props.children }
      </div>
    )
  }
}

ContentBox.propTypes = {
  children: PropTypes.any
}