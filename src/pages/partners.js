import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import NavDesktop from "../components/navDesktop"
// import NavTablet from "../components/navTablet"
// import NavMobile from "../components/navMobile"

//IMAGES
import bckrndShpsLft1x from "../import/img/backround-shapes-left@1x.png"
import pth7012x from "../import/img/path-70-1@2x.png"
import pth692x from "../import/img/path-69@2x.png"
import img351x from "../import/img/image-35@1x.png"
import ln742x from "../import/img/line-7-4@2x.png"
import ln842x from "../import/img/line-8-4@2x.png"
import ln942x from "../import/img/line-9-4@2x.png"
import ln1042x from "../import/img/line-10-4@2x.png"
import ln1142x from  "../import/img/line-11-4@2x.png"
import ln1242x from "../import/img/line-12-4@2x.png"
import ln1342x from "../import/img/line-13-4@2x.png"
import pth7142x from "../import/img/path-71-4@2x.png"
import ln1542x from "../import/img/line-15-4@2x.png"
import vctr902x from "../import/img/vector-90@2x.png"
import ln752x from "../import/img/line-7-5@2x.png"
import ln852x from "../import/img/line-8-5@2x.png"
import ln952x from "../import/img/line-9-5@2x.png"
import ln1052x from "../import/img/line-10-5@2x.png"
import ln1152x from "../import/img/line-11-5@2x.png"
import ln1252x from "../import/img/line-12-5@2x.png"
import ln1352x from "../import/img/line-13-5@2x.png"
import pth7152x from "../import/img/path-71-5@2x.png"
import ln1552x from "../import/img/line-15-5@2x.png"
import vctr912x from "../import/img/vector-91@2x.png"
import cmbndShps2x from "../import/img/combined-shape@2x.png"
import pth2x from "../import/img/path@2x.png"
import vctr462x from "../import/img/vector-46@2x.png"
import vctr472x from "../import/img/footer-logo-desktop.png"
import vctr942x from "../import/img/vector-94@2x.png"
import vctr952x from "../import/img/vector-95@2x.png"
import vctr502x from "../import/img/vector-50@2x.png"
import vctr512x from "../import/img/vector-51@2x.png"
import vctr982x from "../import/img/vector-98@2x.png"
import vctor992x from "../import/img/vector-99@2x.png"
import vctr542x from "../import/img/vector-54@2x.png"
import vctr1012x from "../import/img/vector-101@2x.png"
import vctr1022x from "../import/img/vector-102@2x.png"
import vctr1032x from "../import/img/vector-103@2x.png"
import vctr592x from "../import/img/vector-59@2x.png"
import vctr602x from "../import/img/vector-60@2x.png"
import vctr612x from "../import/img/vector-61@2x.png"
import vctr1082x from "../import/img/vector-108@2x.png"
import vctr1092x from "../import/img/vector-109@2x.png"
import vctr642x from "../import/img/vector-64@2x.png"
import vctr1112x from "../import/img/vector-111@2x.png"
import vctr662x from "../import/img/vector-66@2x.png"
import vctor1132x from "../import/img/vector-113@2x.png"
import vctr1142x from "../import/img/vector-114@2x.png"
import vctor1152x from  "../import/img/vector-115@2x.png"
import vctr702x from "../import/img/vector-70@2x.png"
import vctr212x from "../import/img/vector-71@2x.png"
import vctr722x from "../import/img/vector-72@2x.png"
import vctr1192x from "../import/img/vector-119@2x.png"
import vctr1202x from "../import/img/vector-120@2x.png"
import vctr1212x from "../import/img/vector-121@2x.png"
import vctr762x from "../import/img/vector-76@2x.png"
import vctr772x from "../import/img/vector-77@2x.png"
import vctr782x from "../import/img/vector-78@2x.png"
import vctr792x from "../import/img/vector-79@2x.png"
import vctr1262x from "../import/img/vector-126@2x.png"
import vctr1272x from "../import/img/vector-127@2x.png"
import vctr822x from "../import/img/vector-82@2x.png"
import vctr1292x from "../import/img/vector-129@2x.png"
import vctr1302x from "../import/img/vector-130@2x.png"
import vctr1312x from "../import/img/vector-131@2x.png"
import vctr1322x from "../import/img/vector-132@2x.png"
import vctr1332x from "../import/img/vector-133@2x.png"
import img3512x from "../import/img/image-35-1@2x.png"
import ln8472x from "../import/img/line-8-47@2x.png"
import ln9472x from "../import/img/line-9-47@2x.png"
import ln10472x from "../import/img/line-10-47@2x.png"
import ln11472x from "../import/img/line-11-47@2x.png"
import ln12472x from "../import/img/line-12-47@2x.png"
import ln13472x from "../import/img/line-13-47@2x.png"
import pth71472x from "../import/img/path-71-47@2x.png"
import ln15472x from "../import/img/line-15-47@2x.png"
import ln7482x from "../import/img/line-7-48@2x.png"
import ln8482x from "../import/img/line-8-48@2x.png"
import ln9482x from "../import/img/line-9-48@2x.png"
import ln10482x from "../import/img/line-10-48@2x.png"
import ln11482x from "../import/img/line-11-48@2x.png"
import ln12482x from "../import/img/line-12-48@2x.png"
import ln13482x from "../import/img/line-13-48@2x.png"
import pth71482x from "../import/img/path-71-48@2x.png"
import ln15482x from "../import/img/line-15-48@2x.png"
import vctr4492x from "../import/img/footer-logo-desktop.png"
import vctr8262x from "../import/img/vector-826@2x.png"
import vctr8272x from "../import/img/vector-827@2x.png"
import vctr3152x from "../import/img/vector-315@2x.png"
import vctr8292x from "../import/img/vector-829@2x.png"
import vctr6072x from "../import/img/vector-607@2x.png"
import vctr8312x from "../import/img/vector-831@2x.png"
import vctr3192x from "../import/img/vector-319@2x.png"
import vctr8332x from "../import/img/vector-833@2x.png"
import vctr8342x from "../import/img/vector-834@2x.png"
import vctr8352x from "../import/img/vector-835@2x.png"
import vctr3232x from "../import/img/vector-323@2x.png"
import vctr8372x from "../import/img/vector-837@2x.png"
import vctr8382x from "../import/img/vector-838@2x.png"
import vctr8392x from "../import/img/vector-839@2x.png"
import vctr8402x from "../import/img/vector-840@2x.png"
import vctr8412x from "../import/img/vector-841@2x.png"
import vctr8422x from "../import/img/vector-842@2x.png"
import vctr8432x from "../import/img/vector-843@2x.png"
import vctr3312x from "../import/img/vector-331@2x.png"
import vctr3322x from "../import/img/vector-332@2x.png"
import vctr8462x from "../import/img/vector-846@2x.png"
import vctr8472x from "../import/img/vector-847@2x.png"
import vctr3352x from "../import/img/vector-335@2x.png"
import vctr3362x from "../import/img/vector-336@2x.png"
import vctr8502x from "../import/img/vector-850@2x.png"
import vctr8512x from "../import/img/vector-851@2x.png"
import vctr8522x from "../import/img/vector-852@2x.png"
import vctr8532x from "../import/img/vector-853@2x.png"
import vctr3412x from "../import/img/vector-341@2x.png"
import vctr3422x from "../import/img/vector-342@2x.png"
import vctr8562x from "../import/img/vector-856@2x.png"
import vctr8572x from "../import/img/vector-857@2x.png"
import vctr8582x from "../import/img/vector-858@2x.png"
import vctr8592x from "../import/img/vector-859@2x.png"
import vctr3472x from "../import/img/vector-347@2x.png"
import vctr8612x from "../import/img/vector-861@2x.png"
import vctr8622x from "../import/img/vector-862@2x.png"
import vctr8632x from "../import/img/vector-863@2x.png"
import vctr8642x from "../import/img/vector-864@2x.png"
import vctr8652x from "../import/img/vector-865@2x.png"
import cmbndShp52x from "../import/img/combined-shape-5@2x.png"
import vctr3532x from "../import/img/vector-353@2x.png"
import img3521x from "../import/img/image-35-2@1x.png"
import ln7492x from "../import/img/line-7-49@2x.png"
import ln9492x from "../import/img/line-9-49@2x.png"
import ln7502x from "../import/img/line-7-50@2x.png"
import img3532x from "../import/img/image-35-3@2x.png"
import ln7512x from "../import/img/line-7-51@2x.png"
import ln8512x from "../import/img/line-8-51@2x.png"
import ln11512x from "../import/img/line-11-51@2x.png"
import ln12512x from "../import/img/line-12-51@2x.png"
import ln13512x from "../import/img/line-13-51@2x.png"
import ln15512x from "../import/img/line-15-51@2x.png"
import vctr3992x from "../import/img/vector-399@2x.png"
import ln8522x from "../import/img/line-8-52@2x.png"
import ln10522x from "../import/img/line-10-52@2x.png"
import ln12522x from "../import/img/line-12-52@2x.png"
import pth71522x from "../import/img/path-71-52@2x.png"
import ln15522x from "../import/img/line-15-52@2x.png"
import vctr9582x from "../import/img/vector-958@2x.png"


