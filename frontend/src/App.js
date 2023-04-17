import React, { useState } from 'react';
import OfficeFilter from './components/OfficeFilter';
import OfficeTable from './components/OfficeTable';

const API_URL = 'http://localhost:8000/api/offices';

const App = () => {
  const [offices, setOffices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOffices = async (filters) => {
    setIsLoading(true);
    let url = new URL(API_URL);

    for (let key in filters) {
      if (filters[key]) {
        url.searchParams.set(key, filters[key]);
      }
    }

    try {
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json'
        }
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data);
      } else {
        const data = await response.json();
        setOffices(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Office Finder</h1>
      <OfficeFilter onFilter={fetchOffices} />
      {isLoading && <p>Loading...</p>}
      {error && (
        <p className="text-red-500">
          Error: {error.message} {JSON.stringify(error.errors)}
        </p>
      )}
      {!isLoading && !error && offices.length === 0 && <p>No offices found.</p>}
      {!isLoading && !error && offices.length > 0 && <OfficeTable offices={offices} />}
    </div>
  );
};

export default App;