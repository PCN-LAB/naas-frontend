import {React, useState, useRef} from 'react';
import NavbarLandingPage from '../components/navbarLandingPage';
import Bluebg from '../assets/Rectangle 6704 (1).png'
// import portfolio from '../assets/BannerDesign.gif.gif'
//  import portfolio from '../assets/Untitled design.gif'
import portfolio from '../assets/portfolio.png'
import line from '../assets/Line.png'
import arrows from '../assets/arrows.png'
import news from '../assets/news.png'
import Card from '../components/Card'
import nextArrow from '../assets/next-arrow.png'
import backArrow from '../assets/back-arrow.png'
import facebook from '../assets/logos_facebook.png'
import twitter from '../assets/icons8-twitterx-48.png'
import insta from '../assets/skill-icons_instagram.png'
import PCN from '../assets/PCN logo.png'
import { useNavigate } from "react-router-dom"; 

function LandingPage() {

    const cardData = [
        {
          id: 1,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
          imageUrl: "path/to/image1.jpg", 
          social: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
          },
        },
        {
          id: 2,
          title: "Dolor Sit Amet",
          description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
          imageUrl: "path/to/image2.jpg",
          social: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
          },
        },
       
      ];

      const navigate = useNavigate();
      const secondPortionRef = useRef(null);
      const [currentIndex, setCurrentIndex] = useState(0);

      const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
      };

      const GetStarted=()=>{
        secondPortionRef.current.scrollIntoView({ behavior: 'smooth' });
      }

  return (
    <>
      <NavbarLandingPage />
      
      <img src={Bluebg} className="absolute w-full z-0 h-800" style={{ marginTop: "4.5%" }} />
        <div className='flex items-center justify-center absolute w-full z-10 gap-96' style={{ marginTop: "6%" }}>
            <div className="text-white w-700 h-200 flex-shrink-0 flex flex-col justify-left items-left">
                <h1 className="text-6xl font-bold leading-tight font-Poppins">
                    News Analytics
                    <div style={{ marginTop: "0%" }}>
                        <h4 className="text-6xl">As A Service</h4>
                    </div>
                </h1>
                <h1 className='text-3xl font-medium leading-tight font-Poppins' style={{ marginTop: "2%" }}>
                    What You’re Looking For!
                </h1>
                <div className='flex flex-col justify-left items-left'>
                    <button style={{ marginTop: "5%" }} className="w-[220px] h-[60px] px-5 py-3 bg-zinc-800 rounded-[50px] justify-center items-center gap-2 inline-flex">
                        <div className="text-neutral-50 text-[30px] font-bold font-Poppins leading-normal" onClick={GetStarted}>Get Started</div>
                    </button>
                </div>
            </div>
            <div>
                <img src={portfolio} className='w-full h-full' style={{ marginLeft: "0%", marginTop: "10%" }} />
            </div>
        </div>


      {/* second portion */}
      <div  ref={secondPortionRef} className='flex flex-row justify-center items-center gap-78' style={{marginTop:"65%"}}>
        <div className="flex flex-col items-start">
            <img className="w-25 h-1.5" src={line}></img>
            <h1 className="w-[583.18px] h-[146.39px] text-sky-950 text-[52px] font-bold font-Poppins">NAaaS Explained :</h1>
            <h1 className="w-[583.18px] h-[146.39px] text-sky-950 text-[52px] font-bold font-Poppins" style={{ marginTop: "-15%" }}>How does it work?</h1>
            <h2 className='w-[587.87px] h-[134.03px] text-zinc-500 text-4xl font-normal font-Ubuntu '  style={{ marginTop: "-6%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do</h2>
            <div className='flex flex-row justify-center gap-4'>
            <h2 className='font-Poppins text-[#4cc0eb]'  style={{ marginTop: "-15%" }}>Watch as Guest</h2>
            <img className='w-[55px] h-[30px]' src={arrows} style={{ marginTop: "-15.5%" }}></img>
            </div>
        
        </div>
        <div>
            <iframe
            width="500"
            height="300"
            src="https://youtube.com/embed/swWqYLvYNzY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
      </div>

      {/* NEWS Section */}
      <div className='flex flex-col justify-center items-center' style={{marginTop:"8%"}}>
        <div class="w-[156px] h-[63px] text-sky-950 text-[52px] font-bold font-Poppins">News</div>
        <img style={{marginTop:"5%"}} src={news}></img>
      </div>

       {/* Credits Section */}
        <div className='flex flex-col justify-center items-center' style={{ marginTop: "8%" }}>
        <div className="w-[156px] h-[63px] text-sky-950 text-[52px] font-bold font-Poppins">Credits</div>
        <div className="flex flex-col items-center " style={{ marginTop: "4%" }}>
            <div className="relative flex items-center">
            <img
                src={backArrow}
                onClick={handlePrevious}
                className="w-15 h-15 absolute left-[-150px] top-1/2 transform -translate-y-1/2 p-2 rounded-full  cursor-pointer"
            />
            <Card {...cardData[currentIndex]} />
            <img
                src={nextArrow}
                onClick={handleNext}
                className="w-15 h-15 absolute right-[-150px] top-1/2 transform -translate-y-1/2 p-2 rounded-full  cursor-pointer"
            />
            </div>
        </div>
        </div>

        {/* footer */}

        <div className="relative w-full h-[580px] px-[111px] pt-12 pb-[80px] bg-blue-300 border justify-center items-center inline-flex" style={{ marginTop: "10%" }}>
        <div className="absolute top-10" style={{ left: "15%" }}>
            <img src={PCN} alt="PCN Logo" />
        </div>
            <div className="flex-col justify-center items-center gap-10 inline-flex">
                <div className="w-[1218px] h-px bg-stone-500"></div>
                <div className="justify-start items-start gap-[155px] inline-flex">
                    <div className="justify-start items-start gap-16 flex">
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-white text-xl font-bold font-Poppins">Product</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-Poppins">Pricing</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Solutions</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Education</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Team plans</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-center text-white text-xl font-medium font-Poppins">About us</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">About</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Branding</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Newsroom</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Partnerships</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Affiliates</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Careers</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-white text-xl font-medium font-Poppins">Help and support</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Help center</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Privacy & Terms</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Safety information</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Sitemap</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="text-white text-xl font-medium font-Poppins">Community</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Agencies</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Freelancers</div>
                            <div className="text-blue-200 text-lg hover:text-white cursor-pointer font-medium font-Poppins">Engineers</div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-4 flex">
                        <div className="w-[180px] h-[52px] justify-center items-center flex">
                            <div className="w-[180px] h-[52px] relative">
                                <div className="w-[103.37px] h-[9.08px] left-[58.23px] top-[8.52px] absolute">
                                </div>
                                <div className="w-[106.33px] h-[22.64px] left-[56.55px] top-[23.40px] absolute">
                                </div>
                            </div>
                        </div>
                        <div className="w-36 h-[41.60px] justify-center items-center flex">
                            <div className="w-36 h-[41.60px] relative">
                                <div className="w-[26.23px] h-[28.35px] left-[9.84px] top-[6.62px] absolute">
                                </div>
                                <div className="w-[41.44px] h-[6.52px] left-[44.11px] top-[27.94px] absolute">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1218px] h-px bg-white"></div>
                <div className='flex flex-row justify-center gap-40'>
                    <div className="text-white text-lg font-normal font-Poppins">Copyright 2024, PCN</div>
                    <div className="w-[373px] h-6 justify-start items-start gap-10 inline-flex">
                        <div className="justify-center items-end gap-3 flex">
                            <div className="w-6 h-6 relative opacity-80" style={{marginTop:"5%"}}>
                                <img src={facebook} alt="Facebook" className="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] absolute rounded-md" />
                            </div>
                            <div className="w-6 h-6 relative opacity-80">
                                <img src={twitter} alt="Twitter" className="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] absolute rounded-md" />
                            </div>
                            <div className="w-6 h-6 relative opacity-80">
                                <img src={insta} alt="Instagram" className="w-[17.50px] h-[17.50px] left-[1.25px] top-[1.25px] absolute rounded-md" />
                            </div>
                        </div>
                        <div className="pl-2 justify-center items-center gap-0.1 flex">
                            <div className="text-black text-lg font-normal font-Poppins">English (United Kingdom)</div>
                            <div className="w-6 h-6 relative"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
}

export default LandingPage;
