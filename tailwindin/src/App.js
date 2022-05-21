import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Main from "../src/main";
import Desc from "../src/desc";
import About from '../src/about';
import Login from '../src/login';
import './App.css';
import './index';
import Contact from "../src/contact";
import Bottom from "../src/bottom"


export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Desc />} />
          
          

          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bottom" element={<Bottom />} />
          
        </Route>
        
      </Routes>
      
    </BrowserRouter>

    
      
    
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);