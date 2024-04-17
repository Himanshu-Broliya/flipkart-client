import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { bannerData } from "../../Constant/data";

export const BannerCrousal = () => {
  return (
    <div className="mt-5">
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            swipeable={true}
            stopOnHover={false}
            useKeyboardArrows={true}
            showIndicators={true}
            showThumbs={false}

        >
            {
                bannerData.map((data,i)=>
                    <div>
                        <img src={data.url} alt="banner" key={i} className=" " />
                    </div>
                )
            }
        </Carousel>
    </div>
  )
}
