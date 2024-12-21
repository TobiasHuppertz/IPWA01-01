import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'

import DonationForm from './DonationForm.jsx';
import DonationFormKiosk from './DonationFormKiosk.jsx';

import PersonInformation from './components/forms/spende/PersonInformation.jsx';
import Confirm from './components/forms/spende/Confirm.jsx';
import Step3 from './components/forms/spende/Step3.jsx';

import Step1Kiosk from './components/forms/spende/kiosk/Step1.jsx';
import Step2Kiosk from './components/forms/spende/kiosk/Step2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/forms/spende" element={<DonationForm />}>
              <Route index element={<PersonInformation />} />
              <Route path="Confirm" element={<Confirm />} />
              <Route path="step3" element={<Step3 />} />
            </Route>
            <Route path="/forms/spende/kiosk" element={<DonationFormKiosk />}>
              <Route index element={<Step1Kiosk />} />
              <Route path="step2" element={<Step2Kiosk />} />
            </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
