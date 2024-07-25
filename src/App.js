// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapInput from './components/MapInput';
import { Provider } from 'react-redux';
import store from './store/Store';
import LandingPage from './pages/LandingPage'
import NewsAnalytics from './components/NewsAnalytics'
import './App.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword'
import ChangePassword from './pages/ChangePassword'
import Error404 from './pages/error404'
import Feedback from './pages/Feedback'
import Graph from './components/Graph'
function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/map-input' element={<MapInput />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/VerifyEmail" element={<VerifyEmail />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path='/news-analytics' element={<NewsAnalytics />} />
            <Route path='/Feedback' element={<Feedback />} />
            <Route path='/Graphs' element={<Graph />}/>
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
