import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery"
import Brand from "../../Components/Brand/Brand";
import Features from "../../Components/Features/Features";
import Categories from "../../Components/Categories/Categories";
import Product from "../../Components/Product/Product";
import Client from "../../Components/Client/Client";

const Home = () => {

    return (
        <div>

            <div className="w-full h-[100vh] bg-[#f0f5f3] flex items-center justify-center rounded-b-2xl">
                <Banner></Banner>
            </div>

            <div className="delivery_component h-[10px] mb-20">
                <Delivery></Delivery>
            </div>

            <div className="brand flex items-center justify-center w-full h-[100px] mt-8 mb-8">
                <Brand></Brand>
            </div>

            <div className="w-full flex items-center justify-center mb-[80px]">
                <Features></Features>
            </div>
            
            <div className="w-full flex items-center justify-center mb-[80px]">
                <Categories></Categories>
            </div>

            <div className="w-full flex items-center justify-center mb-[80px]">
                <Product></Product>
            </div>

            <div className="w-full flex items-center justify-center pb-[80px] bg-[#f0f2f3] min-h-[400px]">
                <Client></Client>
            </div>
        </div>
    );
};

export default Home;