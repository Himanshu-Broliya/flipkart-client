import { Navbar } from './Navbar'
import { BannerCrousal } from './BannerCrousal'
import { Slide } from './Slide'
import { SmartPhone } from './SmartPhone'
import { useSelector } from 'react-redux'
import { FirstSlide } from './FirstSlide'

export const HomeMain = () => {

  const products = useSelector(store => store?.products)

  return (
    <>
    <div className="px-3 py-2 bg-slate-100">
        <Navbar />
        <BannerCrousal/>
        <FirstSlide title={"Deals of the Day"} clock={true} data={products.products} />
        <Slide title={"Best Deals on Smartphones"} clock={false} data={products.mobiles} s={7}/>
        <Slide title={"Top Deals"} clock={false} data={products.topDeals} s={7}/>
        <Slide title={"Fashion Best Sellers"} clock={false} data={products.fashionProducts} s={7}/>
        <Slide title={"Electronics Gadgets"} clock={false} data={products.electronics} s={7}/>
        <Slide title={"Furniture & Mattresses"} clock={false} data={products.furniture} s={7}/>
        <Slide title={"Top Deals On Appliances"} clock={false} data={products.appliancesProducts} s={7}/>
        <Slide title={"Laptops"} clock={false} data={products.laptops} s={7}/>

      </div>
      <SmartPhone/>
      </>
  )
}
