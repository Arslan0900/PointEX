

import React from 'react';
import { useTranslation } from 'react-i18next';
import './features.css';

function Features() {
  const { t, i18n } = useTranslation();
  const isLanguageRTL = i18n.language === 'ar';
  return (
    <div className='main-features'>
      <div className={`feature-1 ${isLanguageRTL ? 'feature-1-rtl' : ''}`}>
        <div  className={`feature-text-1 ${isLanguageRTL ? 'feature-text-1-rtl' : ''}`}>{t('features.title')}</div>
      <div  className={`feature-text-2 ${isLanguageRTL ? 'feature-text-2-rtl' : ''}`}>{t('features.subtitle')}</div>
      </div>
      <div className='features-gif'>
        <div className='gif-video'>
          <div className='gif-video-1'></div>
          <div className='features-textdetails' >
            <div className='features-textdetails-1'>{t('features.allInOneHub')}</div>
            <div  className={`features-textdetails-2 ${isLanguageRTL ? 'features-textdetails-2-rtl' : ''}`}>{t('features.allInOneHubDescription')}</div>
          </div>
        </div>
        <div className='gif-video'>
          <div className='gif-video-2'></div>
          <div className='features-textdetails'>
            <div className='features-textdetails-1'>{t('features.phoneNumberKey')}</div>
            <div  className={`features-textdetails-2 ${isLanguageRTL ? 'features-textdetails-2-rtl' : ''}`}>{t('features.phoneNumberKeyDescription')}</div>
          </div>
        </div>
        <div className='gif-video'>
          <div className='gif-video-3'></div>
          <div className='features-textdetails'>
            <div className='features-textdetails-1'>{t('features.earnAndTransfer')}</div>
            <div className={`features-textdetails-2 ${isLanguageRTL ? 'features-textdetails-2-rtl' : ''}`}>{t('features.earnAndTransferDescription')}</div>
          </div>
        </div>
        <div className='gif-video'>
          <div className='gif-video-4'></div>
          <div className='features-textdetails'>
            <div className='features-textdetails-1'>{t('features.voucherFriendly')}</div>
            <div className='features-textdetails-2'>{t('features.voucherFriendlyDescription')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

































// import React from 'react'
// import './features.css'
// function Features() {
//   return (
//     <div className='main-features'>
//       <div className='feature-1'>
//         <div className='feature-text-1'>Discover the Heartbeat of your rewards</div>
//         <div className='feature-text-2'>Features</div>
//       </div>
//       <div className='features-gif'>
//         <div className='gif-video'>
//           <div className='gif-video-1'>   </div>
//           <div features-textdetails>
//             <div className='features-textdetails-1'>All-in-One Hub</div>
//             <div className='features-textdetails-2'>Consolidate your points from multiple partners here, providing a comprehensive 360-degree view.</div>

//           </div>
//         </div>
//         <div className='gif-video'>
//           <div className='gif-video-2'>   </div>
//           <div features-textdetails>
//             <div className='features-textdetails-1'>Your Phone Number is the Key</div>
//             <div className='features-textdetails-2'>With your mobile number, you can perform a range of actions: register, transfer, and earn!</div>

//           </div>
//         </div>
//         <div className='gif-video'>
//           <div className='gif-video-3'>   </div>
//           <div features-textdetails>
//             <div className='features-textdetails-1'>Earn from All & Transfer to Any</div>
//             <div className='features-textdetails-2'>Effortlessly earn rewards from all registered partners and redeem them with any of them.</div>

//           </div>
//         </div>
//         <div className='gif-video'>
//           <div className='gif-video-4'>   </div>
//           <div features-textdetails>
//             <div className='features-textdetails-1'>Voucher Friendly</div>
//             <div className='features-textdetails-2'>Generate and utilize valuable vouchers that are accepted by a wide range of partners.</div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Features