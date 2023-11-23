import React from 'react';
import Header from '../components/Header.jsx';
import BottomNav from '../components/BottomNav.jsx';
import useFetchCalls from '../hooks/useFetchCalls.jsx';
import CallCard from '../components/CallCard.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

const bugCallIds = [
  '639a0f0a328500b1a0fa9bf7',
  '639a0f11328500b1a0fa9bf9',
  '639a143c896e0d0f4bf88b2e',
  '639a10b8328500b1a0fa9c07',
  '639a0fe5328500b1a0fa9bfe',
  '639a144e896e0d0f4bf88b31',
  '639a1411896e0d0f4bf88b2b',
]

const ArchiveAllButton = ({ onClick }) => (
  <button
    className='flex flex-row items-center justify-start border-2 border-gray-100 rounded-lg px-4 py-4 bg-white w-full'
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
      <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
    </svg>
    <h2 className='text-center text-base text-gray-500 font-semibold ml-3'>
      Archive all calls
    </h2>
  </button>
);

const Home = () => {
  const { calls, loading, error } = useFetchCalls();
  const callsExceptArchived = calls ? calls.filter((call) => !call.is_archived && !bugCallIds.includes(call.id)) : [];

  const handleArchiveAllCall = () => {
    if (callsExceptArchived.length === 0) return;

    try {
      callsExceptArchived.forEach((call) => {
        fetch(`${process.env.BASE_URL}/activities/${call.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            is_archived: true,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
      );
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container relative'>
      <Header/>
      <section className='flex flex-col items-center justify-start w-full px-5 py-5 bg-gray-50 h-[526px] overflow-y-scroll'>
        <ArchiveAllButton onClick={handleArchiveAllCall}
        />
        {loading ? (
          <Loader/>
        ) : error ? (
          <ErrorMessage error={error}/>
        ) : callsExceptArchived && (
          <div className='w-full'>
            {callsExceptArchived.map((call) => (
              <CallCard key={call.id} call={call}/>
            ))}
          </div>
        )}
      </section>
      <BottomNav/>
    </div>
  );
};


export default Home;
