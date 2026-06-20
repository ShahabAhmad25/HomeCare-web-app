import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicesPage'
import ServiceProviders from './pages/ServiceProviders'
import ChooseBookingMethod from './pages/ChooseBookingMethod'
import ProviderBookingForm from './pages/ProviderBookingForm'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
// import ProviderDetails from './pages/ProviderDetails'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import JobBookingForm from './pages/JobBookingForm'


function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<HomePage></HomePage>} path='/'/>
          <Route element={<ServicePage></ServicePage>} path='/services'/>
          <Route element={<ServiceProviders></ServiceProviders>} path='/services/providers/:category'/>
          <Route element={<ChooseBookingMethod></ChooseBookingMethod>} path='/services/booking-method/:category'/>
          <Route element={<ProviderBookingForm></ProviderBookingForm>} path='/booking/provider-booking-details'/>
          <Route element={<JobBookingForm></JobBookingForm>} path='/services/booking-details'/>
          <Route element={<AboutUs></AboutUs>} path='/about-us'/>
          <Route element={<ContactUs></ContactUs>} path='/contact-us'/>
          <Route element={<SignupPage></SignupPage>} path='/sign-up'/>
          <Route element={<LoginPage></LoginPage>} path='/login'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
