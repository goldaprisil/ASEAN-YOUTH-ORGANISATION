import "./InfoDonasi.css";
import { Col, Row } from "react-bootstrap";
import { MdWavingHand } from "react-icons/md";
import imgCB from "./childrenAndBook.jpg";
import {FaSchool} from "react-icons/fa"
import {MdFastfood} from "react-icons/md"

function InfoDonasi() {
  return (
    <div className="wrapper2">
      <div className="bg">
        <img src={imgCB} alt="" />
        <span className="info">Sekitar 26 juta orang membutuhkan bantuan dan dukungan dari kita</span>
        <div className="donasi">
          <p className="judul">KEMANA KITA AKAN BERIKAN?</p>
          <br />
          <p className="p">Bantuan ini kami berikan kepada masyarakat yang berkebutuhan khusus, secara ekonomi maupun secara fisik. karna bantuan dari kalian lah yang bisa membuat mereka kuat. </p>
          <p className="judul2">Manfaat Donasi yang diberikan kepada mereka</p>
          <Row className="mt-2">
            <Col className="col-2">
              <MdWavingHand className="iconsInfo ml-5" />
            </Col>
            <Col><p className="dkr">Meningkatkan Solidaritas antar sesama</p></Col>
          </Row>
          <Row className="mt-2">
            <Col className="col-2">
              <MdFastfood className="iconsInfo ml-5" />
            </Col>
            <Col><p className="dkr">Memberikan makanan yang layak bagi mereka</p></Col>
          </Row>
          <Row className="mt-2">
            <Col className="col-2">
              <FaSchool className="iconsInfo ml-2" />
            </Col>
            <Col><p className="dkr">Memberikan mereka fasilitas belajar dan memberikan harapan akan cita-cita mereka</p></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default InfoDonasi;
