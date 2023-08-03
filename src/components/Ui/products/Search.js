import { BsSearch } from 'react-icons/bs';
const Search = ({ search, setSearch }) => {
  return (
    <div className="flex items-center">
      <form className="mb-0 ">
        <div className="flex items-center relative ">
          <input
            className="h-8 rounded-lg pe-10 text-sm placeholder-gray-600  border-none text-black bg-white"
            placeholder="Search product"
            type="text"
            value={search}
            onChange={event => setSearch(event.target.value)}
            name="search"
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
          >
            <span className="sr-only">Submit Search</span>
            <BsSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
