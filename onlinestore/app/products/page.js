import React from "react";
// Assuming you have imported 'fetch' appropriately, there's no need to show it here.

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products/1');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

export default async function Products() {
  try {
    const data = await getData();
    console.log(data); // Logging the data to console (optional)

    return (
      <>
        <h1>Home</h1>
        
      </>
    );
  } catch (error) {
    // Handle the error, display an error message, or do something else
    console.error(error);
    return <p>Error: Failed to fetch data</p>;
  }
}
