import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'

import DonationForm from './DonationForm.jsx';
import DonationFormKiosk from './DonationFormKiosk.jsx';

import PersonInformation from './components/forms/spende/PersonInformation.jsx';
import DonationItems from './components/forms/spende/DonationItems.jsx';
import DonationProject from './components/forms/spende/DonationProject.jsx'
import Confirm from './components/forms/spende/Confirm.jsx';


import PersonInformationKiosk from './components/forms/spende/kiosk/PersonInformation.jsx';
import DonationItemsKiosk from './components/forms/spende/kiosk/DonationItems.jsx';
import DonationProjectKiosk from './components/forms/spende/kiosk/DonationProject.jsx'
import ConfirmKiosk from './components/forms/spende/kiosk/Confirm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/forms/spende" element={<DonationForm />}>
              <Route index element={<PersonInformation />} />
              <Route path="DonationItems" element={<DonationItems />} />
              <Route path="DonationProject" element={<DonationProject />} />
              <Route path="Confirm" element={<Confirm />} />
            </Route>
            <Route path="/forms/spende/kiosk" element={<DonationFormKiosk />}>
              <Route index element={<PersonInformationKiosk />} />
              <Route path="DonationItems" element={<DonationItemsKiosk />} />
              <Route path="DonationProject" element={<DonationProjectKiosk />} />
              <Route path="Confirm" element={<ConfirmKiosk />} />
            </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
