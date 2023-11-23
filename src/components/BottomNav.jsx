import React from 'react';
import NavigationLink from './NavigationLink.jsx'

const navLinks = [
  {
    linkUrl: '/',
    iconPath: 'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z',
    label: 'Activity Feeds',
    height: '2rem'
  },
  {
    linkUrl: '/archived',
    iconPath: 'M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z',
    label: 'Archived Feeds',
    height: '2rem'
  },
];

const SVGIcon = ({ path, label, height }) => (
  <svg role="img" aria-label={label} xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 512 512">
    <path d={path} />
  </svg>
);

const BottomNav = () => {
  return (
    <nav className='sticky bottom-0 left-0 right-0 mx-auto h-16 w-full border-t border-gray-300 grid grid-cols-2 bg-white'>
      {navLinks.map((link, index) => (
        <NavigationLink key={index} linkUrl={link.linkUrl}>
          <SVGIcon path={link.iconPath} label={link.label} height={link.height} />
        </NavigationLink>
      ))}
    </nav>
  );
};

export default BottomNav;
