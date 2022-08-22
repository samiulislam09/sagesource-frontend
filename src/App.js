import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Posts from './components/Posts';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import Register from './pages/Register';
import Requireauth from './pages/Requireauth';
import UserBlogPublishPage from './pages/UserBlogPublishPage';
import UserPost from './pages/UserPost';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/user-post' element={
          <Requireauth>
            <UserPost></UserPost>
          </Requireauth>
        }></Route>
        <Route path='/my-blog' element={
          <Requireauth>
            <UserBlogPublishPage></UserBlogPublishPage>
          </Requireauth>
        }></Route>
        <Route path='/blog/:id' element={<PostDetails></PostDetails>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
