import React from "react";
import "./Modis.css";
import Comment from "../components/Comment/Comment";
import CommentContextProvider from "../context/CommentContext";
//import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Donasi = () => {
  return (
    <>
    <Navbar />
      <div className="mode">
        <h1>Donasi</h1>
        <img
          src="https://i.pinimg.com/564x/46/90/20/46902093d28785e7c280dd86efadde33.jpg"
          alt="Keterangan gambar"
        />
        <h2 className="subtitle">Beasiswa untuk anak negri</h2>
        <p className="paragraph">
          Jika Anda memiliki pertanyaan mengenai donasi ini, jangan ragu untuk
          mengajukannya kepada kami.
        </p>
        <CommentContextProvider>
          <Comment />
        </CommentContextProvider>
      </div>
      <Footer />
    </>
  );
};

export default Donasi;
