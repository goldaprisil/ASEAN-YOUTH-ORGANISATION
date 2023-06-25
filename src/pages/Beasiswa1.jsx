import React from "react";
import "./Modis.css";
import Comment from "../components/Comment/Comment";
import CommentContextProvider from "../context/CommentContext";
//import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Beasiswa1 = () => {
  return (
    <>
      <Navbar />
        <div className="mode">
          <h1>Beasiswa Biaya Pendidikan Untuk Mahasiswa Berperestasi</h1>
          <img
            src="https://i.pinimg.com/564x/52/77/c3/5277c3b68319da3f1995f8848c45e45a.jpg"
            alt="Keterangan gambar"
          />
          <h2 className="subtitle">Beasiswa untuk mahasiswa berprestasi</h2>
          <p className="paragraph">
            Jika Anda memiliki pertanyaan mengenai beasiswa ini, jangan ragu
            untuk mengajukannya kepada kami.
          </p>
          <CommentContextProvider>
            <Comment />
          </CommentContextProvider>
        </div>
      <Footer />


    </>
  );
};

export default Beasiswa1;
