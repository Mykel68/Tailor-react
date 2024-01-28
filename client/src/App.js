
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ServicePage from './Pages/ServicePage';
import Chatbot from './Component/ChatBot';
import ContactPage from './Pages/ContactPage'
import ProductPage from './Pages/ProductPage';
import Footer from './Component/Footer';
import Login from './Component/Login';
// import Preloader from './Component/Preloader';
import UserHome from './UserPages/UserHome';
import NoPage from './Pages/NoPage';
import Profile from './UserPages/Profile'
import Inbox from './UserPages/Inbox';
// import { AuthProvider } from './AuthContext';

function App() {
  const login = window.localStorage.getItem("authToken")
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    <Route path="/" element={<Navbar />}>
          {/* <Route index element={login ? <UserHome /> : <Login/>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="home" element={<UserHome />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        
    </Routes>
    {/* <Preloader/> */}
    <Chatbot/>
    <Footer/>
    
  </BrowserRouter>
</>
  );
}

export default App;
