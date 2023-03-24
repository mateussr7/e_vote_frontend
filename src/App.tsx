import { FC } from 'react';
import MessageBar from './comon/components/Messagebar';

import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ElectionsPage from './pages/Elections';
import Results from './comon/components/Results';

const App: FC = () => {
  return <>

    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/elections" element={<ElectionsPage />} />
      <Route path="/results" element={<Results />} />
    </Routes>
    <MessageBar />
  </>
}

export default App;
