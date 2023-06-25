import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [donasi, setDonasi] = useState("");
  const [selectedPayment, setSelectedPayment] = useState ("")
  const [email, setEmail] = useState ("")
  const [name, setName] = useState ("")
  const [noRekening, setNoRekening] = useState ("")


  const value = {
    donasi,
    setDonasi,
    selectedPayment,
    setSelectedPayment,
    email,
    setEmail,
    noRekening,
    setNoRekening,
    name,
    setName,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

// custom hooks
function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
}

export { GlobalProvider, useGlobal };  //   const [isLoading, setIsLoading] = useState(true);
  //   const [nominal, setNominal] = useState(0);

  // mengambil data dari api
  //   const fetchTodos = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         "https://60f6e4cdeb48e700179197af.mockapi.io/laporan"
  //       );
  //       const data = await response.json();

  // update state todos dengan data yg diterima dari api
  //       setTodos(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error?.message || "Error: Cannot fetch data");
  //       setIsLoading(false);
  //     }
  //   };

  //   const postTodo = async (newTodo) => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(
  //         "https://60f6e4cdeb48e700179197af.mockapi.io/laporan",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json"
  //           },
  //           body: JSON.stringify(newTodo)
  //         }
  //       );
  //       const data = await response.json();

  //       if (!response.ok) {
  //         throw new Error("Error: Cannot Add New Todo");
  //       }

  //       setIsLoading(false);

  //       return data;
  //     } catch (error) {
  //       console.error(error?.message || "Error: Cannot post data");
  //       setIsLoading(false);
  //     }
  //   };
