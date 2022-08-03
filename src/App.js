import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/friends' element={<Friends/>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
