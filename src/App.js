import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateInternship from './pages/CreateInternship';
import InternshipGuide from './pages/InternshipGuide'

function App() {
  return (
    //a <router> that uses the html5 history API to keep UI and URL in sync
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/createInternship" element={<CreateInternship />}/>
          <Route path="/internshipGuide" element={<InternshipGuide />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
