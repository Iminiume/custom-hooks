import { useState, useEffect } from "react";

const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to reset the state
    const resetState = () => {
      setData(null);
      setLoading(true);
      setError(null);
    };

    // Call the async function and handle the promise
    const fetchData = async () => {
      resetState();
      try {
        const result = await asyncFunction();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup effect (optional)
    return () => {
      // You can add any cleanup code here, if necessary.
    };
  }, [asyncFunction]);

  return { data, loading, error };
};

export default useAsync;
