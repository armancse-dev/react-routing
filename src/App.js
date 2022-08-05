import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          
          <Route path='/home' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/about/culture' element={<Culture/>}>
            
          </Route>
          <Route path='/friends' element={<Friends/>}></Route>
          <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
