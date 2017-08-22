import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './styles.scss'

export default class ConsultantListItem extends React.Component {
  render() {
    const { consultant } = this.props
    return (
      <li className={ styles.consultantInfo }>
        <img className={ styles.avatar } src={ consultant.avatar } />
        <span className={ styles.name }>{ consultant.name }</span>
        <span className={ styles.title }>{ consultant.title }</span>
      </li>
    )
  }
}

ConsultantListItem.propTypes = {
  consultant: PropTypes.object.isRequired
}