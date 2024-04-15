import { adURL, timerURL } from '../../Constant/data'
import { IoChevronForwardCircle } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from 'react-countdown';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';





export const Slide = ({ title, clock, data, ad, s }) => {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', background: "gray", marginRight: "29px", opacity: ".4", borderRadius: "5px 0 0 5px", height: "100px" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', background: "gray", marginLeft: "34px", marginBottom: "10px", opacity: ".4", borderRadius: "0 5px 5px 0", height: "100px", zIndex: "1" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: true,
        infinite: true,
        slikePrev: true,
        touchThreshold: 500,
        speed: 500,
        slidesToShow: s,
        slidesToScroll: 3,
        swipeToSlide: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    let product = "";


    if (data !== "") {
        product = data?.map((item, i) => {
            return (
                <div className='mr-2 py-5 px-2 w-full '>
                    <Link to={`/product/${item.id}`}>
                        <div className='h-[230px] w-[180px] md:h-[260px] md:w-[200px] border-[1px] border-gray-400 py-4 px-2 rounded-sm cursor-pointer'>
                            <div className='flex items-center justify-center'>
                                <img src={item.url} draggable={true} alt='product' className='h-[100px] md:h-[150px] transition-all ease-in-out hover:scale-105 duration-500' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <span className='mt-2 text-[15px] font-semibold'>{item.title.shortTitle}</span>
                                <span className='mt-2 text-[13px] font-semibold text-green-600'>{item.discount}</span>
                                <span className='mt-2 text-[13px] font-semibold text-gray-800'>{item.tagline}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    } else {
        return
    }

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Countdown />;
        } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds} <span>Left</span></span>;
        }
    };


    return (
        <div className='flex flex-col bg-white mt-3 w-full'>
            <div className='flex items-center py-4 '>
                <h1 className='md:text-xl font-semibold mx-5'>{title}</h1>
                {
                    clock && <div className='flex items-center'>
                        <img src={timerURL} alt='clock' className='h-7 mr-5' />
                        <Countdown date={Date.now() + 4.32e+7}
                            renderer={renderer}
                        />
                    </div>
                }
                <IoChevronForwardCircle className='text-2xl md:text-3xl ml-auto mr-5 text-[#047bd5] cursor-pointer' />
            </div>
            <hr></hr>
            {
                ad ? <div className='flex flex-row items-center gap-6'>
                    <div className='w-[85%]'>
                        <Slider {...settings}>
                            {product}
                        </Slider>
                    </div>
                    {
                        ad && <div className=''>
                            <img src={adURL} alt='ad' className='h-[280px]' />
                        </div>
                    }
                </div>
                    : <Slider {...settings}>
                        {product}
                    </Slider>
            }
        </div>
    )

}
