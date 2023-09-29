import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Debounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500); // Debounce the search term

  useEffect(() => {
    // Execute a search function with the debounced search term
    const search = () => {
      // Your search logic here...
      console.log(`Searching for: ${debouncedSearch}`);
    };

    search();
  }, [debouncedSearch]);

  return (
    <div>
      <h1>Debounce Example</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Debounce;
