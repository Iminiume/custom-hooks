export const handleScroll = (): void => {
  if (hasMoreData()) {
    const { scrollTop, clientHeight, scrollHeight } = this.childrenElement!;
    if (scrollTop + clientHeight >= scrollHeight) {
      fetchConfig.page += 1;
      infinityFetch().then(() => {
        addEpisodeItems();
      });
    }
  }
};
export const infinityFetch = async (): Promise<void> => {
  const fetchedApi = FetchEpisodes(this.makeFetchConfig());
  await fetchedApi.fetchData();

  this.fetchConfig.limit = fetchedApi.limit;
  this.dataLength = fetchedApi.data.length;
  this.data = fetchedApi.data;
};
