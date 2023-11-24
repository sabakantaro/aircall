import React from 'react';
import Header from '../components/Header.jsx';
import BottomNav from '../components/BottomNav.jsx';
import useFetchCalls from '../hooks/useFetchCalls.jsx';
import CallCard from '../components/CallCard.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

const Archive = () => {
  const { calls, loading, error } = useFetchCalls({ callType: 'voicemail' });

  return (
    <div className='container relative'>
      <Header/>
      <section className='flex flex-col items-center justify-start w-full px-5 py-5 bg-gray-50 h-[526px] overflow-y-scroll'>
        {loading ? (
          <Loader/>
        ) : error ? (
          <ErrorMessage error={error}/>
        ) : calls && calls.length > 0 ? (
          <div className='w-full'>
            {calls.map((call) => (
              <CallCard key={call.id} call={call}/>
            ))}
          </div>
        ) : calls && calls.length === 0 ? (
          <div className='w-full'>
            <p className='text-center text-2xl text-gray-500 font-semibold mt-5'>
              No voicemails
            </p>
          </div>
        ) : null}
      </section>
      <BottomNav/>
    </div>
  );
};


export default Archive;
