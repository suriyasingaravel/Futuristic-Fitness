import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Destination from "../pages/Destination"
import About from "../pages/About"
import Login from "../pages/Login"
import BmiCalculator from "../pages/BmiCalculator"
import Stopwatch from "../pages/Stopwatch"
import Todos from "../pages/Todos"

function AllRoutes(){
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Destination />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bmicalculator" element={<BmiCalculator />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/todo" element={<Todos/>} />
   </Routes>
)
}
export default AllRoutes