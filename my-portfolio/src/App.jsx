import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Writeups from './pages/Writeups';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writeups" element={<Writeups />} />
      </Routes>
    </Router>
  )
}

export default App;