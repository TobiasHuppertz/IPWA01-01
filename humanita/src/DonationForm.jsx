import { Outlet } from 'react-router-dom';
import Header from './components/Header'; 

const DonationForm = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DonationForm;
