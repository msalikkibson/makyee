// components/PropertyCard.js
import Image from 'next/image';
import Link from 'next/link';

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded p-2">
      <Image
        src={property.image_url}
        alt={property.title}
        width={500} // Adjust as needed
        height={300} // Adjust as needed
        className="object-cover h-[300px] rounded mb-2"
        priority // Important for initial load
      />
      <h3 className="text-lg font-semibold">{property.title}</h3>
      <p className="text-gray-600">{property.price}</p>
      <Link href={`/property/${property.id}`}> {/* If you have dynamic routing */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default PropertyCard;