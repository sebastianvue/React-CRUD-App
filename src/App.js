import './App.css';
import Navbar from "./Pages/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import User from "./Pages/user/User"
import AddUser from './Pages/user/AddUser';
import Edit from './Pages/user/Edit';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/:id" element={<User/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
        <Route path="/edit-user/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
