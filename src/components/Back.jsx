import React, { Component } from 'react'

export default class Back extends Component {
    componentDidMount() {
        window.VANTA.BIRDS({
            el: "#backAnime" })
    }

    componentWillUnmount() {
      if (this.effect) this.effect.destroy()
    }
  render() {
    return (
      <div  id="backAnime">
        
      </div>
    )
  }
}
