import { useState } from 'react';
import './searchbar.css'

const SearchBar = () => {

  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(() => event.target.value);
  }

  return (
    <div>
      <input type="text" value={searchText} onChange={handleChange} placeholder="Search the vocab here" />
    </div>
  )
}

export default SearchBar;