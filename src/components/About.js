import React from "react";
import AboutImg from '../assets/about-img.png'

const About = () => {
    return (
            <div className="flex md:flex-row flex-col justify-evenly items-center h-screen md:py-10 md:pt-20 bg-primary" id="about">
                 <div className="about-img">
                    <img
                    src={AboutImg}
                    alt="about-me-img"
                    className="md:w-[500px] md:h-[500px] w-[300px] h-[300px]"/>
                </div>
                <div className=" md:w-1/3 px-5 md:px-0">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#c6bcce] md:pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">
                        I'm Anne, a passionate software developer specializing in React.js. I embarked on my coding journey in 2022 and refined my skills through bootcamps with Meta and The London App Brewery.
                    </p>
                    <p className="pb-5">
                        Proficient in HTML, CSS, JavaScript and React.js, I excel at blending problem-solving with creativity to build dynamic, user-centric solutions.
                    </p>
                </div>

            </div>
    );
};

export default About;