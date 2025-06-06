import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from "./components/footer";
import { DataProvider } from './context/DataProvider.jsx';
import PagePokemon from './components/pokemonPage.jsx';
import PageMagic from './components/magicPage.jsx';
import PageYugioh from './components/yugiohPage.jsx';
import Sale from './components/salePage.jsx';
import Contact from './components/contactPage.jsx';
import Payment from './components/paymentsPage.jsx';
import Thanks from './components/confirmationPage.jsx';

const About = () => <h2>ℹ️ Acerca de</h2>;

function App() {
  return (
    <DataProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/pokemon" element={<PagePokemon />} />
            <Route path="/yugioh" element={<PageYugioh />} />
            <Route path="/magic" element={<PageMagic />} />
            <Route path="/ofertas" element={<Sale />} />
            <Route path="/pagos" element={<Payment />} />
            <Route path="/gracias" element={<Thanks />} />
          </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}


export default App;