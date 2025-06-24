const client = {
  async get(url, options = {}) {
    const { headers: customHeaders, ...restOptions } = options;

    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...customHeaders,
      },
      ...restOptions,
    };

    try {
      const response = await fetch(url, defaultOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },
};

export default client; 