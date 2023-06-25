import React from 'react';
import Register from '../components/Login-Verifikasi/Register';

const RegisterPage = ({ navigate }) => {
  return (
    <div>
      <h1>Register Page</h1>
      <Register navigate={navigate} />
    </div>
  );
};

export default RegisterPage;
