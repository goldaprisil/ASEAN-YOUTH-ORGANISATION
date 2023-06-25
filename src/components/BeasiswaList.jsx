import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FooterContext } from "../context/FooterContext";
import "./BeasiswaList.css";
import "./Footer.css";
import logoAYO from "../assets/LogooAYO.png";
import skilvulLogo from "../assets/skilvul.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BeasiswaList = () => {
  const {  toggleContact } = useContext(FooterContext);

  const beasiswaData = [
    {
      id: 1,
      logo: logoAYO,
      title: "Beasiswa Berprestasi",
      detail: "Beasiswa Biaya Pendidikan Untuk Mahasiswa Berperestasi",
      mitra: "Skilvull",
      quota: 20,
      registrationDate: "10 Mei - 9 Juni 2023",
      selectionProcess: "3 alur seleksi"
    },
    {
      id: 2,
      logo: skilvulLogo,
      title: "Beasiswa Berprestasi",
      quota: 15,
      registrationDate: "1 Juni - 30 Juni 2023",
      selectionProcess: "2 alur seleksi"
    }
    // ... tambahkan data beasiswa lainnya ...
  ];

  return (
    <>
    <Navbar />
    <div>
      <div className="rectangle">
        <h2>Program Beasiswa</h2>
        <p>Beasiswa Khusus Untuk Penyandang Disabilitas</p>
      </div>
      <div className="beasiswa-list">
        {beasiswaData.map((beasiswa) => (
          <div key={beasiswa.id} className="beasiswa-item">
            <button className="btn-open">Buka</button>
            <div className="logo-title-wrapper">
              <div className="logo-wrapper">
                <img src={beasiswa.logo} alt="Logo" className="my-card-image" />
              </div>
              <div className="title-wrapper">
                <p className="beasiswa-title">{beasiswa.title}</p>
                <p className="beasiswa-detail">{beasiswa.detail}</p>
                {beasiswa.mitra && <p className="beasiswa-mitra">{beasiswa.mitra}</p>}
                <div className="detail-wrapper">
                  <p>Quota: {beasiswa.quota}</p>
                  <p>Registration Date: {beasiswa.registrationDate}</p>
                  <p>Selection Process: {beasiswa.selectionProcess}</p>
                </div>
              </div>
              <Link to="/detail-beasiswa" className="view-detail-button">View Detail</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BeasiswaList;
