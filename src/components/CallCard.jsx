import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const CallCard = ({ call }) => (
  <div key={call.id}>
    <p className='text-center text-base font-semibold text-gray-300 font-mono my-2'>
      {dayjs(call.created_at).format('MMM, DD YYYY')}
    </p>
    <Link to={`/call/${call.id}`} className='flex justify-between items-center border-2 border-gray-100 rounded-lg px-4 py-2 bg-white'>
      <div className='flex flex-row items-center justify-center'>
        <div className='relative w-6 h-6 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className='fill-red-400 absolute -top-[1px] right-[2px]'>
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" className='fill-gray-300'>
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
        </div>
        <div className='flex flex-col items-start justify-center'>
          <h2 className='text-left text-lg text-gray-500 font-semibold ml-3'>
            {call.from ? `+${call.from.toString().split('').slice(0, 2).join('')} ${call.from.toString().split('').slice(2, 3).join('')} ${call.from.toString().split('').slice(3, 5).join('')} ${call.from.toString().split('').slice(5, 7).join('')} ${call.from.toString().split('').slice(7, 9).join('')}` : 'Unknown'}
          </h2>
          <p className='text-center text-sm text-gray-400 line-clamp-1 ml-3'>
            tried to call on {' '}
            <span className='font-semibold'>{call.to}</span>
          </p>
        </div>
      </div>
      <p className='text-center text-xs font-semibold text-gray-300'>
        {dayjs(call.created_at).format('hh:mm A')}
      </p>
    </Link>
  </div>
);

export default CallCard;