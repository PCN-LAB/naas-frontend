// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapInput from './components/MapInput';
import { Provider } from 'react-redux';
import store from './store/Store';
import LandingPage from './pages/LandingPage'
import './App.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword'
import ChangePassword from './pages/ChangePassword'
import Error404 from './pages/error404'

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
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
