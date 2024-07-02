import './searchbar.css'

const SearchBar = ({ searchWord, onChangeSearchWord }) => {
  const handleChange = (event) => {
    onChangeSearchWord(() => event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={searchWord}
        onChange={handleChange}
        placeholder='Search the vocab here'
      />
    </div>
  );
};

export default SearchBar;