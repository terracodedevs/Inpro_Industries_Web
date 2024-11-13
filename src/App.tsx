
import './App.css'
import AboutUs from './components/About-Us'
import Footer1 from './components/Footer1'


import Carousel from './components/Hero'
// import ScrollFull from './components/Home'
import Slider from './components/Services'
import Why from './components/Why'

function App() {
  

  return (
    <>
      <div className=''>
      <section id='#home'>
        <Carousel/>
      </section>
      <section id='#About-Us'>
        <AboutUs/>
      </section>
      <section id='#services'>
        <Slider/>
      </section>
      <section id='#Why-Choose'>
        <Why/>
      </section>
      <section id='#contact-us'>
        <Footer1/>
      </section>
        {/* <ScrollFull/> */}
      </div>
    </>
  )
}

export default App
