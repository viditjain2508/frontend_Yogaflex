import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import ContactUs from './components/ContactUs';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar title = "YogaFlex"/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contactUs' element={<ContactUs/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
