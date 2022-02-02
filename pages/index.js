import Navbar from '../components/navbar'
import Carousel from '../section/Carousel'
import Hero from '../section/Hero'
import Test from '../section/Test'
import Learn from '../section/Learn'
import Deep from '../section/Deep'
import Smartfeed from '../section/Smartfeed'
import CarouselCard from '../section/Carouselcard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Carousel/>
    <Learn/>
   {/*  <Deep/> */}
    <Test/>
    <Smartfeed/>
    <CarouselCard/>
    <Footer/>
   
    </>
  )
}
