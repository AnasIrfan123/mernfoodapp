import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup.js';
import AddPost from './screens/AddPost.js';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  BrowserRouter as Router,
  Routes, // Switch ki jga routes 
  Route
} from "react-router-dom";



function App() {  //Routes k andr hmy ye krna ha hmy khn par jna ha
  return (

    <Router>

    <div> 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createuser' element={<Signup/>} />
        <Route exact path='/addpost' element={<AddPost/>} />
      </Routes>
    </div>

    </Router>
  );
}

export default App;
 // Link jhn a anchor tag ha whn use hoga 









 