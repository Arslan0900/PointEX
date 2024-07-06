import React from 'react';
import { useTranslation } from 'react-i18next';
import './Newsletter.css';

function Newsletter() {
    const { t, i18n } = useTranslation();
  const isLanguageRTL = i18n.language === 'ar';

    return (
        <div className='Main-newsletter '>
            <div className={`newsletter-Text ${isLanguageRTL ? 'newsletter-Text-rtl' : ''}`}>
                <div className={`newletter-Text-1 ${isLanguageRTL ? 'newletter-Text-1-rtl' : ''}`}>{t('newsletter.unlockSecrets')}</div>
                <div className='newletter-Text-2'>{t('newsletter.joinNewsletter')}</div>
            </div>
            <div className='input-newsletter'>
                <input type="text" placeholder={t('newsletter.enterEmail')} className={`input-1 ${isLanguageRTL ? 'input-1-rtl' : ''}`}/>
                <div className='Action-button'>
                    <div className='buttontext'>{t('newsletter.subscribe')}</div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;

















// import React from 'react'
// import './Newsletter.css'
// function Newsletter() {
//     return (
//         <div className='Main-newsletter '>
//             <div className='newsletter-Text'>
//                 <div className='newletter-Text-1'>Unlock the Secrets </div>
//                 <div className='newletter-Text-2'>Join Our Newsletter for Exclusive Insights!</div>
//             </div>
//             <div className='input-newsletter'>
//                 <input  className='input-1' type="text" placeholder='Enter Your Email' />
//                 <div className='Action-button'>
//                     <div className='buttontext'> Subscribe</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Newsletter