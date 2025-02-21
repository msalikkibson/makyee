export async function GET() {
    // Mocking API response
    const properties = [
      {
        id: 1,
        title: "Luxury Apartment in Dubai Marina",
        price: "2,500,000 AED",
        image_url: "https://kibsecomimgstore.blob.core.windows.net/kibsons-ent/638757581201404144_apartmentone.jpg",
      },
      {
        id: 2,
        title: "Villa in Palm Jumeirah",
        price: "10,000,000 AED",
        image_url: "https://kibsecomimgstore.blob.core.windows.net/kibsons-ent/638757581201690701_apartmenttwo.jpg",
      },
    ];
  
    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  