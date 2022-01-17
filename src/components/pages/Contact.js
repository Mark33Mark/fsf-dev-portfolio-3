
import React, {useState} from "react";

// Import helper functions to check if the email is valid
import { validateEmail } from '../../utils/helpers';


const encode = data => {
  return Object.keys(data)
    .map( (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};


export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };



  const handleSubmit = e => {
    e.preventDefault();

    // validate email and name. If so we set an error message to be displayed on the page.
    if ( !validateEmail(email) || !name || !message ) {
      setErrorMessage('I can\'t submit the form for you. Please provide a name, valid email and message.');
      
      // exit out of this code block if something is wrong.
      return;
    }
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => {
                // alert("Message sent!");
                setErrorMessage('Form under construction, currently server connection not receiving messages.');
                setName('');
                setMessage('');
                setEmail('');
              })
      .catch((error) => alert(error));
  };

  return (

    <section id="contact" className="relative sm:px-24 px-5 flex-grow  max-w-screen-xl sm:text-2xl text-base">

      <h1 className="font-medium flex justify-evenly text-gray-500  subpixel-antialiased sm:text-5xl md:text-7xl text-3xl text-center mb-4">
        Get In Touch
      </h1>
      <div className="container  py-10 mx-auto flex md:flex-nowrap w-full flex-wrap">
        <div className="lg:w-2/3 w-full overflow-hidden sm:mr-10 flex items-end justify-start ">
          
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            allowFullScreen=""
            src="https://www.google.com/maps/embed/v1/place?q=11+Stratford+Place+St+Ives+NSW+Australia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=11"
          />

        </div>
        
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-0 mt-2 md:mt-0">

          <p className="leading-relaxed mb-5">
            Let's communicate. Please use the form below to send me a message and I'll get back to you as soon as I can.
          </p>
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="...your name"
              className="w-full bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange}
              onSelect={ e => setErrorMessage('')}
            />
          </div>
          
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="...your email address"
              className="w-full bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange}
              onSelect={ e => setErrorMessage('')}
            />
          </div>
          
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="...write your message here"
              className="w-full bg-gray-300 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange}
              onSelect={ e => setErrorMessage('')}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-regal-blue border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>

      {errorMessage && (
        <div className="float-right mr-16 text-red-600 bg-gray-400 w-60 rounded font-semibold p-5 text-base">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

    </section>
  );
}
