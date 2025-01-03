import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import ContentLayout from './ContentLayout'; 

export default function DonationForm() {
  return (
    <>
      <Header />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <Footer />
    </>
  )
}
