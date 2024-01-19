import React from "react";
import GlowScreenshot from '../assets/glow-screenshot.png'
import SupergummiesScreenshot from '../assets/supergummies-screenshot.png'
import CalculatorScreenshot from '../assets/calculator-screenshot.png'
import TodoScreenshot from '../assets/todo-screenshot.png'
import WeatherScreenshot from '../assets/weather-screenshot.png'
import AdminScreenshot from '../assets/admin-screenshot.png'


const projects = [
    {
        img: GlowScreenshot,
        title: "Glow E-Commerce Website",
        desc: "This project is fully functional including user authentication, add to cart function and a back-end made with MongoDB.",
        link: "https://github.com/anne-hoffmann/Glow-Ecommerce-Store",
    },
    {
        img: AdminScreenshot,
        title: "Glow Admin Panel",
        desc: "The Glow Admin Panel is linked to the Glow Ecommerce Store and can be used to add new products and see all listed products.",
        link: "anne-hoffmann-glow-admin-panel.netlify.app",
    },
    {
        img: SupergummiesScreenshot,
        title: "SuperGummies Landing Page",
        desc: "This SuperGummies landing page has been made with HTML and CSS",
        link: "anne-hoffmann-supergummies.netlify.app",
    },
    {
        img: CalculatorScreenshot,
        title: "Calculator App",
        desc: "A fully functional calculator app created in Next.js with JavaScript",
        link: "anne-hoffmann-calculator-app.netlify.app",
    },
    {
        img: TodoScreenshot,
        title: "Todo List App",
        desc: "A Todo App where ypu can add and remove tasks. Created with React.",
        link: "anne-hoffmann-todo-app.netlify.app",
    },
    {
        img: WeatherScreenshot,
        title: "Weather App",
        desc: "The Weather App is linked to OpenWeatherMap API. Created with React.",
        link: "anne-hoffmann-weather-app.netlify.app",
    },
]

//comment

const Projects = () => {
    const myProjects = [...projects];

    return (
        <section className="bg-primary px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center ms:justify-between">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#c6bcce] pb-2">
                        Projects
                    </h2>
            </div>


            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                {myProjects.map((projects, i) => {
                    return (
                <div className="relative" key={i}>
                    <img src={projects.img} alt={projects.title} />
                    <div className="flex absolute text-center left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100">
                        <h3>{projects.title}</h3>
                        <p className="py-5 font-bold px-2">
                            {projects.desc}
                        </p>

                        <div className="mx-auto">
                            <link
                            href={projects.link}
                            className="px-5 py-2 bg-[#e6a2b0] hover:bg-[#ba576b] mr-5 font-bold"
                            >Live</link>
                        </div>
                    </div>
                </div>
                    );
            })}
            </div>
        </section>
    );
};

export default Projects;