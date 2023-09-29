import React from "react";
import useAsync from "../../hooks/useAsync";

const fetchDataFromAPI = async () => {
  // Simulate an asynchronous operation, e.g., fetching data from an API
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

const Async = () => {
  // Use the useAsync hook with your async function
  const { data, loading, error } = useAsync(fetchDataFromAPI);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  // Render your component with the fetched data
  return (
    <div>
      <h1>Async Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Async;
