export class FetchAPI {
  private readonly config;

  data: any = [];
  isLoading: Boolean = false;
  limit: number;

  constructor(config: object) {
    this.config = config;
    this.limit = this.config.urlConfig.limit;
  }

  generateUrl(url: string, params) {
    const queryParams = new URLSearchParams(params);
    return `${url}?${queryParams.toString()}`;
  }

  urlWithDdb32(url, alias) {
    return url.replace("${alias}", alias);
  }

  async fetchData() {
    const { fetchDataUrl, urlConfig, alias } = this.config;

    try {
      this.isLoading = true;
      const response = await fetch(
        this.generateUrl(this.urlWithDdb32(fetchDataUrl, alias), urlConfig)
      );
      const newData = await response.json();

      this.data = [...this.data, ...newData.body.result];
    } catch (err) {
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  }
}
