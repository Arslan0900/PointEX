import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function HeroBanner() {
  const { t, i18n } = useTranslation();
  const isLanguageRTL = i18n.language === 'ar';

  return (
    <div className='herosection'>
      <div className={`main-section-text ${isLanguageRTL ? 'main-section-text-rtl' : ''}`}>
        <div className='main-herosection'>{t('hero.mainText')}
          <div className={`btn-herosection ${isLanguageRTL ? 'btn-herosection-rtl' : ''}`}>
            <div className={`btn-text ${isLanguageRTL ? 'btn-text-rtl' : ''}`}>{t('hero.downloadApp')}</div>
          </div>
        </div>
      </div>
      <div className={`mobileimage ${isLanguageRTL ? 'mobileimage-rtl' : ''}`}>
        <div className='mobileimage2'></div>
        <div className='mobileimage1'></div>
      </div>
    </div>
  );
}

export default HeroBanner;





















// import React from 'react'
// import './Hero.css'

// function HeroBanner() {
//   return (
  
//     <div className='herosection'>
//        <div className='main-section-text'>
//        <div className='main-herosection'>Your Loyalty Rewards, All Under One Roof.
//        <div className='btn-herosection'>
//         <div className='btn-text'>Download App</div>
//        </div>
//        </div>
       
//        </div>
// <div className='mobileimage'>
// <div className='mobileimage2'></div>
// <div className='mobileimage1'></div>
// </div>
//     </div>
//   )
// }

// export default HeroBanner