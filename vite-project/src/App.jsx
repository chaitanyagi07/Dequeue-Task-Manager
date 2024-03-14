import {Home} from './assets/Home/Home'
import {Log} from './assets/Login/Log'
import { TaskAndList } from './assets/Components/TaskAndList/TaskAndList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Projectcard} from './assets/Components/ManageProjects/ManageProjects'
import { TaskAndProject } from './assets/Components/TaskAndProject/TaskAndProject';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
       <Route path="/Login" element={<Log/>}></Route>
        <Route exact path="/TaskAndList" element={<TaskAndList/>}></Route>
        <Route exact path="/ManageProjects" element={<Projectcard/>}></Route>
        <Route exact path="/TaskAndProject" element={<TaskAndProject/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App