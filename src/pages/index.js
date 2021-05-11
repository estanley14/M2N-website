import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavDesktop from "../components/navDesktop"
import NavTablet from "../components/navTablet"
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
   <input type="hidden" id="anPageName" name="page" value="home-tablet-720px" />
    <div className="home-desktop-1440px screen">
      <div className="heroimagebackground-C61RwL"></div>
      <div className="backgroundshapesright-C61RwL">
        <img className="path70-2bZYeb" src={path702x} />
        <div className="frame-2bZYeb"></div>
        <img className="oval-copy-2bZYeb" src={ovalCopy1x} />
      </div>
      <h1 className="h1-C61RwL dmsans-bold-baltic-sea-62px">
        We advance diversity, equity and inclusion in today’s workplace.
      </h1>
      <Link to="mpower-app">
        <div className="button-primary-default-C61RwL">
          <div className="font-GsrA0Q valign-text-middle dmsans-bold-white-16px">JOIN THE MOVEMENT</div>
        </div>
      </Link>
      <div className="imagegrid-C61RwL">
        <img className="column1-j0ck3A" src={column12x} />
        <div className="column2-j0ck3A">
          <img className="image3-uWZBJr" src={image32x} />
          <img className="image2-uWZBJr" src={image22x} />
        </div>
        <img className="column3-j0ck3A" src={column32x} />
        <div className="column4-j0ck3A">
          <img className="image-4-rbzK3B" src={image42x} />
          <img className="image5-rbzK3B" src={image52x} />
        </div>
        <img className="column5-j0ck3A" src={column52x} />
      </div>
      <div className="highlights-C61RwL">
        <div className="highlightdiversity-rJ1nim"></div>
        <div className="highlightequity-rJ1nim"></div>
        <div className="highlightinclusion-rJ1nim"></div>
      </div>
      <div className="backgroundshapesleft-C61RwL">
        <div className="frame-7-0xC2zx">
          <img className="oval-copy-Wnc2j5" src={ovalCopy12x} />
          <img className="oval-Wnc2j5" src={oval2x} />
        </div>
        <div className="group-1-0xC2zx">
          <img className="line7-i53Fv3" src={line72x} />
          <img className="line8-i53Fv3" src={line82x} />
          <img className="line9-i53Fv3" src={line92x} />
          <img className="line10-i53Fv3" src={line102x} />
          <img className="line11-i53Fv3" src={line112x} />
          <img className="line12-i53Fv3" src={line122x} />
          <img className="line13-i53Fv3" src={line132x} />
          <img className="path71-i53Fv3" src={path712x} />
          <img className="line15-i53Fv3" src={line152x} />
        </div>
      </div>
      <div className="imgframe-C61RwL">
        <img className="dotgridimg-6IZ0TO" src={dotGridImg2x} />
        <img className="img-6IZ0TO" src={img1x} />
        <img className="gradientframe-6IZ0TO" src={gradientFrame1x} />
      </div>
      <div className="side-right">

        <div className="logo-C61RwL">
          <img className="vector-exFKkL" src={vector12x} />
          <div className="group-exFKkL">
            <div className="group-LRM1jR">
              <img className="vector-GPRzar" src={vector22x} />
              <img className="vector-Fm5KxR" src="./import/img/vector-3@2x.png" />
            </div>
            <div className="group-A0xVEW">
              <img className="vector-6cFLVc" src="./import/img/vector-4@2x.png" />
              <img className="vector-4xYBy1" src="./import/img/vector-5@2x.png" />
            </div>
            <div className="group-CPfWUV">
              <img className="vector-3w6F7B" src="./import/img/vector-6@2x.png" />
              <img className="vector-dsVJnW" src="./import/img/vector-7@2x.png" />
            </div>
            <div className="group-7UYHLR">
              <img className="vector-2wosw3" src="./import/img/vector-8@2x.png" />
              <img className="vector-PlhBYg" src="./import/img/vector-9@2x.png" />
            </div>
            <div className="group-KWLEK4">
              <img className="vector-kIS7Kh" src="./import/img/vector-10@2x.png" />
              <img className="vector-h7k85P" src="./import/img/vector-11@2x.png" />
            </div>
            <div className="group-xqPohA">
              <img className="vector-FUQsKJ" src="./import/img/vector-12@2x.png" />
              <img className="vector-IY7QiT" src="./import/img/vector-13@2x.png" />
            </div>
            <div className="group-dRhspZ">
              <img className="vector-nRj0GX" src="./import/img/vector-14@2x.png" />
              <img className="vector-p37Jy4" src="./import/img/vector-15@2x.png" />
            </div>
            <div className="group-ugQDQI">
              <img className="vector-KrzmJ1" src="./import/img/vector-16@2x.png" />
              <img className="vector-kfRX5B" src="./import/img/vector-17@2x.png" />
            </div>
            <div className="group-xQpv6Q">
              <img className="vector-Qa9M6Z" src="./import/img/vector-18@2x.png" />
              <img className="vector-KE5Zqg" src="./import/img/vector-19@2x.png" />
            </div>
            <div className="group-so4T52">
              <img className="vector-yHHOxO" src="./import/img/vector-20@2x.png" />
              <img className="vector-Wwb8xe" src="./import/img/vector-21@2x.png" />
            </div>
            <div className="group-9ZLGp2">
              <img className="vector-6NWwXZ" src="./import/img/vector-22@2x.png" />
              <img className="vector-2tlgkt" src="./import/img/vector-23@2x.png" />
            </div>
            <div className="group-dKxZiv">
              <img className="vector-xHxiNB" src="./import/img/vector-24@2x.png" />
              <img className="vector-kwhTkr" src="./import/img/vector-25@2x.png" />
            </div>
            <div className="group-f2B1ws">
              <img className="vector-RQwDYH" src="./import/img/vector-26@2x.png" />
              <img className="vector-AATI6m" src="./import/img/vector-27@2x.png" />
            </div>
            <div className="group-smegft">
              <img className="vector-9RPHKK" src="./import/img/vector-28@2x.png" />
              <img className="vector-b3pZmF" src="./import/img/vector-29@2x.png" />
            </div>
            <div className="group-zM0Sp9">
              <img className="vector-K3QFIs" src="./import/img/vector-30@2x.png" />
              <img className="vector-r2gP27" src="./import/img/vector-31@2x.png" />
            </div>
            <div className="group-hg01G8">
              <img className="vector-9ddndr" src="./import/img/vector-32@2x.png" />
              <img className="vector-rmD89g" src="./import/img/vector-33@2x.png" />
            </div>
            <div className="group-IHX4Tm">
              <img className="vector-2OMZXT" src="./import/img/vector-34@2x.png" />
              <img className="vector-KkMz4P" src="./import/img/vector-35@2x.png" />
            </div>
            <div className="group-x5UxhD">
              <img className="vector-DWowff" src="./import/img/vector-36@2x.png" />
              <img className="vector-veBUfZ" src="./import/img/vector-37@2x.png" />
            </div>
            <div className="group-OtUbot">
              <img className="vector-7MolAu" src="./import/img/vector-38@2x.png" />
              <img className="vector-K63rpb" src="./import/img/vector-39@2x.png" />
            </div>
            <div className="group-dk9LSl">
              <img className="vector-5flfBP" src="./import/img/vector-40@2x.png" />
              <img className="vector-lVkTT0" src="./import/img/vector-41@2x.png" />
            </div>
          </div>
        </div>
        <div className="h1-VMr6Om dmsans-bold-big-stone-62px">Minority Moves Network</div>
        <p className="p-C61RwL dmsans-normal-abbey-16px">
        Meeting people and organizations where they are through proprietary technology, Minority Moves Network (M2N) serves as a central hub to empower, 
        train, connect and support diverse professionals to find employment within companies committed to an inclusive workplace.
        </p>
        <div className="bullet01-C61RwL">
          <p className="p-2W14L6 dmsans-normal-abbey-16px">
            Builds an active membership of diverse professionals seeking personal &amp; professional development
            to cultivate a collective network of support for long term success.
          </p>
          <div className="bullet-2W14L6">
            <div className="ellipse-23-ORaySA"></div>
            <div className="ellipse-25-ORaySA border-1px-royal-blue"></div>
          </div>
        </div>
        <div className="bullet02-C61RwL">
          <p className="p-mQUbpi dmsans-normal-abbey-16px">
            Engages a network of companies committed to recruiting, onboarding, and mentoring to create an inclusionary
            employment culture through consulting and bridge services.
          </p>
          <div className="bullet-mQUbpi">
            <div className="ellipse-23-4gmmV9"></div>
            <div className="ellipse-25-4gmmV9 border-1px-persimmon"></div>
          </div>
        </div>

      </div>

      <div className="frame-4-C61RwL">
        <div className="rectangle-61Z7WH"></div>
        <div className="group-1-61Z7WH">
          <img className="line7-CiRr5x" src="./import/img/line-7-1@2x.png" />
          <img className="line8-CiRr5x" src="./import/img/line-8-1@2x.png" />
          <img className="line9-CiRr5x" src="./import/img/line-9-1@2x.png" />
          <img className="line10-CiRr5x" src="./import/img/line-10-1@2x.png" />
          <img className="line11-CiRr5x" src="./import/img/line-11-1@2x.png" />
          <img className="line12-CiRr5x" src="./import/img/line-12-1@2x.png" />
          <img className="line13-CiRr5x" src="./import/img/line-13-1@2x.png" />
          <img className="path71-CiRr5x" src="./import/img/path-71-1@2x.png" />
          <img className="line15-CiRr5x" src="./import/img/line-15-1@2x.png" />
        </div>
        <div className="background-shapes-right-61Z7WH">
          <img className="oval-copy-6NfgDB" src="./import/img/oval-copy-2@1x.png" />
          <img className="mockups-1-6NfgDB" src="./import/img/mockups-1@2x.png" />
        </div>
        <div className="abstract-shapes-9-3-61Z7WH border-33px-bittersweet"></div>
        <img className="components-6-61Z7WH" src={dotGridImg2x} />
        <div className="contentlist-61Z7WH">
          <div className="frame-30-kTMlYy">
            <div className="frame-28-j5MDHY">
              <div className="frame-27-wTRxaY">
                <div className="non-curabitur-gravid-nwKcOf">What is</div>
                <div className="non-curabitur-gravid-pt1xEz">?</div>
                <div className="m-powerwhite-colored-nwKcOf">
                  <div className="group-gZPaJo"><img className="vector-8hMgLW" src="./import/img/vector-42@2x.png" /></div>
                  <img className="subtract-gZPaJo" src="./import/img/subtract-1@2x.png" />
                  <div className="group-79-gZPaJo">
                    <img className="ellipse-7-FfrnxY" src="./import/img/ellipse-7-3@2x.png" />
                    <img className="ellipse-8-FfrnxY" src="./import/img/ellipse-8-3@2x.png" />
                  </div>
                  <div className="group-80-gZPaJo">
                    <img className="ellipse-7-oJMFSk" src="./import/img/ellipse-7-4@2x.png" />
                    <img className="ellipse-8-oJMFSk" src="./import/img/ellipse-8-4@2x.png" />
                  </div>
                  <div className="group-81-gZPaJo">
                    <img className="ellipse-7-a8t46I" src="./import/img/ellipse-7-5@2x.png" />
                    <img className="ellipse-8-a8t46I" src="./import/img/ellipse-8-5@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29-j5MDHY">
              <p className="sodales-ut-etiam-sit-fgzFPV dmsans-normal-white-16px-2">
                A dynamic and interactive online platform to empower minority professionals.
              </p>
              <p className="through-m-power-r-relationships-fgzFPV dmsans-normal-white-16px-2">
                Through MPower members can:<br />- Learn how to use their lived experience as an asset <br />- Grow business
                and leadership skills with dynamic content<br />- Find inspiration in minority success stories and
                teachings<br />- Accelerate their career through reciprocal mentor relationships
              </p>
            </div>
          </div>
          <Link to="mpower-app">
            <div className="button-secondary-desktop-kTMlYy border-1px-white-2">
              <div className="font-aQSSHr valign-text-middle dmsans-bold-white-16px">CHECK OUT MPOWER</div>
              <div className="icarrow-aQSSHr"><img className="vector-lBlCDT" src="./import/img/vector-43@2x.png" /></div>
            </div>
          </Link>
          <Link to="mpower-app">
            <div className="appstore-buttons-kTMlYy">
              <div className="app-store-yAGHHd">
                <img className="path-3-zxz4BT" src="./import/img/path-3@2x.png" />
                <img className="path-4-zxz4BT" src="./import/img/path-4@2x.png" />
                <img className="path-5-zxz4BT" src="./import/img/path-5@2x.png" />
                <div className="group-2-zxz4BT"><img className="path-6-zIB4zk" src="./import/img/path-6@2x.png" /></div>
                <div className="group-3-zxz4BT"><img className="path-7-MZ5nVW" src="./import/img/path-7@2x.png" /></div>
              </div>
              <div className="play-store-yAGHHd">
                <img className="path-8-NwkMxW" src="./import/img/path-8@2x.png" />
                <img className="path-9-NwkMxW" src="./import/img/path-5@2x.png" />
                <img className="path-10-NwkMxW" src="./import/img/path-10@2x.png" />
                <img className="path-11-NwkMxW" src="./import/img/path-11@2x.png" />
                <div className="group-4-NwkMxW">
                  <img className="path-12-kx3BUh" src="./import/img/path-12@2x.png" />
                  <img className="path-13-kx3BUh" src="./import/img/path-13@2x.png" />
                  <img className="path-14-kx3BUh" src="./import/img/path-14@2x.png" />
                  <img className="path-15-kx3BUh" src="./import/img/path-15@2x.png" />
                  <img className="path-16-kx3BUh" src="./import/img/path-16@2x.png" />
                  <img className="path-17-kx3BUh" src="./import/img/path-17@2x.png" />
                  <img className="path-18-kx3BUh" src="./import/img/path-18@2x.png" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="frame-56-C61RwL">
        <div className="group-581-0unqEg">
          <div className="a-new-way-to-enjoy-q-ScxlrF dmsans-bold-baltic-sea-62px">Member Development</div>
          <p className="cras-semper-auctor-a-ScxlrF dmsans-normal-trout-16px">
            Members only coursework, discussion groups and guest lectures by globally recognized thought leaders provides our MPower members…
          </p>
          <Link to="mpower">
            <div className="frame-48-ScxlrF">
              <div className="frame-2-I2dOqS border-1px-royal-blue">
                <div className="font-0811yY valign-text-middle dmsans-bold-royal-blue-16px">LEARN MORE</div>
                <div className="icarrow-0811yY"><img className="vector-JYs62W" src="./import/img/vector-44@2x.png" /></div>
              </div>
            </div>
          </Link>
        </div>
        <div className="image1-0unqEg">
          <img className="rectangle-5Uz3ex" src="./import/img/rectangle@1x.png" />
          <div className="group-1-5Uz3ex">
            <img className="line7-sJ4VHh" src="./import/img/line-7-2@2x.png" />
            <img className="line8-sJ4VHh" src="./import/img/line-8-2@2x.png" />
            <img className="line9-sJ4VHh" src="./import/img/line-9-2@2x.png" />
            <img className="line10-sJ4VHh" src="./import/img/line-10-2@2x.png" />
            <img className="line11-sJ4VHh" src="./import/img/line-11-2@2x.png" />
            <img className="line12-sJ4VHh" src="./import/img/line-12-2@2x.png" />
            <img className="line13-sJ4VHh" src="./import/img/line-13-2@2x.png" />
            <img className="path71-sJ4VHh" src="./import/img/path-71-2@2x.png" />
            <img className="line15-sJ4VHh" src="./import/img/line-15-2@2x.png" />
          </div>
          <img className="rectangle-nKENHg" src="./import/img/rectangle-1@1x.png" />
        </div>
      </div>
      <div className="frame-57-C61RwL">
        <div className="image2-Rc1Nex">
          <img className="rectangle-2go92E" src="./import/img/rectangle-2@1x.png" />
          <div className="group-2-2go92E">
            <img className="line7-P7sWXx" src="./import/img/line-7-3@2x.png" />
            <img className="line8-P7sWXx" src="./import/img/line-8-3@2x.png" />
            <img className="line9-P7sWXx" src="./import/img/line-9-3@2x.png" />
            <img className="line10-P7sWXx" src="./import/img/line-10-3@2x.png" />
            <img className="line11-P7sWXx" src="./import/img/line-11-3@2x.png" />
            <img className="line12-P7sWXx" src="./import/img/line-12-3@2x.png" />
            <img className="line13-P7sWXx" src="./import/img/line-13-3@2x.png" />
            <img className="path71-P7sWXx" src="./import/img/path-71-3@2x.png" />
            <img className="line15-P7sWXx" src="./import/img/line-15-3@2x.png" />
          </div>
          <img className="rectangle-PG3KVe" src="./import/img/rectangle-3@1x.png" />
        </div>
        <div className="group-582-Rc1Nex">
          <div className="a-new-way-to-enjoy-q-pKuxU5 dmsans-bold-baltic-sea-62px">Career Opportunities</div>
          <p className="cras-semper-auctor-a-pKuxU5 dmsans-normal-trout-16px">
            Through use of the MPower platform and comprehensive services to support diverse and inclusive workforces,
            hiring organizations will have…
          </p>
          <Link to="company">
            <div className="frame-49-pKuxU5">
              <div className="frame-2-pwkYo1 border-1px-royal-blue">
                <div className="font-9tDSHD valign-text-middle dmsans-bold-royal-blue-16px">LEARN MORE</div>
                <div className="icarrow-9tDSHD"><img className="vector-jfxdGc" src="./import/img/vector-45@2x.png" /></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="footer-desktop-C61RwL">
        <div className="icongroup-VNfvnu">
          <div className="instagram-5R3sf4"><img className="combined-shape-TnWo79" src="./import/img/combined-shape@2x.png" /></div>
          <div className="twitter-5R3sf4"><img className="path-4KRaeG" src="./import/img/path@2x.png" /></div>
          <div className="linkedin-5R3sf4"><img className="vector-pXCSGN" src="./import/img/vector-46@2x.png" /></div>
        </div>
        <p className="terms-and-conditions-VNfvnu dmsans-normal-white-14px-2">
          <span className="span0-zNn4YK dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-zNn4YK dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-zNn4YK dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <p className="company-VNfvnu dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <div className="divider-VNfvnu"></div>
        <div className="newslettersignup-VNfvnu">
          <div className="newsletter-vxY8x4 sourcesanspro-bold-white-16px">Newsletter</div>
          <div className="input-default-vxY8x4">
            <div className="input-GVqwCV border-1px-celeste"></div>
            <input
              className="placeholder-GVqwCV dmsans-normal-gunsmoke-16px"
              name="placeholder"
              placeholder="Your email"
              type="email"
              required
            />
          </div>
          <div className="default-text-vxY8x4 smart-layers-pointers">
            <div className="font-kEobNx sourcesanspro-bold-white-16px">Subscribe</div>
          </div>
          <div className="button-primary-desktop-vxY8x4">
            <div className="font-U7FTmp valign-text-middle dmsans-bold-white-14px">SUBSCRIBE</div>
          </div>
        </div>
        <div className="column3-VNfvnu">
          <div className="platform-r3WsSG dmsans-bold-white-16px">Platform</div>
          <div className="ios-r3WsSG dmsans-normal-white-16px">iOS</div>
          <div className="android-r3WsSG dmsans-normal-white-16px">Android</div>
          <div className="browser-r3WsSG dmsans-normal-white-16px">Browser</div>
        </div>
        <div className="column2-VNfvnu">
          <div className="about-aRtUZh dmsans-bold-white-16px">
            <span className="span0-WJpm5A dmsans-bold-white-16px">About</span
            ><span className="span1-WJpm5A dmsans-normal-white-16px-2"><br /></span>
          </div>
          <div className="mpower-aRtUZh dmsans-normal-white-16px">MPower</div>
          <div className="partnerships-aRtUZh dmsans-normal-white-16px">Partnerships</div>
          <div className="company-aRtUZh dmsans-normal-white-16px">Company</div>
        </div>
        <div className="column1-VNfvnu">
          <div className="logo-dewRqW">
            <img className="vector-ouSEQ4" src="./import/img/vector-47@2x.png" />
            <div className="group-ouSEQ4">
              <div className="group-Sezeuf">
                <img className="vector-SmNlIz" src="./import/img/vector-48@2x.png" />
                <img className="vector-IxizXk" src="./import/img/vector-49@2x.png" />
              </div>
              <div className="group-OtwAtI">
                <img className="vector-RvF0sZ" src="./import/img/vector-50@2x.png" />
                <img className="vector-XlMT9R" src="./import/img/vector-51@2x.png" />
              </div>
              <div className="group-17YJk6">
                <img className="vector-PxOO7g" src="./import/img/vector-52@2x.png" />
                <img className="vector-EhExRY" src="./import/img/vector-53@2x.png" />
              </div>
              <div className="group-fkcxyX">
                <img className="vector-y3MNOG" src="./import/img/vector-54@2x.png" />
                <img className="vector-xzs8rm" src="./import/img/vector-55@2x.png" />
              </div>
              <div className="group-jxb5jG">
                <img className="vector-DJxK9x" src="./import/img/vector-56@2x.png" />
                <img className="vector-IXIjeo" src="./import/img/vector-57@2x.png" />
              </div>
              <div className="group-p31HZL">
                <img className="vector-vxOOCN" src="./import/img/vector-50@2x.png" />
                <img className="vector-xL5hnm" src="./import/img/vector-59@2x.png" />
              </div>
              <div className="group-TR2xpZ">
                <img className="vector-GktXrV" src="./import/img/vector-60@2x.png" />
                <img className="vector-C8Xmdu" src="./import/img/vector-61@2x.png" />
              </div>
              <div className="group-65htGN">
                <img className="vector-13Qfcl" src="./import/img/vector-62@2x.png" />
                <img className="vector-bEbIBs" src="./import/img/vector-63@2x.png" />
              </div>
              <div className="group-mutyXY">
                <img className="vector-Pe32ot" src="./import/img/vector-64@2x.png" />
                <img className="vector-bY4qhX" src="./import/img/vector-65@2x.png" />
              </div>
              <div className="group-yX6lkB">
                <img className="vector-0odILz" src="./import/img/vector-66@2x.png" />
                <img className="vector-xRtuec" src="./import/img/vector-67@2x.png" />
              </div>
              <div className="group-j0QIVD">
                <img className="vector-b5Pumq" src="./import/img/vector-68@2x.png" />
                <img className="vector-EsDfKx" src="./import/img/vector-69@2x.png" />
              </div>
              <div className="group-jvEyLq">
                <img className="vector-Hw9g7p" src="./import/img/vector-70@2x.png" />
                <img className="vector-aqdfwA" src="./import/img/vector-71@2x.png" />
              </div>
              <div className="group-zllQ9f">
                <img className="vector-F0GPgG" src="./import/img/vector-72@2x.png" />
                <img className="vector-h86hb6" src="./import/img/vector-73@2x.png" />
              </div>
              <div className="group-8IRfFX">
                <img className="vector-OgxTK4" src="./import/img/vector-74@2x.png" />
                <img className="vector-ZkxQYk" src="./import/img/vector-75@2x.png" />
              </div>
              <div className="group-xVtIr9">
                <img className="vector-Ethps7" src="./import/img/vector-76@2x.png" />
                <img className="vector-5yEPZX" src="./import/img/vector-77@2x.png" />
              </div>
              <div className="group-aLM7IN">
                <img className="vector-x1JDIS" src="./import/img/vector-78@2x.png" />
                <img className="vector-tMldhx" src="./import/img/vector-79@2x.png" />
              </div>
              <div className="group-5xRmdC">
                <img className="vector-9f8vxY" src="./import/img/vector-80@2x.png" />
                <img className="vector-Dc3Z8c" src="./import/img/vector-81@2x.png" />
              </div>
              <div className="group-gMXqQb">
                <img className="vector-exWAgk" src="./import/img/vector-82@2x.png" />
                <img className="vector-DV4Tp3" src="./import/img/vector-83@2x.png" />
              </div>
              <div className="group-IbRZoW">
                <img className="vector-Q6HAte" src="./import/img/vector-84@2x.png" />
                <img className="vector-waHQ7h" src="./import/img/vector-85@2x.png" />
              </div>
              <div className="group-klr7L6">
                <img className="vector-s1n5NW" src="./import/img/vector-86@2x.png" />
                <img className="vector-Uk78ft" src="./import/img/vector-87@2x.png" />
              </div>
            </div>
          </div>
          <p className="aboutblurb-dewRqW dmsans-normal-white-14px">
             A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
          </p>
        </div>
      </div> */}
      <Footer breakpoint="desktop" />
      <NavDesktop />
    </div>
    <div className="home-desktop-1024px screen">
      <img className="oval-copy-C61RwL" src="./import/img/oval-copy-5@1x.png" />
      <div className="frame-C61RwL"></div>
      <div className="heroimagebackground-C61RwL"></div>
      <div className="backgroundshapesleft-C61RwL">
        <div className="frame-7-0xC2zx">
          <img className="oval-copy-Wnc2j5" src="./import/img/oval-copy-6@2x.png" />
          <img className="oval-Wnc2j5" src="./import/img/oval-2@2x.png" />
        </div>
        <div className="group-1-0xC2zx">
          <img className="line7-i53Fv3" src="./import/img/line-7-14@2x.png" />
          <img className="line8-i53Fv3" src="./import/img/line-8-14@2x.png" />
          <img className="line9-i53Fv3" src={line92x} />
          <img className="line10-i53Fv3" src="./import/img/line-10-14@2x.png" />
          <img className="line11-i53Fv3" src="./import/img/line-11-14@2x.png" />
          <img className="line12-i53Fv3" src="./import/img/line-12-14@2x.png" />
          <img className="line13-i53Fv3" src="./import/img/line-13-14@2x.png" />
          <img className="path71-i53Fv3" src="./import/img/path-71-14@2x.png" />
          <img className="line15-i53Fv3" src="./import/img/line-15-14@2x.png" />
        </div>
      </div>
      <div className="backgroundshapesright-C61RwL"><img className="path70-2bZYeb" src={path702x} /></div>
      <div className="h1-C61RwL dmsans-bold-baltic-sea-62px">
        We advance diversity, equity and inclusion in today’s workplace.
      </div>
      <Link to="mpower-app">
        <div className="button-primary-default-C61RwL">
          <div className="font-GsrA0Q valign-text-middle dmsans-bold-white-16px">JOIN THE MOVEMENT</div>
        </div>
      </Link>
      <div className="imagegrid-C61RwL">
        <img className="column1-j0ck3A" src="./import/img/column-1-1@2x.png" />
        <div className="column2-j0ck3A">
          <img className="image2-uWZBJr" src="./import/img/image-2-1@2x.png" />
          <img className="image3-uWZBJr" src="./import/img/image-3-1@2x.png" />
        </div>
        <img className="column3-j0ck3A" src="./import/img/column-3-1@2x.png" />
        <div className="column4-j0ck3A">
          <img className="image4-rbzK3B" src="./import/img/image-4-1@2x.png" />
          <img className="image5-rbzK3B" src="./import/img/image-5-1@2x.png" />
        </div>
        <img className="column5-j0ck3A" src="./import/img/column-5-1@2x.png" />
      </div>
      <div className="highlightdiversity-C61RwL"></div>
      <div className="highlightequity-C61RwL"></div>
      <div className="highlightinclusion-C61RwL"></div>
      <div className="imgframe-C61RwL">
        <img className="dotgridimg-6IZ0TO" src="./import/img/dot-grid-img-1@2x.png" />
        <img className="img-6IZ0TO" src="./import/img/img-1@2x.png" />
        <img className="gradientframe-6IZ0TO" src="./import/img/gradient-frame-1@1x.png" />
      </div>
      <div className="logo-C61RwL">
        <img className="vector-exFKkL" src="./import/img/vector-268@2x.png" />
        <div className="group-exFKkL">
          <div className="group-LRM1jR">
            <img className="vector-GPRzar" src="./import/img/vector-269@2x.png" />
            <img className="vector-Fm5KxR" src="./import/img/vector-270@2x.png" />
          </div>
          <div className="group-A0xVEW">
            <img className="vector-6cFLVc" src="./import/img/vector-271@2x.png" />
            <img className="vector-4xYBy1" src="./import/img/vector-272@2x.png" />
          </div>
          <div className="group-CPfWUV">
            <img className="vector-3w6F7B" src="./import/img/vector-273@2x.png" />
            <img className="vector-dsVJnW" src="./import/img/vector-274@2x.png" />
          </div>
          <div className="group-7UYHLR">
            <img className="vector-2wosw3" src="./import/img/vector-275@2x.png" />
            <img className="vector-PlhBYg" src="./import/img/vector-276@2x.png" />
          </div>
          <div className="group-KWLEK4">
            <img className="vector-kIS7Kh" src="./import/img/vector-277@2x.png" />
            <img className="vector-h7k85P" src="./import/img/vector-278@2x.png" />
          </div>
          <div className="group-xqPohA">
            <img className="vector-FUQsKJ" src="./import/img/vector-279@2x.png" />
            <img className="vector-IY7QiT" src="./import/img/vector-280@2x.png" />
          </div>
          <div className="group-dRhspZ">
            <img className="vector-nRj0GX" src="./import/img/vector-281@2x.png" />
            <img className="vector-p37Jy4" src="./import/img/vector-282@2x.png" />
          </div>
          <div className="group-ugQDQI">
            <img className="vector-KrzmJ1" src="./import/img/vector-283@2x.png" />
            <img className="vector-kfRX5B" src="./import/img/vector-284@2x.png" />
          </div>
          <div className="group-xQpv6Q">
            <img className="vector-Qa9M6Z" src="./import/img/vector-285@2x.png" />
            <img className="vector-KE5Zqg" src="./import/img/vector-286@2x.png" />
          </div>
          <div className="group-so4T52">
            <img className="vector-yHHOxO" src="./import/img/vector-287@2x.png" />
            <img className="vector-Wwb8xe" src="./import/img/vector-288@2x.png" />
          </div>
          <div className="group-9ZLGp2">
            <img className="vector-6NWwXZ" src="./import/img/vector-289@2x.png" />
            <img className="vector-2tlgkt" src="./import/img/vector-290@2x.png" />
          </div>
          <div className="group-dKxZiv">
            <img className="vector-xHxiNB" src="./import/img/vector-291@2x.png" />
            <img className="vector-kwhTkr" src="./import/img/vector-292@2x.png" />
          </div>
          <div className="group-f2B1ws">
            <img className="vector-RQwDYH" src="./import/img/vector-293@2x.png" />
            <img className="vector-AATI6m" src="./import/img/vector-294@2x.png" />
          </div>
          <div className="group-smegft">
            <img className="vector-9RPHKK" src="./import/img/vector-295@2x.png" />
            <img className="vector-b3pZmF" src="./import/img/vector-296@2x.png" />
          </div>
          <div className="group-zM0Sp9">
            <img className="vector-K3QFIs" src="./import/img/vector-297@2x.png" />
            <img className="vector-r2gP27" src="./import/img/vector-298@2x.png" />
          </div>
          <div className="group-hg01G8">
            <img className="vector-9ddndr" src="./import/img/vector-299@2x.png" />
            <img className="vector-rmD89g" src="./import/img/vector-300@2x.png" />
          </div>
          <div className="group-IHX4Tm">
            <img className="vector-2OMZXT" src="./import/img/vector-301@2x.png" />
            <img className="vector-KkMz4P" src="./import/img/vector-302@2x.png" />
          </div>
          <div className="group-x5UxhD">
            <img className="vector-DWowff" src="./import/img/vector-303@2x.png" />
            <img className="vector-veBUfZ" src="./import/img/vector-304@2x.png" />
          </div>
          <div className="group-OtUbot">
            <img className="vector-7MolAu" src="./import/img/vector-305@2x.png" />
            <img className="vector-K63rpb" src="./import/img/vector-306@2x.png" />
          </div>
          <div className="group-dk9LSl">
            <img className="vector-5flfBP" src="./import/img/vector-307@2x.png" />
            <img className="vector-lVkTT0" src="./import/img/vector-308@2x.png" />
          </div>
        </div>
      </div>
      <div className="h1-VMr6Om dmsans-bold-big-stone-62px">Minority Moves Network</div>
      <p className="p-C61RwL dmsans-normal-abbey-16px">
        Meeting people and organizations where they are through proprietary technology, Minority Moves Network (M2N) serves as a central hub to empower, 
        train, connect and support diverse professionals to find employment within companies committed to an inclusive workplace.
      </p>
      <div className="bullet01-C61RwL">
        <p className="p-2W14L6 dmsans-normal-abbey-16px">
          Builds an active membership of diverse professionals seeking personal &amp; professional development
          to cultivate a collective network of support for long term success.
        </p>
        <div className="bullet-2W14L6">
          <div className="ellipse-23-ORaySA"></div>
          <div className="ellipse-25-ORaySA border-1px-royal-blue"></div>
        </div>
      </div>
      <div className="bullet02-C61RwL">
        <p className="p-mQUbpi dmsans-normal-abbey-16px">
          Engages a network of companies committed to recruiting, onboarding, and mentoring to create an inclusionary
          employment culture through consulting and bridge services.
        </p>
        <div className="bullet-mQUbpi">
          <div className="ellipse-23-4gmmV9"></div>
          <div className="ellipse-25-4gmmV9 border-1px-persimmon"></div>
        </div>
      </div>
      <div className="frame-4-C61RwL">
        <div className="rectangle-61Z7WH"></div>
        <div className="group-1-61Z7WH">
          <img className="line7-CiRr5x" src="./import/img/line-7-15@2x.png" />
          <img className="line8-CiRr5x" src="./import/img/line-8-15@2x.png" />
          <img className="line9-CiRr5x" src="./import/img/line-9-15@2x.png" />
          <img className="line10-CiRr5x" src="./import/img/line-10-15@2x.png" />
          <img className="line11-CiRr5x" src="./import/img/line-11-15@2x.png" />
          <img className="line12-CiRr5x" src="./import/img/line-12-15@2x.png" />
          <img className="line13-CiRr5x" src="./import/img/line-13-15@2x.png" />
          <img className="path71-CiRr5x" src="./import/img/path-71-15@2x.png" />
          <img className="line15-CiRr5x" src="./import/img/line-15-15@2x.png" />
        </div>
        <div className="background-shapes-right-61Z7WH">
          <img className="oval-copy-6NfgDB" src="./import/img/oval-copy-7@1x.png" />
          <img className="mockups-1-6NfgDB" src="./import/img/mockups-1-1@2x.png" />
        </div>
        <div className="abstract-shapes-9-3-61Z7WH border-33px-bittersweet"></div>
        <img className="components-6-61Z7WH" src="./import/img/dot-grid-img-1@2x.png" />
        <div className="contentlist-61Z7WH">
          <div className="frame-30-kTMlYy">
            <div className="frame-28-j5MDHY">
              <div className="frame-27-wTRxaY">
                <div className="non-curabitur-gravid-nwKcOf">What is</div>
                <div className="non-curabitur-gravid-pt1xEz">?</div>
                <div className="m-powerwhite-colored-nwKcOf">
                  <div className="group-gZPaJo"><img className="vector-8hMgLW" src="./import/img/vector-309@2x.png" /></div>
                  <img className="subtract-gZPaJo" src="./import/img/subtract-5@2x.png" />
                  <div className="group-79-gZPaJo">
                    <img className="ellipse-7-FfrnxY" src="./import/img/ellipse-7-15@2x.png" />
                    <img className="ellipse-8-FfrnxY" src="./import/img/ellipse-8-15@2x.png" />
                  </div>
                  <div className="group-80-gZPaJo">
                    <img className="ellipse-7-oJMFSk" src="./import/img/ellipse-7-16@2x.png" />
                    <img className="ellipse-8-oJMFSk" src="./import/img/ellipse-8-16@2x.png" />
                  </div>
                  <div className="group-81-gZPaJo">
                    <img className="ellipse-7-a8t46I" src="./import/img/ellipse-7-5@2x.png" />
                    <img className="ellipse-8-a8t46I" src="./import/img/ellipse-8-5@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29-j5MDHY">
              <p className="sodales-ut-etiam-sit-fgzFPV dmsans-normal-white-16px-2">
                A dynamic and interactive online platform to empower minority professionals.
              </p>
              <p className="through-m-power-r-relationships-fgzFPV dmsans-normal-white-16px-2">
                Through MPower members can:<br />- Learn how to use their lived experience as an asset <br />- Grow business
                and leadership skills with dynamic content<br />- Find inspiration in minority success stories and
                teachings<br />- Accelerate their career through reciprocal mentor relationships
              </p>
            </div>
          </div>
          <Link to="mpower-app">
            <div className="button-secondary-desktop-kTMlYy border-1px-white-2">
              <div className="font-aQSSHr valign-text-middle dmsans-bold-white-16px">CHECK OUT MPOWER</div>
              <div className="icarrow-aQSSHr"><img className="vector-lBlCDT" src="./import/img/vector-43@2x.png" /></div>
            </div>
          </Link>
          <Link to="mpower-app">
            <div className="appstore-buttons-kTMlYy">
              <div className="app-store-yAGHHd">
                <img className="path-3-zxz4BT" src="./import/img/path-3@2x.png" />
                <img className="path-4-zxz4BT" src="./import/img/path-4@2x.png" />
                <img className="path-5-zxz4BT" src="./import/img/path-5@2x.png" />
                <div className="group-2-zxz4BT"><img className="path-6-zIB4zk" src="./import/img/path-6-2@2x.png" /></div>
                <div className="group-3-zxz4BT"><img className="path-7-MZ5nVW" src="./import/img/path-7-2@2x.png" /></div>
              </div>
              <div className="play-store-yAGHHd">
                <img className="path-8-NwkMxW" src="./import/img/path-8-1@2x.png" />
                <img className="path-9-NwkMxW" src="./import/img/path-5@2x.png" />
                <img className="path-10-NwkMxW" src="./import/img/path-10@2x.png" />
                <img className="path-11-NwkMxW" src="./import/img/path-11-1@2x.png" />
                <div className="group-4-NwkMxW">
                  <img className="path-12-kx3BUh" src="./import/img/path-12@2x.png" />
                  <img className="path-13-kx3BUh" src="./import/img/path-13-1@2x.png" />
                  <img className="path-14-kx3BUh" src="./import/img/path-14@2x.png" />
                  <img className="path-15-kx3BUh" src="./import/img/path-15@2x.png" />
                  <img className="path-16-kx3BUh" src="./import/img/path-16@2x.png" />
                  <img className="path-17-kx3BUh" src="./import/img/path-17@2x.png" />
                  <img className="path-18-kx3BUh" src="./import/img/path-18-1@2x.png" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="image1-C61RwL">
        <img className="rectangle-XOzwRk" src="./import/img/rectangle-6@2x.png" />
        <div className="group-1-XOzwRk">
          <img className="line7-eyQVEz" src="./import/img/line-7-2@2x.png" />
          <img className="line8-eyQVEz" src="./import/img/line-8-16@2x.png" />
          <img className="line9-eyQVEz" src="./import/img/line-9-2@2x.png" />
          <img className="line10-eyQVEz" src="./import/img/line-10-16@2x.png" />
          <img className="line11-eyQVEz" src="./import/img/line-11-16@2x.png" />
          <img className="line12-eyQVEz" src="./import/img/line-12-16@2x.png" />
          <img className="line13-eyQVEz" src="./import/img/line-13-16@2x.png" />
          <img className="path71-eyQVEz" src="./import/img/path-71-16@2x.png" />
          <img className="line15-eyQVEz" src="./import/img/line-15-16@2x.png" />
        </div>
        <img className="rectangle-BCDVyu" src="./import/img/rectangle-7@2x.png" />
      </div>
      <div className="image2-C61RwL">
        <img className="rectangle-gCOVZ5" src="./import/img/rectangle-8@2x.png" />
        <div className="group-2-gCOVZ5">
          <img className="line7-aymG72" src="./import/img/line-7-3@2x.png" />
          <img className="line8-aymG72" src="./import/img/line-8-17@2x.png" />
          <img className="line9-aymG72" src="./import/img/line-9-3@2x.png" />
          <img className="line10-aymG72" src="./import/img/line-10-17@2x.png" />
          <img className="line11-aymG72" src="./import/img/line-11-17@2x.png" />
          <img className="line12-aymG72" src="./import/img/line-12-17@2x.png" />
          <img className="line13-aymG72" src="./import/img/line-13-17@2x.png" />
          <img className="path71-aymG72" src="./import/img/path-71-17@2x.png" />
          <img className="line15-aymG72" src="./import/img/line-15-17@2x.png" />
        </div>
        <img className="rectangle-9dlzDV" src="./import/img/rectangle-9@2x.png" />
      </div>
      <div className="group-583-C61RwL">
        <div className="a-new-way-to-enjoy-q-3Hxg6n dmsans-bold-baltic-sea-62px">Career Opportunities</div>
        <p className="cras-semper-auctor-a-3Hxg6n dmsans-normal-trout-16px">
          Through use of the MPower platform and comprehensive services to support diverse and inclusive workforces,
          hiring organizations will have…
        </p>
        <Link to="company">
          <div className="frame-51-3Hxg6n">
            <div className="frame-2-vCMbxe border-1px-royal-blue">
              <div className="font-nUChOI valign-text-middle dmsans-bold-royal-blue-16px">LEARN MORE</div>
              <div className="icarrow-nUChOI"><img className="vector-xFu5n4" src="./import/img/vector-44@2x.png" /></div>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="footer-C61RwL">
        <div className="background-iPe1yZ"></div>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src="./import/img/vector-312@2x.png" />
          <div className="group-gq7idq">
            <div className="group-xN3oHm">
              <img className="vector-WKOVL0" src="./import/img/vector-313@2x.png" />
              <img className="vector-4XLMSW" src="./import/img/vector-314@2x.png" />
            </div>
            <div className="group-ZoK5l8">
              <img className="vector-csiNyy" src="./import/img/vector-315@2x.png" />
              <img className="vector-xzqitv" src="./import/img/vector-316@2x.png" />
            </div>
            <div className="group-jADPbL">
              <img className="vector-xo2QOx" src="./import/img/vector-317@2x.png" />
              <img className="vector-lhrxUR" src="./import/img/vector-318@2x.png" />
            </div>
            <div className="group-L45nrx">
              <img className="vector-zWAipv" src="./import/img/vector-319@2x.png" />
              <img className="vector-uegk7N" src="./import/img/vector-320@2x.png" />
            </div>
            <div className="group-ghDc13">
              <img className="vector-tfmt7z" src="./import/img/vector-321@2x.png" />
              <img className="vector-UAn0es" src="./import/img/vector-322@2x.png" />
            </div>
            <div className="group-oESVxa">
              <img className="vector-yvB1rm" src="./import/img/vector-323@2x.png" />
              <img className="vector-kvXLTM" src="./import/img/vector-324@2x.png" />
            </div>
            <div className="group-Z4Q2gf">
              <img className="vector-14PSPg" src="./import/img/vector-325@2x.png" />
              <img className="vector-mimJP3" src="./import/img/vector-326@2x.png" />
            </div>
            <div className="group-C2bwuM">
              <img className="vector-asI5Gv" src="./import/img/vector-327@2x.png" />
              <img className="vector-3vMHWQ" src="./import/img/vector-328@2x.png" />
            </div>
            <div className="group-dSoAuk">
              <img className="vector-ivudWw" src="./import/img/vector-329@2x.png" />
              <img className="vector-HfktG6" src="./import/img/vector-330@2x.png" />
            </div>
            <div className="group-E3FUlw">
              <img className="vector-P6Lrud" src="./import/img/vector-331@2x.png" />
              <img className="vector-VZfFMI" src="./import/img/vector-332@2x.png" />
            </div>
            <div className="group-fSlr8n">
              <img className="vector-wQ9dtN" src="./import/img/vector-333@2x.png" />
              <img className="vector-xdiaTp" src="./import/img/vector-334@2x.png" />
            </div>
            <div className="group-L3yGCY">
              <img className="vector-iHEkte" src="./import/img/vector-335@2x.png" />
              <img className="vector-AYMLEY" src="./import/img/vector-336@2x.png" />
            </div>
            <div className="group-jfVTVp">
              <img className="vector-w2x1U8" src="./import/img/vector-337@2x.png" />
              <img className="vector-xIDGpx" src="./import/img/vector-338@2x.png" />
            </div>
            <div className="group-xtvv0P">
              <img className="vector-Sg5Zvo" src="./import/img/vector-339@2x.png" />
              <img className="vector-4xxkxu" src="./import/img/vector-340@2x.png" />
            </div>
            <div className="group-Zxue1b">
              <img className="vector-6vvErL" src="./import/img/vector-341@2x.png" />
              <img className="vector-JKPtcT" src="./import/img/vector-342@2x.png" />
            </div>
            <div className="group-z7Nznm">
              <img className="vector-x59x0y" src="./import/img/vector-343@2x.png" />
              <img className="vector-wmsHOr" src="./import/img/vector-344@2x.png" />
            </div>
            <div className="group-0m9eLo">
              <img className="vector-uEr9pS" src="./import/img/vector-345@2x.png" />
              <img className="vector-XpPojO" src="./import/img/vector-346@2x.png" />
            </div>
            <div className="group-8Tmgnx">
              <img className="vector-Vc36K2" src="./import/img/vector-347@2x.png" />
              <img className="vector-tsghT1" src="./import/img/vector-348@2x.png" />
            </div>
            <div className="group-JFQ7j2">
              <img className="vector-ymx2TC" src="./import/img/vector-349@2x.png" />
              <img className="vector-IiDzdt" src="./import/img/vector-350@2x.png" />
            </div>
            <div className="group-wGLKcw">
              <img className="vector-IVutZP" src="./import/img/vector-351@2x.png" />
              <img className="vector-eZBsRv" src="./import/img/vector-352@2x.png" />
            </div>
          </div>
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-43-iPe1yZ">
          <div className="instagram-hamoIG"><img className="combined-shape-Kjvr2X" src="./import/img/combined-shape-5@2x.png" /></div>
          <div className="twitter-hamoIG"><img className="path-jPphH2" src="./import/img/path@2x.png" /></div>
          <div className="linkedin-1-hamoIG"><img className="vector-YIAmW9" src="./import/img/vector-353@2x.png" /></div>
        </div>
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <div className="inputs-default-iPe1yZ">
          <div className="input-4j1ImY">
            <div className="style-urJPUx border-1px-celeste"></div>
          </div>
          <input
            className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
            name="placeholder"
            placeholder="Your email"
            type="email"
            required
          />
        </div>
        <div className="default-text-iPe1yZ">
          <div className="button-TQGk14">
            <div className="style-BFaroP"></div>
          </div>
          <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
        </div>
      </div> */}
      <Footer breakpoint="tablet" />
      <NavTablet />
      <div className="group-581-C61RwL">
        <div className="a-new-way-to-enjoy-q-UDbxrZ dmsans-bold-baltic-sea-62px">Member Development</div>
        <p className="cras-semper-auctor-a-UDbxrZ dmsans-normal-trout-16px">
         Members only coursework, discussion groups and guest lectures by globally recognized thought leaders provides our MPower members…
        </p>
        <Link to="mpower">
          <div className="frame-48-UDbxrZ">
            <div className="frame-2-1N6ZEx border-1px-royal-blue">
              <div className="font-k385xv valign-text-middle dmsans-bold-royal-blue-16px">LEARN MORE</div>
              <div className="icarrow-k385xv"><img className="vector-a7E9W9" src="./import/img/vector-44@2x.png" /></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="home-mobile-320px screen">
      <div className="heroimgbackground-C61RwL"></div>
      <div className="backgroundshapesright-C61RwL">
        <img className="path70-2bZYeb" src="./import/img/path-70-4@2x.png" />
        <img className="oval-copy-2bZYeb" src="./import/img/oval-copy-8@1x.png" />
      </div>
      <div className="backgroundshapesleft-C61RwL">
        <div className="frame-7-0xC2zx">
          <img className="oval-copy-Wnc2j5" src="./import/img/oval-copy-9@2x.png" />
          <img className="oval-Wnc2j5" src="./import/img/oval-3@2x.png" />
        </div>
        <div className="group-1-0xC2zx">
          <img className="line7-i53Fv3" src="./import/img/line-7-18@2x.png" />
          <img className="line8-i53Fv3" src="./import/img/line-8-18@2x.png" />
          <img className="line9-i53Fv3" src="./import/img/line-9-18@2x.png" />
          <img className="line10-i53Fv3" src="./import/img/line-10-18@2x.png" />
          <img className="line11-i53Fv3" src="./import/img/line-11-18@2x.png" />
          <img className="line12-i53Fv3" src="./import/img/line-12-18@2x.png" />
          <img className="line13-i53Fv3" src="./import/img/line-13-18@2x.png" />
          <img className="path71-i53Fv3" src="./import/img/path-71-18@2x.png" />
          <img className="line15-i53Fv3" src="./import/img/line-15-18@2x.png" />
        </div>
      </div>
      <div className="h1mobile-C61RwL dmsans-bold-baltic-sea-40px">
        We advance diversity, equity and inclusion in today’s workplace.
      </div>
      <Link to="mpower-app">
        <div className="button-primary-default-C61RwL">
          <div className="font-GsrA0Q valign-text-middle dmsans-bold-white-16px">JOIN THE MOVEMENT</div>
        </div>
      </Link>
      <div className="imagegrid-C61RwL">
        <img className="column1-j0ck3A" src="./import/img/column-1-2@2x.png" />
        <div className="column2-j0ck3A">
          <img className="image2-uWZBJr" src="./import/img/image-2-2@2x.png" />
          <img className="image3-uWZBJr" src="./import/img/image-3-2@2x.png" />
        </div>
        <img className="column3-j0ck3A" src="./import/img/column-3-2@2x.png" />
        <div className="column4-j0ck3A">
          <img className="image4-rbzK3B" src="./import/img/image-4-2@2x.png" />
          <img className="image5-rbzK3B" src="./import/img/image-5-2@2x.png" />
        </div>
        <img className="column5-j0ck3A" src="./import/img/column-5-2@2x.png" />
      </div>
      <div className="highlightdiversity-C61RwL"></div>
      <div className="highlightequity-C61RwL"></div>
      <div className="highlightinclusion-C61RwL"></div>
      <div className="imgframe-C61RwL">
        <img className="dotgridimage-6IZ0TO" src="./import/img/dot-grid-image@2x.png" />
        <img className="img-6IZ0TO" src="./import/img/img-2@2x.png" />
        <img className="gradientframe-6IZ0TO" src="./import/img/gradient-frame-2@2x.png" />
      </div>
      <div className="logo-C61RwL">
        <img className="vector-exFKkL" src="./import/img/vector-356@2x.png" />
        <div className="group-exFKkL">
          <div className="group-LRM1jR">
            <img className="vector-GPRzar" src="./import/img/vector-357@2x.png" />
            <img className="vector-Fm5KxR" src="./import/img/vector-358@2x.png" />
          </div>
          <div className="group-A0xVEW">
            <img className="vector-6cFLVc" src="./import/img/vector-359@2x.png" />
            <img className="vector-4xYBy1" src="./import/img/vector-360@2x.png" />
          </div>
          <div className="group-CPfWUV">
            <img className="vector-3w6F7B" src="./import/img/vector-361@2x.png" />
            <img className="vector-dsVJnW" src="./import/img/vector-362@2x.png" />
          </div>
          <div className="group-7UYHLR">
            <img className="vector-2wosw3" src="./import/img/vector-363@2x.png" />
            <img className="vector-PlhBYg" src="./import/img/vector-364@2x.png" />
          </div>
          <div className="group-KWLEK4">
            <img className="vector-kIS7Kh" src="./import/img/vector-365@2x.png" />
            <img className="vector-h7k85P" src="./import/img/vector-366@2x.png" />
          </div>
          <div className="group-xqPohA">
            <img className="vector-FUQsKJ" src="./import/img/vector-367@2x.png" />
            <img className="vector-IY7QiT" src="./import/img/vector-368@2x.png" />
          </div>
          <div className="group-dRhspZ">
            <img className="vector-nRj0GX" src="./import/img/vector-369@2x.png" />
            <img className="vector-p37Jy4" src="./import/img/vector-370@2x.png" />
          </div>
          <div className="group-ugQDQI">
            <img className="vector-KrzmJ1" src="./import/img/vector-371@2x.png" />
            <img className="vector-kfRX5B" src="./import/img/vector-372@2x.png" />
          </div>
          <div className="group-xQpv6Q">
            <img className="vector-Qa9M6Z" src="./import/img/vector-373@2x.png" />
            <img className="vector-KE5Zqg" src="./import/img/vector-374@2x.png" />
          </div>
          <div className="group-so4T52">
            <img className="vector-yHHOxO" src="./import/img/vector-375@2x.png" />
            <img className="vector-Wwb8xe" src="./import/img/vector-376@2x.png" />
          </div>
          <div className="group-9ZLGp2">
            <img className="vector-6NWwXZ" src="./import/img/vector-377@2x.png" />
            <img className="vector-2tlgkt" src="./import/img/vector-378@2x.png" />
          </div>
          <div className="group-dKxZiv">
            <img className="vector-xHxiNB" src="./import/img/vector-379@2x.png" />
            <img className="vector-kwhTkr" src="./import/img/vector-380@2x.png" />
          </div>
          <div className="group-f2B1ws">
            <img className="vector-RQwDYH" src="./import/img/vector-381@2x.png" />
            <img className="vector-AATI6m" src="./import/img/vector-382@2x.png" />
          </div>
          <div className="group-smegft">
            <img className="vector-9RPHKK" src="./import/img/vector-383@2x.png" />
            <img className="vector-b3pZmF" src="./import/img/vector-384@2x.png" />
          </div>
          <div className="group-zM0Sp9">
            <img className="vector-K3QFIs" src="./import/img/vector-385@2x.png" />
            <img className="vector-r2gP27" src="./import/img/vector-386@2x.png" />
          </div>
          <div className="group-hg01G8">
            <img className="vector-9ddndr" src="./import/img/vector-387@2x.png" />
            <img className="vector-rmD89g" src="./import/img/vector-388@2x.png" />
          </div>
          <div className="group-IHX4Tm">
            <img className="vector-2OMZXT" src="./import/img/vector-389@2x.png" />
            <img className="vector-KkMz4P" src="./import/img/vector-390@2x.png" />
          </div>
          <div className="group-x5UxhD">
            <img className="vector-DWowff" src="./import/img/vector-391@2x.png" />
            <img className="vector-veBUfZ" src="./import/img/vector-392@2x.png" />
          </div>
          <div className="group-OtUbot">
            <img className="vector-7MolAu" src="./import/img/vector-393@2x.png" />
            <img className="vector-K63rpb" src="./import/img/vector-394@2x.png" />
          </div>
          <div className="group-dk9LSl">
            <img className="vector-5flfBP" src="./import/img/vector-395@2x.png" />
            <img className="vector-lVkTT0" src="./import/img/vector-396@2x.png" />
          </div>
        </div>
      </div>
      <div className="h1-C61RwL dmsans-bold-big-stone-40px">Minority Moves Network</div>
      <p className="p-C61RwL dmsans-normal-abbey-16px">
        Meeting people and organizations where they are through proprietary technology, Minority Moves Network (M2N) serves as a central hub to empower, 
        train, connect and support diverse professionals to find employment within companies committed to an inclusive workplace.
      </p>
      <div className="bullet01-C61RwL">
        <p className="p-2W14L6 dmsans-normal-abbey-16px">
          Builds an active membership of diverse professionals seeking personal &amp; professional development
          to cultivate a collective network of support for long term success.
        </p>
        <div className="bullet-2W14L6">
          <div className="ellipse-23-ORaySA"></div>
          <div className="ellipse-25-ORaySA border-1px-royal-blue"></div>
        </div>
      </div>
      <div className="bullet02-C61RwL">
        <p className="p-mQUbpi dmsans-normal-abbey-16px">
          Engages a network of companies committed to recruiting, onboarding, and mentoring to create an inclusionary
          employment culture through consulting and bridge services.
        </p>
        <div className="bullet-mQUbpi">
          <div className="ellipse-23-4gmmV9"></div>
          <div className="ellipse-25-4gmmV9 border-1px-persimmon"></div>
        </div>
      </div>
      <div className="frame-4-C61RwL">
        <div className="rectangle-61Z7WH"></div>
        <div className="group-1-61Z7WH">
          <img className="line7-CiRr5x" src="./import/img/line-7-19@2x.png" />
          <img className="line8-CiRr5x" src="./import/img/line-8-19@2x.png" />
          <img className="line9-CiRr5x" src="./import/img/line-9-19@2x.png" />
          <img className="line10-CiRr5x" src="./import/img/line-10-19@2x.png" />
          <img className="line11-CiRr5x" src="./import/img/line-11-19@2x.png" />
          <img className="line12-CiRr5x" src="./import/img/line-12-19@2x.png" />
          <img className="line13-CiRr5x" src="./import/img/line-13-19@2x.png" />
          <img className="path71-CiRr5x" src="./import/img/path-71-19@2x.png" />
          <img className="line15-CiRr5x" src="./import/img/line-15-19@2x.png" />
        </div>
        <div className="background-shapes-right-61Z7WH">
          <img className="oval-copy-6NfgDB" src="./import/img/oval-copy-10@2x.png" />
          <img className="mockups-1-6NfgDB" src="./import/img/mockups-1-2@2x.png" />
        </div>
        <img className="components-6-61Z7WH" src="./import/img/dot-grid-image@2x.png" />
        <div className="contentlist-61Z7WH">
          <div className="frame-30-kTMlYy">
            <div className="frame-28-j5MDHY">
              <div className="frame-27-wTRxaY">
                <div className="non-curabitur-gravid-nwKcOf dmsans-bold-white-40px">What is</div>
                <div className="non-curabitur-gravid-pt1xEz dmsans-bold-white-40px">?</div>
                <div className="m-powerwhite-colored-nwKcOf">
                  <div className="group-gZPaJo"><img className="vector-8hMgLW" src="./import/img/vector-397@2x.png" /></div>
                  <img className="subtract-gZPaJo" src="./import/img/subtract-6@2x.png" />
                  <div className="group-79-gZPaJo">
                    <img className="ellipse-7-FfrnxY" src="./import/img/ellipse-7-18@2x.png" />
                    <img className="ellipse-8-FfrnxY" src="./import/img/ellipse-8-18@2x.png" />
                  </div>
                  <div className="group-80-gZPaJo">
                    <img className="ellipse-7-oJMFSk" src="./import/img/ellipse-7-19@2x.png" />
                    <img className="ellipse-8-oJMFSk" src="./import/img/ellipse-8-19@2x.png" />
                  </div>
                  <div className="group-81-gZPaJo">
                    <img className="ellipse-7-a8t46I" src="./import/img/ellipse-7-20@2x.png" />
                    <img className="ellipse-8-a8t46I" src="./import/img/ellipse-8-20@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29-j5MDHY">
              <p className="sodales-ut-etiam-sit-fgzFPV dmsans-normal-white-16px-2">
                A dynamic and interactive online platform to empower minority professionals.
              </p>
              <p className="through-m-power-r-relationships-fgzFPV dmsans-normal-white-16px-2">
                Through MPower members can:<br />- Learn how to use their lived experience as an asset <br />- Grow business
                and leadership skills with dynamic content<br />- Find inspiration in minority success stories and
                teachings<br />- Accelerate their career through reciprocal mentor relationships
              </p>
            </div>
          </div>
          <Link to="mpower-app">
            <div className="button-secondary-desktop-kTMlYy border-1px-white-2">
              <div className="font-aQSSHr valign-text-middle dmsans-bold-white-16px">CHECK OUT MPOWER</div>
              <div className="icarrow-aQSSHr"><img className="vector-lBlCDT" src="./import/img/vector-398@2x.png" /></div>
            </div>
          </Link>
          <Link to="mpower-app">
            <div className="appstore-buttons-kTMlYy">
              <div className="app-store-yAGHHd">
                <img className="path-3-zxz4BT" src="./import/img/path-3-4@2x.png" />
                <img className="path-4-zxz4BT" src="./import/img/path-4-3@2x.png" />
                <img className="path-5-zxz4BT" src="./import/img/path-5@2x.png" />
                <div className="group-2-zxz4BT"><img className="path-6-zIB4zk" src="./import/img/path-6-3@2x.png" /></div>
                <div className="group-3-zxz4BT"><img className="path-7-MZ5nVW" src="./import/img/path-7-3@2x.png" /></div>
              </div>
              <div className="play-store-yAGHHd">
                <img className="path-8-NwkMxW" src="./import/img/path-8-2@2x.png" />
                <img className="path-9-NwkMxW" src="./import/img/path-5@2x.png" />
                <img className="path-10-NwkMxW" src="./import/img/path-10-2@2x.png" />
                <img className="path-11-NwkMxW" src="./import/img/path-11-2@2x.png" />
                <div className="group-4-NwkMxW">
                  <img className="path-12-kx3BUh" src="./import/img/path-12-2@2x.png" />
                  <img className="path-13-kx3BUh" src="./import/img/path-13-2@2x.png" />
                  <img className="path-14-kx3BUh" src="./import/img/path-14-2@2x.png" />
                  <img className="path-15-kx3BUh" src="./import/img/path-15-2@2x.png" />
                  <img className="path-16-kx3BUh" src="./import/img/path-16-2@2x.png" />
                  <img className="path-17-kx3BUh" src="./import/img/path-17-2@2x.png" />
                  <img className="path-18-kx3BUh" src="./import/img/path-18-2@2x.png" />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="abstract-shapes-9-3-61Z7WH border-33px-bittersweet"></div>
      </div>
      <div className="frame-31-C61RwL">
        <img className="rectangle-Fnypb5" src="./import/img/rectangle-10@2x.png" />
        <div className="group-1-Fnypb5">
          <img className="line7-s1wXaq" src="./import/img/line-7-2@2x.png" />
          <img className="line8-s1wXaq" src="./import/img/line-8-20@2x.png" />
          <img className="line9-s1wXaq" src="./import/img/line-9-2@2x.png" />
          <img className="line10-s1wXaq" src="./import/img/line-10-20@2x.png" />
          <img className="line11-s1wXaq" src="./import/img/line-11-20@2x.png" />
          <img className="line12-s1wXaq" src="./import/img/line-12-20@2x.png" />
          <img className="line13-s1wXaq" src="./import/img/line-13-20@2x.png" />
          <img className="path71-s1wXaq" src="./import/img/path-71-20@2x.png" />
          <img className="line15-s1wXaq" src="./import/img/line-15-20@2x.png" />
        </div>
        <img className="rectangle-gDss6T" src="./import/img/rectangle-11@2x.png" />
      </div>
      <div className="frame-34-C61RwL">
        <div className="frame-33-DmqrA3">
          <div className="a-new-way-to-enjoy-q-aT0WHq dmsans-bold-baltic-sea-40px">Member Development</div>
          <div className="frame-41-aT0WHq">
            <p className="cras-semper-auctor-a-gfIGM0 dmsans-normal-trout-16px">
              Members only coursework, discussion groups and guest lectures by globally recognized thought leaders provides our MPower members…
            </p>
          </div>
        </div>
        <Link to="mpower">
          <div className="frame-2-DmqrA3 border-1px-royal-blue">
            <div className="font-y2e3aF valign-text-middle dmsans-bold-royal-blue-16px">LEARN MORE</div>
            <div className="icarrow-y2e3aF"><img className="vector-2qf4Uv" src="./import/img/vector-399@2x.png" /></div>
          </div>
        </Link>
      </div>
      <div className="frame-36-C61RwL">
        <img className="rectangle-vwAkId" src="./import/img/rectangle-12@2x.png" />
        <div className="group-2-vwAkId">
          <img className="line7-VT4Y09" src="./import/img/line-7-3@2x.png" />
          <img className="line8-VT4Y09" src="./import/img/line-8-21@2x.png" />
          <img className="line9-VT4Y09" src="./import/img/line-9-3@2x.png" />
          <img className="line10-VT4Y09" src="./import/img/line-10-21@2x.png" />
          <img className="line11-VT4Y09" src="./import/img/line-11-21@2x.png" />
          <img className="line12-VT4Y09" src="./import/img/line-12-21@2x.png" />
          <img className="line13-VT4Y09" src="./import/img/line-13-21@2x.png" />
          <img className="path71-VT4Y09" src="./import/img/path-71-21@2x.png" />
          <img className="line15-VT4Y09" src="./import/img/line-15-21@2x.png" />
        </div>
        <img className="rectangle-Xtrsix" src="./import/img/rectangle-13@2x.png" />
      </div>
      <div className="frame-38-C61RwL">
        <div className="frame-37-TRJnNi">
          <div className="a-new-way-to-enjoy-q-5wbvv5 dmsans-bold-baltic-sea-40px">Career Opportunities</div>
          <div className="frame-40-5wbvv5">
            <p className="cras-semper-auctor-a-6S18xr dmsans-normal-trout-16px">
              Through use of the MPower platform and comprehensive services to support diverse and inclusive workforces,
              hiring organizations will have…
            </p>
          </div>
        </div>
        <Link to="company">
          <div className="frame-2-TRJnNi border-1px-royal-blue">
            <div className="font-2WX1ZD valign-text-middle dmsans-bold-royal-blue-16px">LEARN MORE</div>
            <div className="icarrow-2WX1ZD"><img className="vector-ouSVJV" src="./import/img/vector-399@2x.png" /></div>
          </div>
        </Link>
      </div>
      {/* <div className="footer-C61RwL">
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <div className="inputs-default-iPe1yZ">
          <div className="input-4j1ImY">
            <div className="style-urJPUx border-1px-celeste"></div>
          </div>
          <input
            className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
            name="placeholder"
            placeholder="Your email"
            type="email"
            required
          />
        </div>
        <div className="default-text-iPe1yZ">
          <div className="button-TQGk14">
            <div className="style-BFaroP"></div>
          </div>
          <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
        </div>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src="./import/img/vector-401@2x.png" />
          <div className="group-gq7idq">
            <div className="group-xN3oHm">
              <img className="vector-WKOVL0" src="./import/img/vector-313@2x.png" />
              <img className="vector-4XLMSW" src="./import/img/vector-314@2x.png" />
            </div>
            <div className="group-ZoK5l8">
              <img className="vector-csiNyy" src="./import/img/vector-315@2x.png" />
              <img className="vector-xzqitv" src="./import/img/vector-316@2x.png" />
            </div>
            <div className="group-jADPbL">
              <img className="vector-xo2QOx" src="./import/img/vector-317@2x.png" />
              <img className="vector-lhrxUR" src="./import/img/vector-407@2x.png" />
            </div>
            <div className="group-L45nrx">
              <img className="vector-zWAipv" src="./import/img/vector-319@2x.png" />
              <img className="vector-uegk7N" src="./import/img/vector-320@2x.png" />
            </div>
            <div className="group-ghDc13">
              <img className="vector-tfmt7z" src="./import/img/vector-321@2x.png" />
              <img className="vector-UAn0es" src="./import/img/vector-322@2x.png" />
            </div>
            <div className="group-oESVxa">
              <img className="vector-yvB1rm" src="./import/img/vector-323@2x.png" />
              <img className="vector-kvXLTM" src="./import/img/vector-324@2x.png" />
            </div>
            <div className="group-Z4Q2gf">
              <img className="vector-14PSPg" src="./import/img/vector-325@2x.png" />
              <img className="vector-mimJP3" src="./import/img/vector-326@2x.png" />
            </div>
            <div className="group-C2bwuM">
              <img className="vector-asI5Gv" src="./import/img/vector-327@2x.png" />
              <img className="vector-3vMHWQ" src="./import/img/vector-328@2x.png" />
            </div>
            <div className="group-dSoAuk">
              <img className="vector-ivudWw" src="./import/img/vector-418@2x.png" />
              <img className="vector-HfktG6" src="./import/img/vector-419@2x.png" />
            </div>
            <div className="group-E3FUlw">
              <img className="vector-P6Lrud" src="./import/img/vector-331@2x.png" />
              <img className="vector-VZfFMI" src="./import/img/vector-421@2x.png" />
            </div>
            <div className="group-fSlr8n">
              <img className="vector-wQ9dtN" src="./import/img/vector-333@2x.png" />
              <img className="vector-xdiaTp" src="./import/img/vector-334@2x.png" />
            </div>
            <div className="group-L3yGCY">
              <img className="vector-iHEkte" src="./import/img/vector-335@2x.png" />
              <img className="vector-AYMLEY" src="./import/img/vector-336@2x.png" />
            </div>
            <div className="group-jfVTVp">
              <img className="vector-w2x1U8" src="./import/img/vector-337@2x.png" />
              <img className="vector-xIDGpx" src="./import/img/vector-338@2x.png" />
            </div>
            <div className="group-xtvv0P">
              <img className="vector-Sg5Zvo" src="./import/img/vector-339@2x.png" />
              <img className="vector-4xxkxu" src="./import/img/vector-340@2x.png" />
            </div>
            <div className="group-Zxue1b">
              <img className="vector-6vvErL" src="./import/img/vector-341@2x.png" />
              <img className="vector-JKPtcT" src="./import/img/vector-342@2x.png" />
            </div>
            <div className="group-z7Nznm">
              <img className="vector-x59x0y" src="./import/img/vector-343@2x.png" />
              <img className="vector-wmsHOr" src="./import/img/vector-344@2x.png" />
            </div>
            <div className="group-0m9eLo">
              <img className="vector-uEr9pS" src="./import/img/vector-345@2x.png" />
              <img className="vector-XpPojO" src="./import/img/vector-346@2x.png" />
            </div>
            <div className="group-8Tmgnx">
              <img className="vector-Vc36K2" src="./import/img/vector-347@2x.png" />
              <img className="vector-tsghT1" src="./import/img/vector-348@2x.png" />
            </div>
            <div className="group-JFQ7j2">
              <img className="vector-ymx2TC" src="./import/img/vector-349@2x.png" />
              <img className="vector-IiDzdt" src="./import/img/vector-350@2x.png" />
            </div>
            <div className="group-wGLKcw">
              <img className="vector-IVutZP" src="./import/img/vector-351@2x.png" />
              <img className="vector-eZBsRv" src="./import/img/vector-352@2x.png" />
            </div>
          </div>
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-47-iPe1yZ">
          <div className="instagram-ER5pEj"><img className="combined-shape-a2OMEj" src="./import/img/combined-shape-5@2x.png" /></div>
          <div className="twitter-ER5pEj"><img className="path-g8wxqH" src="./import/img/path@2x.png" /></div>
          <div className="linkedin-1-ER5pEj"><img className="vector-H2IUZC" src="./import/img/vector-353@2x.png" /></div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
        </div>
      </div> */}
      <Footer breakpoint="mobile" />
      <NavMobile />
    </div>
    <div className="home-tablet-720px screen">
      <div className="heroimgbackground-C61RwL"></div>
      <div className="backgroundshapesright-C61RwL">
        <img className="path70-2bZYeb" src="./import/img/path-70-4@2x.png" />
        <img className="oval-copy-2bZYeb" src="./import/img/oval-copy-11@1x.png" />
      </div>
      <div className="backgroundshapesleft-C61RwL">
        <div className="frame-7-0xC2zx">
          <img className="oval-copy-Wnc2j5" src="./import/img/oval-copy-12@2x.png" />
          <img className="oval-Wnc2j5" src="./import/img/oval-4@2x.png" />
        </div>
        <div className="group-1-0xC2zx">
          <img className="line7-i53Fv3" src="./import/img/line-7-32@2x.png" />
          <img className="line8-i53Fv3" src="./import/img/line-8-18@2x.png" />
          <img className="line9-i53Fv3" src="./import/img/line-9-18@2x.png" />
          <img className="line10-i53Fv3" src="./import/img/line-10-32@2x.png" />
          <img className="line11-i53Fv3" src="./import/img/line-11-32@2x.png" />
          <img className="line12-i53Fv3" src="./import/img/line-12-32@2x.png" />
          <img className="line13-i53Fv3" src="./import/img/line-13-32@2x.png" />
          <img className="path71-i53Fv3" src="./import/img/path-71-18@2x.png" />
          <img className="line15-i53Fv3" src="./import/img/line-15-32@2x.png" />
        </div>
      </div>
      <div className="h1mobile-C61RwL dmsans-bold-baltic-sea-40px">
        We advance diversity, equity and inclusion in today’s workplace.
      </div>
      <Link to="mpower-app">
        <div className="button-primary-default-C61RwL">
          <div className="font-GsrA0Q valign-text-middle dmsans-bold-white-16px">JOIN THE MOVEMENT</div>
        </div>
      </Link>
      <div className="imagegrid-C61RwL">
        <img className="column1-j0ck3A" src="./import/img/column-1-3@2x.png" />
        <div className="column2-j0ck3A">
          <img className="image2-uWZBJr" src="./import/img/image-2-3@2x.png" />
          <img className="image3-uWZBJr" src="./import/img/image-3-3@2x.png" />
        </div>
        <img className="column3-j0ck3A" src="./import/img/column-3-3@2x.png" />
        <div className="column4-j0ck3A">
          <img className="image4-rbzK3B" src="./import/img/image-4-3@2x.png" />
          <img className="image5-rbzK3B" src="./import/img/image-5-3@2x.png" />
        </div>
        <img className="column5-j0ck3A" src="./import/img/column-5-3@2x.png" />
      </div>
      <div className="highlightdiversity-C61RwL"></div>
      <div className="highlightequity-C61RwL"></div>
      <div className="highlightinclusion-C61RwL"></div>
      <div className="imgframe-C61RwL">
        <img className="dotgridimage-6IZ0TO" src={dotGridImg2x} />
        <img className="img-6IZ0TO" src="./import/img/img-3@2x.png" />
        <img className="gradientframe-6IZ0TO" src="./import/img/gradient-frame-3@1x.png" />
      </div>
      <div className="logo-C61RwL">
        <img className="vector-exFKkL" src="./import/img/vector-356@2x.png" />
        <div className="group-exFKkL">
          <div className="group-LRM1jR">
            <img className="vector-GPRzar" src="./import/img/vector-357@2x.png" />
            <img className="vector-Fm5KxR" src="./import/img/vector-358@2x.png" />
          </div>
          <div className="group-A0xVEW">
            <img className="vector-6cFLVc" src="./import/img/vector-359@2x.png" />
            <img className="vector-4xYBy1" src="./import/img/vector-360@2x.png" />
          </div>
          <div className="group-CPfWUV">
            <img className="vector-3w6F7B" src="./import/img/vector-361@2x.png" />
            <img className="vector-dsVJnW" src="./import/img/vector-362@2x.png" />
          </div>
          <div className="group-7UYHLR">
            <img className="vector-2wosw3" src="./import/img/vector-363@2x.png" />
            <img className="vector-PlhBYg" src="./import/img/vector-364@2x.png" />
          </div>
          <div className="group-KWLEK4">
            <img className="vector-kIS7Kh" src="./import/img/vector-365@2x.png" />
            <img className="vector-h7k85P" src="./import/img/vector-366@2x.png" />
          </div>
          <div className="group-xqPohA">
            <img className="vector-FUQsKJ" src="./import/img/vector-367@2x.png" />
            <img className="vector-IY7QiT" src="./import/img/vector-368@2x.png" />
          </div>
          <div className="group-dRhspZ">
            <img className="vector-nRj0GX" src="./import/img/vector-369@2x.png" />
            <img className="vector-p37Jy4" src="./import/img/vector-370@2x.png" />
          </div>
          <div className="group-ugQDQI">
            <img className="vector-KrzmJ1" src="./import/img/vector-371@2x.png" />
            <img className="vector-kfRX5B" src="./import/img/vector-372@2x.png" />
          </div>
          <div className="group-xQpv6Q">
            <img className="vector-Qa9M6Z" src="./import/img/vector-373@2x.png" />
            <img className="vector-KE5Zqg" src="./import/img/vector-374@2x.png" />
          </div>
          <div className="group-so4T52">
            <img className="vector-yHHOxO" src="./import/img/vector-375@2x.png" />
            <img className="vector-Wwb8xe" src="./import/img/vector-376@2x.png" />
          </div>
          <div className="group-9ZLGp2">
            <img className="vector-6NWwXZ" src="./import/img/vector-377@2x.png" />
            <img className="vector-2tlgkt" src="./import/img/vector-579@2x.png" />
          </div>
          <div className="group-dKxZiv">
            <img className="vector-xHxiNB" src="./import/img/vector-580@2x.png" />
            <img className="vector-kwhTkr" src="./import/img/vector-380@2x.png" />
          </div>
          <div className="group-f2B1ws">
            <img className="vector-RQwDYH" src="./import/img/vector-582@2x.png" />
            <img className="vector-AATI6m" src="./import/img/vector-583@2x.png" />
          </div>
          <div className="group-smegft">
            <img className="vector-9RPHKK" src="./import/img/vector-383@2x.png" />
            <img className="vector-b3pZmF" src="./import/img/vector-384@2x.png" />
          </div>
          <div className="group-zM0Sp9">
            <img className="vector-K3QFIs" src="./import/img/vector-586@2x.png" />
            <img className="vector-r2gP27" src="./import/img/vector-386@2x.png" />
          </div>
          <div className="group-hg01G8">
            <img className="vector-9ddndr" src="./import/img/vector-387@2x.png" />
            <img className="vector-rmD89g" src="./import/img/vector-388@2x.png" />
          </div>
          <div className="group-IHX4Tm">
            <img className="vector-2OMZXT" src="./import/img/vector-389@2x.png" />
            <img className="vector-KkMz4P" src="./import/img/vector-390@2x.png" />
          </div>
          <div className="group-x5UxhD">
            <img className="vector-DWowff" src="./import/img/vector-391@2x.png" />
            <img className="vector-veBUfZ" src="./import/img/vector-392@2x.png" />
          </div>
          <div className="group-OtUbot">
            <img className="vector-7MolAu" src="./import/img/vector-393@2x.png" />
            <img className="vector-K63rpb" src="./import/img/vector-595@2x.png" />
          </div>
          <div className="group-dk9LSl">
            <img className="vector-5flfBP" src="./import/img/vector-596@2x.png" />
            <img className="vector-lVkTT0" src="./import/img/vector-597@2x.png" />
          </div>
        </div>
      </div>
      <div className="h1-C61RwL dmsans-bold-big-stone-40px">Minority Moves Network</div>
      <p className="p-C61RwL dmsans-normal-abbey-16px">
        Meeting people and organizations where they are through proprietary technology, Minority Moves Network (M2N) serves as a central hub to empower, 
        train, connect and support diverse professionals to find employment within companies committed to an inclusive workplace.
      </p>
      <div className="bullet01-C61RwL">
        <p className="p-2W14L6 dmsans-normal-abbey-16px">
          Builds an active membership of diverse professionals seeking personal &amp; professional development
          to cultivate a collective network of support for long term success.
        </p>
        <div className="bullet-2W14L6">
          <div className="ellipse-23-ORaySA"></div>
          <div className="ellipse-25-ORaySA border-1px-royal-blue"></div>
        </div>
      </div>
      <div className="bullet02-C61RwL">
        <p className="p-mQUbpi dmsans-normal-abbey-16px">
          Engages a network of companies committed to recruiting, onboarding, and mentoring to create an inclusionary
          employment culture through consulting and bridge services.
        </p>
        <div className="bullet-mQUbpi">
          <div className="ellipse-23-4gmmV9"></div>
          <div className="ellipse-25-4gmmV9 border-1px-persimmon"></div>
        </div>
      </div>
      <div className="frame-4-C61RwL">
        <div className="rectangle-61Z7WH"></div>
        <div className="group-1-61Z7WH">
          <img className="line7-CiRr5x" src="./import/img/line-7-33@2x.png" />
          <img className="line8-CiRr5x" src="./import/img/line-8-33@2x.png" />
          <img className="line9-CiRr5x" src="./import/img/line-9-33@2x.png" />
          <img className="line10-CiRr5x" src="./import/img/line-10-33@2x.png" />
          <img className="line11-CiRr5x" src="./import/img/line-11-33@2x.png" />
          <img className="line12-CiRr5x" src="./import/img/line-12-33@2x.png" />
          <img className="line13-CiRr5x" src="./import/img/line-13-33@2x.png" />
          <img className="path71-CiRr5x" src="./import/img/path-71-33@2x.png" />
          <img className="line15-CiRr5x" src="./import/img/line-15-33@2x.png" />
        </div>
        <div className="background-shapes-right-61Z7WH">
          <img className="oval-copy-6NfgDB" src="./import/img/oval-copy-13@2x.png" />
          <img className="mockups-1-6NfgDB" src="./import/img/mockups-1-4@2x.png" />
        </div>
        <img className="components-6-61Z7WH" src={dotGridImg2x} />
        <div className="contentlist-61Z7WH">
          <div className="frame-30-kTMlYy">
            <div className="frame-28-j5MDHY">
              <div className="frame-27-wTRxaY">
                <div className="non-curabitur-gravid-nwKcOf dmsans-bold-white-40px">What is</div>
                <div className="non-curabitur-gravid-pt1xEz dmsans-bold-white-40px">?</div>
                <div className="m-powerwhite-colored-nwKcOf">
                  <div className="group-gZPaJo"><img className="vector-8hMgLW" src="./import/img/vector-397@2x.png" /></div>
                  <img className="subtract-gZPaJo" src="./import/img/subtract-13@2x.png" />
                  <div className="group-79-gZPaJo">
                    <img className="ellipse-7-FfrnxY" src="./import/img/ellipse-7-33@2x.png" />
                    <img className="ellipse-8-FfrnxY" src="./import/img/ellipse-8-18@2x.png" />
                  </div>
                  <div className="group-80-gZPaJo">
                    <img className="ellipse-7-oJMFSk" src="./import/img/ellipse-7-34@2x.png" />
                    <img className="ellipse-8-oJMFSk" src="./import/img/ellipse-8-19@2x.png" />
                  </div>
                  <div className="group-81-gZPaJo">
                    <img className="ellipse-7-a8t46I" src="./import/img/ellipse-7-20@2x.png" />
                    <img className="ellipse-8-a8t46I" src="./import/img/ellipse-8-35@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-29-j5MDHY">
              <p className="sodales-ut-etiam-sit-fgzFPV dmsans-normal-white-16px-2">
                A dynamic and interactive online platform to empower minority professionals.
              </p>
              <p className="through-m-power-r-relationships-fgzFPV dmsans-normal-white-16px-2">
                Through MPower members can:<br />- Learn how to use their lived experience as an asset <br />- Grow business
                and leadership skills with dynamic content<br />- Find inspiration in minority success stories and
                teachings<br />- Accelerate their career through reciprocal mentor relationships
              </p>
            </div>
          </div>
          <Link to="mpower-app">
            <div className="button-secondary-desktop-kTMlYy border-1px-white-2">
              <div className="font-aQSSHr valign-text-middle dmsans-bold-white-16px">CHECK OUT MPOWER</div>
              <div className="icarrow-aQSSHr"><img className="vector-lBlCDT" src="./import/img/vector-398@2x.png" /></div>
            </div>
          </Link>
          <Link to="mpower-app">
            <div className="appstore-buttons-kTMlYy">
              <div className="app-store-yAGHHd">
                <img className="path-3-zxz4BT" src="./import/img/path-3-10@2x.png" />
                <img className="path-4-zxz4BT" src="./import/img/path-4-7@2x.png" />
                <img className="path-5-zxz4BT" src="./import/img/path-5@2x.png" />
                <div className="group-2-zxz4BT"><img className="path-6-zIB4zk" src="./import/img/path-6-7@2x.png" /></div>
                <div className="group-3-zxz4BT"><img className="path-7-MZ5nVW" src="./import/img/path-7-7@2x.png" /></div>
              </div>
              <div className="play-store-yAGHHd">
                <img className="path-8-NwkMxW" src="./import/img/path-8-4@2x.png" />
                <img className="path-9-NwkMxW" src="./import/img/path-5@2x.png" />
                <img className="path-10-NwkMxW" src="./import/img/path-10-2@2x.png" />
                <img className="path-11-NwkMxW" src="./import/img/path-11-4@2x.png" />
                <div className="group-4-NwkMxW">
                  <img className="path-12-kx3BUh" src="./import/img/path-12-2@2x.png" />
                  <img className="path-13-kx3BUh" src="./import/img/path-13-4@2x.png" />
                  <img className="path-14-kx3BUh" src="./import/img/path-14-2@2x.png" />
                  <img className="path-15-kx3BUh" src="./import/img/path-15-2@2x.png" />
                  <img className="path-16-kx3BUh" src="./import/img/path-16-2@2x.png" />
                  <img className="path-17-kx3BUh" src="./import/img/path-17-2@2x.png" />
                  <img className="path-18-kx3BUh" src="./import/img/path-18-2@2x.png" />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="abstract-shapes-9-3-61Z7WH border-33px-bittersweet"></div>
      </div>
      <div className="frame-31-C61RwL">
        <img className="rectangle-Fnypb5" src="./import/img/rectangle-14@1x.png" />
        <div className="group-1-Fnypb5">
          <img className="line7-s1wXaq" src="./import/img/line-7-34@2x.png" />
          <img className="line8-s1wXaq" src="./import/img/line-8-34@2x.png" />
          <img className="line9-s1wXaq" src="./import/img/line-9-2@2x.png" />
          <img className="line10-s1wXaq" src="./import/img/line-10-34@2x.png" />
          <img className="line11-s1wXaq" src="./import/img/line-11-34@2x.png" />
          <img className="line12-s1wXaq" src="./import/img/line-12-2@2x.png" />
          <img className="line13-s1wXaq" src="./import/img/line-13-2@2x.png" />
          <img className="path71-s1wXaq" src="./import/img/path-71-34@2x.png" />
          <img className="line15-s1wXaq" src="./import/img/line-15-34@2x.png" />
        </div>
        <img className="rectangle-gDss6T" src="./import/img/rectangle-15@1x.png" />
      </div>
      <div className="a-new-way-to-enjoy-q-C61RwL dmsans-bold-baltic-sea-40px">Member Development</div>
      <p className="cras-semper-auctor-a-C61RwL dmsans-normal-trout-16px">
        Members only coursework, discussion groups and guest lectures by globally recognized thought leaders provides our MPower members…
      </p>
      <Link to="mpower">
        <div className="frame-2-C61RwL border-1px-royal-blue">
          <div className="font-gUEd1c valign-text-middle dmsans-bold-royal-blue-16px">LEARN MORE</div>
          <div className="icarrow-gUEd1c"><img className="vector-k3EWGx" src="./import/img/vector-399@2x.png" /></div>
        </div>
      </Link>
      <div className="frame-36-C61RwL">
        <img className="rectangle-vwAkId" src="./import/img/rectangle-16@1x.png" />
        <div className="group-2-vwAkId">
          <img className="line7-VT4Y09" src="./import/img/line-7-3@2x.png" />
          <img className="line8-VT4Y09" src="./import/img/line-8-35@2x.png" />
          <img className="line9-VT4Y09" src="./import/img/line-9-3@2x.png" />
          <img className="line10-VT4Y09" src="./import/img/line-10-35@2x.png" />
          <img className="line11-VT4Y09" src="./import/img/line-11-35@2x.png" />
          <img className="line12-VT4Y09" src="./import/img/line-12-3@2x.png" />
          <img className="line13-VT4Y09" src="./import/img/line-13-3@2x.png" />
          <img className="path71-VT4Y09" src="./import/img/path-71-35@2x.png" />
          <img className="line15-VT4Y09" src="./import/img/line-15-35@2x.png" />
        </div>
        <img className="rectangle-Xtrsix" src="./import/img/rectangle-17@1x.png" />
      </div>
      <div className="a-new-way-to-enjoy-q-VMr6Om dmsans-bold-baltic-sea-40px">Career Opportunities</div>
      <p className="cras-semper-auctor-a-VMr6Om dmsans-normal-trout-16px">
        Through use of the MPower platform and comprehensive services to support diverse and inclusive workforces,
        hiring organizations will have…
      </p>
      <Link to="company">
        <div className="frame-2-VMr6Om border-1px-royal-blue">
          <div className="font-yi3KLE valign-text-middle dmsans-bold-royal-blue-16px">LEARN MORE</div>
          <div className="icarrow-yi3KLE"><img className="vector-2khw5A" src="./import/img/vector-399@2x.png" /></div>
        </div>
      </Link>
      {/* <div className="footer-C61RwL">
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <div className="inputs-default-iPe1yZ">
          <div className="input-4j1ImY">
            <div className="style-urJPUx border-1px-celeste"></div>
          </div>
          <input
            className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
            name="placeholder"
            placeholder="Your email"
            type="email"
            required
          />
        </div>
        <div className="default-text-iPe1yZ">
          <div className="button-TQGk14">
            <div className="style-BFaroP"></div>
          </div>
          <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
        </div>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src="./import/img/vector-449@2x.png" />
          <div className="group-gq7idq">
            <div className="group-xN3oHm">
              <img className="vector-WKOVL0" src="./import/img/vector-450@2x.png" />
              <img className="vector-4XLMSW" src="./import/img/vector-314@2x.png" />
            </div>
            <div className="group-ZoK5l8">
              <img className="vector-csiNyy" src="./import/img/vector-315@2x.png" />
              <img className="vector-xzqitv" src="./import/img/vector-316@2x.png" />
            </div>
            <div className="group-jADPbL">
              <img className="vector-xo2QOx" src="./import/img/vector-607@2x.png" />
              <img className="vector-lhrxUR" src="./import/img/vector-407@2x.png" />
            </div>
            <div className="group-L45nrx">
              <img className="vector-zWAipv" src="./import/img/vector-319@2x.png" />
              <img className="vector-uegk7N" src="./import/img/vector-320@2x.png" />
            </div>
            <div className="group-ghDc13">
              <img className="vector-tfmt7z" src="./import/img/vector-458@2x.png" />
              <img className="vector-UAn0es" src="./import/img/vector-322@2x.png" />
            </div>
            <div className="group-oESVxa">
              <img className="vector-yvB1rm" src="./import/img/vector-323@2x.png" />
              <img className="vector-kvXLTM" src="./import/img/vector-324@2x.png" />
            </div>
            <div className="group-Z4Q2gf">
              <img className="vector-14PSPg" src="./import/img/vector-325@2x.png" />
              <img className="vector-mimJP3" src="./import/img/vector-326@2x.png" />
            </div>
            <div className="group-C2bwuM">
              <img className="vector-asI5Gv" src="./import/img/vector-327@2x.png" />
              <img className="vector-3vMHWQ" src="./import/img/vector-328@2x.png" />
            </div>
            <div className="group-dSoAuk">
              <img className="vector-ivudWw" src="./import/img/vector-418@2x.png" />
              <img className="vector-HfktG6" src="./import/img/vector-620@2x.png" />
            </div>
            <div className="group-E3FUlw">
              <img className="vector-P6Lrud" src="./import/img/vector-621@2x.png" />
              <img className="vector-VZfFMI" src="./import/img/vector-421@2x.png" />
            </div>
            <div className="group-fSlr8n">
              <img className="vector-wQ9dtN" src="./import/img/vector-333@2x.png" />
              <img className="vector-xdiaTp" src="./import/img/vector-624@2x.png" />
            </div>
            <div className="group-L3yGCY">
              <img className="vector-iHEkte" src="./import/img/vector-335@2x.png" />
              <img className="vector-AYMLEY" src="./import/img/vector-336@2x.png" />
            </div>
            <div className="group-jfVTVp">
              <img className="vector-w2x1U8" src="./import/img/vector-337@2x.png" />
              <img className="vector-xIDGpx" src="./import/img/vector-475@2x.png" />
            </div>
            <div className="group-xtvv0P">
              <img className="vector-Sg5Zvo" src="./import/img/vector-339@2x.png" />
              <img className="vector-4xxkxu" src="./import/img/vector-630@2x.png" />
            </div>
            <div className="group-Zxue1b">
              <img className="vector-6vvErL" src="./import/img/vector-341@2x.png" />
              <img className="vector-JKPtcT" src="./import/img/vector-342@2x.png" />
            </div>
            <div className="group-z7Nznm">
              <img className="vector-x59x0y" src="./import/img/vector-343@2x.png" />
              <img className="vector-wmsHOr" src="./import/img/vector-344@2x.png" />
            </div>
            <div className="group-0m9eLo">
              <img className="vector-uEr9pS" src="./import/img/vector-345@2x.png" />
              <img className="vector-XpPojO" src="./import/img/vector-346@2x.png" />
            </div>
            <div className="group-8Tmgnx">
              <img className="vector-Vc36K2" src="./import/img/vector-347@2x.png" />
              <img className="vector-tsghT1" src="./import/img/vector-348@2x.png" />
            </div>
            <div className="group-JFQ7j2">
              <img className="vector-ymx2TC" src="./import/img/vector-486@2x.png" />
              <img className="vector-IiDzdt" src="./import/img/vector-350@2x.png" />
            </div>
            <div className="group-wGLKcw">
              <img className="vector-IVutZP" src="./import/img/vector-351@2x.png" />
              <img className="vector-eZBsRv" src="./import/img/vector-352@2x.png" />
            </div>
          </div>
        </div>
        <p className="info-iPe1yZ dmsans-normal-white-14px">
          A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
        </p>
        <div className="rectangle-iPe1yZ"></div>
        <p className="copyright-2018-al-iPe1yZ dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <p className="copyright-2018-al-CMvW9s dmsans-normal-white-14px-2">
          <span className="span0-eEh521 dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-eEh521 dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-eEh521 dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <div className="frame-47-iPe1yZ">
          <div className="instagram-ER5pEj"><img className="combined-shape-a2OMEj" src="./import/img/combined-shape-5@2x.png" /></div>
          <div className="twitter-ER5pEj"><img className="path-g8wxqH" src="./import/img/path@2x.png" /></div>
          <div className="linkedin-1-ER5pEj"><img className="vector-H2IUZC" src="./import/img/vector-353@2x.png" /></div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
        </div>
      </div> */}
      <Footer breakpoint="mobile" />
      <NavMobile />
    </div>
   
  </Layout>
)

export default IndexPage
