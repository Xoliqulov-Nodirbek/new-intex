import AboutUs from '../AboutUs/AboutUs'
import Hero from '../Hero/Hero'
import NewProduct from '../NewProduct/NewProduct'
import BuyAll from '../BuyAll/BuyAll'
import TashkentPools from '../TashkentPools/TashkentPools'
import Popular from '../Popular/Popular'
import BuyForm from '../ComponetntModuls/Forms/BuyForm'

function Main() {
  return (
    <main>

        <Hero/>
        <TashkentPools/>
        <NewProduct/>
        <BuyAll/>
        <AboutUs/>
        <Popular />
    </main>
  )
}

export default Main