import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import SkillsUpdate from './components/SkillsUpdate';
import PositionNew from './components/PositionNew';
import OrgDashboard from './components/OrgDashboard';
import DevDashboard from './components/DevDashboard';
import FrameworkUpdate from './components/FrameworkUpdate';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/:usr/register' element={<Register />} />
          <Route path='/:org/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/devs/skills/language' element={<SkillsUpdate />} />
          <Route path='/orgs/jobs/new' element={<PositionNew />} />
          <Route path='/orgs/dashboard' element={<OrgDashboard />} />
          <Route path='/devs/dashboard' element={<DevDashboard />} />
          <Route path='/devs/skills/frameworks' element={<FrameworkUpdate />} />
          <Route path='/orgs/jobs/:id' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
