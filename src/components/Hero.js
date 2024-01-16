import React from "react";
import HeroImg from "../assets/hero-img.jpeg";

const Hero = () => {
    return (
            <div className="flex flex-col md:flex-row justify-evenly items-center bg-gradient h-screen md:py-10 md:pt-20 text-black">
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi! <br /> I am Anne, <br /> Frontend Developer.
                    </h1>
                    <a href='/#projects'
                    className="w-32 h-12 bg-[#faf9fa] border-2 py-2 px-4 border-[#05040a] rounded-full hover:bg-transparent"
                    >See Projects
                    </a>
                </div>

                <div className="md:w-[500px] md:h-[500px] w-[300px] h-[300px] rounded-full">
                    <img src={HeroImg}
                    alt="hero-img"
                    className="md:w-[500px] md:h-[500px] w-[300px] h-[300px]" />
                </div>

            </div>
    )
};

export default Hero;