import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan proses registrasi pengguna sesuai kebutuhan aplikasi Anda
    // Contoh sederhana: Menyimpan data pengguna yang terdaftar dan mengarahkan ke halaman verifikasi
    // Simpan data pengguna di sini atau kirim ke server

    // Setelah registrasi berhasil, arahkan ke halaman verifikasi
    navigate('/verifikasi');
  };

  return (
    <div className="register"> {/* Tambahkan class "register" di sini */}
      <h2>Registrasi</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
