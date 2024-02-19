import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Analyatics from './pages/Analyatics';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Watchlist from './pages/Watchlist';
import Strategy from './pages/Strategy';

function App() {

  return (
    <Router>
    <div className='bg-primary flex flex-col px-[5%]'>
      {/* <Sidebar /> */}
      <Navbar />

      <div className='w-full flex flex-col items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/analytics' element={<Analyatics />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/strategy' element={<Strategy />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
