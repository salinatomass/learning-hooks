import "../styles/components/Search.css";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search">
      <input
        type="text"
        ref={searchInput}
        value={search}
        placeholder="Search a character"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
