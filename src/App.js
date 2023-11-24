import { Route, Routes } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Dashboard from './components/common/Dashboard'
import Cancer from './pages/Cancer'
import Diabetes from './pages/Diabetes'
import Heart from './pages/Heart'
import Kideny from './pages/Kideny'
import Liver from './pages/Liver'
import Home from './pages/Home'
import Parkinson from "./pages/Parkinson";

import "./App.css";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <Navbar/>

      {/* Routes for disease */}

      <Routes>
      <Route
            element={
             <Dashboard/>
            }
          >
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard/heart" element={<Heart/>} />
            <Route path="/dashboard/kideny" element={<Kideny/>}/>
            <Route path="/dashboard/liver" element={<Liver/>}/>
            <Route path="/dashboard/diabetes" element={<Diabetes/>}/>
            <Route path="/dashboard/cancer" element={<Cancer/>}/>
            <Route path="/dashboard/parkinson" element={<Parkinson/>}/>
            
        </Route>
      </Routes>

    </div>
  );
}

export default App;
