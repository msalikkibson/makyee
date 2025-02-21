// app/page.js (or pages/index.js)

import PropertyList from "./components/PropertyList";

export default async function Home() {
  // Fetch properties data inside the component using async
  const res = await fetch('http://localhost:3001/api/properties');
  const properties = await res.json();

  return (
    <div className="container mx-auto p-4">
      <PropertyList properties={properties} />
    </div>
  );
}
