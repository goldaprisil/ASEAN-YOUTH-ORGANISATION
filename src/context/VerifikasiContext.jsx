import React, { createContext, useState } from 'react';

export const VerifikasiContext = createContext();

export const VerifikasiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [step, setStep] = useState(1);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  // Fungsi untuk mengatur status file terunggah
  const handleFileUpload = () => {
    setIsFileUploaded(true);
  };

  return (
    <VerifikasiContext.Provider value={{ data, setData, step, setStep, isFileUploaded, handleFileUpload }}>
      {children}
    </VerifikasiContext.Provider>
  );
};
