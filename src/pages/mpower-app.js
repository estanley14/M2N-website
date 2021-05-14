import React, { useState } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavDesktop from "../components/navDesktop"
import NavTablet from "../components/navTablet"
import NavMobile from "../components/navMobile"
import EmailModal from "../components/emailModal"

// IMAGES
import bg11x from "../import/img/bg-1@1x.png"
import vctr5372x from "../import/img/vector-537@2x.png"
import sbtrct12x from "../import/img/subtract-10@2x.png"
import elpse7302x from "../import/img/ellipse-7-30@2x.png"
import elpse8302x from "../import/img/ellipse-8-30@2x.png"
import elpse7312x from "../import/img/ellipse-7-31@2x.png"
import elpse8312x from "../import/img/ellipse-8-31@2x.png"
import elpse7322x from "../import/img/ellipse-7-32@2x.png"
import elpse8322x from "../import/img/ellipse-8-32@2x.png"
import mckps131x from "../import/img/mockups-1-3@1x.png"
import elpse802x from "../import/img/ellipse-80@2x.png"
import elpse812x from "../import/img/ellipse-81@2x.png"
import elpse822x from "../import/img/ellipse-82@2x.png"
import elpse742x from "../import/img/ellipse-74@2x.png"
import rctgnl7722x from "../import/img/rectangle-772@2x.png"
import rctgnl7732x from "../import/img/rectangle-773@2x.png"
import rctngl7742x from "../import/img/rectangle-774@2x.png"
import rctngl7752x from "../import/img/rectangle-775@2x.png"
import rctngl7762x from "../import/img/rectangle-776@2x.png"
import vctr5382x from "../import/img/vector-538@2x.png"
import sbtrct112x from "../import/img/subtract-11@2x.png"
import objct61x from "../import/img/object-6@1x.png"
import chngClr1x from "../import/img/change-color@1x.png"
import shdw1x from "../import/img/shadow@1x.png"
import scrn121x from "../import/img/screen-12@1x.png"
import mckp62x from "../import/img/mockup-6@2x.png"
import brdr61x from "../import/img/border-6@1x.png"
import objct12x from "../import/img/object-1@2x.png"
import chngClr72x from "../import/img/change-color-7@2x.png"
import shdw12x from "../import/img/shadow-1@2x.png"
import scrn32x from "../import/img/screen-3@2x.png"
import mckp72x from "../import/img/mockup-7@2x.png"
import brdr12x from "../import/img/border-1@2x.png"
import shpsAndSymbls12x from "../import/img/shapes-and-symbols--1-@2x.png"
import mckp82x from "../import/img/mockup-8@2x.png"
import mckp92x from "../import/img/mockup-9@2x.png"
import vctr5412x from "../import/img/vector-541@2x.png"
import cmbndShp92x from "../import/img/combined-shape-9@2x.png"
import vctr5392x from "../import/img/vector-539@2x.png"
import vctr5402x from "../import/img/vector-540@2x.png"
import vctr5422x from "../import/img/vector-542@2x.png"
import vctr5432x from "../import/img/vector-543@2x.png"
import vctr5442x from "../import/img/vector-544@2x.png"
import vctr5452x from "../import/img/vector-545@2x.png"
import vctr5462x from "../import/img/vector-546@2x.png"
import vctr5472x from "../import/img/vector-547@2x.png"
import vctr5482x from "../import/img/vector-548@2x.png"
import vctr5492x from "../import/img/vector-549@2x.png"
import vctr5502x from "../import/img/vector-550@2x.png"
import vctr5512x from "../import/img/vector-551@2x.png"
import vctr5522x from "../import/img/vector-552@2x.png"
import vctr5532x from "../import/img/vector-553@2x.png"
import vctr5542x from "../import/img/vector-554@2x.png"
import vctr5552x from "../import/img/vector-555@2x.png"
import phn62x from "../import/img/phone-6@2x.png"
import scrn162x from "../import/img/screen-16@2x.png"
import glss62x from "../import/img/glass-6@2x.png"
import clrDdge62x from "../import/img/color-dodge-6@2x.png"
import ovrShdw32x from "../import/img/over-shadow-3@2x.png"
import phn132x from "../import/img/phone-13@2x.png"
import phn72x from "../import/img/phone-7@2x.png"
import scrn172x from "../import/img/screen-17@2x.png"
import glss72x from "../import/img/glass-7@2x.png"
import clrDdg72x from "../import/img/color-dodge-7@2x.png"
import bg1x from "../import/img/bg@1x.png"
import d0412x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041@2x.png"
import d04122x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-2@2x.png"
import d04232x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-3@2x.png"
import d04142x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-4@2x.png"
import d04152x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-5@2x.png"
import d04162x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-6@2x.png"
import d04172x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-7@2x.png"
import vctr5562x from "../import/img/vector-556@2x.png"
import sbtrct122x from "../import/img/subtract-12@2x.png"
import pth392x from "../import/img/path-3-9@2x.png"
import pth462x from "../import/img/path-4-6@2x.png"
import pth52x from "../import/img/path-5@2x.png"
import pth662x from "../import/img/path-6-6@2x.png"
import pth762x from "../import/img/path-7-6@2x.png"
import pth832x from "../import/img/path-8-3@2x.png"
import pth1032x from "../import/img/path-10-3@2x.png"
import pth1132x from "../import/img/path-11-3@2x.png"
import pth1232x from "../import/img/path-12-3@2x.png"
import pth1332x from "../import/img/path-13-3@2x.png"
import pth1432x from "../import/img/path-14-3@2x.png"
import pth1532x from "../import/img/path-15-3@2x.png"
import pth1632x from "../import/img/path-16-3@2x.png"
import pth1732x from "../import/img/path-17-3@2x.png"
import pth1832x from "../import/img/path-18-3@2x.png"
import bg31x from "../import/img/bg-3@1x.png"
import mckps152x from "../import/img/mockups-1-5@2x.png"
import elpse8022x from "../import/img/ellipse-80-2@2x.png"
import elpse8122x from "../import/img/ellipse-81-2@2x.png"
import elpse8222x from "../import/img/ellipse-82-2@2x.png"
import elpse7442x from "../import/img/ellipse-74-4@2x.png"
import intrdc2x from "../import/img/introducing@2x.png"
import vctr9592x from "../import/img/vector-959@2x.png"
import sbtrct152x from "../import/img/subtract-15@2x.png"
import elpse7122x from "../import/img/ellipse-7-12@2x.png"
import elpse8392x from "../import/img/ellipse-8-39@2x.png"
import elpse7402x from "../import/img/ellipse-7-40@2x.png"
import elpse8402x from "../import/img/ellipse-8-40@2x.png"
import elpse7412x from "../import/img/ellipse-7-41@2x.png"
import elpse7942x from "../import/img/ellipse-79-4@2x.png"
import rctngl77212x from "../import/img/rectangle-772-1@2x.png"
import elpse8412x from "../import/img/ellipse-8-41@2x.png"
import rctngl77312x from "../import/img/rectangle-773-1@2x.png"
import rctngl77412x from "../import/img/rectangle-774-1@2x.png"
import vctr9602x from "../import/img/vector-960@2x.png"
import sbtrct162x from "../import/img/subtract-16@2x.png"
import elpse7452x from "../import/img/ellipse-74-5@2x.png"
import objct122x from"../import/img/object-12@2x.png"
import chngClr122x from "../import/img/change-color-12@2x.png"
import shdw122x from "../import/img/shadow-12@2x.png"
import scrn222x from "../import/img/screen-22@2x.png"
import mckp122x from "../import/img/mockup-12@2x.png"
import brdr122x from "../import/img/border-12@2x.png"
import objct132x from "../import/img/object-13@2x.png"
import chngClr132x from "../import/img/change-color-13@2x.png"
import shdw132x from "../import/img/shadow-13@2x.png"
import scrn232x from "../import/img/screen-23@2x.png"
import mckp132x from "../import/img/mockup-13@2x.png"
import brdr132x from "../import/img/border-13@2x.png"
import phn102x from "../import/img/phone-10@2x.png"
import scrn242x from "../import/img/screen-24@2x.png"
import glss102x from "../import/img/glass-10@2x.png"
import clrDdge102x from "../import/img/color-dodge-10@2x.png"
import ovrshdw52x from "../import/img/over-shadow-5@2x.png"
import phn112x from "../import/img/phone-11@2x.png"
import scrn252x from "../import/img/screen-25@2x.png"
import glss112x from "../import/img/glass-11@2x.png"
import clrDdge112x from "../import/img/color-dodge-11@2x.png"
import vctr9622x from "../import/img/vector-962@2x.png"
import vctr9682x from "../import/img/vector-968@2x.png"
import vctr9712x from "../import/img/vector-971@2x.png"
import vctr9722x from "../import/img/vector-972@2x.png"
import vctr9772x from "../import/img/vector-977@2x.png"
import d04182x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-8@2x.png"
import d04192x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-9@2x.png"
import d04112x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-10@2x.png"
import d041112x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-11@2x.png"
import d041132x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-13@2x.png"
import vctr9782x from "../import/img/vector-978@2x.png"
import pth852x from "../import/img/path-8-5@2x.png"
import pth1052x from "../import/img/path-10-5@2x.png"
import pth1152x from "../import/img/path-11-5@2x.png"
import pth1252x from "../import/img/path-12-5@2x.png"
import pth1352x from "../import/img/path-13-5@2x.png"
import pth1452x from "../import/img/path-14-5@2x.png"
import pth1552x from "../import/img/path-15-5@2x.png"
import pth1652x from "../import/img/path-16-5@2x.png"
import pth1752x from "../import/img/path-17-5@2x.png"
import pth1852x from "../import/img/path-18-5@2x.png"
import pth492x from "../import/img/path-4-9@2x.png"
import pth692x from "../import/img/path-6-9@2x.png"
import pth702x from "../import/img/path-7-9@2x.png"
import objct142x from "../import/img/object-14@2x.png"
import chngClr142x from "../import/img/change-color-14@2x.png"
import shdw142x from "../import/img/shadow-14@2x.png"
import scrn262x from "../import/img/screen-26@2x.png"
import mckp142x from "../import/img/mockup-14@2x.png"
import brdr142x from "../import/img/border-14@2x.png"
import objct152x from "../import/img/object-15@2x.png"
import chngClr152x from "../import/img/change-color-15@2x.png"
import shdw152x from "../import/img/shadow-15@2x.png"
import scrn272x from "../import/img/screen-27@2x.png"
import mckp152x from "../import/img/mockup-15@2x.png"
import brdr152x from "../import/img/border-15@2x.png"
import bg51x from "../import/img/bg-5@1x.png"
import sbtrct182x from "../import/img/subtract-18@2x.png"
import elpse8422x from "../import/img/ellipse-8-42@2x.png"
import elpse7432x from "../import/img/ellipse-7-43@2x.png"
import elpse8432x from "../import/img/ellipse-8-43@2x.png"
import elpse7442x2 from "../import/img/ellipse-7-44@2x.png"
import mckps161x from "../import/img/mockups-1-6@1x.png"
import elpse8042x from "../import/img/ellipse-80-4@2x.png"
import elpse8142x from "../import/img/ellipse-81-4@2x.png"
import elpse8242x from "../import/img/ellipse-82-4@2x.png"
import elpse7482x from "../import/img/ellipse-74-8@2x.png"
import rctngl77222x from "../import/img/rectangle-772-2@2x.png"
import rctngl77322x from "../import/img/rectangle-773-2@2x.png"
import rctngl77422x from "../import/img/rectangle-774-2@2x.png"
import rctngl77512x from "../import/img/rectangle-775-1@2x.png"
import rctngl77612x from "../import/img/rectangle-776-1@2x.png"
import vctr11112x from "../import/img/vector-1111@2x.png"
import sbtrct192x from "../import/img/subtract-19@2x.png"
import objct161x from "../import/img/object-16@1x.png"
import chngClr161x from "../import/img/change-color-16@1x.png"
import shdw161x from "../import/img/shadow-16@1x.png"
import scrn281x from "../import/img/screen-28@1x.png"
import mckp162x from "../import/img/mockup-16@2x.png"
import brdr161x from "../import/img/border-16@1x.png"
import mckp172x from "../import/img/mockup-17@2x.png"
import objct181x from "../import/img/object-18@1x.png"
import mckp182x from "../import/img/mockup-18@2x.png"
import mckp192x from "../import/img/mockup-19@2x.png"
import cmbndShp212x from "../import/img/combined-shape-21@2x.png"
import vctr11132x from "../import/img/vector-1113@2x.png"
import vctr11282x from "../import/img/vector-1128@2x.png"
import phn122x from "../import/img/phone-12@2x.png"
import scrn322x from "../import/img/screen-32@2x.png"
import glss122x from "../import/img/glass-12@2x.png"
import clrDdg122x from "../import/img/color-dodge-12@2x.png"
import scrn332x from "../import/img/screen-33@2x.png"
import glss132x from "../import/img/glass-13@2x.png"
import clrDdg132x from "../import/img/color-dodge-13@2x.png"
import bg41x from "../import/img/bg-4@1x.png"
import d041162x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-16@2x.png"
import d041182x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-18@2x.png"
import d041192x from "../import/img/882704ce-e445-4411-a93f-a8a613b0d041-19@2x.png"
import vctr11292x from "../import/img/vector-1129@2x.png"
import pth412x from "../import/img/path-4-10@2x.png"
import pth6102x from "../import/img/path-6-10@2x.png"
import pth1262x from "../import/img/path-12-6@2x.png"
import pth1462x from "../import/img/path-14-6@2x.png"
import pth1862x from "../import/img/path-18-6@2x.png"
import bg71x from "../import/img/bg-7@1x.png"
import mckps171x from "../import/img/mockups-1-7@1x.png"
import elpse8062x from "../import/img/ellipse-80-6@2x.png"
import elpse8162x from "../import/img/ellipse-81-6@2x.png"
import elpse8262x from "../import/img/ellipse-82-6@2x.png"
import elpse74122x from "../import/img/ellipse-74-12@2x.png"
import intrdc12x from "../import/img/introducing-1@2x.png"
import vctr11302x from "../import/img/vector-1130@2x.png"
import sbtrct212x from "../import/img/subtract-21@2x.png"
import elpse8452x from "../import/img/ellipse-8-45@2x.png"
import elpse8462x from "../import/img/ellipse-8-46@2x.png"
import elpse8472x from "../import/img/ellipse-8-47@2x.png"
import rctngl77232x from "../import/img/rectangle-772-3@2x.png"
import rctngl77332x from "../import/img/rectangle-773-3@2x.png"
import rctngl77432x from "../import/img/rectangle-774-3@2x.png"
import mckp202x from "../import/img/mockup-20@2x.png"
import chngClr212x from"../import/img/change-color-21@2x.png"
import mckp212x from "../import/img/mockup-21@2x.png"
import chngClr221x from "../import/img/change-color-22@1x.png"
import scrn361x from "../import/img/screen-36@1x.png"
import mckp222x from"../import/img/mockup-22@2x.png"
import mckp232x from "../import/img/mockup-23@2x.png"
import cmbndShp222x from "../import/img/combined-shape-22@2x.png"
import phn142x from "../import/img/phone-14@2x.png"
import phn152x from "../import/img/phone-15@2x.png"
import scrn392x from "../import/img/screen-39@2x.png"
import bg61x from "../import/img/bg-6@1x.png"
import bg22x from "../import/img/bg-2@2x.png"
import vctr11312x from "../import/img/vector-1131@2x.png"
import sbtrct222x from "../import/img/subtract-22@2x.png"

