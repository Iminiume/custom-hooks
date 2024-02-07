import React, { useEffect, useRef, useState } from "react";
import UsePagination from "../../hooks/usePagination";
import { exampleConfig } from "../../api";
import "./style.css";
function Pagination() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UsePagination(exampleConfig(), ".box-container");
        console.log(result);
        setData((prevData) => [...prevData, ...result]);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Pagination Example</h1>
      <div className="box-container">
        {data?.map((item, i) => {
          return (
            <div key={i} className="box-item">
              {item.alias}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Pagination;
