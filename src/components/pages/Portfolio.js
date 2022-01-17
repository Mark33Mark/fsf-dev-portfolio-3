
import React from "react";
import { AppsData } from "../../ProjectData";
import { CodeIcon, TerminalIcon } from "../Icons";

export default function Portfolio() {


  return (

    <section id="portfolio" className="sm:px-24 px-5 flex-grow max-w-screen-xl sm:text-2xl text-base">
      <div className="container px-5 py-5 mx-auto text-center lg:px-30">
        <div className="flex flex-row w-full justify-center items-center mb-12">
          <TerminalIcon />
          <h1 className="mx-16 font-medium text-gray-500 subpixel-antialiased sm:text-5xl md:text-7xl text-3xl">
            Selected Work
          </h1>
          <CodeIcon />
        </div>
        <p className="leading-relaxed mb-3">
          I've used many different technologies and programming languages to create applications, please visit my GitHub to see more.  Following is a 
          selection of some recent applications I particulary like, I hope you do too. 
        </p> 
        <p className="leading-relaxed mb-5">
          Select an image below to and choose either link to my GitHub or my host site for the application.
        </p>

        <div className="portfolio-cards container py-2 bg-gray-300">
          <div className="flex flex-wrap ">

            {AppsData.map((project, index) => (

              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">

                    <img
                      alt="gallery"
                      className="absolute w-full h-full object-contain object-center"
                      src={project.image}
                    />

                    <div className="px-4 py-5 relative z-10 w-full border-4 border-gray-700 bg-white opacity-0 hover:opacity-80">

                      <h1 className="title-font text-lg font-medium font-bold text-gray-900 mb-1">
                        {project.title}
                      </h1>

                      <h2 className="tracking-widest text-base title-font font-medium text-blue-700 font-extrabold mb-1">
                        {project.subtitle}
                      </h2>

                      <p className="leading-relaxed text-base py-4">
                        {project.description}
                      </p>
                      <a href={project.github}>
                        <div className="inline-block px-5 gallery-icon text-4xl icon-SVG_github_repo"> 
                          <p className="text-base font-mono">repo</p>
                        </div>
                      </a>
                      <a href={project.link}>
                        <div className="inline-block gallery-icon text-4xl icon-SVG_myWebpage"> 
                          <p className="text-base font-mono">website </p>
                        </div>
                      </a>
                    </div>

                </div>
              </div>
            ))}
          </div>    
        </div>
      </div>
    </section>
  );
}
