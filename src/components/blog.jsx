import React from 'react';
import { useTranslation } from 'react-i18next';
import './blog.css';

function Blog() {
  const { t, i18n } = useTranslation();
  const isLanguageRTL = i18n.language === 'ar';

  return (
    <div className='blogsection'>
      <div className={`ourblog ${isLanguageRTL ? 'ourblog-rtl' : ''}`} >
        <div className='textblog'>{t('blog.sparkImagination')}</div>
        <div className='textbloghd'>{t('blog.ourBlog')}</div>
      </div>
      <div className='blogcard'>
        <div className='blogcard1'>
          <img className='cardimg' src="Group 13.jpg" alt="" />
          <div className='carddata'>
            <div  className={`blogtitle ${isLanguageRTL ? 'blogtitle-rtl' : ''}`} >{t('blog.blogTitle')}</div>
            <div className={`blogdescription ${isLanguageRTL ? 'blogdescription-rtl' : ''}`}>{t('blog.blogDescription')}</div>
            <div className={`blogdate ${isLanguageRTL ? 'blogdate-rtl' : ''}`}>{t('blog.blogDate', { author: t('blog.authorName'), date: t('blog.date') })}</div>
          </div>
        </div>
        <div className='blogcard1'>
          <img className='cardimg' src="Group 14.jpg" alt="" />
          <div className='carddata'>
            <div className={`blogtitle ${isLanguageRTL ? 'blogtitle-rtl' : ''}`}>{t('blog.blogTitle')}</div>
            <div className={`blogdescription ${isLanguageRTL ? 'blogdescription-rtl' : ''}`}>{t('blog.blogDescription')}</div>
            <div className={`blogdate ${isLanguageRTL ? 'blogdate-rtl' : ''}`}>{t('blog.blogDate', { author: t('blog.authorName'), date: t('blog.date') })}</div>
          </div>
        </div>
        <div className='blogcard1'>
          <img className='cardimg' src="Group 15.jpg" alt="" />
          <div className='carddata'>
            <div className={`blogtitle ${isLanguageRTL ? 'blogtitle-rtl' : ''}`}>{t('blog.blogTitle')}</div>
            <div className={`blogdescription ${isLanguageRTL ? 'blogdescription-rtl' : ''}`}>{t('blog.blogDescription')}</div>
            <div className={`blogdate ${isLanguageRTL ? 'blogdate-rtl' : ''}`}>{t('blog.blogDate', { author: t('blog.authorName'), date: t('blog.date') })}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

















// import React from 'react'
// import './blog.css'
// function Blog() {
//   return (
//     <div className=' blogsection'>
//       <div className='ourblog'>
//         <div className='textblog'>Stories that Spark Imagination</div>
//         <div className='textbloghd'>Our Blog </div>
//       </div>
//       <div className='blogcard'>
//         <div className='blogcard1'>
//           <img className='cardimg' src="Group 13.jpg" alt="" />
//           <div className='carddata'>
//             <div className='blogtitle'>Blog Title</div>
//             <div className='blogdescription'>In this pivotal stage of our process, we take your ideas and aspirations and weave them into a tapestry of innovation. </div>
//             <div className='blogdate'>Abdullah Nasser - 1 Oct 2023</div>
//           </div>

//         </div>
//         <div className='blogcard1'>
//           <img className='cardimg' src="Group 14.jpg" alt="" />
//           <div className='carddata'>
//             <div className='blogtitle'>Blog Title</div>
//             <div className='blogdescription'>In this pivotal stage of our process, we take your ideas and aspirations and weave them into a tapestry of innovation. </div>
//             <div className='blogdate'>Abdullah Nasser - 1 Oct 2023</div>
//           </div>

//         </div>
//         <div className='blogcard1'>
//           <img className='cardimg' src="Group 15.jpg" alt="" />
//           <div className='carddata'>
//             <div className='blogtitle'>Blog Title</div>
//             <div className='blogdescription'>In this pivotal stage of our process, we take your ideas and aspirations and weave them into a tapestry of innovation. </div>
//             <div className='blogdate'>Abdullah Nasser - 1 Oct 2023</div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Blog