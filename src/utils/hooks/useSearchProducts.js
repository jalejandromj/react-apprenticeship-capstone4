import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useSearchProducts(searchTerm, url) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchProducts, setSearchProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getSearchProducts() {
      let endpoint = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        '[[at(document.type, "product")]]'
                      )}&q=${encodeURIComponent(
                        `[[fulltext(document, "${searchTerm}")]]`
                      )}&lang=en-us&pageSize=20`;
      if(url)
        endpoint = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${url}`;

      try {
        setSearchProducts({ data: {}, isLoading: true });

        const response = await fetch(endpoint,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setSearchProducts({ data, isLoading: false });
      } catch (err) {
        setSearchProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getSearchProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, searchTerm, url]);

  return searchProducts;
}
