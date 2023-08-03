const Dropdown = ({ category, setCategory }) => {
  return (
    <form className="flex">
      <label className="block ">
        <select
          className="h-8 rounded-lg pe-10 text-sm bg-white focus:z-10 border-spacing-1 border text-black"
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          <option value="">All</option>
          <option value="CPU">CPU </option>
          <option value="Motherboard">Motherboard</option>
          <option value="RAM">RAM</option>
          <option value="Power Supply Unit">Power Supply Unit</option>
          <option value="Storage Device">Storage Device</option>
          <option value="Monitor">Monitor</option>
        </select>
      </label>
    </form>
  );
};

export default Dropdown;
