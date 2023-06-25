import React, { useContext } from 'react';
import { VerifikasiContext } from '../../context/VerifikasiContext';

const VerifikasiSuccess = () => {
  const { data } = useContext(VerifikasiContext);

  return (
    <div className={`verifikasi-success ${data && data.isVerified ? 'verifikasi-success--verified' : ''}`}>
      <h2>Konfirmasi Verifikasi</h2>
      {data && data.isVerified ? (
        <>
          <p>Data yang terverifikasi:</p>
          <ul>
            <li>Nama Lengkap: {data.namaLengkap}</li>
            <li>NIK: {data.nik}</li>
            <li>Kode Tipe Disabilitas: {data.kodeTipeDisabilitas}</li>
          </ul>
        </>
      ) : (
        <p>Verifikasi gagal. Mohon lengkapi semua form.</p>
      )}
    </div>
  );
};

export default VerifikasiSuccess;
