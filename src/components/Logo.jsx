import React, { Component } from 'react';
import LogoMain from './assets/list.png';
import './root.scss';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img className="mainlogo" src={LogoMain} alt="main-logo"/>
      </div>
    )
  }
}
