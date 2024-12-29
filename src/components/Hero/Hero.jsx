import React from 'react';
import Slider from 'react-slick';
import Image4 from "../../assets/images/fmf4.png";
import Image5 from "../../assets/images/agvk3.png";
import Image6 from "../../assets/images/zeta.png";
import Button from '../Shared/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroData = [
    {
        id: 1,
        img: Image4,
        subtittle: "Carbon Fiber",
        title: "Exhaust",
        title2: "fmf_f4.1",
    },
    {
        id: 2,
        img: Image5,
        subtittle: "Full Face",
        title: "Helmet",
        title2: "AGV_K3",
    },
    {
        id: 3,
        img: Image6,
        subtittle: "ZETA Brand",
        title: "Modify Parts",
        title2: "ZETA_PARTS",
    }
];

const Hero = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtittle}</h1>
                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                        <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                        <div>
                                            <Button text="Shop by Category" bgColor="bg-primary" textColor="text-white" />
                                        </div>
                                    </div>
                                    <div className='order-1 sm:order-2'>
                                        <div>
                                            <img src={data.img} alt='' className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hero;
