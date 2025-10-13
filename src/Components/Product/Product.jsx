import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {

    const [active, setActive] = useState({
        id:0,
        product:'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: "all"
        },
        {
            id: 1,
            title: "newest",
            product: "newest"
        },
        {
            id: 2,
            title: "trending",
            product: "trending"
        },
        {
            id: 3,
            title: "best seller",
            product: "best_seller"
        },
    ];

    const products = [
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/products/product_4.png',
            currentPrice: '$200',
            product: 'newest'
        },
        {
            title: '',
            price: '$250',
            image: '/src/assets/products/product_7.png',
            currentPrice: '$200',
            product: 'best_seller'
        },
        
        {
            title: 'Lounge Chair',
            price: '$300',
            image: '/src/assets/products/product_2.png',
            currentPrice: '$250',
            product: 'featured'
        },
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/products/product_1.png',
            currentPrice: '$200',
            product: 'newest'
        },
        {
            title: 'Accent Chair',
            price: '$400',
            image: '/src/assets/products/product_3.png',
            currentPrice: '$350',
            product: 'best_seller'
        },
        {
            title: 'library stool',
            price: '$250',
            image: '/src/assets/products/product_1.png',
            currentPrice: '$200',
            product: 'featured'
        },
        {
            title: 'Reading Chair',
            price: '$250',
            image: '/src/assets/products/product_6.png',
            currentPrice: '$200',
            product: 'trending'
        },
        
        {
            title: 'Reading Chair',
            price: '$250',
            image: '/src/assets/products/product_4.png',
            currentPrice: '$200',
            product: 'featured'
        },
        {
            title: 'Lounge Chair',
            status: 'New',
            price: '$300',
            image: '/src/assets/products/product_2.png',
            currentPrice: '$250',
            product: 'newest'
        },
        {
            title: 'Reading Chair',
            price: '$250',
            image: '/src/assets/products/product_7.png',
            currentPrice: '$200',
            product: 'trending'
        },
        {
            title: 'Reading Chair',
            price: '$250',
            image: '/src/assets/products/product_5.png',
            currentPrice: '$200',
            product: 'trending'
        },
        {
            title: 'Accent Chair',
            status: 'New',
            price: '$400',
            image: '/src/assets/products/product_3.png',
            currentPrice: '$350',
            product: 'newest'
        },
    ];

const productFilter = active.product === 'all' ? products : products.filter(product => product.product === active.product);


    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'our product'} textAlign={'center'} mb={'mb-5'}></SectionTitle>
                <div className="flex items-center justify-cente gap-6 mb-12">
                    {
                        productTitle?.map((title, index) => (
                            <button key={title?.id} onClick={() => setActive({
                                id:title?.id,
                                product:title?.product
                            })} className={`text-sm font-black uppercase font-inter cursor-pointer ${
                                active?.id === index ? `text-[#272343]` : `text-[#A7A7A7]`
                            }`}>{title?.title}</button>
                        ))
                    }
                </div>

                <div className="grid grid-cols-4 items-center gap-6">
                    {
                            productFilter?.map((product, index) => (
                                <div key={index} className="p-4">
                                    <div className="feature_image mb-4 relative">
                                        <img className="w-full max-h-[275px] rounded-lg object-cover" src={product.image} alt={product.title} />
                                        {
                                            product?.status && (
                                                <div className="absolute top-4 left-4 bg-[#007588] text-white px-2 py-1 rounded-lg hover:bg-[#029fae] transition-all duration-300 ease-in-out ">
                                                    <button className="text-sm font-normal font-inter">{product?.status}</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="features_content">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-base text-[#007588] capitalize font-inter font-normal mb-4">{product?.title}</h4>
                                            <span className="bg-[#007588] h-[44px] w-[44px] rounded-lg flex items-center justify-center hover:bg-[#029fae] transition-all duration-300 ease-in-out cursor-pointer" ><ShoppingCart size='1.5rem' color="#fff" /></span>
                                        </div>
                                        <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                                            {product?.price}
                                            {
                                                product?.currentPrice && (
                                                    <span className="text-sm text-[#9a9caa] font-inter font-normal">{product?.currentPrice}</span>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default Product;