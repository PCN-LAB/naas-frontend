import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './components/Map';

function App() {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
