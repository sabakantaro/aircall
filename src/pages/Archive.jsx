import React from 'react';
import Header from '../components/Header.jsx';
import BottomNav from '../components/BottomNav.jsx';
import useFetchCalls from '../hooks/useFetchCalls.jsx';
import CallCard from '../components/CallCard.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import ArchiveButton from '../components/ArchiveButton.jsx';

const Archive = () => {
  const { calls, loading, error, refetch } = useFetchCalls({ includeArchived: true});

  const handleResetArchivedCalls = () => {
    try {
      fetch(`${process.env.BASE_URL}/reset`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return null;
        })
        .then((data) => {
          console.log('Success to archive all calls', data);
          refetch();
        });
    }
    catch (error) {
      console.error(error);
    }
  }

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
            <ArchiveButton onClick={() => handleResetArchivedCalls()} disabled={calls && calls.length === 0}>
              Reset archived calls
            </ArchiveButton>
            {calls.map((call) => (
              <CallCard key={call.id} call={call}/>
            ))}
          </div>
        ) : calls && calls.length === 0 ? (
          <div className='w-full'>
            <p className='text-center text-2xl text-gray-500 font-semibold mt-5'>
              No archived calls
            </p>
          </div>
        ) : null}
      </section>
      <BottomNav/>
    </div>
  );
};


export default Archive;
