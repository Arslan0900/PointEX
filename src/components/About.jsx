import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
    const { t, i18n } = useTranslation();
    const isLanguageRTL = i18n.language === 'ar';

    return (
        <div className='AboutSection'>
            <div  className={`AboutHeading ${isLanguageRTL ? 'AboutHeading-rtl' : ''}`}>
                <div  className={`titlesAbout ${isLanguageRTL ? 'titlesAbout-rtl' : ''}`}>
                    <div  className={`titleAbout ${isLanguageRTL ? 'titleAbout-rtl' : ''}`}>{t('aboutTitle')}</div>
                    <div className='title2About'>{t('aboutSubtitle')}</div>
                </div>
                <div className='Aboutbtn'>
                    <div className={`textabout ${isLanguageRTL ? 'textabout-rtl' : ''}`}>{t('becomePartner')}</div>
                </div>
            </div>
            <div className={`AboutSection1 ${isLanguageRTL ? 'AboutSection1-rtl' : ''}`}>
                <div className='mainAboutheadings'>
                    <div className={`straightline ${isLanguageRTL ? 'straightline-rtl' : ''}`} >
                        <div className={`first-About ${isLanguageRTL ? 'first-About-rtl' : ''}`}>
                            <div className='About-title'>{t('aboutSection1.title')}</div>
                            <div className='About-description'>{t('aboutSection1.description')}</div>
                        </div>
                    </div>
                    <div className={`maineading2 ${isLanguageRTL ? 'maineading2-rtl' : ''}`}>
                        <div className={`straightline2 ${isLanguageRTL ? 'straightline2-rtl' : ''}`}></div>
                        <div className={`secondabout ${isLanguageRTL ? 'secondabout-rtl' : ''}`}>
                            <div className='second-about-title'>{t('aboutSection2.title')}</div>
                            <div className='second-about-description'>{t('aboutSection2.description')}</div>
                        </div>
                    </div>
                </div>

                <div className='.mainAboutpic'>

                    <img src="Group 12.jpg" alt="" />
                </div>

            </div>
            <div className={`logosection ${isLanguageRTL ? 'logosection-rtl' : ''}`}>

                <img className='Fursan' src="Fursan.jpg " alt="" />
                <img className='mobily' src="Mobily.jpg" alt="" />
                <img className='zain' src="Zain.jpg" alt="" />
                <img className='mokafa' src="Mokafaa.jpg" alt="" />
                <img className='stc' src="Stc.jpg" alt="" />
                <img className='jarir' src="Jarir.jpg" alt="" />
            </div>
        </div>

    )
}

export default About


// import React from 'react'
// import './About.css'

// function About() {
//     return (
        
//         <div className='AboutSection'>

//             <div className='AboutHeading'>
//                 <div className='titlesAbout'>
//                     <div className='titleAbout'>
//                         Elivate Excellence Together
//                     </div>
//                     <div className='title2About'>
//                         Meet Our Valued Partner!
//                     </div>
//                 </div>
//                 <div className='Aboutbtn'>
//                     <div className='textabout ' >Become A Partner </div>
//                 </div>
//             </div>
//             <div className='AboutSection1'>
//                 <div className='mainAboutheadings'>
//                     <div className='straightline ' >
//                     <div className='first-About '>
//                         <div className='About-title'>
//                             About..
//                         </div>
//                         <div className='About-description'>
//                             AlFursan members enjoy a world of benefits: reward tickets, lounge access, extra luggage, priority wait-listing, and more. Plus, as a Saudia SkyTeam member, you can earn and redeem miles globally. Explore offers from our exclusive partners, including SkyTeam airlines, banks, hotels, car rentals, and telecom, to boost your miles and enhance your AlFursan experience.
//                         </div>
//                         </div>
//                     </div>
//                     <div className='maineading2'>
//                         <div className='straightline2'></div>
//                         <div className='secondabout'>
//                             <div className='second-about-title'> How to gain points?</div>
//                             <div className='second-about-description'>Join AlFursan for exclusive rewards, lounge access, extra baggage, and faster holiday redemptions with Silver and Gold Tiers.</div>
//                         </div>
                        
//                     </div>
                    
//                 </div>

//                 <div className='.mainAboutpic'>
                   
// <img src="Group 12.jpg" alt="" />
//                     </div>
                    
//             </div>
//             <div className='logosection'>
             
//                 <img className='Fursan' src="Fursan.jpg " alt="" />
//              <img  className='mobily' src="Mobily.jpg" alt="" />
//              <img  className='zain' src="Zain.jpg" alt="" />
//              <img  className='mokafa' src="Mokafaa.jpg" alt="" />
//              <img  className='stc' src="Stc.jpg" alt="" />
//              <img  className='jarir' src="Jarir.jpg" alt="" />
//             </div>
//         </div>
        
//     )
// }

// export default About