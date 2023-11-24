import React from 'react';

const ArchiveButton = ({ children, onClick, disabled }) => (
  <button
    className={`flex flex-row items-center justify-start border-2 border-gray-100 rounded-lg px-4 py-4 bg-white w-full ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
    onClick={onClick}
    disabled={disabled}
  >
    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" className='fill-gray-500'>
      <path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
    </svg>
    <h2 className='text-center text-base text-gray-500 font-semibold ml-3'>
      {children}
    </h2>
  </button>
);

export default ArchiveButton;