import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Register from './component/Register';
import Login from './component/login';
function App() {
  return (
    <>
     <Router>
      <Routes>
<Route path='/' element={<Register/>}/>
 <Route path='/home' element={<Home/>}/>
<Route path='/login' element={<Login/>}/> 
      </Routes>
     </Router> 
    </>
  );
}

export default App;
