import { useState, useEffect } from "react";

const usePagination = (getData, initialPage = 1, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const result = await getData(startIndex, endIndex);
        setData(result);
        setError(null);
      } catch (err) {
        setError(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage, getData]);

  const goToPage = (page) => {
    if (page >= 1) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  return {
    currentPage,
    data,
    loading,
    error,
    itemsPerPage,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default usePagination;
