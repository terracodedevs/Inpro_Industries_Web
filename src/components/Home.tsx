// import React from 'react'
// //ts-ignore
// import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
// import Hero from './Hero'
// import Why from './Why'
// import AboutUs from './Why2'


// export default function ScrollFull() {
//   return (
//     <Fullpage>
//         <FullPageSections>
//             <FullpageSection>
//                 <Hero/>
//             </FullpageSection>
//             <FullpageSection>
//                 {/* <AboutUs/> */}
//             </FullpageSection>
//             <FullpageSection>
//                 <div className="bg-red-400 h-screen">Section 4</div>
//             </FullpageSection>
//             <FullpageSection>
//                 <div className="bg-red-500 h-screen">Section 5</div>
//             </FullpageSection>
//         </FullPageSections>    
//     </Fullpage> )
// }



import Carousel from './Hero'
import AboutUs from './About-Us'
import Slider from './Services'

import Footer1 from './Footer1'
import Why from './Why'
import ContactForm from './Contact'

export default function Home() {
  return (
    <div>
      <section id='home'>
        <Carousel/>
      </section>
      <section id='About-Us'>
        <AboutUs/>
      </section>
      <section id='#services'>
        <Slider/>
      </section>
      <section id='#Why-Choose'>
        <Why/>
      </section>
      <section id=''>
        <ContactForm/>
      </section>
      <section id=''>
        <Footer1/>
      </section>
    </div>
  )
}
