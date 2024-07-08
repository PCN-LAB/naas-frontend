import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './components/Map';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/map' element={<Map />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
