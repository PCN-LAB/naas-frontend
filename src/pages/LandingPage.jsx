import { React, useState, useRef } from 'react';
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
import orbit from '../assets/orbit1.mp4'
import video from '../assets/VideoIcon.png'
import meetIcon from '../assets/MeetIcon.png'
import newsicon from '../assets/NewsIcon.png'

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

    const GetStarted = () => {
        secondPortionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

      const [visibleMembers, setVisibleMembers] = useState(3); 

    const [startIndex, setStartIndex] = useState(0);
    const sliderRef = useRef(null);


    const slideRight = () => {
      if (startIndex + 3 < teamMembers.length) {
        setStartIndex(startIndex + 1);
        sliderRef.current.style.transform = `translateX(-${(startIndex + 1) * (100 / 3)}%)`;
      }
    };
    
    const slideLeft = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
        sliderRef.current.style.transform = `translateX(-${(startIndex - 1) * (100 / 3)}%)`;
      }
    };
   
   
  return (
    <>
  <NavbarLandingPage />
{/* <img src={Bluebg} className="absolute w-full z-0 h-800" style={{ marginTop: "4.5%" }} /> */}
<div className='flex items-center justify-center absolute w-full z-10 gap-96' style={{ marginTop: "6%" }}>
<div className="text-white absolute left-0 w-1/2 p-12 z-50" style={{marginTop:"-8%", marginLeft:"8%"}}>
        <h1 className="text-6xl font-bold leading-tight font-Poppins">
            News <span className='text-white'>Analytics</span> 
            <div style={{ marginTop: "0%" }}>
                <h4 className="text-6xl">As A <span className='text-white'>Service</span> </h4>
            </div>
        </h1>
        <h1 className='text-3xl font-medium leading-tight font-Poppins' style={{ marginTop: "2%" }}>
            What You’re <span className='text-white'>Looking For!</span> 
        </h1>
        <div className='flex flex-col justify-left items-left'>
            <button style={{ marginTop: "20%" , marginLeft:"7%" }} className="w-[260px] h-[70px] px-5 py-3 bg-custom-blue rounded-[50px] justify-center items-center gap-2 inline-flex">
                <div className="text-neutral-50 text-[30px] font-bold font-Poppins leading-normal" onClick={GetStarted}>Get Started</div>
            </button>
        </div>
    </div>
    {/* <div className='absolute top-0 w-[1300px] h-[1150px]' style={{ marginRight: "-30%", marginTop: "-12%", zIndex: "20" }}>
        <img src={portfolio} className='w-full h-full rounded-full z-20' style={{ objectFit: "cover", borderRadius: "50%", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8), 0 25px 50px rgba(0, 0, 0, 0.9)" }} />
    </div> */}
 
      <video 
          className='w-full h-full  z-20 p-0' 
          style={{ objectFit: "cover",marginTop:"-6%"}} 
          autoPlay 
          loop 
          muted
      >
          <source src={orbit} type="video/mp4" />
          Your browser does not support the video tag.
      </video>


</div>


      {/* Second Portion */}
<div ref={secondPortionRef} className='flex flex-col md:flex-row justify-center items-center gap-20' style={{ marginTop: "73%", padding: '0 5%' }}>
    <div className="flex flex-col items-start">
        <img className="w-25 h-1.5 mb-4" src={line} alt="Line" />
        <div style={{display:"flex", flexDirection:"row"}}>
          <img style={{height:"30px",width:"30px", marginTop:"2%", marginRight:"0%"}} src={video}></img>
          <h1 className="text-sky-950 text-2xl md:text-4xl lg:text-5xl font-bold font-Poppins mb-4">NAaaS Explained</h1>
        </div>
        
        <h1 className="text-sky-950 text-2xl md:text-4xl lg:text-5xl font-bold font-Poppins mb-4">How does it work?</h1>
        <h2 className='text-zinc-500 text-xl md:text-2xl lg:text-3xl font-normal font-Ubuntu mb-4'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do</h2>
        <div className='flex flex-row items-center gap-4 mt-4'>
            <h2 className='font-Poppins text-[#4cc0eb]'>Watch as Guest</h2>
            <img className='w-[55px] h-[30px]' src={arrows} alt="Arrows" />
        </div>
    </div>
    <div className="w-full md:w-auto mt-8 md:mt-0">
        <iframe
            className="w-full h-64 md:w-[500px] md:h-[300px]"
            src="https://youtube.com/embed/swWqYLvYNzY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
</div>


            {/* NEWS Section */}
            <div className='flex flex-col justify-center items-center' style={{ marginTop: "8%" }}>
                <div style={{display:"flex", flexDirection:"row"}}>
                  <img style={{height:"60px",width:"50px", marginTop:"2%", marginRight:"0%"}} src={newsicon}></img>
                  <div class="w-[156px] h-[63px] text-sky-950 text-[52px] font-bold font-Poppins">News</div>
                </div>
                <img style={{ marginTop: "5%" }} src={news}></img>
            </div>

          {/* contact Team */}
          <div className="w-full py-16 bg-white flex flex-col items-center" style={{ marginTop: '5%' }}>
  <div className="w-full max-w-6xl px-4 md:px-8">
    <div className="flex flex-col justify-center items-start gap-4 mb-12">
      <div style={{display:"flex", flexDirection:"row"}} className='w-full'>
        <img style={{height:"40px",width:"40px", marginTop:"0.2%", marginRight:"1%"}} src={meetIcon}></img>
        <h2 className="text-custom-blue text-3xl md:text-5xl font-bold">Meet our team members</h2>
      </div>
      <p className="text-custom-blue text-lg">Complete the form below to send us a message. Our support team will promptly respond to your request.</p>
            <div className="flex gap-4 mt-4">
                <button className="p-3 bg-custom-blue rounded-xl flex justify-center items-center gap-2">
                    <span className="text-white text-sm font-medium">Contact Us</span>
                    <img className="w-4 h-4" src={arrowRight} alt="Contact Us" />
                </button>
            </div>
      
    </div>

    <div className="flex items-center justify-between gap-8 mt-14">
      {startIndex > 0 && (
        <button onClick={slideLeft} className="p-2 bg-transparent flex items-center">
          <img src={arrowRight} alt="Arrow Left" style={{ transform: 'scaleX(-1)', width: '30px' }} />
        </button>
      )}
      <div className="overflow-hidden w-full">
        <div className="slider" ref={sliderRef} style={{ display: 'flex', transition: 'transform 0.3s ease-in-out' }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="slide flex flex-col items-center gap-4" style={{ minWidth: '33.33%' }}>
              <div className="w-48 h-48 flex justify-center items-center">
                <img className="w-48 h-48 rounded-full object-cover" src={member.imgSrc} alt={member.name} />
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
                  <img src={github} alt="GitHub" style={{ width: '60%' }} />
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
                  <img src={linkedin} alt="LinkedIn" style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {startIndex + 3 < teamMembers.length && (
        <button onClick={slideRight} className="p-2 bg-transparent flex items-center">
          <img src={arrowRight} alt="Arrow Right" className="w-[30px]" />
        </button>
      )}
    </div>
  </div>
</div>


   {/* footer */}
<div className="relative w-full h-auto px-4 md:px-[111px] pt-12 pb-[80px] bg-[#4c7ca3] border justify-center items-center inline-flex" style={{ marginTop: "4%" }}>
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


        </>
    );
}

export default LandingPage;
