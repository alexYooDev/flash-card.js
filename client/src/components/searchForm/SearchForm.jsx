import './searchform.css'
import SearchBar from "../searchBar/SearchBar"

const SearchForm = ({searchWord, setSearchWord}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    /* fetch('http://localhost:4000/search', {
      method: 'POST',
      body: JSON.stringify({ title: 'React POST Request Example' }),
    }); */
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchBar searchWord={searchWord} onChangeSearchWord={setSearchWord}/>
      <button>Search</button>
    </form>
  )
}

export default SearchForm