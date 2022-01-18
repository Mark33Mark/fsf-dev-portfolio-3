import React from 'react';

export default function Footer() {

  return ( 
      <div className=" p-4 flex justify-evenly max-w-screen-xl">

        <section>
          <address className="social-network" itemScope itemType="http://schema.org/LocalBusiness"> 
              <a className = "contact-links" href="tel:+61448488884">
                <div className="inline-block text-4xl sm:px-5 px-1 sm:text-4xl md:text-6xl text-2xl contact-icons icon-mobile-phone"></div>
              </a>

            <a  className = "contact-links" href="mailto:hi@watsonised.com?subject=Sending%20you%20this%20email%20from%20your%20website&body=Hi%20Mark,%20I'm%20emailing%20you%20from%20your%20website." 
                aria-label="send me an email by selecting this icon">
              <div className="inline-block text-4xl sm:px-5 px-1 m:text-4xl md:text-6xl text-2xl contact-icons icon-SVG_Envelope"></div>
            </a>
                
            <a className = "contact-links" href="https://www.linkedin.com/in/mark-watsonised/" target="_blank" rel="noreferrer" aria-label="have a look at my LinkedIn message and contact me by selecting this icon">
              <div className="inline-block text-4xl sm:px-5 px-1 m:text-4xl md:text-6xl text-2xl contact-icons icon-SVG_Linkedin"></div>
            </a>
            
            {/* <!--https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat--> */}
            <a  className = "contact-links" href="https://wa.me/61448488884?text=Hi%20Mark,%0DI%20found%20you%20via%20your%20website%20and%20was%20wondering%0D" 
                target="_blank" rel="noreferrer" aria-label="send me a whatsapp message by selecting this icon">
              <div className="inline-block text-4xl sm:px-5 px-1 m:text-4xl md:text-6xl text-2xl contact-icons icon-SVG_Whatsapp"></div>
            </a>

            <a className = "contact-links" href="https://t.me/watsonised" target="_blank" rel="noreferrer" aria-label="send me a Telegram message by selecting this icon">
              <div className="inline-block text-4xl sm:px-5 px-1 m:text-4xl md:text-6xl text-2xl contact-icons icon-SVG_PaperPlane"></div>
            </a>

            <a className = "contact-links" href="https://github.com/Mark33Mark" target="_blank" rel="noreferrer" aria-label="have a look at my Github repository by selecting this icon">
              <div className="inline-block text-4xl sm:px-5 px-1 m:text-4xl md:text-6xl text-2xl contact-icons icon-SVG_Github"></div>
            </a> 
          </address>
        </section>

      </div>
  );
  
}