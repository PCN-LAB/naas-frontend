import {React, useState, useRef} from 'react';
import NavbarLandingPage from '../components/navbarLandingPage';
import facebook from '../assets/logos_facebook.png'
import twitter from '../assets/icons8-twitterx-48.png'
import insta from '../assets/skill-icons_instagram.png'
import PCN from '../assets/PCN logo.png'

const faqData = [
    {
      question: "How do I use the service?",
      answer: "You can use the service by signing up on our website and following the instructions provided in your dashboard."
    },
    {
      question: "How is bias in news articles determined?",
      answer: "Bias in news articles is determined using a combination of AI algorithms and human review to ensure accuracy and fairness."
    },
    {
      question: "Is there a limit to the number of article queries?",
      answer: "There is no limit to the number of article queries you can make, but excessive use may result in temporary suspension of service."
    }
  ];



function ContactUS() {

    return(<>
    
        <NavbarLandingPage />

        <div className="flex flex-col md:flex-row justify-around p-5 bg-white shadow-md rounded-lg w-11/12 mx-auto " style={{marginTop:"10%", marginBottom:"10%"}}>
        <div className="contact-us flex-1 m-5">
            <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
            <form className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-semibold">Your name</label>
            <input type="text" id="name" name="name" className="mb-4 p-2 border border-gray-300 rounded"/>
            
            <label htmlFor="email" className="mb-1 font-semibold">Your email</label>
            <input type="email" id="email" name="email" className="mb-4 p-2 border border-gray-300 rounded"/>
            
            <label htmlFor="message" className="mb-1 font-semibold">What would you like to learn?</label>
            <textarea id="message" name="message" className="mb-6 p-2 border border-gray-300 rounded h-24"></textarea>
            
            <button type="submit" className="p-2 bg-black text-white rounded-[50px]">Send Message</button>
            </form>
        </div>
        <div className="faq flex-1 m-5">
            <h2 className="text-3xl font-bold mb-5">Some frequently asked questions</h2>
            {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
        </div>

         {/* footer */}
        <div className="relative w-full h-auto px-4 md:px-[111px] pt-12 pb-[80px] bg-blue-300 border justify-center items-center inline-flex" style={{ marginTop: "0%" }}>
          <div className="absolute top-3 left-1/2 transform -translate-x-[100%] md:left-[15%]">
            <img src={PCN} alt="PCN Logo" />
          </div>

          <div className="flex flex-col justify-center items-center gap-10 w-full">
              <div className="w-full max-w-screen-xl h-px bg-stone-500"></div>
              <div className="flex flex-col md:flex-row justify-start items-start gap-10 md:gap-[155px] w-full max-w-screen-xl">
              <div className="flex flex-wrap justify-start items-start gap-10 md:gap-16 w-full">
                    <div className="flex flex-col justify-start items-start gap-2">
                      <div className="text-white text-xl font-bold font-Poppins">Product</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-Poppins">Pricing</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Solutions</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Education</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Team plans</div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                      <div className="text-white text-xl font-medium font-Poppins">About us</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">About</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Branding</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Newsroom</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Partnerships</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Affiliates</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Careers</div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                      <div className="text-white text-xl font-medium font-Poppins">Help and support</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Help center</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Privacy & Terms</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Safety information</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Sitemap</div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                      <div className="text-white text-xl font-medium font-Poppins">Community</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Agencies</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Freelancers</div>
                      <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Engineers</div>
                    </div>
                </div>
              <div className="flex justify-start items-start gap-4">
                  <div className="w-[180px] h-[52px] flex justify-center items-center">
                    <div className="w-[180px] h-[52px] relative">
                        <div className="w-[103.37px] h-[9.08px] left-[58.23px] top-[8.52px] absolute"></div>
                        <div className="w-[106.33px] h-[22.64px] left-[56.55px] top-[23.40px] absolute"></div>
                    </div>
                  </div>
                  <div className="w-36 h-[41.60px] flex justify-center items-center">
                    <div className="w-36 h-[41.60px] relative">
                        <div className="w-[26.23px] h-[28.35px] left-[9.84px] top-[6.62px] absolute"></div>
                        <div className="w-[41.44px] h-[6.52px] left-[44.11px] top-[27.94px] absolute"></div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="w-full max-w-screen-xl h-px bg-white"></div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-40 w-full mt-4 md:mt-0">
              <div className="text-white text-lg font-normal font-Poppins">Copyright 2024, PCN</div>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 w-full md:w-auto">
                  <div className="flex justify-center items-end gap-3">
                    <div className="w-6 h-6 relative opacity-80" style={{ marginTop: "5%" }}>
                        <img src={facebook} alt="Facebook" className="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] absolute rounded-md" />
                    </div>
                  <div className="w-6 h-6 relative opacity-80">
                      <img src={twitter} alt="Twitter" className="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] absolute rounded-md" />
                  </div>
                  <div className="w-6 h-6 relative opacity-80">
                      <img src={insta} alt="Instagram" className="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] absolute rounded-md" />
                  </div>
                  </div>
                  <div className="pl-2 flex justify-center items-center gap-0.1">
                    <div className="text-black text-lg font-normal font-Poppins">English (United Kingdom)</div>
                    <div className="w-6 h-6 relative"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>


    
    </>)
}

export default ContactUS;


const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="faq-item mb-4">
        <button
          className="faq-question w-full text-left p-2 border border-gray-300 rounded flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <span className="text-lg">{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && <div className="p-2 border-t border-gray-300">{answer}</div>}
      </div>
    );
  };
  