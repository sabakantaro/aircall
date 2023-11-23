import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav.jsx';
import Header from '../components/Header.jsx';

const Call = () => {
  const { id } = useParams();
  const [call, setCall] = useState({});
  const navigation = useNavigate();

  const fetchCall = useCallback(() => {
    try {
        fetch(`${process.env.BASE_URL}/activities/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then((response) => response.json())
          .then((data) => setCall(data));
    }
    catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchCall();
  }, []);

  if (!call) return null;

  return (
    <div className='container relative'>
      <Header/>
        <section className='flex flex-col items-center justify-start w-full px-5 py-5 bg-gray-50 h-[526px] overflow-y-scroll relative'>
          <button
            className='absolute top-5 left-5 flex flex-row items-center justify-center rounded-full w-10 h-10 bg-white shadow-md'
            onClick={() => navigation(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
          </button>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 w-80 mx-auto mt-16">
            <h1 className="text-2xl font-semibold text-white">Call {call.from}</h1>
            <div className="flex flex-col space-y-2">
              <p className="text-base text-gray-400 font-semibold">Tried to call on {call.to}</p>
              <p className="text-base text-gray-400 font-semibold">{call.via}</p>
              <p className="text-base text-gray-400 font-semibold">{call.duration}</p>
              <p className="text-base text-gray-400 font-semibold">{call.direction}</p>
              <p className="text-base text-gray-400 font-semibold">{call.call_type}</p>
              <p className="text-base text-gray-400 font-semibold">
                {call.is_archived ? 'Archived' : 'Not Archived'}
              </p>
              <p className="text-base text-gray-400 font-semibold">
                {new Date(call.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        </section>
      <BottomNav/>
    </div>
  )
}

export default Call
