import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Services from './components/Services';
import Andhra from './components/Andhra';
import SeafoodSpecials from './components/SeafoodSpecials';
import ChickenSpecialties from './components/ChickenSpecialties';
import Biryani from './components/Biryani';
import Order from './components/Order';
import CheckoutForm from './components/CheckoutForm';

import './App.css';
import Success from './components/Success';
import TableBook from './components/TableBook';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/andhra" element={<Andhra />} />
        <Route path="/seafood" element={<SeafoodSpecials />} />
        <Route path="/chickenspecials" element={<ChickenSpecialties />} />
        <Route path="/biryani" element={<Biryani />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/book" element={<TableBook/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;