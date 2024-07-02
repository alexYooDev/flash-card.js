import './cardlist.css';
import Card from '../card/Card';

const MOCK_DATA = [
  {id: 1, title: '한글', content: 'Korean', imgUrl:''},
  {id: 2, title: '영어', content: 'English', imgUrl: ''},
  {id: 3, title: '호주', content: 'Australia', imgUrl: ''},
];

const CardList = () => {
  return ( 
    <section>
        {
          MOCK_DATA.map((card)=> (
            <Card key={card.id} title={card.title} content={card.content}/>
            ))
        }
    </section>
  )

}

export default CardList;