import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {

    const products = [
        {
            id: 1,
            title: "Elevate Your Space with Timeless Furniture Elegance",
            subTitle: "Welcome to sitStore",
            image: "/src/assets/banner/banner_image.png"
        },
        {
            id: 2,
            title: "Elevate Your Space with Timeless Furniture Elegance",
            subTitle: "Welcome to sitStore",
            image: "/src/assets/banner/banner_image.png"
        },
        {
            id: 3,
            title: "Elevate Your Space with Timeless Furniture Elegance",
            subTitle: "Welcome to sitStore",
            image: "/src/assets/banner/banner_image.png"
        },
        {
            id: 4,
            title: "Elevate Your Space with Timeless Furniture Elegance",
            subTitle: "Welcome to sitStore",
            image: "/src/assets/banner/banner_image.png"
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
                                    <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#029fae] rounded-lg capitalize cursor-pointer text-white">shop now <MoveRight /> </button>
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