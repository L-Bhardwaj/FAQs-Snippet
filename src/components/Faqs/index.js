// Write your code here.

import './index.css'
import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    // Initialize faqsList from props and add show property
    const {faqsList} = this.props
    this.state = {
      faqsList: faqsList.map(each => ({...each, show: false})),
    }
  }

  toggleShow = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(each =>
        each.id === id ? {...each, show: !each.show} : each,
      ),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1 className="mainHeading">FAQs</h1>
          <div>
            <ul>
              {faqsList.map(each => (
                <FaqItem
                  key={each.id}
                  details={each}
                  toggleShow={this.toggleShow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Faqs
