import React, { Component, useState } from 'react'
import IdleTimer from 'react-idle-timer'
import styles from '../styles/Home.module.css' 


export default class Timing extends Component {
  constructor(props) {
    super(props)
    this.idleTimer = null
  }

  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          timeout={1000 * 5}
          onActive={this.handleOnActive}
          onIdle={this.handleOnIdle}
          onAction={this.handleOnAction}
          debounce={250}
        />
        <h1>Welcome to my session timeout APP</h1>
        {
                <div className={styles.container}>
                <a href="/" className={styles.HomeButton}>
                <h2>Home</h2>
                </a>
                </div>
        }
      </div>
    )
  }

  handleOnAction = (event) => {
    console.log('wow you did something', event)
  }

  handleOnActive = (event) => {
    console.log('We have movement', event)
    console.log('time remaining', this.idleTimer.getRemainingTime())
  }

  handleOnIdle = (event) => {
    console.log('session is idle')
    console.log('you were last active', this.idleTimer.getLastActiveTime())
  }
}