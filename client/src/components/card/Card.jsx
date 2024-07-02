import './card.css'
import React, {useState} from 'react'
import CardBody from './cardBody/CardBody';

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickCard = () => {
    setIsClicked((prev) => !prev)
  }

  return (
    <div
      className={`${isClicked ? 'clicked' : 'unclicked'}`}
      onClick={handleClickCard}
    >
      {isClicked ? (
        <CardBody
          side={'back'}
          isClicked={isClicked}
          title={props.title}
          content={props.content}
          img={false}
        />
      ) : (
        <CardBody
          side={'front'}
          isClicked={isClicked}
          title={props.title}
          content={props.content}
          img={true}
        >
          <img
            className={`card_img ${isClicked ? 'clicked' : 'unclicked'}`}
            src={`${props.content.toLowerCase()}.jpg`}
            alt={props.title}
          />
        </CardBody>
      )}
    </div>
  );
}

export default Card