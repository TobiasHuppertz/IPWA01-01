import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'

import DonationForm from './DonationForm.jsx';
import DonationFormKiosk from './DonationFormKiosk.jsx';
import LegalsLayout from './LegalsLayout.jsx';

import PersonInformation from './components/forms/spende/PersonInformation.jsx';
import DonationItems from './components/forms/spende/DonationItems.jsx';
import DonationProject from './components/forms/spende/DonationProject.jsx'
import Confirm from './components/forms/spende/Confirm.jsx';
import Submit from './components/forms/spende/Submit.jsx'

import PersonInformationKiosk from './components/forms/spende/kiosk/PersonInformation.jsx';
import DonationItemsKiosk from './components/forms/spende/kiosk/DonationItems.jsx';
import DonationProjectKiosk from './components/forms/spende/kiosk/DonationProject.jsx'
import ConfirmKiosk from './components/forms/spende/kiosk/Confirm.jsx'
import SubmitKiosk from './components/forms/spende/kiosk/Submit.jsx'

import Contact from './components/Contact.jsx';
import LegalNotice from './components/LegalNotice.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}/>   
            <Route path="/forms/spende" element={<DonationForm />}>
              <Route index element={<PersonInformation />} />
              <Route path="DonationItems" element={<DonationItems />} />
              <Route path="DonationProject" element={<DonationProject />} />
              <Route path="Confirm" element={<Confirm />} />
              <Route path="Submit" element={<Submit />} />
            </Route>
            <Route path="/forms/spende/kiosk" element={<DonationFormKiosk />}>
              <Route index element={<PersonInformationKiosk />} />
              <Route path="DonationItems" element={<DonationItemsKiosk />} />
              <Route path="DonationProject" element={<DonationProjectKiosk />} />
              <Route path="Confirm" element={<ConfirmKiosk />} />
              <Route path="Submit" element={<SubmitKiosk />} />
            </Route>
            <Route path="/legals" element={<LegalsLayout />}>
              <Route path="contact" element={<Contact />} />
              <Route path="legalnotice" element={<LegalNotice />} />
            </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
