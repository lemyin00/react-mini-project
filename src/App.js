import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Header from './Components/Header';



function App() {
  return (
  <div>
    <Header/> 
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/movies" element={<Movies/>}></Route>
     <Route path="/movies/:id" element={<MovieDetail/>}></Route>
   </Routes>
  </div>  
  );
}

export default App;
