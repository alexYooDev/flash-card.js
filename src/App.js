import './App.css';
import CardList from './components/cardList/CardList';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
      </header>
      <main className='App_body'>
      <CardList/>
      </main>
    </div>
  );
}

export default App;
