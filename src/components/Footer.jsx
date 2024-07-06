import React from 'react'
import { useTranslation } from 'react-i18next';
import './footer.css'
function Footer() {
  const { t, i18n } = useTranslation();
  const isLanguageRTL = i18n.language === 'ar';
  return (
    <div className='footer-main'>
      <div  className={`footer-bar ${isLanguageRTL ? 'footer-bar-rtl' : ''}`} >
        <img className='logodiv' src="Logo.jpg" alt="" />
        <div  className={`Navbar-footer ${isLanguageRTL ? 'Navbar-footer-rtl' : ''}`}>
            <div className='navbar-items-2'>{t('navbar-footer.product')}</div>
            <div className='navbar-items-1'>{t('navbar-footer.downloadApp')}</div>
            <div className='navbar-items-1'>{t('navbar-footer.terms')}</div>
            <div className='navbar-items-2'>{t('navbar-footer.becomePartner')}</div>
            <div className='navbar-items-2'>{t('navbar-footer.contactUs')}</div>
            <div className='navbar-items-1'>{t('navbar-footer.language')}</div>
        </div>
        <div className={`icons-footer ${isLanguageRTL ? 'icons-footer-rtl' : ''}`}>
          <img className='imgicon' src="image 3.jpg" alt="" />
          <img className='imgicon' src="image 4.jpg" alt="" />
          <img className='imgicon' src="image 5.jpg" alt="" />
        </div>
      </div>
      <div className='line-footer'></div>
      <div  className={`last-footer ${isLanguageRTL ? 'last-footer-rtl' : ''}`}>© 2023 PointEx Inc.</div>
    </div>
  )
}

export default Footer













// import React from 'react'
// import './footer.css'
// function Footer() {
//   return (
//     <div className='footer-main'>
//       <div className='footer-bar'>
//         <img className='logodiv' src="Logo.jpg" alt="" />
//         <div className='Navbar-footer'>
//           <div className='navbar-items'>Our Product</div>
//           <div className='navbar-items'>Download App</div>
//           <div className='navbar-items'>Terms & Conditions</div>
//           <div className='navbar-items'>Become a Partner</div>
//           <div className='navbar-items'>Contact us</div>
//           <div className='navbar-items'>العربية </div>
//         </div>
//         <div className='icons-footer'>
//           <img className='imgicon' src="image 3.jpg" alt="" />
//           <img className='imgicon' src="image 4.jpg" alt="" />
//           <img className='imgicon' src="image 5.jpg" alt="" />
//         </div>
//       </div>
//       <div className='line-footer'></div>
//       <div className='last-footer'>© 2023 PointEx Inc.</div>
//     </div>
//   )
// }

// export default Footer