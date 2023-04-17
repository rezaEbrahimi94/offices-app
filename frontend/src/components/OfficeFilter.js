import React, { useState } from "react";

const OfficeFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    name: "",
    offices: "",
    tables: "",
    sqm_from: "",
    sqm_to: "",
    price_from: "",
    price_to: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={filters.name}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="offices"
            className="block text-sm font-medium text-gray-700"
          >
            Offices
          </label>
          <input
            type="text"
            name="offices"
            id="offices"
            value={filters.offices}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="tables"
            className="block text-sm font-medium text-gray-700"
          >
            Tables
          </label>
          <input
            type="number"
            name="tables"
            id="tables"
            value={filters.tables}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label
            htmlFor="sqm_from"
            className="block text-sm font-medium text-gray-700"
          >
            Sqm From
          </label>
          <input
            type="number"
            name="sqm_from"
            id="sqm_from"
            value={filters.sqm_from}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="sqm_to"
            className="block text-sm font-medium text-gray-700"
          >
            Sqm To
          </label>
          <input
            type="number"
            name="sqm_to"
            id="sqm_to"
            value={filters.sqm_to}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="price_from"
            className="block text-sm font-medium text-gray-700"
          >
            Price From
          </label>
          <input
            type="number"
            name="price_from"
            id="price_from"
            value={filters.price_from}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="price_to"
            className="block text-sm font-medium text-gray-700"
          >
            Price To
          </label>
          <input
            type="number"
            name="price_to"
            id="price_to"
            value={filters.price_to}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-3">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
export default OfficeFilter;
