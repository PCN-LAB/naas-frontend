import React, { useState } from 'react';
import { FaRegSmile, FaRegMeh, FaRegFrown, FaRegAngry, FaRegLaugh } from 'react-icons/fa';
import logo from '../assets/NAaas-logo.png';
import Help from '../assets/NeedHelp.png';
import background from '../assets/background.png';
import thumbsup from '../assets/ThumbsUp.png';
import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../components/Vertical-nav/vertical-nav';

const Feedback = () => {
  const [rating, setRating] = useState(null);
  const [isCredible, setIsCredible] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleCredibleClick = (value) => {
    setIsCredible(value);
  };

  const handleFeedbackChange = (event) => {
    const value = event.target.value;
    if (value.split(/\s+/).length <= 100) {
      setFeedback(value);
    }
  };

  const handleSubmit = () => {
    setFeedbackSubmitted(true);
    setIsPopupVisible(true);

    console.log('Feedback submitted:', feedback);
    console.log('Rating:', rating);
    console.log('Is Credible:', isCredible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Sidebar />
      <div className="flex-grow relative flex flex-col items-center p-0">
        <div className={`w-full h-full ${isPopupVisible ? 'blur-sm' : ''}`}>
          <div className="w-full h-60 bg-gradient-to-b from-colorVerticalNav to-slate-200 flex flex-col items-start justify-start p-4">
            <img src={logo} alt="Logo" className="h-16 md:h-24 mr-4" style={{ marginLeft: "-9%" }} />
            <div className="flex flex-col items-start">
              <div className="text-black text-2xl md:text-3xl font-bold">How do you feel?</div>
              <div className="text-black text-lg md:text-xl">Tell us about your experience, and help us improve the website! :)</div>
              <div className="flex items-center space-x-4 mt-2">
                {[{icon: FaRegLaugh, mood: 'happy'}, {icon: FaRegSmile, mood: 'smile'}, {icon: FaRegMeh, mood: 'neutral'}, {icon: FaRegFrown, mood: 'sad'}, {icon: FaRegAngry, mood: 'angry'}].map(({icon: Icon, mood}) => (
                  <div
                    key={mood}
                    className={`p-2 rounded-lg border-2 ${selectedMood === mood ? 'bg-custom-blue border-none' : 'border-custom-blue'} flex items-center justify-center cursor-pointer`}
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: selectedMood === mood ? '#002A5C' : 'transparent',
                      borderColor: selectedMood === mood ? '#002A5C' : '#8AC7E6',
                      color: 'transparent'
                    }}
                    onClick={() => handleMoodClick(mood)}
                  >
                    <Icon size={24} style={{ color: 'white', stroke: 'white', strokeWidth: 1.5 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-start w-full mt-4">
            <div className="flex flex-col items-start w-full md:w-1/2 p-4">
              <div className="text-sky-950 text-lg md:text-xl font-extrabold">Give us Feedback</div>
              <div className="text-sky-950 text-base font-normal">Write your suggestion here</div>
              <textarea
                className="w-[90%] h-30 md:h-80 p-4 bg-white border border-custom-blue rounded-lg md:rounded-3xl text-sky-950 text-base font-light mt-2"
                placeholder="Write here..."
                value={feedback}
                onChange={handleFeedbackChange}
              ></textarea>
              <div className="text-sky-950 text-base font-light mt-2">100 words limit</div>
            </div>
            <div className="flex flex-col items-start w-full md:w-1/2 p-4 mt-16">
              <div className="text-sky-950 text-lg md:text-xl font-extrabold">How reputable do you find NAaaS compared to other news sources?</div>
              <div className="flex items-center gap-1 border border-sky-950 p-2 rounded-3xl mt-2">
                <div className="text-sky-800 text-sm md:text-base font-semibold">Barely</div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <div
                    key={value}
                    className={`w-8 h-8 md:w-[2vw] md:h-[2vw] text-center text-sm md:text-base font-semibold cursor-pointer border rounded-full ${rating === value ? 'bg-custom-blue text-slate-200 border-sky-600' : 'border-transparent'}`}
                    style={{ marginTop: "2%" }}
                    onClick={() => handleRatingClick(value)}
                  >
                    {value}
                  </div>
                ))}
                <div className="text-sky-800 text-sm md:text-base font-semibold">Reputable</div>
              </div>
              <div className="text-sky-950 text-lg md:text-xl font-extrabold mt-4">Would you consider NAaaS credible enough for providing accurate news?</div>
              <div className="flex items-center gap-4 border border-sky-950 rounded-3xl p-2 mt-2" style={{ padding: "0px" }}>
                <div
                  className={` w-24 h-10 md:w-[11vw] md:h-[4vh] shadow text-center text-sm md:text-base font-semibold cursor-pointer rounded-full ${isCredible === 'YES' ? 'bg-custom-blue text-slate-200 ' : ' text-sky-950 '}`}
                  onClick={() => handleCredibleClick('YES')}
                >
                  <p className='justify-between items-center mt-1'>YES</p>
             
                </div>
                <div
                  className={`w-20 h-10 md:w-[8vw] md:h-[4vh] shadow text-center text-sm md:text-base font-semibold cursor-pointer rounded-full ${isCredible === 'NO' ? 'bg-custom-blue text-slate-200' : 'text-sky-950 '}`}
                  onClick={() => handleCredibleClick('NO')}
                >
                   <p className='justify-between items-center mt-1'>NO</p>
                </div>
              </div>
              <button
                className="mt-12 w-40 h-12 md:w-[15vw] md:h-[8vh] bg-custom-blue shadow text-white text-lg md:text-2xl font-semibold rounded-full"
                onClick={handleSubmit}
              >
                Submit!
              </button>
            </div>
          </div>
          <div className="fixed bottom-4 right-10">
            <img className="w-12 h-12 md:w-full md:h-full shadow" src={Help} alt="help icon" />
          </div>
        </div>
        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
            <div className="relative w-[40%] h-[40vh] flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-blue-100" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
              <div>
                <img src={thumbsup} />
              </div>
              <div className="text-center text-sky-950 text-lg md:text-xl font-extrabold mb-4">
                THANK YOU FOR SUBMITTING THE FEEDBACK!
              </div>
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={closePopup}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
