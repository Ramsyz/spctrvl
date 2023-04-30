import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PricingCard from '../components/PricingCard'

const Pricing = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading='PRICING' text='Choose your trip.'/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Pricing
