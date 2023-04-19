import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    activeStatus: false,
  }

  renderAnswer = () => {
    const {FaqDetails} = this.props
    const {answerText} = FaqDetails
    const {activeStatus} = this.state
    if (activeStatus) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      activeStatus: !prevState.activeStatus,
    }))
  }

  renderActiveImage = () => {
    const {activeStatus} = this.state
    const image = activeStatus
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = activeStatus ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {FaqDetails} = this.props
    const {questionText} = FaqDetails
    return (
      <li className="list-item">
        <div className="faq-Container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
