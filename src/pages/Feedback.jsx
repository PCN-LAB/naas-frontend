import React, { useState } from 'react';
import logo from '../assets/NAaas-logo.png';
import Help from '../assets/NeedHelp.png';
import background from '../assets/background.png'; 
import thumbsup from '../assets/ThumbsUp.png'
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon from Material-UI

const Feedback = () => {
  const [rating, setRating] = useState(null);
  const [isCredible, setIsCredible] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className={`w-full h-full ${isPopupVisible ? 'blur-sm' : ''}`}>
        <div className="w-full h-[327px] left-0 top-0 absolute bg-gradient-to-b from-slate-200 to-sky-600"></div>
        <div className="absolute left-[43px] top-[133px] text-black text-2xl font-bold" style={{ marginTop: "1%" }}>How do you feel?</div>
        <div className="absolute left-[43px] top-[160px] text-black text-base font-normal" style={{ marginTop: "1%" }}>Tell us about your experience, and help us improve the website! :)</div>
        <div className="absolute top-12 left-0 p-3" style={{ marginLeft: "-7%" }}>
          <img src={logo} alt="Logo" className="h-24" />
        </div>
        <div className="absolute w-full h-[622px] left-0 top-[266px] bg-gradient-to-b from-white to-slate-300 rounded-[65px]"></div>
        <div className="mt-14 absolute left-[63px] top-[270px] text-sky-950 text-2xl font-extrabold">Give us Feedback</div>
        <div className="absolute left-[63px] top-[355px] text-sky-950 text-base font-normal">Write your suggestion here</div>
        <textarea
          className="absolute left-[63px] top-[383px] w-[619px] h-[279px] p-4 bg-gradient-to-b from-slate-300 to-sky-600 border border-sky-950 rounded-md text-sky-950 text-base font-light"
          placeholder="Answer here..."
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>
        <div className="absolute left-[63px] top-[672px] text-sky-950 text-base font-light">100 words limit</div>
        <div className="absolute left-[744px] top-[386px] text-sky-950 text-2xl font-extrabold">How reputable do you find NAaaS compared to other news sources?</div>
        <div className="absolute left-[744px] top-[449px] flex items-center gap-1 border border-sky-950 p-2">
          <div className="text-sky-800 text-base font-semibold">Barely</div>
          {[1, 2, 3, 4, 5].map((value) => (
            <div
              key={value}
              className={`w-[22px] h-[22px] text-center text-base font-semibold cursor-pointer ${
                rating === value ? 'bg-sky-600 text-slate-200 border-sky-600' : 'border-transparent'
              }`}
              onClick={() => handleRatingClick(value)}
             
            >
              {value}
            </div>
          ))}
          <div className="text-sky-800 text-base font-semibold">Reputable</div>
        </div>
        <div className="absolute left-[744px] top-[512px] text-sky-950 text-2xl font-extrabold">Would you consider NAaaS credible enough for providing accurate news?</div>
        <div className="absolute left-[744px] top-[554px] flex items-center gap-4 border border-sky-950 p-2">
          <div
            className={`w-[39.53px] h-[22px] shadow text-center text-base font-semibold cursor-pointer ${
              isCredible === 'YES' ? 'bg-sky-600 text-slate-200 ' : ' text-sky-950 '
            }`}
            onClick={() => handleCredibleClick('YES')}
           
          >
            YES
          </div>
          <div
            className={`w-[39.53px] h-[22px] shadow text-center text-base font-semibold cursor-pointer ${
                isCredible === 'NO' ? 'bg-sky-600 text-slate-200' : 'text-sky-950 '
            }`}
            onClick={() => handleCredibleClick('NO')}
            >
            NO
         </div>

        </div>
        <button
          className="absolute left-[889px] top-[660px] w-[259px] h-[70px] bg-sky-600 shadow text-white text-3xl font-semibold rounded-md"
          onClick={handleSubmit}
        >
          Submit!
        </button>
        <div className="absolute left-[1700px] top-[750px] flex flex-col items-center">
          <img className="w-full h-full shadow" src={Help} alt="help icon" />
        </div>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="relative w-[550px] h-[300px] flex flex-col items-center justify-center p-4 rounded-md shadow-lg bg-blue-100" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <div>
              <img src={thumbsup} />
            </div>
            <div className="text-center text-sky-950 text-2xl font-extrabold mb-4">
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
  );
};

export default Feedback;
