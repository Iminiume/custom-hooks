import React from "react";
import usePagination from "../../hooks/usePagination";

const fetchDataForPage = async (startIndex, endIndex) => {
  // Simulate fetching paginated data
  const data = Array.from({ length: endIndex - startIndex }, (_, index) => ({
    id: startIndex + index + 1,
    name: `Item ${startIndex + index + 1}`,
  }));
  return data;
};

const Pagination = () => {
  const {
    currentPage,
    data,
    loading,
    error,
    itemsPerPage,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(fetchDataForPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Paginated Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div>
        Page {currentPage} of {Math.ceil(data.length / itemsPerPage)}
      </div>
      <div>
        Go to Page:
        <input
          type="number"
          min="1"
          max={Math.ceil(data.length / itemsPerPage)}
          value={currentPage}
          onChange={(e) => goToPage(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Pagination;
