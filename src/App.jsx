import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { VerifikasiProvider } from './context/VerifikasiContext';
import LoginPage from './components/Login-Verifikasi/Login';
import RegisterPage from './components/Login-Verifikasi/Register';
import VerifikasiSuccess from './components/Login-Verifikasi/VerifikasiSuccess';
import PageDonasi from "./pages/PageDonasi";
import PagePembayaran from "./pages/PagePembayaran";
import AcceptPembayaran from './components/AcceptPembayaran/AcceptPembayaran';
import VerifikasiPage from './pages/VerifikasiPage';
import BeasiswaList from "./components/BeasiswaList";
import DetailBeasiswa from "./pages/DetailBeasiswa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FooterProvider } from "./context/FooterContext";
import Beasiswa1 from "./pages/Beasiswa1.jsx";
import Beasiswa2 from "./pages/Beasiswa2.jsx";
import Beasiswa3 from "./pages/Beasiswa3.jsx";
import Donasi from "./pages/Donasi.jsx";


const App = () => {
  return (
    <AuthProvider>
      <VerifikasiProvider>
      <FooterProvider>
        <Routes>
          <Route
            path="/"
            element={
              <AuthContext.Consumer>
                {({ isLoggedIn }) =>
                  isLoggedIn ? <PageDonasi /> : <Navigate to="/login" replace={true} />
                }
              </AuthContext.Consumer>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verifikasi" element={<VerifikasiPage />} />
          <Route path="/verifikasi-success" element={<VerifikasiSuccess />} />
          <Route path="/pembayaran" element={<PagePembayaran />} />
          <Route path="/accept" element={<AcceptPembayaran />} />
          <Route path="/donasi" element={<PageDonasi />} />
          <Route path="/beasiswa" element={<BeasiswaList />} />
          <Route path="/detail-beasiswa" element={<DetailBeasiswa />} />
          <Route path="/forum-beasiswa1" element={<Beasiswa1 />} />
          <Route path="/forum-beasiswa2" element={<Beasiswa2 />} />
          <Route path="/forum-beasiswa3" element={<Beasiswa3 />} />
          <Route path="/forum-donasi" element={<Donasi />} />
        </Routes>
      </FooterProvider>
      </VerifikasiProvider>
    </AuthProvider>

  );
};

export default App;
