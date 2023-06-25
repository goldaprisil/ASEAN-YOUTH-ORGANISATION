// File: AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://be-14-final-project.up.railway.app/login', {
        email: email,
        password: password,
      });
      
      // Lakukan proses login sesuai kebutuhan aplikasi Anda
      // Contoh sederhana: Set isLoggedIn menjadi true setelah berhasil login
      setIsLoggedIn(true);
      
      console.log(response.data); // Menampilkan respons dari API
      
      // Jika Anda ingin mengakses properti tertentu dari respons API
      const { msg, id, email, accessToken } = response.data;
      console.log(msg); // Menampilkan pesan dari respons API
      console.log(id); // Menampilkan ID dari respons API
      console.log(email); // Menampilkan email dari respons API
      console.log(accessToken); // Menampilkan accessToken dari respons API
    } catch (error) {
      console.log(error);
    }
  };
  
  const logout = () => {
    // Lakukan proses logout sesuai kebutuhan aplikasi Anda
    // Contoh sederhana: Set isLoggedIn menjadi false setelah logout
    setIsLoggedIn(false);
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        email: email,
        password: password,
      });
      
      // Lakukan proses registrasi sesuai kebutuhan aplikasi Anda
      // Contoh sederhana: Set isLoggedIn menjadi true setelah berhasil registrasi
      setIsLoggedIn(true);
      
      console.log(response); // Menampilkan respons dari API
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
