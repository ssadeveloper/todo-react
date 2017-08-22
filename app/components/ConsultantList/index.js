import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ConsultantListItem from '../ConsultantListItem'
import styles from './styles.scss'

export default class ConsultantList extends React.Component {
  render() {
    const { consultants } = this.props
    return (
      <ul className={ styles.list }>
        { consultants.map((consultant, index) => <ConsultantListItem key={index} consultant={consultant} />) }
      </ul>
    )
  }
}

ConsultantList.propTypes = {
  consultants: PropTypes.array.isRequired
}