const MPowerPage = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <Layout>
      <Seo title="MPower App" />
      <input type="hidden" id="anPageName" name="page" value="mpower-landing-mobile-320px" />
      {modalState && <EmailModal setModalState={setModalState} />}
      <div className="mpower-landing-desktop-1440px screen">
        <div className="frame-64-C61RwL">
          <img className="bg-X8fKCS" src={bg11x} />
          <div className="introducing-X8fKCS">
            <span className="span0-UaiKvE">Introducing</span><span className="span1-UaiKvE">&nbsp;</span>
          </div>
          <div className="m-powerwhite-colored-X8fKCS">
            <div className="group-xHRUua"><img className="vector-LFud1Z" src={vctr5372x} /></div>
            <img className="subtract-xHRUua" src={sbtrct12x} />
            <div className="group-79-xHRUua">
              <img className="ellipse-7-WZnges" src={elpse7302x} />
              <img className="ellipse-8-WZnges" src={elpse8302x} />
            </div>
            <div className="group-80-xHRUua">
              <img className="ellipse-7-VwiQxQ" src={elpse7312x} />
              <img className="ellipse-8-VwiQxQ" src={elpse8312x} />
            </div>
            <div className="group-81-xHRUua">
              <img className="ellipse-7-DPCeJC" src={elpse7322x} />
              <img className="ellipse-8-DPCeJC" src={elpse8322x} />
            </div>
          </div>
          <p className="leverage-agile-frame-X8fKCS montserrat-normal-white-16px">
            Providing training, mentoring and employment opportunities with hiring organizations who demonstrate a
            comprehensive commitment to an inclusive workplace.
          </p>
          <div className="leverage-agile-frame-0pQ7Fi montserrat-bold-white-22px">
            A platform to empower and educate minority professionals.
          </div>
          <div className="img-X8fKCS">
            <img className="mockups-1-ql3H8Z" src={mckps131x} />
            <img className="ellipse-80-ql3H8Z" src={elpse802x} />
            <img className="ellipse-81-ql3H8Z" src={elpse812x} />
            <img className="ellipse-82-ql3H8Z" src={elpse822x} />
            <img className="ellipse-74-ql3H8Z" src={elpse742x} />
          </div>
          <div className="shapesleft-X8fKCS">
            <img className="ellipse-73-sbZbCF" src={elpse802x} />
            <img className="ellipse-72-sbZbCF" src={elpse812x} />
            <img className="ellipse-79-sbZbCF" src={elpse822x} />
          </div>
          <div className="frame-63-X8fKCS">
            <img className="rectangle-772-5UzQEQ" src={rctgnl7722x} />
            <img className="rectangle-773-5UzQEQ" src={rctgnl7732x} />
            <img className="rectangle-774-5UzQEQ" src={rctngl7742x} />
            <img className="rectangle-775-5UzQEQ" src={rctngl7752x} />
            <img className="rectangle-776-5UzQEQ" src={rctngl7762x} />
          </div>
        </div>
        <div className="navigation-C61RwL">
          <div className="links-xjb0Rz">
            <div className="links-FnCxlc"></div>
          </div>
          <div className="filled-button-xjb0Rz">
            <div className="sign-in-3VjsKE montserrat-bold-white-14px">Take the Survey</div>
          </div>
          <div className="line-button-xjb0Rz" onClick={()=> setModalState(true)} style={{cursor: "pointer"}}>
            <div className="rectangle-718-7UoSe2 border-1px-white"></div>
            <div className="log-in-7UoSe2 montserrat-bold-white-14px">Sign up for Beta</div>
          </div>
          <Link to="/">
            <div className="m-powerwhite-colored-xjb0Rz">
              <div className="group-lNir8u"><img className="vector-npilsQ" src={vctr5382x} /></div>
              <img className="subtract-lNir8u" src={sbtrct112x} />
            </div>
          </Link>
        </div>
        <div className="image-C61RwL">
          <div className="notebook-QfgQzB">
            <img className="object-q7uyGf" src={objct61x} />
            <div className="device-q7uyGf">
              <img className="change-color-4t11Cc" src={chngClr1x} />
              <img className="shadow-4t11Cc" src={shdw1x} />
              <img className="screen-4t11Cc" src={scrn121x} />
            </div>
            <img className="mockup-q7uyGf" src={mckp62x} />
            <img className="border-q7uyGf" src={brdr61x} />
          </div>
          <div className="phone-QfgQzB">
            <img className="object-D1d72C" src={objct12x} />
            <div className="device-D1d72C">
              <img className="change-color-cqQNQZ" src={chngClr72x} />
              <img className="shadow-cqQNQZ" src={shdw12x} />
              <img className="screen-cqQNQZ" src={scrn32x} />
            </div>
            <img className="mockup-D1d72C" src={mckp72x} />
            <img className="border-D1d72C" src={brdr12x} />
          </div>
        </div>
        <div className="shapesleft-C61RwL">
          <img className="ellipse-73-UKBqXM" src={elpse802x} />
          <img className="ellipse-72-UKBqXM" src={elpse812x} />
          <img className="ellipse-74-UKBqXM" src={elpse742x} />
          <img className="ellipse-79-UKBqXM" src={elpse822x} />
        </div>
        <div className="land-your-dream-job-C61RwL montserrat-semi-bold-white-38px">Education</div>
        <div className="list-C61RwL">
          <p className="user-experience-design-5dZqGE montserrat-light-white-16px">
            Learn how to use your minority experience as an asset
          </p>
          <img className="shapes-and-symbols-1-5dZqGE" src={shpsAndSymbls12x} />
        </div>
        <div className="list-VMr6Om">
          <p className="user-experience-design-iK7RIc montserrat-light-white-16px">
            Grow your business and leadership skills with dynamic content
          </p>
          <img className="shapes-and-symbols-1-iK7RIc" src={shpsAndSymbls12x} />
        </div>
        <div className="list-mzXdH9">
          <p className="user-experience-design-H075ZE montserrat-light-white-16px">
            Find inspiration in minority success stories and teachings
          </p>
          <img className="shapes-and-symbols-1-H075ZE" src={shpsAndSymbls12x} />
        </div>
        <div className="land-your-dream-job-VMr6Om montserrat-semi-bold-white-38px">Opportunity</div>
        <div className="image-VMr6Om">
          <div className="notebook-6XZz6l">
            <img className="object-9qhfTY" src={objct61x} />
            <div className="device-9qhfTY">
              <img className="change-color-GYQzfx" src={chngClr1x} />
              <img className="shadow-GYQzfx" src={shdw1x} />
              <img className="screen-GYQzfx" src={scrn121x} />
            </div>
            <img className="mockup-9qhfTY" src={mckp82x} />
            <img className="border-9qhfTY" src={brdr61x} />
          </div>
          <div className="phone-6XZz6l">
            <img className="object-fwnDGB" src={objct12x} />
            <div className="device-fwnDGB">
              <img className="change-color-Pqb4I4" src={chngClr72x} />
              <img className="shadow-Pqb4I4" src={shdw12x} />
              <img className="screen-Pqb4I4" src={scrn32x} />
            </div>
            <img className="mockup-fwnDGB" src={mckp92x} />
            <img className="border-fwnDGB" src={brdr12x} />
          </div>
        </div>
        <div className="list-QxM5SU">
          <p className="user-experience-design-mY7ydO montserrat-light-white-16px">
            Find employment within companies committed to supporting minority professionals
          </p>
          <img className="shapes-and-symbols-1-mY7ydO" src={shpsAndSymbls12x} />
        </div>
        <div className="list-2P4qUJ">
          <p className="user-experience-design-gj8Lka montserrat-light-white-16px">
            Accelerate your career through reciprocal mentor relationships
          </p>
          <img className="shapes-and-symbols-1-gj8Lka" src={shpsAndSymbls12x} />
        </div>
        <div className="list-qr8e7q">
          <p className="user-experience-design-hcXFX1 montserrat-light-white-16px">
            Engage in on-going dialogue and professional support within the MPower community
          </p>
          <img className="shapes-and-symbols-1-hcXFX1" src={shpsAndSymbls12x} />
        </div>
        <div className="shapesright-C61RwL">
          <img className="ellipse-73-uZ523G" src={elpse802x} />
          <img className="ellipse-72-uZ523G" src={elpse812x} />
          <img className="ellipse-79-uZ523G" src={elpse822x} />
          <img className="ellipse-74-uZ523G" src={elpse742x} />
        </div>
        <img className="combined-shape-C61RwL" src={cmbndShp92x} />
        <div className="body-text-C61RwL montserrat-light-white-20px">
          Using proprietary technology MPower is a full scale platform for minority professionals.
        </div>
        <div className="take-your-best-decision-C61RwL montserrat-bold-white-42px">The MPower Platform Features​</div>
        <div className="block-1-C61RwL">
          <p className="a-wonderful-ser-of-spring-which-hYGNfL montserrat-light-white-16px">
            Knowledge and empowerment through daily delivery of curated stories and articles about Diversity, Equity and
            Inclusion .
          </p>
          <div className="amazing-speed-hYGNfL montserrat-bold-white-24px">News Feed</div>
          <div className="group-590-hYGNfL">
            <div className="rectangle-759-AozqBi"></div>
            <div className="news-AozqBi"><img className="vector-ARB1Qa" src={vctr5392x} /></div>
          </div>
        </div>
        <div className="blocks-l-C61RwL">
          <div className="block-1-FRgD0U">
            <p className="a-wonderful-ser-of-spring-which-HjhWex montserrat-light-white-16px">
              A video-based professional &amp; career development curriculum. Online classes that empower, educate, &amp;
              mentor minority professionals.
            </p>
            <div className="amazing-speed-HjhWex montserrat-bold-white-24px">University</div>
          </div>
          <div className="group-591-FRgD0U">
            <div className="rectangle-759-hbJ0No"></div>
            <div className="vector-hbJ0No"><img className="vector-gVXsHL" src={vctr5402x} /></div>
          </div>
        </div>
        <div className="blocks-l-VMr6Om">
          <div className="block-1-J2xEcm">
            <p className="a-wonderful-ser-of-spring-which-JQjbyW montserrat-light-white-16px">
              Unique tradecraft and life lesson discussions presented by globally recognized celebrities &amp; thought
              leaders.
            </p>
            <div className="amazing-speed-JQjbyW montserrat-bold-white-24px">Keynote</div>
          </div>
          <div className="group-592-J2xEcm">
            <div className="rectangle-759-R4GFw9"></div>
            <div className="master-idle-R4GFw9">
              <div className="group-75-a6k2xR">
                <div className="group-XV5D4N">
                  <div className="group-QkoC5i"><img className="vector-37ovQi" src={vctr5412x} /></div>
                </div>
                <div className="group-NL2NDr">
                  <div className="group-mhxH0R"><img className="vector-JEQUZT" src={vctr5422x} /></div>
                </div>
                <div className="group-xC9krj">
                  <div className="group-HJoBEO"><img className="vector-wRge3V" src={vctr5432x} /></div>
                </div>
                <div className="group-WIR1v6">
                  <div className="group-8wsGAh"><img className="vector-6DkdbH" src={vctr5442x} /></div>
                </div>
                <div className="group-eZuiLp">
                  <div className="group-ap6NKd"><img className="vector-4Grx6h" src={vctr5452x} /></div>
                </div>
                <div className="group-X60Cvu">
                  <div className="group-cbm9MB"><img className="vector-tGpqBe" src={vctr5462x} /></div>
                </div>
                <div className="group-uxO0QB">
                  <div className="group-NSf0Ar"><img className="vector-EsNi4B" src={vctr5472x} /></div>
                </div>
                <div className="group-p5uhvD">
                  <div className="group-ERxX1c"><img className="vector-prsxEQ" src={vctr5482x} /></div>
                </div>
                <div className="group-PFJF24">
                  <div className="group-pcM0fb"><img className="vector-qxfCIT" src={vctr5492x} /></div>
                </div>
                <div className="group-paxBxB">
                  <div className="group-V41hRG"><img className="vector-Q7lB0J" src={vctr5502x} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blocks-r-C61RwL">
          <div className="block-1-C8JcQ6">
            <p className="a-wonderful-ser-of-spring-which-xbuxmT montserrat-light-white-16px">
              Career advancement through M2N engagement with hiring organizations seeking to recruit diverse candidates.
            </p>
            <div className="amazing-speed-xbuxmT montserrat-bold-white-24px">Jobs</div>
          </div>
          <div className="group-587-C8JcQ6">
            <div className="rectangle-759-HIqYii"></div>
            <div className="briefcase-idle-HIqYii"><img className="vector-7NiCqW" src={vctr5512x} /></div>
          </div>
        </div>
        <div className="blocks-r-VMr6Om">
          <div className="block-1-lKCHaY">
            <p className="a-wonderful-ser-of-spring-which-YgfePG montserrat-light-white-16px">
              Talent scoring metrics for M2N internal recruiting based upon education, employment experience and activity
              within the platform.
            </p>
            <div className="amazing-speed-YgfePG montserrat-bold-white-24px">Talent Score</div>
          </div>
          <div className="group-588-lKCHaY">
            <div className="rectangle-759-DhTR3s"></div>
            <div className="score-DhTR3s">
              <div className="group-Jig3S3">
                <img className="vector-ZALkAD" src={vctr5522x} />
                <img className="vector-UUJMGM" src={vctr5532x} />
                <img className="vector-bqRaZp" src={vctr5542x} />
              </div>
            </div>
          </div>
        </div>
        <div className="block-1-VMr6Om">
          <p className="a-wonderful-ser-of-spring-which-5cD2NF montserrat-light-white-16px">
            Services to support new minority hires and the hiring organization to insure minority employees are engaged
            and contributing in their new role.​
          </p>
          <div className="amazing-speed-5cD2NF montserrat-bold-white-24px">Systems &amp; Services</div>
        </div>
        <div className="group-589-5cD2NF">
          <div className="rectangle-759-mmqPLj"></div>
          <div className="more-mmqPLj"><img className="vector-gxIfC7" src={vctr5552x} /></div>
        </div>
        <div className="mockups-C61RwL">
          <div className="x2-jtfs6Y">
            <img className="phone-CDWWkV" src={phn62x} />
            <img className="screen-CDWWkV" src={scrn162x} />
            <div className="glass-CDWWkV">
              <img className="glass-wMCr1d" src={glss62x} />
              <img className="color-dodge-wMCr1d" src={clrDdge62x} />
            </div>
            <img className="over-shadow-CDWWkV" src={ovrShdw32x} />
          </div>
          <div className="x1-jtfs6Y">
            <img className="phone-LfyeOB" src={phn72x} />
            <img className="screen-LfyeOB" src={scrn172x} />
            <div className="glass-LfyeOB">
              <img className="glass-ymOsyf" src={glss72x} />
              <img className="color-dodge-ymOsyf" src={clrDdg72x} />
            </div>
          </div>
        </div>
        <div className="m-power-benefits-for-you-C61RwL montserrat-bold-white-42px">MPower Benefits for You</div>
        <img className="bg-C61RwL" src={bg1x} />
        <div className="imagesleft-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-aqX065" src={d0412x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-rH2EGN" src={d04112x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-sA1blt" src={d04122x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-iv3cuI" src={d04232x} />
          <img className="ellipse-73-aqX065" src={elpse802x} />
          <img className="ellipse-72-aqX065" src={elpse812x} />
          <img className="ellipse-79-aqX065" src={elpse822x} />
          <img className="ellipse-74-aqX065" src={elpse742x} />
        </div>
        <div className="imagesright-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-JHLziL" src={d04142x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oCFqdE" src={d04152x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oIkETf" src={d04162x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-yCrqj2" src={d04172x} />
          <img className="ellipse-80-JHLziL" src={elpse802x} />
          <img className="ellipse-81-JHLziL" src={elpse812x} />
          <img className="ellipse-82-JHLziL" src={elpse822x} />
          <img className="ellipse-83-JHLziL" src={elpse742x} />
        </div>
        <div className="content-C61RwL">
          <div className="express-your-thought-xUsx1L">Help our vision come to life with your feedback</div>
          <div className="button-xUsx1L">
            <div className="rectangle-89-eF6efs"></div>
            <div className="try-14-days-free-tri-eF6efs montserrat-bold-white-16px">Take the Survey</div>
          </div>
        </div>
        <div className="bg-VMr6Om"></div>
        <div className="rectangle-771-C61RwL"></div>
        <div className="logo-C61RwL">
          <div className="group-exFKkL"><img className="vector-LRM1jR" src={vctr5562x} /></div>
          <img className="subtract-exFKkL" src={sbtrct122x} />
        </div>
        <p className="copyright-2020-laa-C61RwL montserrat-normal-white-16px-2">
          Copyright © 2020 M2N. All Rights Reserved.
        </p>
        <div className="linksright-C61RwL">
          <div className="privacy-policy-ocPzvE montserrat-normal-white-16px">Privacy Policy</div>
          <div className="terms-of-use-ocPzvE montserrat-normal-white-16px">Terms of Use</div>
        </div>
        <div className="download-C61RwL">
          <div className="get-appex-on-your-device-Z2deF4 montserrat-bold-white-16px">Download the App</div>
          <div className="button-Z2deF4">
            <div className="app-store-E39PQu">
              <img className="path-3-YxXJMJ" src={pth392x} />
              <img className="path-4-YxXJMJ" src={pth462x} />
              <img className="path-5-YxXJMJ" src={pth52x} />
              <div className="group-2-YxXJMJ"><img className="path-6-hvwlaS" src={pth662x} /></div>
              <div className="group-3-YxXJMJ"><img className="path-7-KT2pOy" src={pth762x} /></div>
            </div>
            <div className="play-store-E39PQu">
              <img className="path-8-hSbW8M" src={pth832x} />
              <img className="path-9-hSbW8M" src={pth52x} />
              <img className="path-10-hSbW8M" src={pth1032x} />
              <img className="path-11-hSbW8M" src={pth1132x} />
              <div className="group-4-hSbW8M">
                <img className="path-12-adm0ag" src={pth1232x} />
                <img className="path-13-adm0ag" src={pth1332x} />
                <img className="path-14-adm0ag" src={pth1432x} />
                <img className="path-15-adm0ag" src={pth1532x} />
                <img className="path-16-adm0ag" src={pth1632x} />
                <img className="path-17-adm0ag" src={pth1732x} />
                <img className="path-18-adm0ag" src={pth1832x} />
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-C61RwL">
          <p className="subscribe-to-our-newsletter-09RRMv montserrat-bold-white-16px">Sign up to receive Beta Access</p>
          <div className="e-mail-feild-09RRMv">
            <div className="rectangle-645-9Ntqw8 border-1px-black-2"></div>
            <input
              className="enter-your-email-add-9Ntqw8 montserrat-light-white-16px"
              name="enter-your-email-add"
              placeholder="Enter your email address"
              type="email"
              required
            />
            <div className="subscribe-button-9Ntqw8">
              <div className="rectangle-646-cTqFxG"></div>
              <div className="subscribe-cTqFxG montserrat-bold-white-16px">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mpower-landing-mobile-320px screen">
        <div className="frame-64-C61RwL">
          <img className="bg-X8fKCS" src={bg31x} />
          <div className="img-X8fKCS">
            <img className="mockups-1-ql3H8Z" src={mckps152x} />
            <img className="ellipse-80-ql3H8Z" src={elpse8022x} />
            <img className="ellipse-81-ql3H8Z" src={elpse8122x} />
            <img className="ellipse-82-ql3H8Z" src={elpse8222x} />
            <img className="ellipse-74-ql3H8Z" src={elpse7442x} />
          </div>
          <img className="introducing-X8fKCS" src={intrdc2x} />
          <div className="m-powerwhite-colored-X8fKCS">
            <div className="group-xHRUua"><img className="vector-LFud1Z" src={vctr9592x} /></div>
            <img className="subtract-xHRUua" src={sbtrct152x} />
            <div className="group-79-xHRUua">
              <img className="ellipse-7-WZnges" src={elpse7122x} />
              <img className="ellipse-8-WZnges" src={elpse8392x} />
            </div>
            <div className="group-80-xHRUua">
              <img className="ellipse-7-VwiQxQ" src={elpse7402x} />
              <img className="ellipse-8-VwiQxQ" src={elpse8402x} />
            </div>
            <div className="group-81-xHRUua">
              <img className="ellipse-7-DPCeJC" src={elpse7412x} />
              <img className="ellipse-8-DPCeJC" src={elpse8412x} />
            </div>
          </div>
          <p className="leverage-agile-frame-X8fKCS montserrat-normal-white-16px">
            Providing training, mentoring and employment opportunities with hiring organizations who demonstrate a
            comprehensive commitment to an inclusive workplace.
          </p>
          <div className="leverage-agile-frame-0pQ7Fi montserrat-bold-white-22px">
            A platform to empower and educate minority professionals.
          </div>
          <div className="shapesleft-X8fKCS">
            <img className="ellipse-73-sbZbCF" src={elpse802x} />
            <img className="ellipse-72-sbZbCF" src={elpse812x} />
            <img className="ellipse-79-sbZbCF" src={elpse7942x} />
          </div>
          <div className="frame-63-X8fKCS">
            <img className="rectangle-772-5UzQEQ" src={rctngl77212x} />
            <img className="rectangle-773-5UzQEQ" src={rctngl77312x} />
            <img className="rectangle-774-5UzQEQ" src={rctngl77412x} />
          </div>
        </div>
        <div className="navigation-C61RwL">
          <div className="links-xjb0Rz">
            <div className="links-FnCxlc"></div>
          </div>
          <div className="filled-button-xjb0Rz">
            <div className="sign-in-3VjsKE montserrat-bold-white-14px">Survey</div>
          </div>
          <div className="line-button-xjb0Rz" onClick={()=> setModalState(true)} style={{cursor: "pointer"}}>
            <div className="rectangle-718-7UoSe2 border-1px-white"></div>
            <div className="log-in-7UoSe2 montserrat-bold-white-14px">Beta</div>
          </div>
          <Link to="/">
            <div className="m-powerwhite-colored-xjb0Rz">
              <div className="group-lNir8u"><img className="vector-npilsQ" src={vctr9602x} /></div>
              <img className="subtract-lNir8u" src={sbtrct162x} />
            </div>
          </Link>
        </div>
        <div className="shapesleft-C61RwL">
          <img className="ellipse-73-UKBqXM" src={elpse802x} />
          <img className="ellipse-72-UKBqXM" src={elpse812x} />
          <img className="ellipse-74-UKBqXM" src={elpse7452x} />
          <img className="ellipse-79-UKBqXM" src={elpse7942x} />
        </div>
        <div className="list-C61RwL">
          <p className="user-experience-design-5dZqGE montserrat-light-white-12px">
            Learn how to use your minority experience as an asset
          </p>
          <img className="shapes-and-symbols-1-5dZqGE" src={shpsAndSymbls12x} />
        </div>
        <div className="list-VMr6Om">
          <p className="user-experience-design-iK7RIc montserrat-light-white-12px">
            Grow your business and leadership skills with dynamic content
          </p>
          <img className="shapes-and-symbols-1-iK7RIc" src={shpsAndSymbls12x} />
        </div>
        <div className="list-mzXdH9">
          <p className="user-experience-design-H075ZE montserrat-light-white-12px">
            Find inspiration in minority success stories and teachings
          </p>
          <img className="shapes-and-symbols-1-H075ZE" src={shpsAndSymbls12x} />
        </div>
        <div className="land-your-dream-job-C61RwL montserrat-semi-bold-white-38px">Education</div>
        <div className="m-power-benefits-for-you-C61RwL montserrat-bold-white-32px">MPower Benefits for You</div>
        <div className="image-C61RwL">
          <div className="notebook-QfgQzB">
            <img className="object-q7uyGf" src={objct122x} />
            <div className="device-q7uyGf">
              <img className="change-color-4t11Cc" src={chngClr122x} />
              <img className="shadow-4t11Cc" src={shdw122x} />
              <img className="screen-4t11Cc" src={scrn222x} />
            </div>
            <img className="mockup-q7uyGf" src={mckp122x} />
            <img className="border-q7uyGf" src={brdr122x} />
          </div>
          <div className="phone-QfgQzB">
            <img className="object-D1d72C" src={objct132x} />
            <div className="device-D1d72C">
              <img className="change-color-cqQNQZ" src={chngClr132x} />
              <img className="shadow-cqQNQZ" src={shdw132x} />
              <img className="screen-cqQNQZ" src={scrn232x} />
            </div>
            <img className="mockup-D1d72C" src={mckp132x} />
            <img className="border-D1d72C" src={brdr132x} />
          </div>
        </div>
        <div className="land-your-dream-job-VMr6Om montserrat-semi-bold-white-38px">Opportunity</div>
        <div className="list-QxM5SU">
          <p className="user-experience-design-mY7ydO montserrat-light-white-12px">
            Find employment within companies committed to supporting minority professionals
          </p>
          <img className="shapes-and-symbols-1-mY7ydO" src={shpsAndSymbls12x} />
        </div>
        <div className="list-2P4qUJ">
          <p className="user-experience-design-gj8Lka montserrat-light-white-12px">
            Accelerate your career through reciprocal mentor relationships
          </p>
          <img className="shapes-and-symbols-1-gj8Lka" src={shpsAndSymbls12x} />
        </div>
        <div className="list-qr8e7q">
          <p className="user-experience-design-hcXFX1 montserrat-light-white-12px">
            Engage in on-going dialogue and professional support within the MPower community
          </p>
          <img className="shapes-and-symbols-1-hcXFX1" src={shpsAndSymbls12x} />
        </div>
        <div className="body-text-C61RwL montserrat-light-white-20px">
          Using proprietary technology MPower is a full scale platform for minority professionals.
        </div>
        <div className="take-your-best-decision-C61RwL montserrat-bold-white-32px">The MPower Platform Features​</div>
        <div className="frame-65-C61RwL">
          <div className="mockups-Kp0bi6">
            <div className="x2-J9ggRY">
              <img className="phone-et9WFm" src={phn102x} />
              <img className="screen-et9WFm" src={scrn242x} />
              <div className="glass-et9WFm">
                <img className="glass-ZXKkVp" src={glss102x} />
                <img className="color-dodge-ZXKkVp" src={clrDdge102x} />
              </div>
              <img className="over-shadow-et9WFm" src={ovrshdw52x} />
            </div>
            <div className="x1-J9ggRY">
              <img className="phone-HdEVyy" src={phn112x} />
              <img className="screen-HdEVyy" src={scrn252x} />
              <div className="glass-HdEVyy">
                <img className="glass-4uFVIe" src={glss112x} />
                <img className="color-dodge-4uFVIe" src={clrDdge112x} />
              </div>
            </div>
          </div>
        </div>
        <div className="block-1-C61RwL">
          <p className="a-wonderful-ser-of-spring-which-hYGNfL montserrat-light-white-16px">
            Knowledge and empowerment through daily delivery of curated stories and articles about Diversity, Equity and
            Inclusion .
          </p>
          <div className="amazing-speed-hYGNfL montserrat-bold-white-24px">News Feed</div>
          <div className="group-590-hYGNfL">
            <div className="rectangle-759-AozqBi"></div>
            <div className="news-AozqBi"><img className="vector-ARB1Qa" src={vctr5392x} /></div>
          </div>
        </div>
        <div className="blocks-l-C61RwL">
          <div className="block-1-FRgD0U">
            <p className="a-wonderful-ser-of-spring-which-HjhWex montserrat-light-white-16px">
              A video-based professional &amp; career development curriculum. Online classes that empower, educate, &amp;
              mentor minority professionals.
            </p>
            <div className="amazing-speed-HjhWex montserrat-bold-white-24px">University</div>
          </div>
          <div className="group-591-FRgD0U">
            <div className="rectangle-759-hbJ0No"></div>
            <div className="vector-hbJ0No"><img className="vector-gVXsHL" src={vctr9622x} /></div>
          </div>
        </div>
        <div className="blocks-l-VMr6Om">
          <div className="block-1-J2xEcm">
            <p className="a-wonderful-ser-of-spring-which-JQjbyW montserrat-light-white-16px">
              Unique tradecraft and life lesson discussions presented by globally recognized celebrities &amp; thought
              leaders.
            </p>
            <div className="amazing-speed-JQjbyW montserrat-bold-white-24px">Keynote</div>
          </div>
          <div className="group-592-J2xEcm">
            <div className="rectangle-759-R4GFw9"></div>
            <div className="master-idle-R4GFw9">
              <div className="group-75-a6k2xR">
                <div className="group-XV5D4N">
                  <div className="group-QkoC5i"><img className="vector-37ovQi" src={vctr5412x} /></div>
                </div>
                <div className="group-NL2NDr">
                  <div className="group-mhxH0R"><img className="vector-JEQUZT" src={vctr5422x} /></div>
                </div>
                <div className="group-xC9krj">
                  <div className="group-HJoBEO"><img className="vector-wRge3V" src={vctr5432x} /></div>
                </div>
                <div className="group-WIR1v6">
                  <div className="group-8wsGAh"><img className="vector-6DkdbH" src={vctr5442x} /></div>
                </div>
                <div className="group-eZuiLp">
                  <div className="group-ap6NKd"><img className="vector-4Grx6h" src={vctr5452x} /></div>
                </div>
                <div className="group-X60Cvu">
                  <div className="group-cbm9MB"><img className="vector-tGpqBe" src={vctr9682x} /></div>
                </div>
                <div className="group-uxO0QB">
                  <div className="group-NSf0Ar"><img className="vector-EsNi4B" src={vctr5472x} /></div>
                </div>
                <div className="group-p5uhvD">
                  <div className="group-ERxX1c"><img className="vector-prsxEQ" src={vctr5482x} /></div>
                </div>
                <div className="group-PFJF24">
                  <div className="group-pcM0fb"><img className="vector-qxfCIT" src={vctr9712x} /></div>
                </div>
                <div className="group-paxBxB">
                  <div className="group-V41hRG"><img className="vector-Q7lB0J" src={vctr9722x} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blocks-r-C61RwL">
          <div className="block-1-C8JcQ6">
            <p className="a-wonderful-ser-of-spring-which-xbuxmT montserrat-light-white-16px">
              Career advancement through M2N engagement with hiring organizations seeking to recruit diverse candidates.
            </p>
            <div className="amazing-speed-xbuxmT montserrat-bold-white-24px">Jobs</div>
          </div>
          <div className="group-587-C8JcQ6">
            <div className="rectangle-759-HIqYii"></div>
            <div className="briefcase-idle-HIqYii"><img className="vector-7NiCqW" src={vctr5512x} /></div>
          </div>
        </div>
        <div className="blocks-r-VMr6Om">
          <div className="block-1-lKCHaY">
            <p className="a-wonderful-ser-of-spring-which-YgfePG montserrat-light-white-16px">
              Talent scoring metrics for M2N internal recruiting based upon education, employment experience and activity
              within the platform.
            </p>
            <div className="amazing-speed-YgfePG montserrat-bold-white-24px">Talent Score</div>
          </div>
          <div className="group-588-lKCHaY">
            <div className="rectangle-759-DhTR3s"></div>
            <div className="score-DhTR3s">
              <div className="group-Jig3S3">
                <img className="vector-ZALkAD" src={vctr5522x} />
                <img className="vector-UUJMGM" src={vctr5532x} />
                <img className="vector-bqRaZp" src={vctr5542x} />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-66-C61RwL">
          <div className="block-1-cqfqoV">
            <p className="a-wonderful-ser-of-spring-which-uaSRo4 montserrat-light-white-16px">
              Services to support new minority hires and the hiring organization to insure minority employees are engaged
              and contributing in their new role.​
            </p>
            <div className="amazing-speed-uaSRo4 montserrat-bold-white-24px">Systems &amp; Services</div>
            <div className="group-589-uaSRo4">
              <div className="rectangle-759-cssSmj"></div>
              <div className="more-cssSmj"><img className="vector-0LcX4U" src={vctr9772x} /></div>
            </div>
          </div>
        </div>
        <img className="bg-C61RwL" src={bg22x} />
        <div className="imagesleft-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-aqX065" src={d04182x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-rH2EGN" src={d04192x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-sA1blt" src={d04112x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-iv3cuI" src={d041112x} />
          <img className="ellipse-73-aqX065" src={elpse802x} />
          <img className="ellipse-72-aqX065" src={elpse812x} />
          <img className="ellipse-79-aqX065" src={elpse7942x} />
          <img className="ellipse-74-aqX065" src={elpse7452x} />
        </div>
        <div className="imagesright-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-JHLziL" src={d04142x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oCFqdE" src={d041132x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oIkETf" src={d04162x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-yCrqj2" src={d04172x} />
          <img className="ellipse-80-JHLziL" src={elpse802x} />
          <img className="ellipse-81-JHLziL" src={elpse812x} />
          <img className="ellipse-82-JHLziL" src={elpse7942x} />
          <img className="ellipse-83-JHLziL" src={elpse7452x} />
        </div>
        <div className="content-C61RwL">
          <div className="express-your-thought-xUsx1L montserrat-bold-white-24px">
            Help our vision come to life with your feedback
          </div>
          <div className="button-xUsx1L">
            <div className="rectangle-89-eF6efs"></div>
            <div className="try-14-days-free-tri-eF6efs montserrat-bold-white-16px">Take the Survey</div>
          </div>
        </div>
        <div className="bg-VMr6Om"></div>
        <div className="rectangle-771-C61RwL"></div>
        <div className="m-powerwhite-square-C61RwL">
          <div className="logo-xeqJcl">
            <div className="group-AdFGRd"><img className="vector-023lla" src={vctr9782x} /></div>
            <img className="subtract-AdFGRd" src={sbtrct122x} />
          </div>
        </div>
        <p className="copyright-2020-laa-C61RwL montserrat-normal-white-16px-2">
          Copyright © 2020 M2N. All Rights Reserved.
        </p>
        <div className="group-593-C61RwL">
          <div className="privacy-policy-kx0xZX montserrat-normal-white-16px">Privacy Policy</div>
          <div className="terms-of-use-kx0xZX montserrat-normal-white-16px">Terms of Use</div>
        </div>
        <div className="download-C61RwL">
          <div className="get-appex-on-your-device-Z2deF4 montserrat-bold-white-16px">Download the App</div>
          <div className="button-Z2deF4">
            <div className="play-store-E39PQu">
              <img className="path-8-hSbW8M" src={pth852x} />
              <img className="path-9-hSbW8M" src={pth52x} />
              <img className="path-10-hSbW8M" src={pth1052x} />
              <img className="path-11-hSbW8M" src={pth1152x} />
              <div className="group-4-hSbW8M">
                <img className="path-12-adm0ag" src={pth1252x} />
                <img className="path-13-adm0ag" src={pth1352x} />
                <img className="path-14-adm0ag" src={pth1452x} />
                <img className="path-15-adm0ag" src={pth1552x} />
                <img className="path-16-adm0ag" src={pth1652x} />
                <img className="path-17-adm0ag" src={pth1752x} />
                <img className="path-18-adm0ag" src={pth1852x} />
              </div>
            </div>
            <div className="app-store-E39PQu">
              <img className="path-3-YxXJMJ" src={pth392x} />
              <img className="path-4-YxXJMJ" src={pth492x} />
              <img className="path-5-YxXJMJ" src={pth52x} />
              <div className="group-2-YxXJMJ"><img className="path-6-hvwlaS" src={pth692x} /></div>
              <div className="group-3-YxXJMJ"><img className="path-7-KT2pOy" src={pth702x} /></div>
            </div>
          </div>
        </div>
        <div className="subscribe-C61RwL">
          <p className="subscribe-to-our-newsletter-09RRMv montserrat-bold-white-16px">Sign up to receive Beta Access</p>
          <div className="e-mail-feild-09RRMv">
            <div className="rectangle-645-9Ntqw8 border-1px-black-2"></div>
            <input
              className="enter-your-email-add-9Ntqw8 montserrat-light-white-12px"
              name="enter-your-email-add"
              placeholder="Enter your email address"
              type="email"
              required
            />
            <div className="subscribe-button-9Ntqw8">
              <div className="rectangle-646-cTqFxG"></div>
              <div className="subscribe-cTqFxG montserrat-bold-white-16px">Subscribe</div>
            </div>
          </div>
        </div>
        <div className="image-VMr6Om">
          <div className="notebook-6XZz6l">
            <img className="object-9qhfTY" src={objct142x} />
            <div className="device-9qhfTY">
              <img className="change-color-GYQzfx" src={chngClr142x} />
              <img className="shadow-GYQzfx" src={shdw142x} />
              <img className="screen-GYQzfx" src={scrn262x} />
            </div>
            <img className="mockup-9qhfTY" src={mckp142x} />
            <img className="border-9qhfTY" src={brdr142x} />
          </div>
          <div className="phone-6XZz6l">
            <img className="object-fwnDGB" src={objct152x} />
            <div className="device-fwnDGB">
              <img className="change-color-Pqb4I4" src={chngClr152x} />
              <img className="shadow-Pqb4I4" src={shdw152x} />
              <img className="screen-Pqb4I4" src={scrn272x} />
            </div>
            <img className="mockup-fwnDGB" src={mckp152x} />
            <img className="border-fwnDGB" src={brdr152x} />
          </div>
        </div>
        <div className="shapesright-C61RwL">
          <img className="ellipse-73-uZ523G" src={elpse802x} />
          <img className="ellipse-72-uZ523G" src={elpse812x} />
          <img className="ellipse-79-uZ523G" src={elpse7942x} />
          <img className="ellipse-74-uZ523G" src={elpse7452x} />
        </div>
      </div>
      <div className="mpower-landing-desktop-1024px screen">
        <div className="frame-64-C61RwL">
          <img className="bg-X8fKCS" src={bg51x} />
          <div className="introducing-X8fKCS">
            <span className="span0-UaiKvE">Introducing</span><span className="span1-UaiKvE">&nbsp;</span>
          </div>
          <div className="m-powerwhite-colored-X8fKCS">
            <div className="group-xHRUua"><img className="vector-LFud1Z" src={vctr5372x} /></div>
            <img className="subtract-xHRUua" src={sbtrct182x} />
            <div className="group-79-xHRUua">
              <img className="ellipse-7-WZnges" src={elpse7302x} />
              <img className="ellipse-8-WZnges" src={elpse8422x} />
            </div>
            <div className="group-80-xHRUua">
              <img className="ellipse-7-VwiQxQ" src={elpse7432x} />
              <img className="ellipse-8-VwiQxQ" src={elpse8432x} />
            </div>
            <div className="group-81-xHRUua">
              <img className="ellipse-7-DPCeJC" src={elpse7442x2} />
              <img className="ellipse-8-DPCeJC" src={elpse8322x} />
            </div>
          </div>
          <p className="leverage-agile-frame-X8fKCS montserrat-normal-white-16px">
            Providing training, mentoring and employment opportunities with hiring organizations who demonstrate a
            comprehensive commitment to an inclusive workplace.
          </p>
          <div className="leverage-agile-frame-0pQ7Fi montserrat-bold-white-22px">
            A platform to empower and educate minority professionals.
          </div>
          <div className="img-X8fKCS">
            <img className="mockups-1-ql3H8Z" src={mckps161x} />
            <img className="ellipse-80-ql3H8Z" src={elpse8042x} />
            <img className="ellipse-81-ql3H8Z" src={elpse8142x} />
            <img className="ellipse-82-ql3H8Z" src={elpse8242x} />
            <img className="ellipse-74-ql3H8Z" src={elpse7482x} />
          </div>
          <div className="shapesleft-X8fKCS">
            <img className="ellipse-73-sbZbCF" src={elpse802x} />
            <img className="ellipse-72-sbZbCF" src={elpse812x} />
            <img className="ellipse-79-sbZbCF" src={elpse822x} />
          </div>
          <div className="frame-63-X8fKCS">
            <img className="rectangle-772-5UzQEQ" src={rctngl77222x} />
            <img className="rectangle-773-5UzQEQ" src={rctngl77322x} />
            <img className="rectangle-774-5UzQEQ" src={rctngl77422x} />
            <img className="rectangle-775-5UzQEQ" src={rctngl77512x} />
            <img className="rectangle-776-5UzQEQ" src={rctngl77612x} />
          </div>
        </div>
        <div className="navigation-C61RwL">
          <div className="links-xjb0Rz">
            <div className="links-FnCxlc"></div>
          </div>
          <div className="filled-button-xjb0Rz">
            <div className="sign-in-3VjsKE montserrat-bold-white-14px">Take the Survey</div>
          </div>
          <div className="line-button-xjb0Rz" onClick={()=> setModalState(true)} style={{cursor: "pointer"}}>
            <div className="rectangle-718-7UoSe2 border-1px-white"></div>
            <div className="log-in-7UoSe2 montserrat-bold-white-14px">Sign up for Beta</div>
          </div>
          <Link to="/">
            <div className="m-powerwhite-colored-xjb0Rz">
              <div className="group-lNir8u"><img className="vector-npilsQ" src={vctr11112x} /></div>
              <img className="subtract-lNir8u" src={sbtrct192x} />
            </div>
          </Link>
        </div>
        <div className="image-C61RwL">
          <div className="notebook-QfgQzB">
            <img className="object-q7uyGf" src={objct161x} />
            <div className="device-q7uyGf">
              <img className="change-color-4t11Cc" src={chngClr161x} />
              <img className="shadow-4t11Cc" src={shdw161x} />
              <img className="screen-4t11Cc" src={scrn281x} />
            </div>
            <img className="mockup-q7uyGf" src={mckp162x} />
            <img className="border-q7uyGf" src={brdr161x} />
          </div>
          <div className="phone-QfgQzB">
            <img className="object-D1d72C" src={objct12x} />
            <div className="device-D1d72C">
              <img className="change-color-cqQNQZ" src={chngClr72x} />
              <img className="shadow-cqQNQZ" src={shdw12x} />
              <img className="screen-cqQNQZ" src={scrn32x} />
            </div>
            <img className="mockup-D1d72C" src={mckp172x} />
            <img className="border-D1d72C" src={brdr12x} />
          </div>
        </div>
        <div className="shapesleft-C61RwL">
          <img className="ellipse-73-UKBqXM" src={elpse802x} />
          <img className="ellipse-72-UKBqXM" src={elpse812x} />
          <img className="ellipse-74-UKBqXM" src={elpse742x} />
          <img className="ellipse-79-UKBqXM" src={elpse822x} />
        </div>
        <div className="image-VMr6Om">
          <div className="notebook-6XZz6l">
            <img className="object-9qhfTY" src={objct181x} />
            <div className="device-9qhfTY">
              <img className="change-color-GYQzfx" src={chngClr161x} />
              <img className="shadow-GYQzfx" src={shdw161x} />
              <img className="screen-GYQzfx" src={scrn281x} />
            </div>
            <img className="mockup-9qhfTY" src={mckp182x} />
            <img className="border-9qhfTY" src={brdr161x} />
          </div>
          <div className="phone-6XZz6l">
            <img className="object-fwnDGB" src={objct12x} />
            <div className="device-fwnDGB">
              <img className="change-color-Pqb4I4" src={chngClr72x} />
              <img className="shadow-Pqb4I4" src={shdw12x} />
              <img className="screen-Pqb4I4" src={scrn32x} />
            </div>
            <img className="mockup-fwnDGB" src={mckp192x} />
            <img className="border-fwnDGB" src={brdr12x} />
          </div>
        </div>
        <img className="combined-shape-C61RwL" src={cmbndShp212x} />
        <div className="shapesright-C61RwL">
          <img className="ellipse-73-uZ523G" src={elpse802x} />
          <img className="ellipse-72-uZ523G" src={elpse812x} />
          <img className="ellipse-79-uZ523G" src={elpse822x} />
          <img className="ellipse-74-uZ523G" src={elpse742x} />
        </div>
        <div className="body-text-C61RwL montserrat-light-white-20px">
          Using proprietary technology MPower is a full scale platform for minority professionals.
        </div>
        <div className="take-your-best-decision-C61RwL montserrat-bold-white-42px">The MPower Platform Features​</div>
        <div className="block-1-C61RwL">
          <p className="a-wonderful-ser-of-spring-which-hYGNfL montserrat-light-white-16px">
            Knowledge and empowerment through daily delivery of curated stories and articles about Diversity, Equity and
            Inclusion .
          </p>
          <div className="amazing-speed-hYGNfL montserrat-bold-white-24px">News Feed</div>
          <div className="group-590-hYGNfL">
            <div className="rectangle-759-AozqBi"></div>
            <div className="news-AozqBi"><img className="vector-ARB1Qa" src={vctr5392x} /></div>
          </div>
        </div>
        <div className="blocks-l-C61RwL">
          <div className="block-1-FRgD0U">
            <p className="a-wonderful-ser-of-spring-which-HjhWex montserrat-light-white-16px">
              A video-based professional &amp; career development curriculum. Online classes that empower, educate, &amp;
              mentor minority professionals.
            </p>
            <div className="amazing-speed-HjhWex montserrat-bold-white-24px">University</div>
          </div>
          <div className="group-591-FRgD0U">
            <div className="rectangle-759-hbJ0No"></div>
            <div className="vector-hbJ0No"><img className="vector-gVXsHL" src={vctr11132x} /></div>
          </div>
        </div>
        <div className="blocks-l-VMr6Om">
          <div className="block-1-J2xEcm">
            <p className="a-wonderful-ser-of-spring-which-JQjbyW montserrat-light-white-16px">
              Unique tradecraft and life lesson discussions presented by globally recognized celebrities &amp; thought
              leaders.
            </p>
            <div className="amazing-speed-JQjbyW montserrat-bold-white-24px">Keynote</div>
          </div>
          <div className="group-592-J2xEcm">
            <div className="rectangle-759-R4GFw9"></div>
            <div className="master-idle-R4GFw9">
              <div className="group-75-a6k2xR">
                <div className="group-XV5D4N">
                  <div className="group-QkoC5i"><img className="vector-37ovQi" src={vctr5412x} /></div>
                </div>
                <div className="group-NL2NDr">
                  <div className="group-mhxH0R"><img className="vector-JEQUZT" src={vctr5422x} /></div>
                </div>
                <div className="group-xC9krj">
                  <div className="group-HJoBEO"><img className="vector-wRge3V" src={vctr5432x} /></div>
                </div>
                <div className="group-WIR1v6">
                  <div className="group-8wsGAh"><img className="vector-6DkdbH" src={vctr5442x} /></div>
                </div>
                <div className="group-eZuiLp">
                  <div className="group-ap6NKd"><img className="vector-4Grx6h" src={vctr5452x} /></div>
                </div>
                <div className="group-X60Cvu">
                  <div className="group-cbm9MB"><img className="vector-tGpqBe" src={vctr5462x} /></div>
                </div>
                <div className="group-uxO0QB">
                  <div className="group-NSf0Ar"><img className="vector-EsNi4B" src={vctr5472x} /></div>
                </div>
                <div className="group-p5uhvD">
                  <div className="group-ERxX1c"><img className="vector-prsxEQ" src={vctr5482x} /></div>
                </div>
                <div className="group-PFJF24">
                  <div className="group-pcM0fb"><img className="vector-qxfCIT" src={vctr5492x} /></div>
                </div>
                <div className="group-paxBxB">
                  <div className="group-V41hRG"><img className="vector-Q7lB0J" src={vctr5502x} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blocks-r-C61RwL">
          <div className="block-1-C8JcQ6">
            <p className="a-wonderful-ser-of-spring-which-xbuxmT montserrat-light-white-16px">
              Career advancement through M2N engagement with hiring organizations seeking to recruit diverse candidates.
            </p>
            <div className="amazing-speed-xbuxmT montserrat-bold-white-24px">Jobs</div>
          </div>
          <div className="group-587-C8JcQ6">
            <div className="rectangle-759-HIqYii"></div>
            <div className="briefcase-idle-HIqYii"><img className="vector-7NiCqW" src={vctr5512x} /></div>
          </div>
        </div>
        <div className="blocks-r-VMr6Om">
          <div className="block-1-lKCHaY">
            <p className="a-wonderful-ser-of-spring-which-YgfePG montserrat-light-white-16px">
              Talent scoring metrics for M2N internal recruiting based upon education, employment experience and activity
              within the platform.
            </p>
            <div className="amazing-speed-YgfePG montserrat-bold-white-24px">Talent Score</div>
          </div>
          <div className="group-588-lKCHaY">
            <div className="rectangle-759-DhTR3s"></div>
            <div className="score-DhTR3s">
              <div className="group-Jig3S3">
                <img className="vector-ZALkAD" src={vctr5522x} />
                <img className="vector-UUJMGM" src={vctr5532x} />
                <img className="vector-bqRaZp" src={vctr5542x} />
              </div>
            </div>
          </div>
        </div>
        <div className="block-1-VMr6Om">
          <p className="a-wonderful-ser-of-spring-which-5cD2NF montserrat-light-white-16px">
            Services to support new minority hires and the hiring organization to insure minority employees are engaged
            and contributing in their new role.​
          </p>
          <div className="amazing-speed-5cD2NF montserrat-bold-white-24px">Systems &amp; Services</div>
          <div className="group-589-5cD2NF">
            <div className="rectangle-759-mmqPLj"></div>
            <div className="more-mmqPLj"><img className="vector-gxIfC7" src={vctr11282x} /></div>
          </div>
        </div>
        <div className="mockups-C61RwL">
          <div className="x2-jtfs6Y">
            <img className="phone-CDWWkV" src={phn122x} />
            <img className="screen-CDWWkV" src={scrn322x} />
            <div className="glass-CDWWkV">
              <img className="glass-wMCr1d" src={glss122x} />
              <img className="color-dodge-wMCr1d" src={clrDdg122x} />
            </div>
            <img className="over-shadow-CDWWkV" src={ovrShdw32x} />
          </div>
          <div className="x1-jtfs6Y">
            <img className="phone-LfyeOB" src={phn132x} />
            <img className="screen-LfyeOB" src={scrn332x} />
            <div className="glass-LfyeOB">
              <img className="glass-ymOsyf" src={glss132x} />
              <img className="color-dodge-ymOsyf" src={clrDdg132x} />
            </div>
          </div>
        </div>
        <div className="m-power-benefits-for-you-C61RwL montserrat-bold-white-42px">MPower Benefits for You</div>
        <img className="bg-C61RwL" src={bg41x} />
        <div className="imagesleft-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-aqX065" src={d041162x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-rH2EGN" src={d04192x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-sA1blt" src={d041182x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-iv3cuI" src={d041192x} />
          <img className="ellipse-73-aqX065" src={elpse802x} />
          <img className="ellipse-72-aqX065" src={elpse812x} />
          <img className="ellipse-79-aqX065" src={elpse822x} />
          <img className="ellipse-74-aqX065" src={elpse742x} />
        </div>
        <div className="imagesright-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-JHLziL" src={d04142x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oCFqdE" src={d041132x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oIkETf" src={d04162x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-yCrqj2" src={d04172x} />
          <img className="ellipse-80-JHLziL" src={elpse802x} />
          <img className="ellipse-81-JHLziL" src={elpse812x} />
          <img className="ellipse-82-JHLziL" src={elpse822x} />
          <img className="ellipse-83-JHLziL" src={elpse742x} />
        </div>
        <div className="content-C61RwL">
          <div className="express-your-thought-xUsx1L">Help our vision come to life with your feedback</div>
          <div className="button-xUsx1L">
            <div className="rectangle-89-eF6efs"></div>
            <div className="try-14-days-free-tri-eF6efs montserrat-bold-white-16px">Take the Survey</div>
          </div>
        </div>
        <div className="bg-VMr6Om"></div>
        <div className="rectangle-771-C61RwL"></div>
        <div className="m-powerwhite-square-C61RwL">
          <div className="logo-xeqJcl">
            <div className="group-AdFGRd"><img className="vector-023lla" src={vctr11292x} /></div>
            <img className="subtract-AdFGRd" src={sbtrct122x} />
          </div>
        </div>
        <p className="copyright-2020-laa-C61RwL montserrat-normal-white-16px-2">
          Copyright © 2020 M2N. All Rights Reserved.
        </p>
        <div className="linksright-C61RwL">
          <div className="privacy-policy-ocPzvE montserrat-normal-white-16px">Privacy Policy</div>
          <div className="terms-of-use-ocPzvE montserrat-normal-white-16px">Terms of Use</div>
        </div>
        <div className="download-C61RwL">
          <div className="get-appex-on-your-device-Z2deF4 montserrat-bold-white-16px">Download the App</div>
          <div className="button-Z2deF4">
            <div className="app-store-E39PQu">
              <img className="path-3-YxXJMJ" src={pth392x} />
              <img className="path-4-YxXJMJ" src={pth412x} />
              <img className="path-5-YxXJMJ" src={pth52x} />
              <div className="group-2-YxXJMJ"><img className="path-6-hvwlaS" src={pth6102x} /></div>
              <div className="group-3-YxXJMJ"><img className="path-7-KT2pOy" src={pth702x} /></div>
            </div>
            <div className="play-store-E39PQu">
              <img className="path-8-hSbW8M" src={pth832x} />
              <img className="path-9-hSbW8M" src={pth52x} />
              <img className="path-10-hSbW8M" src={pth1032x} />
              <img className="path-11-hSbW8M" src={pth1132x} />
              <div className="group-4-hSbW8M">
                <img className="path-12-adm0ag" src={pth1262x} />
                <img className="path-13-adm0ag" src={pth1332x} />
                <img className="path-14-adm0ag" src={pth1462x} />
                <img className="path-15-adm0ag" src={pth1532x} />
                <img className="path-16-adm0ag" src={pth1632x} />
                <img className="path-17-adm0ag" src={pth1732x} />
                <img className="path-18-adm0ag" src={pth1862x} />
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-C61RwL">
          <p className="subscribe-to-our-newsletter-09RRMv montserrat-bold-white-16px">Sign up to receive Beta Access</p>
          <div className="e-mail-feild-09RRMv">
            <div className="rectangle-645-9Ntqw8 border-1px-black-2"></div>
            <input
              className="enter-your-email-add-9Ntqw8 montserrat-light-white-16px"
              name="enter-your-email-add"
              placeholder="Enter your email address"
              type="email"
              required
            />
            <div className="subscribe-button-9Ntqw8">
              <div className="rectangle-646-cTqFxG"></div>
              <div className="subscribe-cTqFxG montserrat-bold-white-16px">Subscribe</div>
            </div>
          </div>
        </div>
        <div className="land-your-dream-job-C61RwL montserrat-semi-bold-white-38px">Education</div>
        <div className="list-C61RwL">
          <p className="user-experience-design-5dZqGE montserrat-light-white-16px">
            Learn how to use your minority experience as an asset
          </p>
          <img className="shapes-and-symbols-1-5dZqGE" src={shpsAndSymbls12x} />
        </div>
        <div className="list-VMr6Om">
          <p className="user-experience-design-iK7RIc montserrat-light-white-16px">
            Grow your business and leadership skills with dynamic content
          </p>
          <img className="shapes-and-symbols-1-iK7RIc" src={shpsAndSymbls12x} />
        </div>
        <div className="list-mzXdH9">
          <p className="user-experience-design-H075ZE montserrat-light-white-16px">
            Find inspiration in minority success stories and teachings
          </p>
          <img className="shapes-and-symbols-1-H075ZE" src={shpsAndSymbls12x} />
        </div>
        <div className="land-your-dream-job-VMr6Om montserrat-semi-bold-white-38px">Opportunity</div>
        <div className="list-QxM5SU">
          <p className="user-experience-design-mY7ydO montserrat-light-white-16px">
            Find employment within companies committed to supporting minority professionals
          </p>
          <img className="shapes-and-symbols-1-mY7ydO" src={shpsAndSymbls12x} />
        </div>
        <div className="list-2P4qUJ">
          <p className="user-experience-design-gj8Lka montserrat-light-white-16px">
            Accelerate your career through reciprocal mentor relationships
          </p>
          <img className="shapes-and-symbols-1-gj8Lka" src={shpsAndSymbls12x} />
        </div>
        <div className="list-qr8e7q">
          <p className="user-experience-design-hcXFX1 montserrat-light-white-16px">
            Engage in on-going dialogue and professional support within the MPower community
          </p>
          <img className="shapes-and-symbols-1-hcXFX1" src={shpsAndSymbls12x} />
        </div>
      </div>
      <div className="mpower-landing-tablet-720px screen">
        <div className="frame-64-C61RwL">
          <img className="bg-X8fKCS" src={bg71x} />
          <div className="img-X8fKCS">
            <img className="mockups-1-ql3H8Z" src={mckps171x} />
            <img className="ellipse-80-ql3H8Z" src={elpse8062x} />
            <img className="ellipse-81-ql3H8Z" src={elpse8162x} />
            <img className="ellipse-82-ql3H8Z" src={elpse8262x} />
            <img className="ellipse-74-ql3H8Z" src={elpse74122x} />
          </div>
          <img className="introducing-X8fKCS" src={intrdc12x} />
          <div className="m-powerwhite-colored-X8fKCS">
            <div className="group-xHRUua"><img className="vector-LFud1Z" src={vctr11302x} /></div>
            <img className="subtract-xHRUua" src={sbtrct212x} />
            <div className="group-79-xHRUua">
              <img className="ellipse-7-WZnges" src={elpse7122x} />
              <img className="ellipse-8-WZnges" src={elpse8452x} />
            </div>
            <div className="group-80-xHRUua">
              <img className="ellipse-7-VwiQxQ" src={elpse7402x} />
              <img className="ellipse-8-VwiQxQ" src={elpse8462x} />
            </div>
            <div className="group-81-xHRUua">
              <img className="ellipse-7-DPCeJC" src={elpse7412x} />
              <img className="ellipse-8-DPCeJC" src={elpse8472x} />
            </div>
          </div>
          <p className="leverage-agile-frame-X8fKCS montserrat-normal-white-16px">
            Providing training, mentoring and employment opportunities with hiring organizations who demonstrate a
            comprehensive commitment to an inclusive workplace.
          </p>
          <div className="leverage-agile-frame-0pQ7Fi montserrat-bold-white-22px">
            A platform to empower and educate minority professionals.
          </div>
          <div className="shapesleft-X8fKCS">
            <img className="ellipse-73-sbZbCF" src={elpse802x} />
            <img className="ellipse-72-sbZbCF" src={elpse812x} />
            <img className="ellipse-79-sbZbCF" src={elpse822x} />
          </div>
          <div className="frame-63-X8fKCS">
            <img className="rectangle-772-5UzQEQ" src={rctngl77232x} />
            <img className="rectangle-773-5UzQEQ" src={rctngl77332x} />
            <img className="rectangle-774-5UzQEQ" src={rctngl77432x} />
          </div>
        </div>
        <div className="navigation-C61RwL">
          <div className="links-xjb0Rz">
            <div className="links-FnCxlc"></div>
          </div>
          <div className="filled-button-xjb0Rz">
            <div className="sign-in-3VjsKE montserrat-bold-white-14px">Take the Survey</div>
          </div>
          <div className="line-button-xjb0Rz" onClick={()=> setModalState(true)} style={{cursor: "pointer"}}>
            <div className="rectangle-718-7UoSe2 border-1px-white"></div>
            <div className="log-in-7UoSe2 montserrat-bold-white-14px">Sign up for Beta</div>
          </div>
          <Link to="/">
            <div className="m-powerwhite-colored-xjb0Rz">
              <div className="group-lNir8u"><img className="vector-npilsQ" src={vctr11312x} /></div>
              <img className="subtract-lNir8u" src={sbtrct222x} />
            </div>
          </Link>
        </div>
        <div className="image-C61RwL">
          <div className="notebook-QfgQzB">
            <img className="object-q7uyGf" src={objct181x} />
            <div className="device-q7uyGf">
              <img className="change-color-4t11Cc" src={chngClr161x} />
              <img className="shadow-4t11Cc" src={shdw161x} />
              <img className="screen-4t11Cc" src={scrn281x} />
            </div>
            <img className="mockup-q7uyGf" src={mckp202x} />
            <img className="border-q7uyGf" src={brdr161x} />
          </div>
          <div className="phone-QfgQzB">
            <img className="object-D1d72C" src={objct12x} />
            <div className="device-D1d72C">
              <img className="change-color-cqQNQZ" src={chngClr212x} />
              <img className="shadow-cqQNQZ" src={shdw12x} />
              <img className="screen-cqQNQZ" src={scrn32x} />
            </div>
            <img className="mockup-D1d72C" src={mckp212x} />
            <img className="border-D1d72C" src={brdr12x} />
          </div>
        </div>
        <div className="shapesleft-C61RwL">
          <img className="ellipse-73-UKBqXM" src={elpse802x} />
          <img className="ellipse-72-UKBqXM" src={elpse812x} />
          <img className="ellipse-74-UKBqXM" src={elpse742x} />
          <img className="ellipse-79-UKBqXM" src={elpse822x} />
        </div>
        <div className="m-power-benefits-for-you-C61RwL montserrat-bold-white-32px">MPower Benefits for You</div>
        <div className="land-your-dream-job-C61RwL montserrat-semi-bold-white-38px">Education</div>
        <div className="list-C61RwL">
          <p className="user-experience-design-5dZqGE montserrat-light-white-12px">
            Learn how to use your minority experience as an asset
          </p>
          <img className="shapes-and-symbols-1-5dZqGE" src={shpsAndSymbls12x} />
        </div>
        <div className="list-VMr6Om">
          <p className="user-experience-design-iK7RIc montserrat-light-white-12px">
            Grow your business and leadership skills with dynamic content
          </p>
          <img className="shapes-and-symbols-1-iK7RIc" src={shpsAndSymbls12x} />
        </div>
        <div className="list-mzXdH9">
          <p className="user-experience-design-H075ZE montserrat-light-white-12px">
            Find inspiration in minority success stories and teachings
          </p>
          <img className="shapes-and-symbols-1-H075ZE" src={shpsAndSymbls12x} />
        </div>
        <div className="image-VMr6Om">
          <div className="notebook-6XZz6l">
            <img className="object-9qhfTY" src={objct181x} />
            <div className="device-9qhfTY">
              <img className="change-color-GYQzfx" src={chngClr221x} />
              <img className="shadow-GYQzfx" src={shdw161x} />
              <img className="screen-GYQzfx" src={scrn361x} />
            </div>
            <img className="mockup-9qhfTY" src={mckp222x} />
            <img className="border-9qhfTY" src={brdr161x} />
          </div>
          <div className="phone-6XZz6l">
            <img className="object-fwnDGB" src={objct12x} />
            <div className="device-fwnDGB">
              <img className="change-color-Pqb4I4" src={chngClr212x} />
              <img className="shadow-Pqb4I4" src={shdw12x} />
              <img className="screen-Pqb4I4" src={scrn32x} />
            </div>
            <img className="mockup-fwnDGB" src={mckp232x} />
            <img className="border-fwnDGB" src={brdr12x} />
          </div>
        </div>
        <div className="shapesright-C61RwL">
          <img className="ellipse-73-uZ523G" src={elpse802x} />
          <img className="ellipse-72-uZ523G" src={elpse812x} />
          <img className="ellipse-79-uZ523G" src={elpse822x} />
          <img className="ellipse-74-uZ523G" src={elpse742x} />
        </div>
        <div className="land-your-dream-job-VMr6Om montserrat-semi-bold-white-38px">Opportunity</div>
        <img className="combined-shape-C61RwL" src={cmbndShp222x} />
        <div className="list-QxM5SU">
          <p className="user-experience-design-mY7ydO montserrat-light-white-12px">
            Find employment within companies committed to supporting minority professionals
          </p>
          <img className="shapes-and-symbols-1-mY7ydO" src={shpsAndSymbls12x} />
        </div>
        <div className="list-2P4qUJ">
          <p className="user-experience-design-gj8Lka montserrat-light-white-12px">
            Accelerate your career through reciprocal mentor relationships
          </p>
          <img className="shapes-and-symbols-1-gj8Lka" src={shpsAndSymbls12x} />
        </div>
        <div className="list-qr8e7q">
          <p className="user-experience-design-hcXFX1 montserrat-light-white-12px">
            Engage in on-going dialogue and professional support within the MPower community
          </p>
          <img className="shapes-and-symbols-1-hcXFX1" src={shpsAndSymbls12x} />
        </div>
        <div className="body-text-C61RwL montserrat-light-white-20px">
          Using proprietary technology MPower is a full scale platform for minority professionals.
        </div>
        <div className="take-your-best-decision-C61RwL montserrat-bold-white-32px">The MPower Platform Features​</div>
        <div className="frame-65-C61RwL">
          <div className="mockups-Kp0bi6">
            <div className="x2-J9ggRY">
              <img className="phone-et9WFm" src={phn142x} />
              <img className="screen-et9WFm" src={scrn242x} />
              <div className="glass-et9WFm">
                <img className="glass-ZXKkVp" src={glss102x} />
                <img className="color-dodge-ZXKkVp" src={clrDdge102x} />
              </div>
              <img className="over-shadow-et9WFm" src={ovrshdw52x} />
            </div>
            <div className="x1-J9ggRY">
              <img className="phone-HdEVyy" src={phn152x} />
              <img className="screen-HdEVyy" src={scrn392x} />
              <div className="glass-HdEVyy">
                <img className="glass-4uFVIe" src={glss112x} />
                <img className="color-dodge-4uFVIe" src={clrDdge112x} />
              </div>
            </div>
          </div>
        </div>
        <div className="block-1-C61RwL">
          <p className="a-wonderful-ser-of-spring-which-hYGNfL montserrat-light-white-16px">
            Knowledge and empowerment through daily delivery of curated stories and articles about Diversity, Equity and
            Inclusion .
          </p>
          <div className="amazing-speed-hYGNfL montserrat-bold-white-24px">News Feed</div>
          <div className="group-590-hYGNfL">
            <div className="rectangle-759-AozqBi"></div>
            <div className="news-AozqBi"><img className="vector-ARB1Qa" src={vctr5392x} /></div>
          </div>
        </div>
        <div className="blocks-l-C61RwL">
          <div className="block-1-FRgD0U">
            <p className="a-wonderful-ser-of-spring-which-HjhWex montserrat-light-white-16px">
              A video-based professional &amp; career development curriculum. Online classes that empower, educate, &amp;
              mentor minority professionals.
            </p>
            <div className="amazing-speed-HjhWex montserrat-bold-white-24px">University</div>
          </div>
          <div className="group-591-FRgD0U">
            <div className="rectangle-759-hbJ0No"></div>
            <div className="vector-hbJ0No"><img className="vector-gVXsHL" src={vctr11132x} /></div>
          </div>
        </div>
        <div className="blocks-l-VMr6Om">
          <div className="block-1-J2xEcm">
            <p className="a-wonderful-ser-of-spring-which-JQjbyW montserrat-light-white-16px">
              Unique tradecraft and life lesson discussions presented by globally recognized celebrities &amp; thought
              leaders.
            </p>
            <div className="amazing-speed-JQjbyW montserrat-bold-white-24px">Keynote</div>
          </div>
          <div className="group-592-J2xEcm">
            <div className="rectangle-759-R4GFw9"></div>
            <div className="master-idle-R4GFw9">
              <div className="group-75-a6k2xR">
                <div className="group-XV5D4N">
                  <div className="group-QkoC5i"><img className="vector-37ovQi" src={vctr5412x} /></div>
                </div>
                <div className="group-NL2NDr">
                  <div className="group-mhxH0R"><img className="vector-JEQUZT" src={vctr5422x} /></div>
                </div>
                <div className="group-xC9krj">
                  <div className="group-HJoBEO"><img className="vector-wRge3V" src={vctr5432x} /></div>
                </div>
                <div className="group-WIR1v6">
                  <div className="group-8wsGAh"><img className="vector-6DkdbH" src={vctr5442x} /></div>
                </div>
                <div className="group-eZuiLp">
                  <div className="group-ap6NKd"><img className="vector-4Grx6h" src={vctr5452x} /></div>
                </div>
                <div className="group-X60Cvu">
                  <div className="group-cbm9MB"><img className="vector-tGpqBe" src={vctr5462x} /></div>
                </div>
                <div className="group-uxO0QB">
                  <div className="group-NSf0Ar"><img className="vector-EsNi4B" src={vctr5472x} /></div>
                </div>
                <div className="group-p5uhvD">
                  <div className="group-ERxX1c"><img className="vector-prsxEQ" src={vctr5482x} /></div>
                </div>
                <div className="group-PFJF24">
                  <div className="group-pcM0fb"><img className="vector-qxfCIT" src={vctr5492x} /></div>
                </div>
                <div className="group-paxBxB">
                  <div className="group-V41hRG"><img className="vector-Q7lB0J" src={vctr5502x} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blocks-r-C61RwL">
          <div className="block-1-C8JcQ6">
            <p className="a-wonderful-ser-of-spring-which-xbuxmT montserrat-light-white-16px">
              Career advancement through M2N engagement with hiring organizations seeking to recruit diverse candidates.
            </p>
            <div className="amazing-speed-xbuxmT montserrat-bold-white-24px">Jobs</div>
          </div>
          <div className="group-587-C8JcQ6">
            <div className="rectangle-759-HIqYii"></div>
            <div className="briefcase-idle-HIqYii"><img className="vector-7NiCqW" src={vctr5512x} /></div>
          </div>
        </div>
        <div className="blocks-r-VMr6Om">
          <div className="block-1-lKCHaY">
            <p className="a-wonderful-ser-of-spring-which-YgfePG montserrat-light-white-16px">
              Talent scoring metrics for M2N internal recruiting based upon education, employment experience and activity
              within the platform.
            </p>
            <div className="amazing-speed-YgfePG montserrat-bold-white-24px">Talent Score</div>
          </div>
          <div className="group-588-lKCHaY">
            <div className="rectangle-759-DhTR3s"></div>
            <div className="score-DhTR3s">
              <div className="group-Jig3S3">
                <img className="vector-ZALkAD" src={vctr5522x} />
                <img className="vector-UUJMGM" src={vctr5532x} />
                <img className="vector-bqRaZp" src={vctr5542x} />
              </div>
            </div>
          </div>
        </div>
        <div className="block-1-VMr6Om">
          <p className="a-wonderful-ser-of-spring-which-5cD2NF montserrat-light-white-16px">
            Services to support new minority hires and the hiring organization to insure minority employees are engaged
            and contributing in their new role.​
          </p>
          <div className="amazing-speed-5cD2NF montserrat-bold-white-24px">Systems &amp; Services</div>
          <div className="group-589-5cD2NF">
            <div className="rectangle-759-mmqPLj"></div>
            <div className="more-mmqPLj"><img className="vector-gxIfC7" src={vctr11282x} /></div>
          </div>
        </div>
        <img className="bg-C61RwL" src={bg61x} />
        <div className="imagesleft-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-aqX065" src={d041162x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-rH2EGN" src={d04192x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-sA1blt" src={d041182x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-iv3cuI" src={d041192x} />
          <img className="ellipse-73-aqX065" src={elpse802x} />
          <img className="ellipse-72-aqX065" src={elpse812x} />
          <img className="ellipse-79-aqX065" src={elpse822x} />
          <img className="ellipse-74-aqX065" src={elpse742x} />
        </div>
        <div className="imagesright-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-JHLziL" src={d04142x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oCFqdE" src={d041132x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oIkETf" src={d04162x} />
          <img className="x882704-ce-e445-a8-a613-b0-d041-yCrqj2" src={d04172x} />
          <img className="ellipse-80-JHLziL" src={elpse802x} />
          <img className="ellipse-81-JHLziL" src={elpse812x} />
          <img className="ellipse-82-JHLziL" src={elpse822x} />
          <img className="ellipse-83-JHLziL" src={elpse742x} />
        </div>
        <div className="content-C61RwL">
          <div className="express-your-thought-xUsx1L montserrat-bold-white-32px">
            Help our vision come to life with your feedback
          </div>
          <div className="button-xUsx1L">
            <div className="rectangle-89-eF6efs"></div>
            <div className="try-14-days-free-tri-eF6efs montserrat-bold-white-16px">Take the Survey</div>
          </div>
        </div>
        <div className="bg-VMr6Om"></div>
        <div className="rectangle-771-C61RwL"></div>
        <div className="m-powerwhite-square-C61RwL">
          <div className="logo-xeqJcl">
            <div className="group-AdFGRd"><img className="vector-023lla" src={vctr11292x} /></div>
            <img className="subtract-AdFGRd" src={sbtrct122x} />
          </div>
        </div>
        <p className="copyright-2020-laa-C61RwL montserrat-normal-white-16px-2">
          Copyright © 2020 M2N. All Rights Reserved.
        </p>
        <div className="linksright-C61RwL">
          <div className="privacy-policy-ocPzvE montserrat-normal-white-16px">Privacy Policy</div>
          <div className="terms-of-use-ocPzvE montserrat-normal-white-16px">Terms of Use</div>
        </div>
        <div className="download-C61RwL">
          <div className="get-appex-on-your-device-Z2deF4 montserrat-bold-white-16px">Download the App</div>
          <div className="button-Z2deF4">
            <div className="app-store-E39PQu">
              <img className="path-3-YxXJMJ" src={pth392x} />
              <img className="path-4-YxXJMJ" src={pth412x} />
              <img className="path-5-YxXJMJ" src={pth52x} />
              <div className="group-2-YxXJMJ"><img className="path-6-hvwlaS" src={pth6102x} /></div>
              <div className="group-3-YxXJMJ"><img className="path-7-KT2pOy" src={pth702x} /></div>
            </div>
            <div className="play-store-E39PQu">
              <img className="path-8-hSbW8M" src={pth832x} />
              <img className="path-9-hSbW8M" src={pth52x} />
              <img className="path-10-hSbW8M" src={pth1032x} />
              <img className="path-11-hSbW8M" src={pth1132x} />
              <div className="group-4-hSbW8M">
                <img className="path-12-adm0ag" src={pth1262x} />
                <img className="path-13-adm0ag" src={pth1332x} />
                <img className="path-14-adm0ag" src={pth1462x} />
                <img className="path-15-adm0ag" src={pth1532x} />
                <img className="path-16-adm0ag" src={pth1632x} />
                <img className="path-17-adm0ag" src={pth1732x} />
                <img className="path-18-adm0ag" src={pth1862x} />
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-C61RwL">
          <p className="subscribe-to-our-newsletter-09RRMv montserrat-bold-white-16px">Sign up to receive Beta Access</p>
          <div className="e-mail-feild-09RRMv">
            <div className="rectangle-645-9Ntqw8 border-1px-black-2"></div>
            <input
              className="enter-your-email-add-9Ntqw8 montserrat-light-white-12px"
              name="enter-your-email-add"
              placeholder="Enter your email address"
              type="email"
              required
            />
            <div className="subscribe-button-9Ntqw8">
              <div className="rectangle-646-cTqFxG"></div>
              <div className="subscribe-cTqFxG montserrat-bold-white-16px">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MPowerPage
