// app/property/[id]/page.js
import Image from 'next/image';

async function fetchProperties() {
  try {
    const res = await fetch('/api/properties'); // Relative URL - ONLY if API is on the same domain
    if (!res.ok) {
      throw new Error(`Failed to fetch properties: ${res.status} - ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching properties:", error);
    return []; // Return an empty array in case of error
  }
}

export default async function PropertyDetails({ params }) {
  const properties = await fetchProperties();
  const property = properties.find((p) => p.id === parseInt(params.id, 10));

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src={property.image_url}
            alt={property.title}
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-t md:rounded-t-none md:rounded-l"
          />
        </div>
        <div>
          <div className="p-4 md:p-0">
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <p className="text-xl mt-2">{property.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const properties = await fetchProperties();
  return properties.map(property => ({
    id: property.id.toString(),
  }));
}