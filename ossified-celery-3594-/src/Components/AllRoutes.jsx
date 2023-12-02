import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Destination from "../pages/Destination"
import About from "../pages/About"
import Login from "../pages/Login"
import BmiCalculator from "../pages/BmiCalculator"
import Stopwatch from "../pages/Stopwatch"
import Todos from "../pages/Todos"
import Beginner from "../pages/Beginner"
import Intermediate from "../pages/Intermediate"
import Advanced from "../pages/Advanced"
import Signup from "../pages/Signup"
import PrivateRouter from "./PrivateRoute"

function AllRoutes(){
return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Destination />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bmicalculator" element={<BmiCalculator />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/todo" element={<Todos/>} />
        <Route path="/beginner" element={ <Beginner/> } />
        <Route path="/intermediate" element={<Intermediate/>} />
        <Route path="/advanced" element={<Advanced/>} />
   </Routes>
)
}
export default AllRoutes