// Write your code here.
import './index.css'

const FaqItem = props => {
  const {key, details, toggleShow} = props

  const {id, questionText, answerText, show} = details

  const imgUrl = !show
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const altText = !show ? 'plus' : 'minus'

  const classNam = show ? 'display' : 'd-none'

  const toggle = () => {
    toggleShow(id)
  }

  return (
    <li key={key}>
      <div className="card">
        <div className="heading">
          <h3>{questionText}</h3>
          <button type="button" className="btn" onClick={toggle}>
            <img className="img" src={imgUrl} alt={altText} />
          </button>
        </div>
        <div>
          <p className={classNam}>{answerText}</p>
        </div>
      </div>
    </li>
  )
}
export default FaqItem
