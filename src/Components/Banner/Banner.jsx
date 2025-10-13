import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {

    const products = [
        {
            id: 1,
            title: "Where Comfort Meets Craft — Discover the Chair That Defines Your Space",
            subTitle: "Welcome to sitStore",
            image: "/public/assets/banner/banner_image.png"
        },
        {
            id: 2,
            title: "Sit with Style — Chairs That Speak the Language of Elegance",
            subTitle: "Welcome to sitStore",
            image: "/public/assets/banner/banner_image1.png"
        },
        {
            id: 3,
            title: "From Study to Serenity — The Chair That Fits Every Moment",
            subTitle: "Welcome to sitStore",
            image: "/public/assets/banner/banner_image2.png"
        },
        {
            id: 4,
            title: "Designed to Support, Styled to Impress — Your Perfect Seat Awaits",
            subTitle: "Welcome to sitStore",
            image: "/public/assets/banner/banner_image3.png"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container">
            <div className="slider-container slider_container w-full h-full">
                <Slider {...settings}>
                    {
                        products?.map((product) => (
                            <div key={product?.id} className="banner_slide_item">

                                {/* banner text */}
                                <div className="banner_text">
                                    <p className="text-sm font-inter text-[#272343] uppercase font-normal">{product?.subTitle}</p>
                                    <h3 className="text-5xl text-[#272343] font-inter capitalize leading-16 max-w-[580px] w-full font-bold mb-5">{product?.title}</h3>
                                    <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#029fae] rounded-lg capitalize text-white hover:bg-black transition-all duration-300 ease-in-out cursor-pointer">shop now <MoveRight /> </button>
                                </div>

                                {/* banner image */}
                                <div className="banner_image">
                                    <img src={product?.image} alt={product?.title} />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Banner;