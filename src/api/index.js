export const exampleConfig = () => {
  return {
    fetchDataUrl:
      "https://gateway.telewebion.com/ghatreh/api/v3/contents/products/serialEpisodes/${alias}",
    alias: "ddb32",
    urlConfig: {
      season: 1,
      page: 0,
      limit: 10,
      sort: "DESC",
    },
    episodeClick: {
      destinationUrl: "https://player.telewebion.com/",
      onClickCallback: (link) => {
        console.log(link);
      },
    },
    order: 4,
    seasons: 2,
  };
};
