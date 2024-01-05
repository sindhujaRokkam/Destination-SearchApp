// Write your code here
import './index.css'

const DestinationItem = props => {
  const {historyItem} = props
  const {name, imgUrl} = historyItem
  return (
    <li className="history-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
