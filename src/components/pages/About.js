import React from 'react';
import { Skills } from "../../ProjectData";

export default function About() {
  return (

    <section id="about" className="sm:px-24 px-5 flex-grow  max-w-screen-xl sm:text-2xl text-base" >
          
          <h1 className="font-medium flex justify-evenly text-gray-500  subpixel-antialiased sm:text-5xl md:text-7xl text-3xl text-center mb-4 ">
            Hello and welcome, <br /> I'm Mark.
          </h1>

            <p className="py-3"> A full stack web developer with a property development and capital transactions background who has worked for some of Australia's largest corporations.</p> 
            <p className="py-3">  Based in Sydney, Australia.</p>
            <p className="py-3">  With a deep understanding of electronics and programming using different programming languages and technologies, 
              I develop amazing user experiences.</p>
            <p className="py-3">  Drawing on a foundation of creativity I can develop intuitive user experiences for the web.</p>  
            <p className="py-3">  Certificate in full stack web development from the University of Sydney.  Skilled in developing responsive 
                                  and accessible web designs using: </p>  

              <ul className="tags-list flex flex-wrap justify-center">
                {Skills.map( ( skill, index ) => ( <li key={index} className="tag">{skill}</li> ))}
              </ul>

            <p className="py-3">  I work well in agile development teams.  Highly capable delivering effectively from a well articulated brief or 
              from a couple of adjectives.</p>
            
            <div className="py-3">enjoys…</div>
      
            <ul className="ml-16 pb-5 list-square">
              <li>Powerlifting and rockclimbing - when I can.</li>
              <li>Biohacking to optimise life.</li>
              <li>Internet of Things using Arduino's.</li>
            </ul>

    </section>

  );
}
