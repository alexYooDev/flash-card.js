
const CardBody = (props) => {
  return (
    <div className={`card_${props.side}`}>
      <h3 className={`card_content ${props.isClicked ? 'clicked' : 'unclicked'}`}>
        {props.side === 'front' ? props.title : props.content}
      </h3>
      {props.img && (<img
            className={`card_img ${props.isClicked ? 'clicked' : 'unclicked'}`}
            src={`${props.content.toLowerCase()}.jpg`}
            alt={props.content}
          />)}
    </div>
  );
}

export default CardBody