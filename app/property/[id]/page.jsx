// app/property/[id]/page.js
import Image from 'next/image';
import { headers } from 'next/headers';

export default async function PropertyDetails({ params, request }) {
    const headerList = headers();
    const origin = headerList.get('x-origin'); //
  console.log(origin,'new origin in component ')


  try {
    const res = await fetch(`${origin}/api/properties`);
    if (!res.ok) {
      throw new Error(`Failed to fetch properties: ${res.status} - ${res.statusText}`);
    }
    const properties = await res.json();
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
              {/* Add other details here as needed */}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in PropertyDetails:", error);
    return <div>Error loading property details.</div>;
  }
}

// REMOVE generateStaticParams - we're fetching in the component