
import './App.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import enTranslation from './en.json';
import arTranslation from './ar.json';

import Partner from './components/Partner.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <div className='app-main'>
      <BrowserRouter>
        <Routes>
          
            <Route index element={<Home />} />
            <Route path="/Partner" element={<Partner />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;