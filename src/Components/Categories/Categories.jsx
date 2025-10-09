import Slider from "react-slick";
import SectionTitle from "../SectionTitle/SectionTitle";

const Categories = () => {
    
    const categories = [
        {
            title: 'Wing Chair',
            products: '3,584 Products',
            image: '/src/assets/categories/categories_1.png',
            currentPrice: '$200'
        },
        {
            title: 'Wooden Chair',
            products: '3,584 Products',
            image: '/src/assets/categories/categories_2.png',
            currentPrice: '$200'
        },
        {
            title: 'Desk Chair',
            products: '3,584 Products',
            image: '/src/assets/categories/categories_3.png',
            currentPrice: '$200'
        },
        {
            title: 'Park Chair',
            products: '3,584 Products',
            image: '/src/assets/categories/categories_4.png',
            currentPrice: '$200'
        }
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "160px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div>
            <div className="container mx-auto">
                <SectionTitle title="top categories" mb="mb-11"></SectionTitle>

                <div className="slider-container features_slider w-full h-full">
                    <Slider {...settings}>
                        {
                            categories?.map((categorie, index) => (
                                <div key={index} className="p-4 h-[300px]">
                                    <div className="feature_image mb-4 relative">
                                        <img className="w-full h-[300px] rounded-lg object-cover" src={categorie.image} alt={categorie.title} />
                                        <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black/50 flex flex-col justify-center p-4">
                                            <h4 className="text-lg text-white capitalize font-inter font-semibold rb-3">{categorie?.title}</h4>
                                            <p className="text-sm text-white capitalize font-inter font-normal">{categorie?.products}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Categories;