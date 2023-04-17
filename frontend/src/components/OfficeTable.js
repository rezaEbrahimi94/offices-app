import React from 'react';

const OfficeTable = ({ offices, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!offices || offices.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Offices
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Tables
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sqm
          </th>
        </tr>
      </thead>
      <tbody>
        {offices.map((office) => (
          <tr key={office.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              {office.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {office.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {office.offices}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {office.tables}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {office.sqm}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OfficeTable;