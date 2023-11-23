import { useState, useEffect } from 'react';

const useFetchCalls = () => {
  const [calls, setCalls] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        fetch(`${process.env.BASE_URL}/activities`)
          .then((response) => response.json())
          .then((data) => setCalls(data));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [calls]);

  return { calls, loading, error };
};

export default useFetchCalls;
