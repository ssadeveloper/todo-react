import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './styles.scss'
import logo from 'images/logo@2x.png'
import arrowDownIcon from 'images/arrow-down@2x.png'
import userAvatar from 'images/avatar@2x.png'
import messageIcon from 'images/messages-icon@2x.png'
import notificationIcon from 'images/notification-icon@2x.png'

export default class Header extends React.Component {
  renderLeftHeader() {
    return (
      <div className={ styles.leftHeaderGroup }>
        <a className={ styles.logo } href="#"><img src={ logo } /></a>
        <span className={ styles.separator }></span>
        <div className={ styles.appsDropdown }>
          <span>Junior Apps</span>
          <img className={ styles.dropdownIcon } src={ arrowDownIcon } />
        </div>
        <span className={ styles.separator }></span>
        <span className={ styles.sessionsButton }>Sessions</span>
      </div>
    )
  }
  
  renderRightHeader() {
    return (
      <div className={ styles.rightHeaderGroup }>
        <div className={ styles.userDropdown }>
          <img className={ styles.userAvatar } src={ userAvatar } />
          <span>Rachel</span>
          <img className={ styles.dropdownIcon } src={ arrowDownIcon } />
        </div>
        <span className={ styles.separator }></span>
        <a className={ styles.iconLink } href="#"><img src={ messageIcon } /></a>
        <span className={ styles.separator }></span>
        <a className={ styles.iconLink } href="#"><img src={ notificationIcon } /></a>
      </div>
    )
  }
  
  render() {
    return (
      <header className={ styles.headerContainer }>
        <div className={ styles.inner }>
          <div className={ styles.header }>
            { this.renderLeftHeader() }
            { this.renderRightHeader() }
          </div>
        </div>
      </header>
    )
  }
}