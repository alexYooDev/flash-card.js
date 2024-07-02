import './App.css';
import CardList from './components/cardList/CardList';
import SearchForm from './components/searchForm/SearchForm';
import { useEffect, useState } from 'react';

function App() {

  const API_KEY = '1ED7A9F9A9223F9CEB86846908A43CF2';

  const [searchWord, setSearchWord] = useState('');
  const [vocabData, setVocabData] = useState(null);

  useEffect(() => {
    fetch(
      `https://krdict.korean.go.kr/api/search?key=${API_KEY}&type_search=search&part=exam&q=나무&advanced=y&method=exact&translated=y&trans_lang=1`
    )
      .then((res) => res.text)
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        console.log(xmlDoc);
      });
  },[searchWord]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchForm searchWord={searchWord} setSearchWord={setSearchWord}/>
      </header>
      <main className='App_body'>
      <CardList />
      </main>
    </div>
  );
}

export default App;
