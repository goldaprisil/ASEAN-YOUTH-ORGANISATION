import React, { useContext, useEffect } from 'react';
import { VerifikasiContext } from '../context/VerifikasiContext';
import VerifikasiList from '../components/Login-Verifikasi/VerifikasiList';

const VerifikasiPage = ({ onSuccess }) => {
  const { isFileUploaded } = useContext(VerifikasiContext);

  useEffect(() => {
    if (isFileUploaded) {
      onSuccess(); // Memanggil fungsi onSuccess untuk mengarahkan ke halaman donasi
    }
  }, [isFileUploaded, onSuccess]);

  return (
    <div>
      {isFileUploaded ? (
        <div>
          <h2>Selamat! File berhasil diunggah!</h2>
          <p>Ini adalah halaman verifikasi.</p>
        </div>
      ) : (
        <VerifikasiList />
      )}
    </div>
  );
};

export default VerifikasiPage;
