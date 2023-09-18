import React, { useState, useEffect } from "react";
import useInfiniteScroll from "../../hooks/useInfinityScroll";

function InfinityScroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreData = () => {
    setIsLoading(true);
    // Simulate an API call or fetching more data
    return new Promise((resolve) => {
      setTimeout(() => {
        const newData = [
          ...data,
          `Item ${page * 10 + 1}`,
          `Item ${page * 10 + 2}`,
        ];
        setData(newData);
        setPage(page + 1);
        setIsLoading(false);
        resolve(); // Resolve the Promise when data is loaded
      }, 1000); // Simulated delay
    });
  };

  const hasMoreData = true; // Set this based on your data source

  const loadingMessage = isLoading ? "Loading..." : "End of List";

  // Use the useInfiniteScroll hook to handle scrolling
  const isLoadingMore = useInfiniteScroll(fetchMoreData, hasMoreData);

  useEffect(() => {
    if (isLoadingMore) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoadingMore]);

  return (
    <div className="container">
      <h1>InfinityScroll Example</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{loadingMessage}</p>
    </div>
  );
}

export default InfinityScroll;
