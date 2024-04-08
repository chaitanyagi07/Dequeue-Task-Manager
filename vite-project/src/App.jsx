import {Home} from './assets/Home/Home'
import {Log} from './assets/Login/Log'
import { TaskAndList } from './assets/Components/TaskAndList/TaskAndList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Projectcard} from './assets/Components/ManageProjects/ManageProjects'
import {Projectlist} from './assets/Components/ManageProjects/Projectlist'
import { TaskAndProject } from './assets/Components/TaskAndProject/TaskAndProject';
import { Event } from './assets/Components/EventCreater/Event';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
       <Route path="/Login" element={<Log/>}></Route>
        <Route exact path="/TaskAndList" element={<TaskAndList/>}></Route>
        <Route exact path="/Projects" element={<Projectlist/>}></Route>
        <Route exact path="/TaskAndProject" element={<TaskAndProject/>}></Route>
        <Route exact path="/Event" element={<Event/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App