import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './styles.scss'

export default class ConsultantListItem extends React.Component {
  render() {
    const { consultant } = this.props
    return (
      <li className={ styles.consultantInfo }>
        <img className={ styles.consultantAvatar } src={ consultant.avatar } />
        <span className={ styles.consultantName }>{ consultant.name }</span>
        <span className={ styles.consultantTitle }>{ consultant.title }</span>
      </li>
    )
  }
}

ConsultantListItem.propTypes = {
  consultant: PropTypes.object.isRequired
}