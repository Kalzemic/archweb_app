import '@/Styles/App.css'
import Navbar from "@/components/Navbar"
import HomePage from "./Homepage"
import AboutPage from "./AboutPage"
import ServicesPage from "./ServicesPage"
import Footer from "@/components/Footer"
import Portfolio from "./Portfolio"
import Contactpage from "./ContactPage"


export default function Home(){
  return (
    <div className="main-container">
        <Navbar />
        <section className='main-segment' id="homepage">
                <HomePage />
              </section>
              <section className='main-segment' id="about">
                <AboutPage />
              </section>
              <section className='main-segment' id='services'>
                <ServicesPage />
              </section>
              <section className='main-segment' id="portfolio">
                <Portfolio />
              </section>
              <section className='main-segment' id="contact">
                <Contactpage />
              </section>
              <section className='main-segment' id="reviews">

              </section>
              <section className='main-segment' id='footer'>
                <Footer />
              </section>
    </div>
  )
}