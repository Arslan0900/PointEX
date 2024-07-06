import React from 'react';
import { useTranslation } from 'react-i18next';
import './Picsection.css';

function PicSection() {
  const { i18n } = useTranslation();

  // Check if the current language direction is RTL
  const isRTL = i18n.dir() === 'rtl';

  return (
    <div>
     
      {isRTL ? (
        <img className='Pic-section' src="Group 103.jpg" alt="" />
        
      ) : (
        <img className='Pic-section' src="Group 102.jpg" alt="" />
      )}
    </div>
  );
}

export default PicSection;
