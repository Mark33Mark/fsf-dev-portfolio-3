
import React, { useState } from 'react';

import { DocDownloadIcon } from "../Icons";


export default function Home() {


  const [active, setActive] = useState(true);

  const handleChangeActive = () => {
    setActive( previousPage => { return !previousPage; });
  };


  return (
    <section id="contact" className="sm:px-10 px-5 flex-grow  max-w-screen-xl sm:text-xl text-base">

      <div className="flex flex-row w-full justify-center items-center mb-7">
        <h1 className="mx-16 font-medium text-regal-blue subpixel-antialiased sm:text-4xl md:text-6xl text-2xl">
          Resume
        </h1>
        
      </div>
      <p className="relative mb-3 md:px-32 px-10">
        Clicking on the page below will scroll through the pages of my resume. 
        You can also download my resume by clicking the following icon:
        <a href="../assets/resume_MarkWatson.pdf" target="_blank" className="absolute pl-5">
          <DocDownloadIcon />
        </a>
      </p>


      <div className="w-100 pt-5 flex justify-center">
        { 
          active 
          ? ( <img
                className="active " 
                src="../../assets/resume_page1.jpg"
                alt="Mark Watson portrait"
                onClick={() => handleChangeActive()}
            /> )
          : ( <img
                className="inactive" 
                src="../../assets/resume_page2.jpg"
                alt="Mark Watson portrait"
                onClick={() => handleChangeActive()}
            /> )
        }
      </div>

    </section>
  );
}
