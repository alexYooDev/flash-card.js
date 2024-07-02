import './card.css'
import React, {useState} from 'react'

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickCard = () => {
    setIsClicked((prev) => !prev)
  }

  return (
  <div className={`${isClicked ? 'clicked' : 'unclicked'}`} onClick={handleClickCard} >
    { isClicked ? 
    <div className='card_back'>
      <h3 className={`card_content ${isClicked ? 'clicked' : 'unclicked'}`}>{props.content}</h3>
    </div> 
    :
    <div className='card_front'>
      <h3 className={`card_title ${isClicked ? 'clicked' : 'unclicked'}`}>{props.title}</h3>
      <img className={`card_img ${isClicked ? 'clicked' : 'unclicked'}`} src={`${props.content.toLowerCase()}.jpg`} alt={props.title} />
    </div>
    }
  </div>
  )
}

export default Card