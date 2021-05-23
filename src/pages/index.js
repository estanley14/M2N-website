import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePage from '../components/home'
// import NavDesktop from "../components/navDesktop"
// import NavTablet from "../components/navTablet"
import NavMobile from "../components/navMobile"

import Footer from "../components/footer"

// IMAGES
import path702x from "../import/img/path-70@2x.png"
import ovalCopy1x from "../import/img/oval-copy@1x.png"
import column12x from "../import/img/column-1@2x.png"
import image32x from "../import/img/image-3@2x.png"
import image22x from "../import/img/image-2@2x.png"
import column32x from "../import/img/column-3@2x.png"
import image42x from "../import/img/image-4@2x.png"
import image52x from "../import/img/image-5@2x.png"
import column52x from "../import/img/column-5@2x.png"
import ovalCopy12x from "../import/img/oval-copy-1@2x.png"
import oval2x from "../import/img/oval@2x.png"
import line72x from "../import/img/line-7@2x.png"
import line82x from "../import/img/line-8@2x.png"
import line92x from "../import/img/line-9@2x.png"
import line102x from "../import/img/line-10@2x.png"
import line112x from "../import/img/line-11@2x.png"
import line122x from "../import/img/line-12@2x.png"
import line132x from "../import/img/line-13@2x.png"
import path712x from "../import/img/path-71@2x.png"
import line152x from "../import/img/line-15@2x.png"
import dotGridImg2x from "../import/img/dot-grid-img@2x.png" 
import img1x from "../import/img/img@2x.png"
import gradientFrame1x from "../import/img/gradient-frame@1x.png"
import vector12x from "../import/img/vector-1@2x.png"
import vector22x from "../import/img/vector-2@2x.png"
import vector32x from "../import/img/vector-3@2x.png"
import vector42x from "../import/img/vector-4@2x.png"
import vector52x from "../import/img/vector-5@2x.png"
import vector62x from "../import/img/vector-6@2x.png"
import vector72x from "../import/img/vector-7@2x.png"
import vector82x from "../import/img/vector-8@2x.png"
import vector92x from "../import/img/vector-9@2x.png"
import vector102x from "../import/img/vector-10@2x.png"
import vector112x from "../import/img/vector-11@2x.png"
import vector122x from "../import/img/vector-12@2x.png"
import vector132x from "../import/img/vector-13@2x.png"
import vector142x from "../import/img/vector-14@2x.png"
import vector152x from "../import/img/vector-15@2x.png"
import vector162x from "../import/img/vector-16@2x.png"
import vector172x from "../import/img/vector-17@2x.png"
import vector182x from "../import/img/vector-18@2x.png"
import vector192x from "../import/img/vector-19@2x.png"
import vector202x from "../import/img/vector-20@2x.png"
import vector212x from "../import/img/vector-21@2x.png"
import vector222x from "../import/img/vector-22@2x.png"
import vector232x from "../import/img/vector-23@2x.png"
import vector242x from "../import/img/vector-23@2x.png"
import vector252x from "../import/img/vector-23@2x.png"
import vector262x from "../import/img/vector-23@2x.png"
import vector272x from "../import/img/vector-23@2x.png"
import vector282x from "../import/img/vector-23@2x.png"
import vector292x from "../import/img/vector-23@2x.png"
import vector302x from "../import/img/vector-23@2x.png"
import vector312x from "../import/img/vector-23@2x.png"
import vector322x from "../import/img/vector-23@2x.png"
import vector332x from "../import/img/vector-23@2x.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
    <HomePage />
   <input type="hidden" id="anPageName" name="page" value="home-tablet-720px" />
   
  </Layout>
)

export default IndexPage
