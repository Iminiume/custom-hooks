import { useState, useEffect } from "react";

function useInfiniteScroll(fetchMoreData, hasMoreData) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!isLoading && hasMoreData) {
        const { scrollTop, clientHeight, scrollHeight } =
          document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 100) {
          setIsLoading(true);
          fetchMoreData()
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, hasMoreData, fetchMoreData]);

  return isLoading;
}

export default useInfiniteScroll;
