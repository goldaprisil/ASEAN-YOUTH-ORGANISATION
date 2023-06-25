import React, { useContext, useState, useEffect } from 'react';
import { VerifikasiContext } from '../../context/VerifikasiContext';
import { useNavigate } from 'react-router-dom';
import './VerifikasiList.css';

const VerifikasiList = () => {
  const { data, setData, setStep } = useContext(VerifikasiContext);
  const [namaLengkap, setNamaLengkap] = useState('');
  const [nik, setNik] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [nomorHP, setNomorHP] = useState('');
  const [kodeTipeDisabilitas, setKodeTipeDisabilitas] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kabupaten, setKabupaten] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [suratKeteranganDisabilitas, setSuratKeteranganDisabilitas] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isValid =
      namaLengkap &&
      nik &&
      tanggalLahir &&
      nomorHP &&
      kodeTipeDisabilitas &&
      provinsi &&
      kabupaten &&
      kecamatan &&
      jenisKelamin &&
      suratKeteranganDisabilitas;
    setIsFormValid(isValid);
  }, [
    namaLengkap,
    nik,
    tanggalLahir,
    nomorHP,
    kodeTipeDisabilitas,
    provinsi,
    kabupaten,
    kecamatan,
    jenisKelamin,
    suratKeteranganDisabilitas
  ]);

  const handleNamaLengkapChange = (e) => {
    setNamaLengkap(e.target.value);
  };

  const handleNikChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setNik(value);
  };

  const handleTanggalLahirChange = (e) => {
    setTanggalLahir(e.target.value);
  };

  const handleNomorHPChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setNomorHP(value);
  };

  const handleKodeTipeDisabilitasChange = (e) => {
    setKodeTipeDisabilitas(e.target.value);
  };

  const handleProvinsiChange = (e) => {
    setProvinsi(e.target.value);
  };

  const handleKabupatenChange = (e) => {
    setKabupaten(e.target.value);
  };

  const handleKecamatanChange = (e) => {
    setKecamatan(e.target.value);
  };

  const handleJenisKelaminChange = (e) => {
    setJenisKelamin(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setData({
        namaLengkap,
        nik,
        tanggalLahir,
        nomorHP,
        kodeTipeDisabilitas,
        provinsi,
        kabupaten,
        kecamatan,
        jenisKelamin,
        suratKeteranganDisabilitas
      });

      setStep(2);

      navigate('/donasi');
    } else {
      console.log('Mohon isi semua form');
    }
  };

  const handleNextButtonClick = () => {
    if (isFormValid) {
      setData({
        namaLengkap,
        nik,
        tanggalLahir,
        nomorHP,
        kodeTipeDisabilitas,
        provinsi,
        kabupaten,
        kecamatan,
        jenisKelamin,
        suratKeteranganDisabilitas
      });

      setStep(2);

      navigate('/donasi');
    } else {
      console.log('Mohon isi semua form');
    }
  };

  const handleSuratKeteranganDisabilitasChange = (e) => {
    const file = e.target.files[0];
    setSuratKeteranganDisabilitas(file);
  };

  return (
    <div className="verifikasi-list">
      <h2>Verifikasi Data</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="grid-container">
          <div className="grid-item">
            <label>Nama Lengkap:</label>
            <input type="text" value={namaLengkap} onChange={handleNamaLengkapChange} required />
          </div>
          <div className="grid-item">
            <label>NIK:</label>
            <input type="text" value={nik} onChange={handleNikChange} pattern="[0-9]*" required />
          </div>
          <div className="grid-item">
            <label>Tanggal Lahir:</label>
            <input type="date" value={tanggalLahir} onChange={handleTanggalLahirChange} required />
          </div>
          <div className="grid-item">
            <label>Jenis Kelamin:</label>
            <select value={jenisKelamin} onChange={handleJenisKelaminChange} required>
              <option value="">Pilih</option>
              <option value="L">Laki-Laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          <div className="grid-item">
            <label>Nomor HP:</label>
            <input type="text" value={nomorHP} onChange={handleNomorHPChange} pattern="[0-9]*" required />
          </div>
          <div className="grid-item">
            <label>Kode Tipe Disabilitas:</label>
            <select value={kodeTipeDisabilitas} onChange={handleKodeTipeDisabilitasChange} required>
              <option value="">Pilih</option>
              <option value="1">Tipe A untuk Penyandang Disabilitas Fisik</option>
              <option value="2">Tipe B untuk Penyandang Disabilitas Intelektual</option>
              <option value="3">Tipe C untuk Penyandang Disabilitas Mental</option>
              <option value="4">Tipe D untuk Penyandang Disabilitas Sensorik</option>
            </select>
          </div>
          <div className="grid-item">
            <label>Provinsi:</label>
            <input type="text" value={provinsi} onChange={handleProvinsiChange} required />
          </div>
          <div className="grid-item">
            <label>Kabupaten:</label>
            <input type="text" value={kabupaten} onChange={handleKabupatenChange} required />
          </div>
          <div className="grid-item">
            <label>Kecamatan:</label>
            <input type="text" value={kecamatan} onChange={handleKecamatanChange} required />
          </div>
          <div className="grid-item">
            <label>Surat Keterangan Disabilitas:</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleSuratKeteranganDisabilitasChange} />
          </div>
        </div>
        <button type="submit" disabled={!isFormValid}>
          Terverifikasi
        </button>
      </form>
      <div className="button-wrapper">
        <button type="button" onClick={handleNextButtonClick} disabled={!isFormValid}>
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default VerifikasiList;
