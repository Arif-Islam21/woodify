const CraftCard = () => {
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-[#795548]">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold font-rancho text-gray-800 uppercase dark:text-white">
          Woden FUrniture
        </h1>
        <p className="mt-1 text-sm text-gray-200 dark:text-gray-200">
          Wooden furnitur are basically made of wood. Those wood are been bring
          from forest.
        </p>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between px-4 py-2 bg-[#cf95803c]">
        <button className="px-2 btn py-1 border-none font-bold text-[#795548] hover:text-white uppercase transition-colors duration-300 transform bg-white rounded hover:bg-[#795548f3]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CraftCard;
