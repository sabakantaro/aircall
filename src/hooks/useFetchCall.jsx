import { useState } from 'react';

const useFetchCall = (id) => {
  const [call, setCall] = useState(null);
  const [error, setError] = useState(null);

  const fetchCall = () => {
    try {
      fetch(`${process.env.BASE_URL}/activities/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('fetchCall', data);
          setCall(data);
        });
    } catch (error) {
      setError(error);
    }
  };

  return { call, error, fetchCall };
};

export default useFetchCall;
