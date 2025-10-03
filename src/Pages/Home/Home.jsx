import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery"
import Brand from "../../Components/Brand/Brand";

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
        </div>
    );
};

export default Home;