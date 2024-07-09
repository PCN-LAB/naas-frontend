// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapInput from './components/MapInput';
import { Provider } from 'react-redux';
import store from './store/Store';
import LandingPage from './pages/LandingPage'
import NewsAnalytics from './components/NewsAnalytics'
import './App.css';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/map-input' element={<MapInput />} />
            <Route path="/" element={<LandingPage />} />
            <Route path='/news-analytics' element={<NewsAnalytics />} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