const Partners = () => (
  <Layout>
    <Seo title="Partners" />
    <input type="hidden" id="anPageName" name="page" value="partnerships-desktop-1440px" />
    <div className="partnerships-desktop-1440px screen">
      <div className="frame-59-C61RwL">
        <img className="backroundshapesleft-lF35ZC" src={bckrndShpsLft1x} />
        <div className="rectangle-8-lF35ZC"></div>
        <div className="we-create-design-lF35ZC dmsans-bold-baltic-sea-62px">Partner with M2N</div>
        <p className="m2-n-is-buildin-m-powerplatform-lF35ZC dmsans-normal-big-stone-16px">
          M2N is building relationships to help achieve true and equal employment opportunity workplaces through
          the MPower platform.
        </p>
        <div className="frame-58-lF35ZC">
          <img className="path70-sAVzwA" src={pth7012x} />
          <img className="path69-sAVzwA" src={pth692x} />
          <img className="image-35-sAVzwA" src={img351x} />
        </div>
      </div>
      <div className="frame-14-C61RwL">
        <div className="group-1-zMcl5Z">
          <img className="line7-dCd5Ba" src={ln742x} />
          <img className="line8-dCd5Ba" src={ln842x} />
          <img className="line9-dCd5Ba" src={ln942x} />
          <img className="line10-dCd5Ba" src={ln1042x} />
          <img className="line11-dCd5Ba" src={ln1142x} />
          <img className="line12-dCd5Ba" src={ln1242x} />
          <img className="line13-dCd5Ba" src={ln1342x} />
          <img className="path71-dCd5Ba" src={pth7142x} />
          <img className="line15-dCd5Ba" src={ln1542x} />
        </div>
        <div className="frame-5-zMcl5Z">
          <p className="cras-semper-auctor-a-Kc7rZV dmsans-normal-trout-16px">
            Organizations and individuals dedicated to the work of empowering minority professionals to build
            content for MPower members.
          </p>
          <Link to="/contact-us">
            <div className="frame-2-Kc7rZV border-1px-royal-blue">
                <div className="font-HnucbF valign-text-middle dmsans-bold-royal-blue-16px">CONTACT US</div>
                <div className="icarrow-HnucbF"><img className="vector-Xz0fy5" src={vctr902x} /></div>
            </div>
          </Link>
          <div className="a-new-way-to-enjoy-q-Kc7rZV dmsans-bold-baltic-sea-32px">Content Provider Partners</div>
        </div>
        <div className="group-2-zMcl5Z">
          <img className="line7-SxtaxK" src={ln752x} />
          <img className="line8-SxtaxK" src={ln852x} />
          <img className="line9-SxtaxK" src={ln952x} />
          <img className="line10-SxtaxK" src={ln1052x} />
          <img className="line11-SxtaxK" src={ln1152x} />
          <img className="line12-SxtaxK" src={ln1252x} />
          <img className="line13-SxtaxK" src={ln1352x} />
          <img className="path71-SxtaxK" src={pth7152x} />
          <img className="line15-SxtaxK" src={ln1552x} />
        </div>
        <div className="frame-6-zMcl5Z">
          <p className="cras-semper-auctor-a-MhUqEY dmsans-normal-trout-16px">
            Organizations committed to a comprehensive approach to Diversity, Equity, and Inclusion &amp; hiring MPower members.
          </p>
          <Link to="/contact-us">
            <div className="frame-2-MhUqEY border-1px-persimmon">
                <div className="font-vFmZQx valign-text-middle dmsans-bold-persimmon-16px">CONTACT US</div>
                <div className="icarrow-vFmZQx"><img className="vector-IxiB1K" src={vctr912x} /></div>
            </div>
          </Link>
          <div className="a-new-way-to-enjoy-q-MhUqEY dmsans-bold-baltic-sea-32px">Corporate Partners</div>
        </div>
      </div>
      {/* <div className="footer-desktop-C61RwL">
        <div className="icongroup-VNfvnu">
          <div className="instagram-5R3sf4"><img className="combined-shape-TnWo79" src={cmbndShps2x} /></div>
          <div className="twitter-5R3sf4"><img className="path-4KRaeG" src={pth2x} /></div>
          <div className="linkedin-5R3sf4"><img className="vector-pXCSGN" src={vctr462x} /></div>
        </div>
        <p className="terms-and-conditions-i15441492-VNfvnu dmsans-normal-white-14px-2">
          <span className="span0-diBEwW dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-diBEwW dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-diBEwW dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <p className="company-i15441491-VNfvnu dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <div className="divider-VNfvnu"></div>
        <div className="newslettersignup-VNfvnu">
          <div className="newsletter-i15441499-vxY8x4 sourcesanspro-bold-white-16px">Newsletter</div>
          <form action="">
            <div className="input-default-vxY8x4">
              <div className="input-GVqwCV border-1px-celeste"></div>
              <input
                className="placeholder-i15441503-GVqwCV dmsans-normal-gunsmoke-16px"
                name="email"
                placeholder="Your email"
                type="email"
                required
                />
            </div>
            <div className="default-text-vxY8x4 smart-layers-pointers">
              <div className="font-i15441507-kEobNx sourcesanspro-bold-white-16px">Subscribe</div>
            </div>
            <div className="button-primary-desktop-vxY8x4">
              <div className="font-i1544129778-U7FTmp valign-text-middle dmsans-bold-white-14px">SUBSCRIBE</div>
            </div>
            <input className="default-text-vxY8x4 sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
          </form>
        </div>
        <div className="column3-VNfvnu">
          <div className="platform-r3WsSG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-r3WsSG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-r3WsSG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-r3WsSG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
        <div className="column2-VNfvnu">
          <div className="about-aRtUZh dmsans-bold-white-16px">
              <span className="span0-WJpm5A dmsans-bold-white-16px">About</span
              ><span className="span1-WJpm5A dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-aRtUZh dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-aRtUZh dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-aRtUZh dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
        <div className="column1-VNfvnu">
          <Link to="/">
            <div className="logo-dewRqW">
              <img className="vector-ouSEQ4" src={vctr472x} />
            </div>
          </Link>
          <p className="aboutblurb-i15441487-dewRqW dmsans-normal-white-14px">
            A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
          </p>
        </div>
      </div> */}
      {/* <div className="navbar-desktop-C61RwL">
        <div className="buttonrow-HPBo1Y">
          <div className="b5-Wfh8x7 dmsans-bold-gunsmoke-14px-2">LOG IN</div>
          <div className="button-primary-desktop-Wfh8x7">
            <div className="font-eo3nRY valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
          </div>
        </div>
        <div className="frame-HPBo1Y"><img className="vector-azHmrH" src="./import/img/vector-88@2x.png" /></div>
        <div className="frame-15-HPBo1Y">
          <div className="navitem-hover-S6Kvjz">
            <div className="textframe-VBTaE4"><div className="b1-jxM0bb dmsans-bold-baltic-sea-14px">HOME</div></div>
            <div className="indicator-VBTaE4 smart-layers-pointers"></div>
          </div>
          <div className="navitem-default-S6Kvjz">
            <div className="textframe-FdqQMQ"><div className="b1-EnImxV dmsans-bold-gunsmoke-14px">MPOWER</div></div>
            <div className="indicator-FdqQMQ"></div>
          </div>
          <div className="navitem-default-df9eD3">
            <div className="textframe-Eg20wO"><div className="b3-kHiIGi dmsans-bold-gunsmoke-14px">COMPANY</div></div>
            <div className="indicator-Eg20wO"></div>
          </div>
          <div className="navitem-default-OUMgDx">
            <div className="textframe-udu9xB"><div className="b4-vpgDzt dmsans-bold-gunsmoke-14px">PARTNERS</div></div>
            <div className="indicator-udu9xB"></div>
          </div>
        </div>
      </div> */}
      {/* <NavDesktop /> */}
    </div>
    <div className="partnerships-desktop-1024px screen">
      {/* <div className="navbar-tablet-C61RwL">
        <div className="buttonrow-Xq4ViJ">
          <div className="b5-DkfaGf dmsans-bold-gunsmoke-14px-2">LOG IN</div>
          <div className="button-primary-desktop-DkfaGf">
            <div className="font-GrCJVF valign-text-middle dmsans-bold-white-14px">SIGN UP</div>
          </div>
        </div>
        <div className="logo-Xq4ViJ"><img className="vector-paUNwS" src="./import/img/vector-735@2x.png" /></div>
        <div className="navlinks-Xq4ViJ">
          <div className="navitem-hover-VcMpYN">
            <div className="textframe-x0oTG4"><div className="b1-qVUPyA dmsans-bold-baltic-sea-14px">HOME</div></div>
            <div className="indicator-x0oTG4 smart-layers-pointers"></div>
          </div>
          <div className="navitem-default-VcMpYN">
            <div className="textframe-XIn0T6"><div className="b1-pTXg1E dmsans-bold-gunsmoke-14px">MPOWER</div></div>
            <div className="indicator-XIn0T6"></div>
          </div>
          <div className="navitem-default-h3NML7">
            <div className="textframe-HffetE"><div className="b3-poT6nI dmsans-bold-gunsmoke-14px">COMPANY</div></div>
            <div className="indicator-HffetE"></div>
          </div>
          <div className="navitem-default-jBtke6">
            <div className="textframe-sUuHDU"><div className="b4-xtuTw9 dmsans-bold-gunsmoke-14px">PARTNERS</div></div>
            <div className="indicator-sUuHDU"></div>
          </div>
        </div>
      </div> */}
      {/* <NavTablet /> */}
      <div className="frame-59-C61RwL">
        <img className="backroundshapesleft-lF35ZC" src={bckrndShpsLft1x} />
        <div className="group-586-lF35ZC">
          <div className="rectangle-8-F3lV3D"></div>
        </div>
        <div className="we-create-design-lF35ZC dmsans-bold-baltic-sea-62px">Partner with M2N</div>
        <p className="m2-n-is-buildin-m-powerplatform-lF35ZC dmsans-normal-big-stone-16px">
          M2N is building relationships to help achieve true and equal employment opportunity workplaces through
          the MPower platform.
        </p>
        <div className="frame-58-lF35ZC">
          <img className="path70-sAVzwA" src={pth7012x} />
          <img className="path69-sAVzwA" src={pth692x} />
          <img className="image-35-sAVzwA" src={img3512x} />
        </div>
      </div>
      <div className="frame-14-C61RwL">
        <div className="group-1-zMcl5Z">
          <img className="line7-dCd5Ba" src={ln742x} />
          <img className="line8-dCd5Ba" src={ln8472x} />
          <img className="line9-dCd5Ba" src={ln9472x} />
          <img className="line10-dCd5Ba" src={ln10472x} />
          <img className="line11-dCd5Ba" src={ln11472x} />
          <img className="line12-dCd5Ba" src={ln12472x} />
          <img className="line13-dCd5Ba" src={ln13472x} />
          <img className="path71-dCd5Ba" src={pth71472x} />
          <img className="line15-dCd5Ba" src={ln15472x} />
        </div>
        <div className="frame-5-zMcl5Z">
          <p className="cras-semper-auctor-a-Kc7rZV dmsans-normal-trout-16px">
            Organizations and individuals dedicated to the work of empowering minority professionals to build
            content for MPower members.
          </p>
          <Link to="/contact-us">
            <div className="frame-2-Kc7rZV border-1px-royal-blue">
                <div className="font-HnucbF valign-text-middle dmsans-bold-royal-blue-16px">CONTACT US</div>
                <div className="icarrow-HnucbF"><img className="vector-Xz0fy5" src={vctr902x} /></div>
            </div>
          </Link>
          <div className="a-new-way-to-enjoy-q-Kc7rZV dmsans-bold-baltic-sea-32px">Content Provider Partners</div>
        </div>
        <div className="group-2-zMcl5Z">
          <img className="line7-SxtaxK" src={ln7482x} />
          <img className="line8-SxtaxK" src={ln8482x} />
          <img className="line9-SxtaxK" src={ln9482x} />
          <img className="line10-SxtaxK" src={ln10482x} />
          <img className="line11-SxtaxK" src={ln11482x} />
          <img className="line12-SxtaxK" src={ln12482x} />
          <img className="line13-SxtaxK" src={ln13482x} />
          <img className="path71-SxtaxK" src={pth71482x} />
          <img className="line15-SxtaxK" src={ln15482x} />
        </div>
        <div className="frame-6-zMcl5Z">
          <p className="cras-semper-auctor-a-MhUqEY dmsans-normal-trout-16px">
            Organizations committed to a comprehensive approach to Diversity, Equity, and Inclusion &amp; hiring MPower members.
          </p>
          <Link to="/contact-us">
            <div className="frame-2-MhUqEY border-1px-persimmon">
                <div className="font-vFmZQx valign-text-middle dmsans-bold-persimmon-16px">CONTACT US</div>
                <div className="icarrow-vFmZQx"><img className="vector-IxiB1K" src={vctr912x} /></div>
            </div>
          </Link>
          <div className="a-new-way-to-enjoy-q-MhUqEY dmsans-bold-baltic-sea-32px">Corporate Partners</div>
        </div>
      </div>
      {/* <div className="footer-C61RwL">
        <div className="background-iPe1yZ"></div>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr4492x} />
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
          <div className="instagram-hamoIG"><img className="combined-shape-Kjvr2X" src={cmbndShp52x} /></div>
          <div className="twitter-hamoIG"><img className="path-jPphH2" src={pth2x} /></div>
          <div className="linkedin-1-hamoIG"><img className="vector-YIAmW9" src={vctr3532x} /></div>
        </div>
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
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
          <input className="default-text-iPe1yZ sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
      </div> */}
    </div>
    <div className="partnerships-tablet-720px screen">
        {/* <NavMobile /> */}
      {/* <div className="navbar-mobile-C61RwL">
        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-494@2x.png" /></div>
        <div className="menu24px-gTO9GM">
          <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
        </div>
      </div>
      <div className="navbar-mobile-VMr6Om">
        <div className="logo-8x5SRt"><img className="vector-Ztm0bx" src="./import/img/vector-443@2x.png" /></div>
        <div className="menu24px-8x5SRt">
          <img className="iconnavigationmenu24px-BAyIoO" src="./import/img/icon-navigation-menu-24px@2x.png" />
        </div>
      </div> */}
      {/* <div className="footer-C61RwL">
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
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
          <input className="default-text-iPe1yZ sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr4492x} />
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
          <div className="instagram-ER5pEj"><img className="combined-shape-a2OMEj" src={cmbndShp52x} /></div>
          <div className="twitter-ER5pEj"><img className="path-g8wxqH" src={pth2x} /></div>
          <div className="linkedin-1-ER5pEj"><img className="vector-H2IUZC" src={vctr3532x} /></div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
      </div> */}
      <div className="frame-59-C61RwL">
        <img className="backroundshapesleft-lF35ZC" src={bckrndShpsLft1x} />
        <div className="rectangle-8-lF35ZC"></div>
        <div className="we-create-design-lF35ZC dmsans-bold-baltic-sea-40px">Partner with M2N</div>
        <p className="m2-n-is-buildin-m-powerplatform-lF35ZC dmsans-normal-big-stone-16px">
          M2N is building relationships to help achieve true and equal employment opportunity workplaces through
          the MPower platform.
        </p>
        <div className="frame-58-lF35ZC">
          <img className="path70-sAVzwA" src={pth7012x} />
          <img className="path69-sAVzwA" src={pth692x} />
          <img className="image-35-sAVzwA" src={img3521x} />
        </div>
      </div>
      <div className="frame-14-C61RwL">
        <div className="group-1-zMcl5Z">
          <img className="line7-dCd5Ba" src={ln7492x} />
          <img className="line8-dCd5Ba" src={ln8472x} />
          <img className="line9-dCd5Ba" src={ln9492x} />
          <img className="line10-dCd5Ba" src={ln10472x} />
          <img className="line11-dCd5Ba" src={ln11472x} />
          <img className="line12-dCd5Ba" src={ln12472x} />
          <img className="line13-dCd5Ba" src={ln13472x} />
          <img className="path71-dCd5Ba" src={pth71472x} />
          <img className="line15-dCd5Ba" src={ln15472x} />
        </div>
        <div className="frame-5-zMcl5Z">
          <p className="cras-semper-auctor-a-Kc7rZV dmsans-normal-trout-16px">
            Organizations and individuals dedicated to the work of empowering minority professionals to build
            content for MPower members.
          </p>
          <Link to="/contact-us">
            <div className="frame-2-Kc7rZV border-1px-royal-blue">
                <div className="font-HnucbF valign-text-middle dmsans-bold-royal-blue-16px">CONTACT US</div>
                <div className="icarrow-HnucbF"><img className="vector-Xz0fy5" src={vctr902x} /></div>
            </div>
          </Link>
          <div className="a-new-way-to-enjoy-q-Kc7rZV dmsans-bold-baltic-sea-32px">Content Provider Partners</div>
        </div>
        <div className="group-2-zMcl5Z">
          <img className="line7-SxtaxK" src={ln7502x} />
          <img className="line8-SxtaxK" src={ln8482x} />
          <img className="line9-SxtaxK" src={ln9482x} />
          <img className="line10-SxtaxK" src={ln10482x} />
          <img className="line11-SxtaxK" src={ln11482x} />
          <img className="line12-SxtaxK" src={ln12482x} />
          <img className="line13-SxtaxK" src={ln13482x} />
          <img className="path71-SxtaxK" src={pth71482x} />
          <img className="line15-SxtaxK" src={ln15482x} />
        </div>
        <div className="frame-6-zMcl5Z">
          <p className="cras-semper-auctor-a-MhUqEY dmsans-normal-trout-16px">
            Organizations committed to a comprehensive approach to Diversity, Equity, and Inclusion &amp; hiring MPower members.
          </p>
          <Link to="/contact-us">
            <div className="frame-2-MhUqEY border-1px-persimmon">
                <div className="font-vFmZQx valign-text-middle dmsans-bold-persimmon-16px">CONTACT US</div>
                <div className="icarrow-vFmZQx"><img className="vector-IxiB1K" src={vctr912x} /></div>
            </div>
          </Link>
          <div className="a-new-way-to-enjoy-q-MhUqEY dmsans-bold-baltic-sea-32px">Corporate Partners</div>
        </div>
      </div>
    </div>
    <div className="partnerships-mobile-320px screen">
        {/* <NavMobile /> */}
      {/* <div className="navbar-mobile-C61RwL">
        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-494@2x.png" /></div>
        <div className="menu24px-gTO9GM">
          <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
        </div>
      </div> */}
      {/* <div className="footer-C61RwL">
        <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
        <form action="">
          <div className="inputs-default-iPe1yZ">
            <div className="input-4j1ImY">
              <div className="style-urJPUx border-1px-celeste"></div>
            </div>
            <input
              className="placeholder-4j1ImY dmsans-normal-gunsmoke-16px"
              name="email"
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
          <input className="default-text-iPe1yZ sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
        </form>
        <div className="frame-iPe1yZ">
          <img className="vector-gq7idq" src={vctr4492x} />
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
          <div className="instagram-ER5pEj"><img className="combined-shape-a2OMEj" src={cmbndShp52x} /></div>
          <div className="twitter-ER5pEj"><img className="path-g8wxqH" src={pth2x} /></div>
          <div className="linkedin-1-ER5pEj"><img className="vector-H2IUZC" src={vctr3532x} /></div>
        </div>
        <div className="column2-iPe1yZ">
          <div className="about-S164Qk dmsans-bold-white-16px">
            <span className="span0-HtUoHN dmsans-bold-white-16px">About</span
            ><span className="span1-HtUoHN dmsans-normal-white-16px-2"><br /></span>
          </div>
          <Link to="/mpower">
              <div className="mpower-S164Qk dmsans-normal-white-16px">MPower</div>
          </Link>
          <Link to="/partners">
              <div className="partnerships-S164Qk dmsans-normal-white-16px">Partnerships</div>
          </Link>
          <Link to="/company">
              <div className="company-S164Qk dmsans-normal-white-16px">Company</div>
          </Link>
        </div>
        <div className="column3-iPe1yZ">
          <div className="platform-X4QSxG dmsans-bold-white-16px">Platform</div>
          <Link to="/mpower-app">
              <div className="ios-X4QSxG dmsans-normal-white-16px">iOS</div>
          </Link>
          <Link to="/mpower-app">
              <div className="android-X4QSxG dmsans-normal-white-16px">Android</div>
          </Link>
          <Link to="/mpower-app">
              <div className="browser-X4QSxG dmsans-normal-white-16px">Browser</div>
          </Link>
        </div>
      </div> */}
      {/* <NavMobile /> */}
      {/* <div className="navbar-mobile-VMr6Om">
        <div className="logo-8x5SRt"><img className="vector-Ztm0bx" src="./import/img/vector-443@2x.png" /></div>
        <div className="menu24px-8x5SRt">
          <img className="iconnavigationmenu24px-BAyIoO" src="./import/img/icon-navigation-menu-24px@2x.png" />
        </div>
      </div> */}
      <div className="frame-59-C61RwL">
        <img className="backroundshapesleft-lF35ZC" src={bckrndShpsLft1x} />
        <div className="rectangle-8-lF35ZC"></div>
        <div className="we-create-design-lF35ZC dmsans-bold-baltic-sea-40px">Partner with M2N</div>
        <p className="m2-n-is-buildin-m-powerplatform-lF35ZC dmsans-normal-big-stone-16px">
          M2N is building relationships to help achieve true and equal employment opportunity workplaces through
          the MPower platform.
        </p>
        <div className="frame-58-lF35ZC">
          <img className="path70-sAVzwA" src={pth7012x} />
          <img className="path69-sAVzwA" src={pth692x} />
          <img className="image-35-sAVzwA" src={img3532x} />
        </div>
      </div>
      <div className="frame-14-C61RwL">
        <div className="group-1-zMcl5Z">
          <img className="line7-dCd5Ba" src={ln7512x} />
          <img className="line8-dCd5Ba" src={ln8512x} />
          <img className="line9-dCd5Ba" src={ln9492x} />
          <img className="line10-dCd5Ba" src={ln1042x} />
          <img className="line11-dCd5Ba" src={ln11512x} />
          <img className="line12-dCd5Ba" src={ln12512x} />
          <img className="line13-dCd5Ba" src={ln13512x} />
          <img className="path71-dCd5Ba" src={pth7142x} />
          <img className="line15-dCd5Ba" src={ln15512x} />
        </div>
        <div className="frame-5-zMcl5Z">
          <p className="cras-semper-auctor-a-Kc7rZV dmsans-normal-trout-16px">
            Organizations and individuals dedicated to the work of empowering minority professionals to build
            content for MPower members.
          </p>
          <Link to="/contact-us">
            <div className="frame-2-Kc7rZV border-1px-royal-blue">
                <div className="font-HnucbF valign-text-middle dmsans-bold-royal-blue-16px">CONTACT US</div>
                <div className="icarrow-HnucbF"><img className="vector-Xz0fy5" src={vctr3992x} /></div>
            </div>
          </Link>
          <div className="a-new-way-to-enjoy-q-Kc7rZV">Content Provider Partners</div>
        </div>
        <div className="group-2-zMcl5Z">
          <img className="line7-SxtaxK" src={ln7502x} />
          <img className="line8-SxtaxK" src={ln8522x} />
          <img className="line9-SxtaxK" src={ln9482x} />
          <img className="line10-SxtaxK" src={ln10522x} />
          <img className="line11-SxtaxK" src={ln11482x} />
          <img className="line12-SxtaxK" src={ln12522x} />
          <img className="line13-SxtaxK" src={ln13482x} />
          <img className="path71-SxtaxK" src={pth71522x} />
          <img className="line15-SxtaxK" src={ln15522x} />
        </div>
        <div className="frame-6-zMcl5Z">
          <p className="cras-semper-auctor-a-MhUqEY dmsans-normal-trout-16px">
            Organizations committed to a comprehensive approach to Diversity, Equity, and Inclusion &amp; hiring MPower members.
          </p>
          <Link to="/contact-us">
            <div className="frame-2-MhUqEY border-1px-persimmon">
                <div className="font-vFmZQx valign-text-middle dmsans-bold-persimmon-16px">CONTACT US</div>
                <div className="icarrow-vFmZQx"><img className="vector-IxiB1K" src={vctr9582x} /></div>
            </div>
          </Link>
          <div className="a-new-way-to-enjoy-q-MhUqEY">Corporate Partners</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Partners
