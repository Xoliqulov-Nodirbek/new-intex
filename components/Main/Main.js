import AboutUs from '../AboutUs/AboutUs'
import Hero from '../Hero/Hero'
import NewProduct from '../NewProduct/NewProduct'
import SellCommon from '../BuyAll/BuyAll'
import TashkentPools from '../TashkentPools/TashkentPools'

function Main() {
  return (
    <main>
        <Hero/>{/*Nurillo Hero oldi*/}
        <TashkentPools/> {/*Nodirbek tashkent sectionni oldi*/}
        <NewProduct/> {/*Nozimjon New Product sectionni oldi*/}
        <SellCommon/> {/*Ibrohim sell common sectionni oldi*/}
        <AboutUs/> {/* Nurillo About sectionni oldi */}

    </main>
  )
}

export default Main