// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {feedbackSelection: false}

  onClickFeedback = () => this.setState({feedbackSelection: true})

  feedbackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-screen">
        <h1 className="heading-feed">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list_container">
          {emojis.map(eachItems => (
            <li key={eachItems.id}>
              <button
                className="button"
                type="button"
                onClick={this.onClickFeedback}
              >
                <img
                  src={eachItems.imageUrl}
                  alt={eachItems.name}
                  className="image"
                />
                <br />
                <span className="emoji-name">{eachItems.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="feed-back-love">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {feedbackSelection} = this.state
    return (
      <div className="container">
        <div className="card-container">
          {feedbackSelection ? this.thankYouScreen() : this.feedbackScreen()}
        </div>
      </div>
    )
  }
}
export default Feedback
