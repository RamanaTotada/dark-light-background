import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: 'dark'}

  onChangeMode = () => {
    this.setState(prevState => {
      if (prevState.isDarkMode !== 'dark') {
        return {isDarkMode: 'dark'}
      }
      return {isDarkMode: 'light'}
    })
  }

  render() {
    const {isDarkMode} = this.state

    return (
      <div className="main-container">
        <div
          className={
            isDarkMode === 'dark' ? 'dark-background' : 'Light-background'
          }
        >
          <h1
            className={isDarkMode === 'dark' ? 'light-heading' : 'dark-heading'}
          >
            Click To Change Mode
          </h1>
          <button
            type="button"
            className="button-style"
            onClick={this.onChangeMode}
          >
            {isDarkMode === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
