import React from "react";
import "./DetailBeasiswa.css";
import skilvulLogo from "../assets/skilvul.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DetailBeasiswa = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className="rectangle">
        <p className="title">Merit Scholarship</p>
        <h2 className="subtitle">Scholarships and tuition assistance for students</h2>
        <hr className="line" />
        <div className="info-wrapper">
          <div className="location">
            <p className="info-label">Location</p>
            <span className="info-icon">&#x1F30E;</span>
            <p className="info-text">Online</p>
          </div>
          <div className="registration-date">
            <p className="info-label">Registration Date</p>
            <span className="info-icon">&#128197;</span>
            <p className="info-text">03 May - 15 May 2023</p>
          </div>
          <div className="selection-announcement">
            <p className="info-label">Selection Announcement</p>
            <span className="info-icon">&#128197;</span>
            <p className="info-text">20 May 2023</p>
          </div>
        </div>
      </div>
      <div className="partners">
        <div className="logo-wrapper">
          <img src={skilvulLogo} alt="Partner Logo" />
        </div>
        <div className="partner-info">
          <p className="partner-label">Partners</p>
          <p className="partner-text">Skilvul, PT Impactbyte Teknologi Edukasi</p>
        </div>
      </div>
      <div className="description">
        <h3 className="description-title">Deskripsi</h3>
        <p className="description-text">
          Scholarship for Persons with Disabilities is a scholarship program aimed at people with disabilities who meet the LPDP requirements, namely:
        </p>
        <ul className="requirements-list">
          <li>Physical Disabilities</li>
          <li>Intellectual Disabilities</li>
          <li>People with Mental Disabilities</li>
          <li>Sensory Disabilities</li>
          <li>Persons with Multiple or Multiple Disabilities</li>
        </ul>
        <p className="download-link">
          Please download the Recommendation Letter Template at the following link: 
          <a href="https://ayo.scholarship" className="link-blue">https://ayo.scholarship</a>
        </p>
      </div>
      <div className="registration-box">
        <button className="register-button">REGISTER NOW</button>
        <div className="info-row">
          <span className="info-icon">&#128196;</span>
          <p className="info-text">Method</p>
          <p className="info-description">Online</p>
        </div>
        <div className="info-row">
          <span className="info-icon">&#9879;</span>
          <p className="info-text">Selection Flow</p>
          <p className="info-description">Test Administration - Substance</p>
        </div>
        <div className="info-row">
          <span className="info-icon">&#128104;</span>
          <p className="info-text">Participant Quota</p>
          <p className="info-description">500 People</p>
        </div>
        <div className="info-row">
          <span className="info-icon">&#128340;</span>
          <p className="info-text">Substance Test Time</p>
          <p className="info-description">03 March 2023</p>
        </div>
        <div className="info-row">
          <span className="info-icon">&#128190;</span>
          <p className="info-text">Syllabus</p>
          <button className="download-button">Download</button>
        </div>
        <div className="info-row">
          <span className="info-icon">&#128206;</span>
          <p className="info-text">Share this program</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DetailBeasiswa;
