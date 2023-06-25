import HeroBanner from "../components/HeroBanner/HeroBanner"
import InfoDonasi from "../components/InfoDonasi/InfoDonasi"
import List from "../components/List/List"
import OurPartner from "../components/OurPartner/OurPartner"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function PageDonasi() {
  return (
    <>
      <Navbar />
<HeroBanner/>
<InfoDonasi/>   
<List/>
<OurPartner/>

      <Footer />
    </>
  )
}

export default PageDonasi
