class FetchAPI {
  private static instance: FetchAPI | null = null;
  private baseUrl: string;

  private constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public static getInstance(baseUrl: string): FetchAPI {
    if (!this.instance) {
      this.instance = new FetchAPI(baseUrl);
    }
    return this.instance;
  }

  public async get<R>(endpoint: string): Promise<R> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${endpoint}`);
    }
    return response.json();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async post<R>(endpoint: string, data: any): Promise<R> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error posting data to ${endpoint}`);
    }
    return response.json();
  }
}

export default FetchAPI;
