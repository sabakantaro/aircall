import React from 'react';
import NavigationLink from './NavigationLink.jsx'

const navLinks = [
  {
    linkUrl: '/voicemail',
    iconPath: 'M144 320a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm119.8 0c15.3-22.9 24.2-50.4 24.2-80c0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144H496c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80H263.8zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160z',
    label: 'Voicemail Feeds',
    height: '1.5rem'
  },
  {
    linkUrl: '/',
    iconPath: 'M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z',
    label: 'Activity Feeds',
    height: '2rem'
  },
  {
    linkUrl: '/archive',
    iconPath: 'M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z',
    label: 'Archive Feeds',
    height: '2rem'
  },];

const SVGIcon = ({ path, label, height }) => (
  <svg role="img" aria-label={label} xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 512 512" className='fill-gray-500 w-full'>
    <path d={path} />
  </svg>
);

const BottomNav = () => {
  return (
    <nav className='sticky bottom-0 left-0 right-0 mx-auto h-16 w-full border-t border-gray-300 grid grid-cols-3 bg-white'>
      {navLinks.map((link, index) => (
        <NavigationLink key={index} linkUrl={link.linkUrl}>
          <SVGIcon path={link.iconPath} label={link.label} height={link.height} />
        </NavigationLink>
      ))}
    </nav>
  );
};

export default BottomNav;
