
const Brand = () => {

    const brands = [
            {
                id: 1,
                image: 'public/assets/brands/brand_1.png'
            },
            {
                id: 2,
                image: 'public/assets/brands/brand_2.png'
            },
            {
                id: 3,
                image: 'public/assets/brands/brand_3.png'
            },
            {
                id: 4,
                image: 'public/assets/brands/brand_4.png'
            },
            {
                id: 5,
                image: 'public/assets/brands/brand_5.png'
            },
            {
                id: 6,
                image: 'public/assets/brands/brand_6.png'
            },
            {
                id: 7,
                image: 'public/assets/brands/brand_7.png'
            },
        ]

    return (
        <div className="container mx-auto ">
            <div className="brand_item flex justify-center items-center gap-20">
                {
                    brands?.map((brand) => (
                        <div key={brand?.id} className="brand_item">
                            <img className="w-auto h-auto" src={brand?.image} alt="brand" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brand;