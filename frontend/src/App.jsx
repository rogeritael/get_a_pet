import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import {Container} from './components/layout/Container';

import {Home} from './components/pages/Home';
import {Login} from './components/pages/Auth/Login';
import {Register} from './components/pages/Auth/Register';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
