import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Import other components that you want to route to

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* Add more routes for other components */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;