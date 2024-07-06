import React from 'react';
import { useTranslation } from 'react-i18next';
import './work.css';
import { GoSmiley } from "react-icons/go";
import { RiTokenSwapLine } from "react-icons/ri";
import { BiPieChartAlt2 } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";

function Work() {
  const { t, i18n } = useTranslation();
  const isLanguageRTL = i18n.language === 'ar';
  return (
    <div className='main-work'>
      <div  className={`work-section-1 ${isLanguageRTL ? 'work-section-1-rtl' : ''}`}>
        <div  className={`work-text-1 ${isLanguageRTL ? 'work-text-1-rtl' : ''}`}>{t('discoverMagic')}</div>
        <div className='work-text-2'>{t('howItWorks')}</div>
      </div>
      <div className='vector-main'></div>
      <div className={`work-section-2 ${isLanguageRTL ? 'work-section-2-rtl' : ''}`}>
        <div className={`step-1 ${isLanguageRTL ? 'step-1-rtl' : ''}`}>
          {/* Step 1 */}
          <div  className={`circle ${isLanguageRTL ? 'circle-rtl' : ''}`}>
            <div className="circle-1"></div>
            <div className="circle-text">1</div>
          </div>
          <div className='content-1'>
            <div className='icon-1'>
              <div className='calm-face'>
                <GoSmiley style={{ fontSize: '34px', color: ' #FFFFFF', backgroundColor: 'transparent' }} />
              </div>
            </div>
            <div className='content-text'>
              <div className={`content-text-1 ${isLanguageRTL ? 'content-text-1-rtl' : ''}`}>{t('step1.title')}</div>
              <div className='content-text-2'>{t('step1.description')}</div>
            </div>
          </div>
        </div>
        <div className='step-1'>
          {/* Step 2 */}
          <div className="circle" >
            <div className="circle-2"></div>
            <div className="circle-text">2</div>
          </div>
          <div className='content-1'>
            <div className='icon-2'>
              <div className='calm-face'>
                <RiTokenSwapLine style={{ fontSize: '30px', color: ' #FFFFFF', backgroundColor: 'transparent' }} />
              </div>
            </div>
            <div className='content-text'>
              <div className={`content-text-1 ${isLanguageRTL ? 'content-text-3-rtl' : ''}`}>{t('step2.title')}</div>
              <div className='content-text-2'>{t('step2.description')}</div>
            </div>
          </div>
        </div>
        <div className='step-1'>
          {/* Step 3 */}
          <div className="circle">
            <div className="circle-3"></div>
            <div className="circle-text">3</div>
          </div>
          <div className='content-1'>
            <div className='icon-3'>
              <div className='calm-face'>
                <BiPieChartAlt2 style={{ fontSize: '30px', color: ' #FFFFFF', backgroundColor: 'transparent' }} />
              </div>
            </div>
            <div className='content-text'>
              <div className={`content-text-1 ${isLanguageRTL ? 'content-text-1-rtl' : ''}`}>{t('step3.title')}</div>
              <div className={`content-text-2 ${isLanguageRTL ? 'content-text-2-rtl' : ''}`}>{t('step3.description')}</div>
            </div>
          </div>
        </div>
        <div className='step-1'>
          {/* Step 4 */}
          <div className="circle " >
            <div className="circle-4"></div>
            <div className="circle-text">4</div>
          </div>
          <div className='content-1'>
            <div className='icon-4'>
              <div className='calm-face'>
                <CgShoppingBag style={{ fontSize: '30px', color: ' #FFFFFF', backgroundColor: 'transparent' }} />
              </div>
            </div>
            <div className='content-text'>
              <div className={`content-text-1 ${isLanguageRTL ? 'content-text-4-rtl' : ''}`}>{t('step4.title')}</div>
              <div className='content-text-2'>{t('step4.description')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;





















// import React from 'react'
// import './work.css'
// import { GoSmiley } from "react-icons/go";
// import { RiTokenSwapLine } from "react-icons/ri";
// import { BiPieChartAlt2 } from "react-icons/bi";
// import { CgShoppingBag } from "react-icons/cg";

// function Work() {
//   return (
//     <div className='main-work'>
//       <div className='work-section-1'>
//         <div className='work-text-1'>Discover the magic behind our product</div>
//         <div className='work-text-2'> How PointEX works?</div>
//       </div>
//       <div className='vector-main'></div>
//       <div className='work-section-2'>
//         <div className='step-1'>
//           <div className="circle">
//             <div className="circle-1"></div>
//             <div className="circle-text">1</div>
//           </div>
//           <div className='content-1'>

//             <div className='icon-1'>
//               <div className='calm-face'>
//                 <GoSmiley style={{ fontSize: '34px', color: ' #FFFFFF', backgroundColor: 'transparent' }} />
//               </div>
//             </div>
//             <div className='content-text'>
//               <div className='content-text-1'>Register</div>
//               <div className='content-text-2'>Register in one step by phone number</div>
//             </div>
//           </div>
          
//         </div>
//         <div className='step-1'>
//           <div className="circle" >
//             <div className="circle-2"></div>
//             <div className="circle-text">2</div>
//           </div>
//           <div className='content-1'>

//             <div className='icon-2'>
//               <div className='calm-face'>
//                 < RiTokenSwapLine  style={{ fontSize: '30px', color: ' #FFFFFF', backgroundColor: 'transparent' }} />
//               </div>
//             </div>
//             <div className='content-text'>
//               <div className='content-text-1'>Transfer</div>
//               <div className='content-text-2'>Transfer PointEX to registered partners</div>
//             </div>
//           </div>
          
//         </div>
//         <div className='step-1'>
//           <div className="circle">
//             <div className="circle-3"></div>
//             <div className="circle-text">3</div>
//           </div>
//           <div className='content-1'>

//             <div className='icon-3'>
//               <div className='calm-face'>
//                 <BiPieChartAlt2  style={{ fontSize: '30px', color: ' #FFFFFF', backgroundColor: 'transparent' }} />
//               </div>
//             </div>
//             <div className='content-text'>
//               <div className='content-text-1'>View</div>
//               <div className='content-text-2'>Have 360 view of registered partners points</div>
//             </div>
//           </div>
          
//         </div>
//         <div className='step-1'>
//           <div className="circle " >
//             <div className="circle-4"></div>
//             <div className="circle-text">4</div>
//           </div>
//           <div className='content-1'>

//             <div className='icon-4'>
//               <div className='calm-face'>
//                 <CgShoppingBag style={{ fontSize: '30px', color: ' #FFFFFF', backgroundColor: 'transparent' }} />
//               </div>
//             </div>
//             <div className='content-text'>
//               <div className='content-text-1'>Radeem</div>
//               <div className='content-text-2'>Redeem Rewards, Reap the Benefits!</div>
//             </div>
//           </div>
        
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Work