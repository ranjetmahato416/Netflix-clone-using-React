import './App.scss';
import Home from './Pages/Home/Home'
import Watch from './Components/Watch/Watch';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path = '/' element = {<Register/>}></Route>
      <Route path = '/login' element = {<Login/>}></Route>
      <Route path = '/home' element = {<Home/>}></Route>
      <Route path = '/watch' element = {<Watch/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>  
    
  );
}

export default App;
