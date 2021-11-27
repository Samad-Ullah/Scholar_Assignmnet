import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Assignment from './Pages/Assignment';



function AssignmentRoutes () {

    return(
        <Routes>

        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/assignmenttask" element={<Assignment></Assignment>} ></Route>


        </Routes>

    )
}


export default AssignmentRoutes

