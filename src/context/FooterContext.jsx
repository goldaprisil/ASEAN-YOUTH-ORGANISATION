import React, { createContext, useState } from 'react';

export const FooterContext = createContext();

export const FooterProvider = ({ children }) => {
  const [contactVisible, setContactVisible] = useState(false);

  const toggleContact = () => {
    setContactVisible(!contactVisible);
  };

  return (
    <FooterContext.Provider value={{ contactVisible, toggleContact }}>
      {children}
    </FooterContext.Provider>
  );
};
