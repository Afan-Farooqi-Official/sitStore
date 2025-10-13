import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import { User } from "lucide-react";

const Client = () => {

    const clients = [
        {
            id:1,
            name: 'John Doe',
            feedback: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            position: 'CEO, Company A',
        },
        {
            id:2,
            name: 'Alice Smith',
            feedback: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            position: 'Marketing Head, Company B',
        },
        {
            id:3,
            name: 'Michael Johnson',
            feedback: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            position: 'CTO, Company C',
        },
        {
            id:4,
            name: 'Sarah Williams',
            feedback: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            position: 'CFO, Company D',
        },
        {
            id:5,
            name: 'Robert Brown',
            feedback: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            position: 'Manager, Company E',
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="container mx-auto w-[90%]">
            <div className="mt-3">
                <SectionTitle title={"Hear From Our Customers"} mb={'mb-11'}></SectionTitle>
            </div>
            
            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {
                        clients?.map((client, index) => (
                            <div key={index} className="p-8 border border-[#E0E0E0] rounded-lg mr-4 client_card">
                                <p className="text-2x1 text-[#636270] font-inter font-normal client_feedback mb-1">{client.feedback}</p>
                                <div className="flex items-center">
                                    <h4><User size='3rem' /></h4>
                                </div>
                                <div>
                                    <h4 className="text-2x1 text-[#272343] font-inter font-normal capitalize mb-1">{client?.name}</h4>
                                    <p className="text-base text-[#9a9caa] font-inter font-normal capitalize">{client?.position}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Client;