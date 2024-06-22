import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register/:type' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
