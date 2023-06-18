import { useState, useEffect } from 'react';

export function useFetch(requestUrl, initData = null) {
  const [url, setUrl] = useState(requestUrl);
  const [state, setState] = useState({ data: initData, loading: true, error: null });

  useEffect(() => {
    (async () => {
      setState({ data: null, loading: true, error: null });
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState({ loading: false, data, error: null });
      } catch (error) {
        setState({ loading: false, error, data: null });
      }
    })();
  }, [url]);

  return [state, setUrl];
}
