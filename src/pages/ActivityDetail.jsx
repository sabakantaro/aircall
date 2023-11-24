import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav.jsx';
import Header from '../components/Header.jsx';
import dayjs from 'dayjs';
import Loader from '../components/Loader.jsx';
import useFetchCall from '../hooks/useFetchCall.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

const ActivityDetail = () => {
  const { id } = useParams();
  const { call, error, fetchCall } = useFetchCall(id);
  const navigation = useNavigate();

  const formatDuration = (durationMs) => {
    const seconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(seconds / 60);

    if (minutes > 0) {
      return `${minutes} minutes`;
    } else if (seconds === 0) {
      return '';
    }

    return `${seconds} seconds`;
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleArchive = () => {
    try {
      fetch(`${process.env.BASE_URL}/activities/${call.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_archived: true,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return null;
        })
        .then((data) => {
          console.log('Success to archive a call', data);
          fetchCall();
        });
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCall();
  }, []);

  return (
    <div className='container relative'>
      <Header/>
        <section className='flex flex-col items-center justify-center w-full bg-gray-50 h-[526px] overflow-y-scroll relative'>
          <button
            className='absolute top-5 left-5 flex flex-row items-center justify-center rounded-full w-10 h-10 bg-white shadow-md'
            onClick={() => navigation(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
          </button>
          {error ? (
            <ErrorMessage error={error}/>
          ) : !call ? (
            <Loader/>
          ) : (
            <div className="rounded-lg overflow-hidden w-full px-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex justify-center items-center w-40 h-40 overflow-hidden bg-gray-100 rounded-full">
                  <svg className="w-48 h-48 text-gray-300 mt-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold text-gray-400 py-3">
                  {call.from ? `+${call.from.toString().split('').slice(0, 2).join('')} ${call.from.toString().split('').slice(2, 3).join('')} ${call.from.toString().split('').slice(3, 5).join('')} ${call.from.toString().split('').slice(5, 7).join('')} ${call.from.toString().split('').slice(7, 9).join('')}` : 'Unknown'}
                  ・
                  {capitalizeFirstLetter(call.direction)}
                </h1>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden p-6">
                <p className="text-base text-gray-500 font-semibold">
                  {dayjs(call.created_at).format('MMMM, DD YYYY')}
                </p>
                <p className="text-base text-gray-400 font-semibold">
                  {dayjs(call.created_at).format('HH:mm')}
                </p>
                <p className="text-base text-gray-400 font-semibold">{capitalizeFirstLetter(call.call_type)}</p>
                <p className="text-base text-gray-400 font-semibold">{formatDuration(call.duration)}</p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <button disabled className="flex flex-row items-center justify-center rounded-lg w-full h-10 bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='fill-gray-300'>
                      <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'/>
                    </svg>
                    <h2 className='text-center text-xs text-gray-300 font-semibold ml-1'>
                      Call back
                    </h2>
                  </button>
                  <button disabled className="flex flex-row items-center justify-center rounded-lg w-full h-10 bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='fill-gray-300'>
                      <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>
                    </svg>
                    <h2 className='text-center text-xs text-gray-300 font-semibold ml-1'>
                      Message
                    </h2>
                  </button>
                  <button
                    disabled={call.is_archived}
                    className={`flex flex-row items-center justify-center rounded-lg w-full h-10 ${call.is_archived ? 'bg-gray-100' : 'bg-white shadow-md hover:bg-gray-100'}`}
                    onClick={handleArchive}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='fill-gray-300'>
                      <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
                    </svg>
                    <h2 className={ `text-center text-xs font-semibold ml-1 ${call.is_archived ? 'text-gray-300' : 'text-gray-500'}`}>
                      Archive
                    </h2>
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      <BottomNav/>
    </div>
  )
}

export default ActivityDetail
