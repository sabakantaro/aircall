import { useState, useEffect } from 'react';
import { bugCallIds } from '../utils/constants.js';

const useFetchCalls = ({includeArchived = null, callType = ''}) => {
  const [calls, setCalls] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = () => {
    setLoading(true);
    try {
      fetch(`${process.env.BASE_URL}/activities`)
        .then((response) => response.json())
        .then((data) => {
          setCalls(
            data.filter((call) => !bugCallIds.includes(call.id) &&
            (includeArchived === null ? true : includeArchived ? call.is_archived : !call.is_archived) &&
            (callType === 'voicemail' ? call.call_type === 'voicemail' : call.call_type !== 'voicemail')
          ));
          console.log('fetchData', data);
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    console.log('refetch');
    fetchData();
  };

  return { calls, loading, error, refetch };
};

export default useFetchCalls;
