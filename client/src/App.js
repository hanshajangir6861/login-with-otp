import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashbored from './pages/Dashbored';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Headers from './componants/Headers';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Headers/>
   <Routes>
    <Route path='/' element= {<Login/>}/>
    <Route path='/register' element= {<Register/>}/>
    <Route path='/dashbored' element= {<Dashbored/>}/>
    <Route path='/user/otp' element= {<Otp/>}/>
    <Route path='*' element= {<Error/>}/>

   </Routes>
    </>
    
  );
}

export default App;
