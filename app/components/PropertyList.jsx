'use client'
import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';


const PropertyList = ({ properties }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties || []); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (properties) {
      const filtered = properties.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  }, [searchTerm, properties]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;