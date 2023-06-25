import {Col, Row, Container} from "react-bootstrap"
import "./OurPartner.css"
import ahdo from "./ahdo.jpg"
import acioa from "./acioa.png"
import cfds from "./cfds.png"
import enactus from "./enactus.png"
import grab from "./grab.png"
import nyc from "./nyc.webp"
import scape from "./scape.webp"
import unica from "./unica.png"

function OurPartner() {
  return (
    <Container className="container">
        <p className="text-center p">OUR PARTNERS</p>
      <Row>
        <Col md={3}  className="pl-5 d-flex justify-content-center align-items-center"><img className="gambarPartner" src={ahdo} alt="" /></Col>
        <Col md={3} className="d-flex justify-content-center align-items-center"><img className="gambarPartner2" src={acioa} alt="" /></Col>
        <Col md={3} className="d-flex justify-content-center align-items-center"><img className="gambarPartner3" src={cfds} alt="" /></Col>
        <Col md={3} className="d-flex justify-content-center align-items-center"><img className="gambarPartner4" src={enactus} alt="" /></Col>
        <Col md={3} className="d-flex justify-content-center align-items-center"><img className="gambarPartner5" src={grab} alt="" /></Col>
        <Col md={3} className="d-flex justify-content-center align-items-center"><img className="gambarPartner6" src={nyc} alt="" /></Col>
        <Col md={3} className="d-flex justify-content-center align-items-center"><img className="gambarPartner7" src={scape} alt="" /></Col>
        <Col md={3} className="d-flex justify-content-center align-items-center"><img className="gambarPartner8" src={unica} alt="" /></Col>
      </Row>
    </Container>
  )
}

export default OurPartner
