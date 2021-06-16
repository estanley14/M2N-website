import React, { useState } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LandingPage from '../components/landing/'
// import NavDesktop from "../components/navDesktop"
// import NavTablet from "../components/navTablet"
// import NavMobile from "../components/navMobile"
// import EmailModal from "../components/emailModal"

const MPowerPage = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <Layout>
      <Seo title="MPower App" />
      <LandingPage />
      {/* <input type="hidden" id="anPageName" name="page" value="mpower-landing-mobile-320px" /> */}
      {/* {modalState && <EmailModal setModalState={setModalState} />} */}
    </Layout>
  )
}

export default MPowerPage
