import {React, useState, useRef} from 'react';
import NavbarLandingPage from '../components/navbarLandingPage';
import arrowRight from '../assets/next.png'
// import portfolio from '../assets/BannerDesign.gif.gif'
import portfolio from '../assets/world.gif'
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
import team_profile from '../assets/team-profile.png'
import github from '../assets/github_colored.png'
import linkedin from '../assets/linkedin_colored.png'
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


      const [teamMembers, setTeamMembers] = useState([
        {
          name: "Zane Sorell",
          role: "CEO",
          description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
          imgSrc: `${team_profile}`
        },
        {
          name: "Maya Mathy",
          role: "Founder",
          description: "Pop music lover, seeks joy and exciting pop concerts",
         imgSrc: `${team_profile}`
        },
        {
          name: "Alexis Jensen",
          role: "CTO",
          description: "Bookworm, creative software developer with precision",
          imgSrc: `${team_profile}`
        },
        {
          name: "Dominic Game",
          role: "3D Artist",
          description: "Football enthusiast, enjoys movie nights with friends",
           imgSrc: `${team_profile}`
        },
        {
            name: "Dominic Game",
            role: "3D Artist",
            description: "Football enthusiast, enjoys movie nights with friends",
             imgSrc: `${team_profile}`
        },
        {
        name: "Dominic Game",
        role: "3D Artist",
        description: "Football enthusiast, enjoys movie nights with friends",
        imgSrc: `${team_profile}`
        },
        {
            name: "Dominic Game",
            role: "3D Artist",
            description: "Football enthusiast, enjoys movie nights with friends",
             imgSrc: `${team_profile}`
        },
        {
        name: "Dominic Game",
        role: "3D Artist",
        description: "Football enthusiast, enjoys movie nights with friends",
        imgSrc: `${team_profile}`
        },
        {
        name: "Dominic Game",
        role: "3D Artist",
        description: "Football enthusiast, enjoys movie nights with friends",
        imgSrc: `${team_profile}`
        },
        {
            name: "Dominic Game",
            role: "3D Artist",
            description: "Football enthusiast, enjoys movie nights with friends",
             imgSrc: `${team_profile}`
        },
        {
        name: "Dominic Game",
        role: "3D Artist",
        description: "Football enthusiast, enjoys movie nights with friends",
        imgSrc: `${team_profile}`
        }

      
      ]);

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

      const [visibleMembers, setVisibleMembers] = useState(4); 

      const [startIndex, setStartIndex] = useState(0); 

      const scrollMoreMembers = () => {
        const newIndex = startIndex + 4;
        if (newIndex < teamMembers.length) {
          setStartIndex(newIndex);
        }
      };
    

  return (
    <>
  <NavbarLandingPage />
{/* <img src={Bluebg} className="absolute w-full z-0 h-800" style={{ marginTop: "4.5%" }} /> */}
<div className='flex items-center justify-center absolute w-full z-10 gap-96' style={{ marginTop: "6%" }}>
<div className="text-black absolute left-0 w-1/2 p-12 z-50" style={{marginTop:"43%", marginLeft:"12%"}}>
        <h1 className="text-6xl font-bold leading-tight font-Poppins">
            News <span className='text-white'>Analytics</span> 
            <div style={{ marginTop: "0%" }}>
                <h4 className="text-6xl">As A <span className='text-white'>Service</span> </h4>
            </div>
        </h1>
        <h1 className='text-3xl font-medium leading-tight font-Poppins' style={{ marginTop: "2%" }}>
            What You’re <span className='text-white'>Looking For</span> 
        </h1>
        <div className='flex flex-col justify-left items-left'>
            <button style={{ marginTop: "5%" }} className="w-[260px] h-[70px] px-5 py-3 bg-custom-blue rounded-[50px] justify-center items-center gap-2 inline-flex">
                <div className="text-neutral-50 text-[30px] font-bold font-Poppins leading-normal" onClick={GetStarted}>Get Started</div>
            </button>
        </div>
    </div>
    <div className='absolute top-0 w-[1300px] h-[1150px]' style={{ marginRight: "-30%", marginTop: "-12%", zIndex: "20" }}>
        <img src={portfolio} className='w-full h-full rounded-full z-20' style={{ objectFit: "cover", borderRadius: "50%", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8), 0 25px 50px rgba(0, 0, 0, 0.9)" }} />
    </div>
</div>


      {/* second portion */}
      <div  ref={secondPortionRef} className='flex flex-row justify-center items-center gap-78' style={{marginTop:"73%"}}>
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

       {/* meet our team */}

    <div class="w-full h-[1090px] pl-[248px] pr-[95px] py-16 bg-white flex-col justify-start items-start gap-[120px] inline-flex" style={{marginTop:"5%"}}>
    
    <div class="self-stretch h-[172px] flex-col justify-center items-start gap-4 flex">
    <div class="self-stretch h-[172px] flex-col justify-center items-start gap-6 flex">
        <div class="self-stretch h-[172px] flex-col justify-center items-start gap-4 flex" style={{ marginTop: "10%" }}>
            <div class="self-stretch text-zinc-900 text-5xl font-bold font-['Inter'] leading-[72px]">Meet our team members</div>
            <div class="self-stretch text-zinc-600 text-lg font-normal font-['Inter'] leading-7">Complete the form below to send us a message. Our support team will promptly respond to your request.</div>
            <div class="justify-start items-start gap-4 inline-flex">
                <div class="w-[121px] p-3 bg-gray-100 rounded-xl justify-center items-center gap-2 flex">
                    <div class="text-zinc-900 text-sm font-medium font-['Inter'] leading-[25px]">Apply Now</div>
                    <div class="w-4 h-4 relative">
                        <img class="h-4 left-0 top-0 absolute w-28" src={arrowRight} />
                    </div>
                </div>
                <button class="w-[140px] h-12 p-3 bg-violet-600 rounded-xl justify-center items-center gap-2 flex">
                    <div class="text-white text-sm font-medium font-['Inter'] leading-[25px]">Contact Us</div>
                    <div class="w-4 h-4 relative">
                        <img class="h-4 left-0 top-0 absolute w-28" src={arrowRight} />
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>

<div className="flex flex-col items-start gap-4">
    <div className="flex items-center gap-4">
        {startIndex > 0 && (
            <button
                onClick={() => setStartIndex(startIndex - 4)}
                className="px-4 py-2 bg-transparent"
            >
                <img src={arrowRight} alt="Arrow Right" style={{ transform: 'scaleX(-1)' }} />
            </button>
        )}
        <div className="flex flex-wrap justify-start items-start gap-8">
            {teamMembers.slice(startIndex, startIndex + 4).map((member, index) => (
                <div key={index} className="flex flex-col items-center gap-4 w-56">
                    <div className="w-56 h-56 flex justify-center items-center">
                        <img
                            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                            src={member.imgSrc}
                            alt={member.name}
                        />
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="text-zinc-900 text-lg font-bold">{member.name}</div>
                        <div className="text-violet-600 text-sm font-medium">{member.role}</div>
                    </div>
                    <div className="text-zinc-500 text-sm font-normal text-center h-20 overflow-hidden">
                        {member.description}
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
                            <img src={facebook} alt="Facebook" style={{ width: '60%' }} />
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
                            <img src={github} alt="GitHub" style={{width: '60%' }} />
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
                            <img src={linkedin} alt="LinkedIn" style={{width: '60%'}} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {startIndex + 4 < teamMembers.length && (
            <button
                onClick={scrollMoreMembers}
                className="px-4 py-2 bg-transparent flex items-center"
            >
                <img src={arrowRight} alt="Arrow Right" className="w-[30px]" />
            </button>
        )}
    </div>
</div>



</div>

        {/* footer */}

        <div className="relative w-full h-[580px] px-[111px] pt-12 pb-[80px] bg-blue-300 border justify-center items-center inline-flex" style={{ marginTop: "0%" }}>
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
