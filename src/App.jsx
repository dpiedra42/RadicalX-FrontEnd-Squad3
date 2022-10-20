import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    //a <router> that uses the html5 history API to keep UI and URL in sync
    <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
