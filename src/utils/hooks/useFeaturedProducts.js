import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFeaturedProducts(resultsPerPage, url) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedProducts() {
      let endpoint = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                      '[[at(document.type, "product")]]'
                      )}&lang=en-us&pageSize=${resultsPerPage}`;
      if(url)
        endpoint = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${url}`;

      try {
        setFeaturedProducts({ data: {}, isLoading: true });
        
        const response = await fetch(endpoint,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setFeaturedProducts({ data, isLoading: false });
      } catch (err) {
        setFeaturedProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, url]);

  return featuredProducts;
}
