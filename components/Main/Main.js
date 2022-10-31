import AboutUs from '../AboutUs/AboutUs'
import Hero from '../Hero/Hero'
import NewProduct from '../NewProduct/NewProduct'
import SellCommon from '../BuyAll/BuyAll'
import TashkentPools from '../TashkentPools/TashkentPools'
import Popular from '../Popular/Popular'

function Main() {
  return (
    <main>
        <Hero/>{/*Nurillo Hero oldi*/}
        <TashkentPools/> {/*Nodirbek tashkent sectionni oldi*/}
        <NewProduct/> {/*Nozimjon New Product sectionni oldi*/}
        <SellCommon/> {/*Ibrohim sell common sectionni oldi*/}
        <AboutUs/> {/* Nurillo About sectionni oldi */}
        {/* <Popular /> */}
    </main>
  )
}

export default Main