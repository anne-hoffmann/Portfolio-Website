import React from "react";
import phoneImg from "../assets/phone.png"

const Contact = () => {
 return (
            <div className="flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen md:py-10 md:pt-20 bg-primary" id="contact">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[250px] border-[#c6bcce] pb-2">
                        Let's connect!
                    </h2>
                    <a className="text-xl md:text-4xl text-[#DC9BA7] hover:text-[#B14D61]" href="mailto:anestasiahoffmann@gmail.com">anestasiahoffmann@gmail.com</a>

                </div>

                <div className="">
                    <img
                    src={phoneImg}
                    alt="phone-img"
                    className="md:w-[500px] md:h-[700px] w-[275px] h-[400px]"/>
                </div>
            </div>
    );
 };

 export default Contact;