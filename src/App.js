import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/signIn' element={<SignIn />}></Route>
        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
