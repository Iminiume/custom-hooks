import { FetchAPI } from "../utils/fetch-api/fetchApi";

export default async function UsePagination(config, element) {
  let fetchConfig = {
    fetchDataUrl: config.fetchDataUrl,
    urlConfig: config.urlConfig || {},
    alias: config.alias,
  };

  let dataLength = 0;
  let data;
  let firstFetch = true;
  const containerElement = document.querySelector(element);

  const handleScroll = async () => {
    if (hasMoreData()) {
      const { scrollTop, clientHeight, scrollHeight } = containerElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchConfig.urlConfig.page += 1;
        await infinityFetch(fetchConfig);
        return data;
      }
    }
  };

  containerElement?.addEventListener("scroll", handleScroll);

  const hasMoreData = () => {
    return dataLength >= fetchConfig.urlConfig.limit;
  };

  const infinityFetch = async ({ fetchDataUrl, alias, urlConfig }) => {
    const fetchedApi = new FetchAPI({ fetchDataUrl, alias, urlConfig });
    await fetchedApi.fetchData();

    fetchConfig.urlConfig.limit = fetchedApi.limit;
    dataLength = fetchedApi.data.length;
    data = fetchedApi.data;
  };

  if (firstFetch) {
    await infinityFetch(fetchConfig);
    firstFetch = false;
    return data;
  }
}
