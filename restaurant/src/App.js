import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Category from './components/Category';
import Footer from './components/Footer'
function App() {

  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category" element={<Category />}/>
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
