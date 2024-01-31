// Write your code here.
import './index.css'

const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} =cardList`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <img src={imgUrl} alt={title} className="card-image" />
      </div>
    </li>
  )
}

export default TechnologyCard
