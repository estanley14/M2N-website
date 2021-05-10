import React, { useState } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavDesktop from "../components/navDesktop"
import NavTablet from "../components/navTablet"
import NavMobile from "../components/navMobile"
import EmailModal from "../components/emailModal"

const MPowerPage = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <Layout>
      <Seo title="MPower App" />
      <input type="hidden" id="anPageName" name="page" value="mpower-landing-mobile-320px" />
      {modalState && <EmailModal setModalState={setModalState} />}
      <div className="mpower-landing-desktop-1440px screen">
        <div className="frame-64-C61RwL">
          <img className="bg-X8fKCS" src="./import/img/bg-1@1x.png" />
          <div className="introducing-X8fKCS">
            <span className="span0-UaiKvE">Introducing</span><span className="span1-UaiKvE">&nbsp;</span>
          </div>
          <div className="m-powerwhite-colored-X8fKCS">
            <div className="group-xHRUua"><img className="vector-LFud1Z" src="./import/img/vector-537@2x.png" /></div>
            <img className="subtract-xHRUua" src="./import/img/subtract-10@2x.png" />
            <div className="group-79-xHRUua">
              <img className="ellipse-7-WZnges" src="./import/img/ellipse-7-30@2x.png" />
              <img className="ellipse-8-WZnges" src="./import/img/ellipse-8-30@2x.png" />
            </div>
            <div className="group-80-xHRUua">
              <img className="ellipse-7-VwiQxQ" src="./import/img/ellipse-7-31@2x.png" />
              <img className="ellipse-8-VwiQxQ" src="./import/img/ellipse-8-31@2x.png" />
            </div>
            <div className="group-81-xHRUua">
              <img className="ellipse-7-DPCeJC" src="./import/img/ellipse-7-32@2x.png" />
              <img className="ellipse-8-DPCeJC" src="./import/img/ellipse-8-32@2x.png" />
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
            <img className="mockups-1-ql3H8Z" src="./import/img/mockups-1-3@1x.png" />
            <img className="ellipse-80-ql3H8Z" src="./import/img/ellipse-80@2x.png" />
            <img className="ellipse-81-ql3H8Z" src="./import/img/ellipse-81@2x.png" />
            <img className="ellipse-82-ql3H8Z" src="./import/img/ellipse-82@2x.png" />
            <img className="ellipse-74-ql3H8Z" src="./import/img/ellipse-74@2x.png" />
          </div>
          <div className="shapesleft-X8fKCS">
            <img className="ellipse-73-sbZbCF" src="./import/img/ellipse-80@2x.png" />
            <img className="ellipse-72-sbZbCF" src="./import/img/ellipse-81@2x.png" />
            <img className="ellipse-79-sbZbCF" src="./import/img/ellipse-82@2x.png" />
          </div>
          <div className="frame-63-X8fKCS">
            <img className="rectangle-772-5UzQEQ" src="./import/img/rectangle-772@2x.png" />
            <img className="rectangle-773-5UzQEQ" src="./import/img/rectangle-773@2x.png" />
            <img className="rectangle-774-5UzQEQ" src="./import/img/rectangle-774@2x.png" />
            <img className="rectangle-775-5UzQEQ" src="./import/img/rectangle-775@2x.png" />
            <img className="rectangle-776-5UzQEQ" src="./import/img/rectangle-776@2x.png" />
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
          <div className="m-powerwhite-colored-xjb0Rz">
            <div className="group-lNir8u"><img className="vector-npilsQ" src="./import/img/vector-538@2x.png" /></div>
            <img className="subtract-lNir8u" src="./import/img/subtract-11@2x.png" />
          </div>
        </div>
        <div className="image-C61RwL">
          <div className="notebook-QfgQzB">
            <img className="object-q7uyGf" src="./import/img/object-6@1x.png" />
            <div className="device-q7uyGf">
              <img className="change-color-4t11Cc" src="./import/img/change-color@1x.png" />
              <img className="shadow-4t11Cc" src="./import/img/shadow@1x.png" />
              <img className="screen-4t11Cc" src="./import/img/screen-12@1x.png" />
            </div>
            <img className="mockup-q7uyGf" src="./import/img/mockup-6@1x.png" />
            <img className="border-q7uyGf" src="./import/img/border-6@1x.png" />
          </div>
          <div className="phone-QfgQzB">
            <img className="object-D1d72C" src="./import/img/object-1@2x.png" />
            <div className="device-D1d72C">
              <img className="change-color-cqQNQZ" src="./import/img/change-color-7@2x.png" />
              <img className="shadow-cqQNQZ" src="./import/img/shadow-1@2x.png" />
              <img className="screen-cqQNQZ" src="./import/img/screen-3@2x.png" />
            </div>
            <img className="mockup-D1d72C" src="./import/img/mockup-7@2x.png" />
            <img className="border-D1d72C" src="./import/img/border-1@2x.png" />
          </div>
        </div>
        <div className="shapesleft-C61RwL">
          <img className="ellipse-73-UKBqXM" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-UKBqXM" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-74-UKBqXM" src="./import/img/ellipse-74@2x.png" />
          <img className="ellipse-79-UKBqXM" src="./import/img/ellipse-82@2x.png" />
        </div>
        <div className="land-your-dream-job-C61RwL montserrat-semi-bold-white-38px">Education</div>
        <div className="list-C61RwL">
          <p className="user-experience-design-5dZqGE montserrat-light-white-16px">
            Learn how to use your minority experience as an asset
          </p>
          <img className="shapes-and-symbols-1-5dZqGE" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-VMr6Om">
          <p className="user-experience-design-iK7RIc montserrat-light-white-16px">
            Grow your business and leadership skills with dynamic content
          </p>
          <img className="shapes-and-symbols-1-iK7RIc" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-mzXdH9">
          <p className="user-experience-design-H075ZE montserrat-light-white-16px">
            Find inspiration in minority success stories and teachings
          </p>
          <img className="shapes-and-symbols-1-H075ZE" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="land-your-dream-job-VMr6Om montserrat-semi-bold-white-38px">Opportunity</div>
        <div className="image-VMr6Om">
          <div className="notebook-6XZz6l">
            <img className="object-9qhfTY" src="./import/img/object-6@1x.png" />
            <div className="device-9qhfTY">
              <img className="change-color-GYQzfx" src="./import/img/change-color@1x.png" />
              <img className="shadow-GYQzfx" src="./import/img/shadow@1x.png" />
              <img className="screen-GYQzfx" src="./import/img/screen-12@1x.png" />
            </div>
            <img className="mockup-9qhfTY" src="./import/img/mockup-8@1x.png" />
            <img className="border-9qhfTY" src="./import/img/border-6@1x.png" />
          </div>
          <div className="phone-6XZz6l">
            <img className="object-fwnDGB" src="./import/img/object-1@2x.png" />
            <div className="device-fwnDGB">
              <img className="change-color-Pqb4I4" src="./import/img/change-color-7@2x.png" />
              <img className="shadow-Pqb4I4" src="./import/img/shadow-1@2x.png" />
              <img className="screen-Pqb4I4" src="./import/img/screen-3@2x.png" />
            </div>
            <img className="mockup-fwnDGB" src="./import/img/mockup-9@2x.png" />
            <img className="border-fwnDGB" src="./import/img/border-1@2x.png" />
          </div>
        </div>
        <div className="list-QxM5SU">
          <p className="user-experience-design-mY7ydO montserrat-light-white-16px">
            Find employment within companies committed to supporting minority professionals
          </p>
          <img className="shapes-and-symbols-1-mY7ydO" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-2P4qUJ">
          <p className="user-experience-design-gj8Lka montserrat-light-white-16px">
            Accelerate your career through reciprocal mentor relationships
          </p>
          <img className="shapes-and-symbols-1-gj8Lka" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-qr8e7q">
          <p className="user-experience-design-hcXFX1 montserrat-light-white-16px">
            Engage in on-going dialogue and professional support within the MPower community
          </p>
          <img className="shapes-and-symbols-1-hcXFX1" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="shapesright-C61RwL">
          <img className="ellipse-73-uZ523G" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-uZ523G" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-79-uZ523G" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-74-uZ523G" src="./import/img/ellipse-74@2x.png" />
        </div>
        <img className="combined-shape-C61RwL" src="./import/img/combined-shape-9@2x.png" />
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
            <div className="news-AozqBi"><img className="vector-ARB1Qa" src="./import/img/vector-539@2x.png" /></div>
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
            <div className="vector-hbJ0No"><img className="vector-gVXsHL" src="./import/img/vector-540@2x.png" /></div>
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
                  <div className="group-QkoC5i"><img className="vector-37ovQi" src="./import/img/vector-541@2x.png" /></div>
                </div>
                <div className="group-NL2NDr">
                  <div className="group-mhxH0R"><img className="vector-JEQUZT" src="./import/img/vector-542@2x.png" /></div>
                </div>
                <div className="group-xC9krj">
                  <div className="group-HJoBEO"><img className="vector-wRge3V" src="./import/img/vector-543@2x.png" /></div>
                </div>
                <div className="group-WIR1v6">
                  <div className="group-8wsGAh"><img className="vector-6DkdbH" src="./import/img/vector-544@2x.png" /></div>
                </div>
                <div className="group-eZuiLp">
                  <div className="group-ap6NKd"><img className="vector-4Grx6h" src="./import/img/vector-545@2x.png" /></div>
                </div>
                <div className="group-X60Cvu">
                  <div className="group-cbm9MB"><img className="vector-tGpqBe" src="./import/img/vector-546@2x.png" /></div>
                </div>
                <div className="group-uxO0QB">
                  <div className="group-NSf0Ar"><img className="vector-EsNi4B" src="./import/img/vector-547@2x.png" /></div>
                </div>
                <div className="group-p5uhvD">
                  <div className="group-ERxX1c"><img className="vector-prsxEQ" src="./import/img/vector-548@2x.png" /></div>
                </div>
                <div className="group-PFJF24">
                  <div className="group-pcM0fb"><img className="vector-qxfCIT" src="./import/img/vector-549@2x.png" /></div>
                </div>
                <div className="group-paxBxB">
                  <div className="group-V41hRG"><img className="vector-Q7lB0J" src="./import/img/vector-550@2x.png" /></div>
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
            <div className="briefcase-idle-HIqYii"><img className="vector-7NiCqW" src="./import/img/vector-551@2x.png" /></div>
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
                <img className="vector-ZALkAD" src="./import/img/vector-552@2x.png" />
                <img className="vector-UUJMGM" src="./import/img/vector-553@2x.png" />
                <img className="vector-bqRaZp" src="./import/img/vector-554@2x.png" />
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
            <div className="more-mmqPLj"><img className="vector-gxIfC7" src="./import/img/vector-555@2x.png" /></div>
          </div>
        </div>
        <div className="mockups-C61RwL">
          <div className="x2-jtfs6Y">
            <img className="phone-CDWWkV" src="./import/img/phone-6@2x.png" />
            <img className="screen-CDWWkV" src="./import/img/screen-16@2x.png" />
            <div className="glass-CDWWkV">
              <img className="glass-wMCr1d" src="./import/img/glass-6@2x.png" />
              <img className="color-dodge-wMCr1d" src="./import/img/color-dodge-6@2x.png" />
            </div>
            <img className="over-shadow-CDWWkV" src="./import/img/over-shadow-3@2x.png" />
          </div>
          <div className="x1-jtfs6Y">
            <img className="phone-LfyeOB" src="./import/img/phone-7@2x.png" />
            <img className="screen-LfyeOB" src="./import/img/screen-17@2x.png" />
            <div className="glass-LfyeOB">
              <img className="glass-ymOsyf" src="./import/img/glass-7@2x.png" />
              <img className="color-dodge-ymOsyf" src="./import/img/color-dodge-7@2x.png" />
            </div>
          </div>
        </div>
        <div className="m-power-benefits-for-you-C61RwL montserrat-bold-white-42px">MPower Benefits for You</div>
        <img className="bg-C61RwL" src="./import/img/bg@1x.png" />
        <div className="imagesleft-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-aqX065" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-rH2EGN" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-1@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-sA1blt" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-2@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-iv3cuI" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-3@2x.png" />
          <img className="ellipse-73-aqX065" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-aqX065" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-79-aqX065" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-74-aqX065" src="./import/img/ellipse-74@2x.png" />
        </div>
        <div className="imagesright-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-JHLziL" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-4@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oCFqdE" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-5@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oIkETf" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-6@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-yCrqj2" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-7@2x.png" />
          <img className="ellipse-80-JHLziL" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-81-JHLziL" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-82-JHLziL" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-83-JHLziL" src="./import/img/ellipse-74@2x.png" />
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
          <div className="group-exFKkL"><img className="vector-LRM1jR" src="./import/img/vector-556@2x.png" /></div>
          <img className="subtract-exFKkL" src="./import/img/subtract-12@2x.png" />
        </div>
        <p className="copyright-2020-laa-C61RwL montserrat-normal-white-16px-2">
          Copyright © 2020 Lorem Ipsum. All Rights Reserved.
        </p>
        <div className="linksright-C61RwL">
          <div className="privacy-policy-ocPzvE montserrat-normal-white-16px">Privacy Policy</div>
          <div className="terms-of-use-ocPzvE montserrat-normal-white-16px">Terms of Use</div>
        </div>
        <div className="download-C61RwL">
          <div className="get-appex-on-your-device-Z2deF4 montserrat-bold-white-16px">Download the App</div>
          <div className="button-Z2deF4">
            <div className="app-store-E39PQu">
              <img className="path-3-YxXJMJ" src="./import/img/path-3-9@2x.png" />
              <img className="path-4-YxXJMJ" src="./import/img/path-4-6@2x.png" />
              <img className="path-5-YxXJMJ" src="./import/img/path-5@2x.png" />
              <div className="group-2-YxXJMJ"><img className="path-6-hvwlaS" src="./import/img/path-6-6@2x.png" /></div>
              <div className="group-3-YxXJMJ"><img className="path-7-KT2pOy" src="./import/img/path-7-6@2x.png" /></div>
            </div>
            <div className="play-store-E39PQu">
              <img className="path-8-hSbW8M" src="./import/img/path-8-3@2x.png" />
              <img className="path-9-hSbW8M" src="./import/img/path-5@2x.png" />
              <img className="path-10-hSbW8M" src="./import/img/path-10-3@2x.png" />
              <img className="path-11-hSbW8M" src="./import/img/path-11-3@2x.png" />
              <div className="group-4-hSbW8M">
                <img className="path-12-adm0ag" src="./import/img/path-12-3@2x.png" />
                <img className="path-13-adm0ag" src="./import/img/path-13-3@2x.png" />
                <img className="path-14-adm0ag" src="./import/img/path-14-3@2x.png" />
                <img className="path-15-adm0ag" src="./import/img/path-15-3@2x.png" />
                <img className="path-16-adm0ag" src="./import/img/path-16-3@2x.png" />
                <img className="path-17-adm0ag" src="./import/img/path-17-3@2x.png" />
                <img className="path-18-adm0ag" src="./import/img/path-18-3@2x.png" />
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
          <img className="bg-X8fKCS" src="./import/img/bg-3@1x.png" />
          <div className="img-X8fKCS">
            <img className="mockups-1-ql3H8Z" src="./import/img/mockups-1-5@2x.png" />
            <img className="ellipse-80-ql3H8Z" src="./import/img/ellipse-80-2@2x.png" />
            <img className="ellipse-81-ql3H8Z" src="./import/img/ellipse-81-2@2x.png" />
            <img className="ellipse-82-ql3H8Z" src="./import/img/ellipse-82-2@2x.png" />
            <img className="ellipse-74-ql3H8Z" src="./import/img/ellipse-74-4@2x.png" />
          </div>
          <img className="introducing-X8fKCS" src="./import/img/introducing@2x.png" />
          <div className="m-powerwhite-colored-X8fKCS">
            <div className="group-xHRUua"><img className="vector-LFud1Z" src="./import/img/vector-959@2x.png" /></div>
            <img className="subtract-xHRUua" src="./import/img/subtract-15@2x.png" />
            <div className="group-79-xHRUua">
              <img className="ellipse-7-WZnges" src="./import/img/ellipse-7-12@2x.png" />
              <img className="ellipse-8-WZnges" src="./import/img/ellipse-8-39@2x.png" />
            </div>
            <div className="group-80-xHRUua">
              <img className="ellipse-7-VwiQxQ" src="./import/img/ellipse-7-40@2x.png" />
              <img className="ellipse-8-VwiQxQ" src="./import/img/ellipse-8-40@2x.png" />
            </div>
            <div className="group-81-xHRUua">
              <img className="ellipse-7-DPCeJC" src="./import/img/ellipse-7-41@2x.png" />
              <img className="ellipse-8-DPCeJC" src="./import/img/ellipse-8-41@2x.png" />
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
            <img className="ellipse-73-sbZbCF" src="./import/img/ellipse-80@2x.png" />
            <img className="ellipse-72-sbZbCF" src="./import/img/ellipse-81@2x.png" />
            <img className="ellipse-79-sbZbCF" src="./import/img/ellipse-79-4@2x.png" />
          </div>
          <div className="frame-63-X8fKCS">
            <img className="rectangle-772-5UzQEQ" src="./import/img/rectangle-772-1@2x.png" />
            <img className="rectangle-773-5UzQEQ" src="./import/img/rectangle-773-1@2x.png" />
            <img className="rectangle-774-5UzQEQ" src="./import/img/rectangle-774-1@2x.png" />
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
          <div className="m-powerwhite-colored-xjb0Rz">
            <div className="group-lNir8u"><img className="vector-npilsQ" src="./import/img/vector-960@2x.png" /></div>
            <img className="subtract-lNir8u" src="./import/img/subtract-16@2x.png" />
          </div>
        </div>
        <div className="shapesleft-C61RwL">
          <img className="ellipse-73-UKBqXM" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-UKBqXM" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-74-UKBqXM" src="./import/img/ellipse-74-5@2x.png" />
          <img className="ellipse-79-UKBqXM" src="./import/img/ellipse-79-4@2x.png" />
        </div>
        <div className="list-C61RwL">
          <p className="user-experience-design-5dZqGE montserrat-light-white-12px">
            Learn how to use your minority experience as an asset
          </p>
          <img className="shapes-and-symbols-1-5dZqGE" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-VMr6Om">
          <p className="user-experience-design-iK7RIc montserrat-light-white-12px">
            Grow your business and leadership skills with dynamic content
          </p>
          <img className="shapes-and-symbols-1-iK7RIc" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-mzXdH9">
          <p className="user-experience-design-H075ZE montserrat-light-white-12px">
            Find inspiration in minority success stories and teachings
          </p>
          <img className="shapes-and-symbols-1-H075ZE" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="land-your-dream-job-C61RwL montserrat-semi-bold-white-38px">Education</div>
        <div className="m-power-benefits-for-you-C61RwL montserrat-bold-white-32px">MPower Benefits for You</div>
        <div className="image-C61RwL">
          <div className="notebook-QfgQzB">
            <img className="object-q7uyGf" src="./import/img/object-12@2x.png" />
            <div className="device-q7uyGf">
              <img className="change-color-4t11Cc" src="./import/img/change-color-12@2x.png" />
              <img className="shadow-4t11Cc" src="./import/img/shadow-12@2x.png" />
              <img className="screen-4t11Cc" src="./import/img/screen-22@2x.png" />
            </div>
            <img className="mockup-q7uyGf" src="./import/img/mockup-12@2x.png" />
            <img className="border-q7uyGf" src="./import/img/border-12@2x.png" />
          </div>
          <div className="phone-QfgQzB">
            <img className="object-D1d72C" src="./import/img/object-13@2x.png" />
            <div className="device-D1d72C">
              <img className="change-color-cqQNQZ" src="./import/img/change-color-13@2x.png" />
              <img className="shadow-cqQNQZ" src="./import/img/shadow-13@2x.png" />
              <img className="screen-cqQNQZ" src="./import/img/screen-23@2x.png" />
            </div>
            <img className="mockup-D1d72C" src="./import/img/mockup-13@2x.png" />
            <img className="border-D1d72C" src="./import/img/border-13@2x.png" />
          </div>
        </div>
        <div className="land-your-dream-job-VMr6Om montserrat-semi-bold-white-38px">Opportunity</div>
        <div className="list-QxM5SU">
          <p className="user-experience-design-mY7ydO montserrat-light-white-12px">
            Find employment within companies committed to supporting minority professionals
          </p>
          <img className="shapes-and-symbols-1-mY7ydO" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-2P4qUJ">
          <p className="user-experience-design-gj8Lka montserrat-light-white-12px">
            Accelerate your career through reciprocal mentor relationships
          </p>
          <img className="shapes-and-symbols-1-gj8Lka" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-qr8e7q">
          <p className="user-experience-design-hcXFX1 montserrat-light-white-12px">
            Engage in on-going dialogue and professional support within the MPower community
          </p>
          <img className="shapes-and-symbols-1-hcXFX1" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="body-text-C61RwL montserrat-light-white-20px">
          Using proprietary technology MPower is a full scale platform for minority professionals.
        </div>
        <div className="take-your-best-decision-C61RwL montserrat-bold-white-32px">The MPower Platform Features​</div>
        <div className="frame-65-C61RwL">
          <div className="mockups-Kp0bi6">
            <div className="x2-J9ggRY">
              <img className="phone-et9WFm" src="./import/img/phone-10@2x.png" />
              <img className="screen-et9WFm" src="./import/img/screen-24@2x.png" />
              <div className="glass-et9WFm">
                <img className="glass-ZXKkVp" src="./import/img/glass-10@2x.png" />
                <img className="color-dodge-ZXKkVp" src="./import/img/color-dodge-10@2x.png" />
              </div>
              <img className="over-shadow-et9WFm" src="./import/img/over-shadow-5@2x.png" />
            </div>
            <div className="x1-J9ggRY">
              <img className="phone-HdEVyy" src="./import/img/phone-11@2x.png" />
              <img className="screen-HdEVyy" src="./import/img/screen-25@2x.png" />
              <div className="glass-HdEVyy">
                <img className="glass-4uFVIe" src="./import/img/glass-11@2x.png" />
                <img className="color-dodge-4uFVIe" src="./import/img/color-dodge-11@2x.png" />
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
            <div className="news-AozqBi"><img className="vector-ARB1Qa" src="./import/img/vector-539@2x.png" /></div>
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
            <div className="vector-hbJ0No"><img className="vector-gVXsHL" src="./import/img/vector-962@2x.png" /></div>
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
                  <div className="group-QkoC5i"><img className="vector-37ovQi" src="./import/img/vector-541@2x.png" /></div>
                </div>
                <div className="group-NL2NDr">
                  <div className="group-mhxH0R"><img className="vector-JEQUZT" src="./import/img/vector-542@2x.png" /></div>
                </div>
                <div className="group-xC9krj">
                  <div className="group-HJoBEO"><img className="vector-wRge3V" src="./import/img/vector-543@2x.png" /></div>
                </div>
                <div className="group-WIR1v6">
                  <div className="group-8wsGAh"><img className="vector-6DkdbH" src="./import/img/vector-544@2x.png" /></div>
                </div>
                <div className="group-eZuiLp">
                  <div className="group-ap6NKd"><img className="vector-4Grx6h" src="./import/img/vector-545@2x.png" /></div>
                </div>
                <div className="group-X60Cvu">
                  <div className="group-cbm9MB"><img className="vector-tGpqBe" src="./import/img/vector-968@2x.png" /></div>
                </div>
                <div className="group-uxO0QB">
                  <div className="group-NSf0Ar"><img className="vector-EsNi4B" src="./import/img/vector-547@2x.png" /></div>
                </div>
                <div className="group-p5uhvD">
                  <div className="group-ERxX1c"><img className="vector-prsxEQ" src="./import/img/vector-548@2x.png" /></div>
                </div>
                <div className="group-PFJF24">
                  <div className="group-pcM0fb"><img className="vector-qxfCIT" src="./import/img/vector-971@2x.png" /></div>
                </div>
                <div className="group-paxBxB">
                  <div className="group-V41hRG"><img className="vector-Q7lB0J" src="./import/img/vector-972@2x.png" /></div>
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
            <div className="briefcase-idle-HIqYii"><img className="vector-7NiCqW" src="./import/img/vector-551@2x.png" /></div>
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
                <img className="vector-ZALkAD" src="./import/img/vector-552@2x.png" />
                <img className="vector-UUJMGM" src="./import/img/vector-553@2x.png" />
                <img className="vector-bqRaZp" src="./import/img/vector-554@2x.png" />
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
              <div className="more-cssSmj"><img className="vector-0LcX4U" src="./import/img/vector-977@2x.png" /></div>
            </div>
          </div>
        </div>
        <img className="bg-C61RwL" src="./import/img/bg-2@2x.png" />
        <div className="imagesleft-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-aqX065" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-8@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-rH2EGN" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-9@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-sA1blt" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-10@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-iv3cuI" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-11@2x.png" />
          <img className="ellipse-73-aqX065" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-aqX065" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-79-aqX065" src="./import/img/ellipse-79-4@2x.png" />
          <img className="ellipse-74-aqX065" src="./import/img/ellipse-74-5@2x.png" />
        </div>
        <div className="imagesright-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-JHLziL" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-4@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oCFqdE" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-13@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oIkETf" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-6@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-yCrqj2" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-7@2x.png" />
          <img className="ellipse-80-JHLziL" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-81-JHLziL" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-82-JHLziL" src="./import/img/ellipse-79-4@2x.png" />
          <img className="ellipse-83-JHLziL" src="./import/img/ellipse-74-5@2x.png" />
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
            <div className="group-AdFGRd"><img className="vector-023lla" src="./import/img/vector-978@2x.png" /></div>
            <img className="subtract-AdFGRd" src="./import/img/subtract-12@2x.png" />
          </div>
        </div>
        <p className="copyright-2020-laa-C61RwL montserrat-normal-white-16px-2">
          Copyright © 2020 Lorem Ipsum. All Rights Reserved.
        </p>
        <div className="group-593-C61RwL">
          <div className="privacy-policy-kx0xZX montserrat-normal-white-16px">Privacy Policy</div>
          <div className="terms-of-use-kx0xZX montserrat-normal-white-16px">Terms of Use</div>
        </div>
        <div className="download-C61RwL">
          <div className="get-appex-on-your-device-Z2deF4 montserrat-bold-white-16px">Download the App</div>
          <div className="button-Z2deF4">
            <div className="play-store-E39PQu">
              <img className="path-8-hSbW8M" src="./import/img/path-8-5@2x.png" />
              <img className="path-9-hSbW8M" src="./import/img/path-5@2x.png" />
              <img className="path-10-hSbW8M" src="./import/img/path-10-5@2x.png" />
              <img className="path-11-hSbW8M" src="./import/img/path-11-5@2x.png" />
              <div className="group-4-hSbW8M">
                <img className="path-12-adm0ag" src="./import/img/path-12-5@2x.png" />
                <img className="path-13-adm0ag" src="./import/img/path-13-5@2x.png" />
                <img className="path-14-adm0ag" src="./import/img/path-14-5@2x.png" />
                <img className="path-15-adm0ag" src="./import/img/path-15-5@2x.png" />
                <img className="path-16-adm0ag" src="./import/img/path-16-5@2x.png" />
                <img className="path-17-adm0ag" src="./import/img/path-17-5@2x.png" />
                <img className="path-18-adm0ag" src="./import/img/path-18-5@2x.png" />
              </div>
            </div>
            <div className="app-store-E39PQu">
              <img className="path-3-YxXJMJ" src="./import/img/path-3-9@2x.png" />
              <img className="path-4-YxXJMJ" src="./import/img/path-4-9@2x.png" />
              <img className="path-5-YxXJMJ" src="./import/img/path-5@2x.png" />
              <div className="group-2-YxXJMJ"><img className="path-6-hvwlaS" src="./import/img/path-6-9@2x.png" /></div>
              <div className="group-3-YxXJMJ"><img className="path-7-KT2pOy" src="./import/img/path-7-9@2x.png" /></div>
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
            <img className="object-9qhfTY" src="./import/img/object-14@2x.png" />
            <div className="device-9qhfTY">
              <img className="change-color-GYQzfx" src="./import/img/change-color-14@2x.png" />
              <img className="shadow-GYQzfx" src="./import/img/shadow-14@2x.png" />
              <img className="screen-GYQzfx" src="./import/img/screen-26@2x.png" />
            </div>
            <img className="mockup-9qhfTY" src="./import/img/mockup-14@2x.png" />
            <img className="border-9qhfTY" src="./import/img/border-14@2x.png" />
          </div>
          <div className="phone-6XZz6l">
            <img className="object-fwnDGB" src="./import/img/object-15@2x.png" />
            <div className="device-fwnDGB">
              <img className="change-color-Pqb4I4" src="./import/img/change-color-15@2x.png" />
              <img className="shadow-Pqb4I4" src="./import/img/shadow-15@2x.png" />
              <img className="screen-Pqb4I4" src="./import/img/screen-27@2x.png" />
            </div>
            <img className="mockup-fwnDGB" src="./import/img/mockup-15@2x.png" />
            <img className="border-fwnDGB" src="./import/img/border-15@2x.png" />
          </div>
        </div>
        <div className="shapesright-C61RwL">
          <img className="ellipse-73-uZ523G" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-uZ523G" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-79-uZ523G" src="./import/img/ellipse-79-4@2x.png" />
          <img className="ellipse-74-uZ523G" src="./import/img/ellipse-74-5@2x.png" />
        </div>
      </div>
      <div className="mpower-landing-desktop-1024px screen">
        <div className="frame-64-C61RwL">
          <img className="bg-X8fKCS" src="./import/img/bg-5@1x.png" />
          <div className="introducing-X8fKCS">
            <span className="span0-UaiKvE">Introducing</span><span className="span1-UaiKvE">&nbsp;</span>
          </div>
          <div className="m-powerwhite-colored-X8fKCS">
            <div className="group-xHRUua"><img className="vector-LFud1Z" src="./import/img/vector-537@2x.png" /></div>
            <img className="subtract-xHRUua" src="./import/img/subtract-18@2x.png" />
            <div className="group-79-xHRUua">
              <img className="ellipse-7-WZnges" src="./import/img/ellipse-7-30@2x.png" />
              <img className="ellipse-8-WZnges" src="./import/img/ellipse-8-42@2x.png" />
            </div>
            <div className="group-80-xHRUua">
              <img className="ellipse-7-VwiQxQ" src="./import/img/ellipse-7-43@2x.png" />
              <img className="ellipse-8-VwiQxQ" src="./import/img/ellipse-8-43@2x.png" />
            </div>
            <div className="group-81-xHRUua">
              <img className="ellipse-7-DPCeJC" src="./import/img/ellipse-7-44@2x.png" />
              <img className="ellipse-8-DPCeJC" src="./import/img/ellipse-8-32@2x.png" />
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
            <img className="mockups-1-ql3H8Z" src="./import/img/mockups-1-6@1x.png" />
            <img className="ellipse-80-ql3H8Z" src="./import/img/ellipse-80-4@2x.png" />
            <img className="ellipse-81-ql3H8Z" src="./import/img/ellipse-81-4@2x.png" />
            <img className="ellipse-82-ql3H8Z" src="./import/img/ellipse-82-4@2x.png" />
            <img className="ellipse-74-ql3H8Z" src="./import/img/ellipse-74-8@2x.png" />
          </div>
          <div className="shapesleft-X8fKCS">
            <img className="ellipse-73-sbZbCF" src="./import/img/ellipse-80@2x.png" />
            <img className="ellipse-72-sbZbCF" src="./import/img/ellipse-81@2x.png" />
            <img className="ellipse-79-sbZbCF" src="./import/img/ellipse-82@2x.png" />
          </div>
          <div className="frame-63-X8fKCS">
            <img className="rectangle-772-5UzQEQ" src="./import/img/rectangle-772-2@2x.png" />
            <img className="rectangle-773-5UzQEQ" src="./import/img/rectangle-773-2@2x.png" />
            <img className="rectangle-774-5UzQEQ" src="./import/img/rectangle-774-2@2x.png" />
            <img className="rectangle-775-5UzQEQ" src="./import/img/rectangle-775-1@2x.png" />
            <img className="rectangle-776-5UzQEQ" src="./import/img/rectangle-776-1@2x.png" />
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
          <div className="m-powerwhite-colored-xjb0Rz">
            <div className="group-lNir8u"><img className="vector-npilsQ" src="./import/img/vector-1111@2x.png" /></div>
            <img className="subtract-lNir8u" src="./import/img/subtract-19@2x.png" />
          </div>
        </div>
        <div className="image-C61RwL">
          <div className="notebook-QfgQzB">
            <img className="object-q7uyGf" src="./import/img/object-16@1x.png" />
            <div className="device-q7uyGf">
              <img className="change-color-4t11Cc" src="./import/img/change-color-16@1x.png" />
              <img className="shadow-4t11Cc" src="./import/img/shadow-16@1x.png" />
              <img className="screen-4t11Cc" src="./import/img/screen-28@1x.png" />
            </div>
            <img className="mockup-q7uyGf" src="./import/img/mockup-16@1x.png" />
            <img className="border-q7uyGf" src="./import/img/border-16@1x.png" />
          </div>
          <div className="phone-QfgQzB">
            <img className="object-D1d72C" src="./import/img/object-1@2x.png" />
            <div className="device-D1d72C">
              <img className="change-color-cqQNQZ" src="./import/img/change-color-7@2x.png" />
              <img className="shadow-cqQNQZ" src="./import/img/shadow-1@2x.png" />
              <img className="screen-cqQNQZ" src="./import/img/screen-3@2x.png" />
            </div>
            <img className="mockup-D1d72C" src="./import/img/mockup-17@2x.png" />
            <img className="border-D1d72C" src="./import/img/border-1@2x.png" />
          </div>
        </div>
        <div className="shapesleft-C61RwL">
          <img className="ellipse-73-UKBqXM" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-UKBqXM" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-74-UKBqXM" src="./import/img/ellipse-74@2x.png" />
          <img className="ellipse-79-UKBqXM" src="./import/img/ellipse-82@2x.png" />
        </div>
        <div className="image-VMr6Om">
          <div className="notebook-6XZz6l">
            <img className="object-9qhfTY" src="./import/img/object-18@1x.png" />
            <div className="device-9qhfTY">
              <img className="change-color-GYQzfx" src="./import/img/change-color-16@1x.png" />
              <img className="shadow-GYQzfx" src="./import/img/shadow-16@1x.png" />
              <img className="screen-GYQzfx" src="./import/img/screen-28@1x.png" />
            </div>
            <img className="mockup-9qhfTY" src="./import/img/mockup-18@1x.png" />
            <img className="border-9qhfTY" src="./import/img/border-16@1x.png" />
          </div>
          <div className="phone-6XZz6l">
            <img className="object-fwnDGB" src="./import/img/object-1@2x.png" />
            <div className="device-fwnDGB">
              <img className="change-color-Pqb4I4" src="./import/img/change-color-7@2x.png" />
              <img className="shadow-Pqb4I4" src="./import/img/shadow-1@2x.png" />
              <img className="screen-Pqb4I4" src="./import/img/screen-3@2x.png" />
            </div>
            <img className="mockup-fwnDGB" src="./import/img/mockup-19@2x.png" />
            <img className="border-fwnDGB" src="./import/img/border-1@2x.png" />
          </div>
        </div>
        <img className="combined-shape-C61RwL" src="./import/img/combined-shape-21@2x.png" />
        <div className="shapesright-C61RwL">
          <img className="ellipse-73-uZ523G" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-uZ523G" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-79-uZ523G" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-74-uZ523G" src="./import/img/ellipse-74@2x.png" />
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
            <div className="news-AozqBi"><img className="vector-ARB1Qa" src="./import/img/vector-539@2x.png" /></div>
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
            <div className="vector-hbJ0No"><img className="vector-gVXsHL" src="./import/img/vector-1113@2x.png" /></div>
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
                  <div className="group-QkoC5i"><img className="vector-37ovQi" src="./import/img/vector-541@2x.png" /></div>
                </div>
                <div className="group-NL2NDr">
                  <div className="group-mhxH0R"><img className="vector-JEQUZT" src="./import/img/vector-542@2x.png" /></div>
                </div>
                <div className="group-xC9krj">
                  <div className="group-HJoBEO"><img className="vector-wRge3V" src="./import/img/vector-543@2x.png" /></div>
                </div>
                <div className="group-WIR1v6">
                  <div className="group-8wsGAh"><img className="vector-6DkdbH" src="./import/img/vector-544@2x.png" /></div>
                </div>
                <div className="group-eZuiLp">
                  <div className="group-ap6NKd"><img className="vector-4Grx6h" src="./import/img/vector-545@2x.png" /></div>
                </div>
                <div className="group-X60Cvu">
                  <div className="group-cbm9MB"><img className="vector-tGpqBe" src="./import/img/vector-546@2x.png" /></div>
                </div>
                <div className="group-uxO0QB">
                  <div className="group-NSf0Ar"><img className="vector-EsNi4B" src="./import/img/vector-547@2x.png" /></div>
                </div>
                <div className="group-p5uhvD">
                  <div className="group-ERxX1c"><img className="vector-prsxEQ" src="./import/img/vector-548@2x.png" /></div>
                </div>
                <div className="group-PFJF24">
                  <div className="group-pcM0fb"><img className="vector-qxfCIT" src="./import/img/vector-549@2x.png" /></div>
                </div>
                <div className="group-paxBxB">
                  <div className="group-V41hRG"><img className="vector-Q7lB0J" src="./import/img/vector-550@2x.png" /></div>
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
            <div className="briefcase-idle-HIqYii"><img className="vector-7NiCqW" src="./import/img/vector-551@2x.png" /></div>
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
                <img className="vector-ZALkAD" src="./import/img/vector-552@2x.png" />
                <img className="vector-UUJMGM" src="./import/img/vector-553@2x.png" />
                <img className="vector-bqRaZp" src="./import/img/vector-554@2x.png" />
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
            <div className="more-mmqPLj"><img className="vector-gxIfC7" src="./import/img/vector-1128@2x.png" /></div>
          </div>
        </div>
        <div className="mockups-C61RwL">
          <div className="x2-jtfs6Y">
            <img className="phone-CDWWkV" src="./import/img/phone-12@2x.png" />
            <img className="screen-CDWWkV" src="./import/img/screen-32@2x.png" />
            <div className="glass-CDWWkV">
              <img className="glass-wMCr1d" src="./import/img/glass-12@2x.png" />
              <img className="color-dodge-wMCr1d" src="./import/img/color-dodge-12@2x.png" />
            </div>
            <img className="over-shadow-CDWWkV" src="./import/img/over-shadow-3@2x.png" />
          </div>
          <div className="x1-jtfs6Y">
            <img className="phone-LfyeOB" src="./import/img/phone-13@2x.png" />
            <img className="screen-LfyeOB" src="./import/img/screen-33@2x.png" />
            <div className="glass-LfyeOB">
              <img className="glass-ymOsyf" src="./import/img/glass-13@2x.png" />
              <img className="color-dodge-ymOsyf" src="./import/img/color-dodge-13@2x.png" />
            </div>
          </div>
        </div>
        <div className="m-power-benefits-for-you-C61RwL montserrat-bold-white-42px">MPower Benefits for You</div>
        <img className="bg-C61RwL" src="./import/img/bg-4@1x.png" />
        <div className="imagesleft-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-aqX065" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-16@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-rH2EGN" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-9@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-sA1blt" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-18@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-iv3cuI" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-19@2x.png" />
          <img className="ellipse-73-aqX065" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-aqX065" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-79-aqX065" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-74-aqX065" src="./import/img/ellipse-74@2x.png" />
        </div>
        <div className="imagesright-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-JHLziL" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-4@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oCFqdE" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-13@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oIkETf" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-6@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-yCrqj2" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-7@2x.png" />
          <img className="ellipse-80-JHLziL" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-81-JHLziL" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-82-JHLziL" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-83-JHLziL" src="./import/img/ellipse-74@2x.png" />
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
            <div className="group-AdFGRd"><img className="vector-023lla" src="./import/img/vector-1129@2x.png" /></div>
            <img className="subtract-AdFGRd" src="./import/img/subtract-12@2x.png" />
          </div>
        </div>
        <p className="copyright-2020-laa-C61RwL montserrat-normal-white-16px-2">
          Copyright © 2020 Lorem Ipsum. All Rights Reserved.
        </p>
        <div className="linksright-C61RwL">
          <div className="privacy-policy-ocPzvE montserrat-normal-white-16px">Privacy Policy</div>
          <div className="terms-of-use-ocPzvE montserrat-normal-white-16px">Terms of Use</div>
        </div>
        <div className="download-C61RwL">
          <div className="get-appex-on-your-device-Z2deF4 montserrat-bold-white-16px">Download the App</div>
          <div className="button-Z2deF4">
            <div className="app-store-E39PQu">
              <img className="path-3-YxXJMJ" src="./import/img/path-3-9@2x.png" />
              <img className="path-4-YxXJMJ" src="./import/img/path-4-10@2x.png" />
              <img className="path-5-YxXJMJ" src="./import/img/path-5@2x.png" />
              <div className="group-2-YxXJMJ"><img className="path-6-hvwlaS" src="./import/img/path-6-10@2x.png" /></div>
              <div className="group-3-YxXJMJ"><img className="path-7-KT2pOy" src="./import/img/path-7-9@2x.png" /></div>
            </div>
            <div className="play-store-E39PQu">
              <img className="path-8-hSbW8M" src="./import/img/path-8-3@2x.png" />
              <img className="path-9-hSbW8M" src="./import/img/path-5@2x.png" />
              <img className="path-10-hSbW8M" src="./import/img/path-10-3@2x.png" />
              <img className="path-11-hSbW8M" src="./import/img/path-11-3@2x.png" />
              <div className="group-4-hSbW8M">
                <img className="path-12-adm0ag" src="./import/img/path-12-6@2x.png" />
                <img className="path-13-adm0ag" src="./import/img/path-13-3@2x.png" />
                <img className="path-14-adm0ag" src="./import/img/path-14-6@2x.png" />
                <img className="path-15-adm0ag" src="./import/img/path-15-3@2x.png" />
                <img className="path-16-adm0ag" src="./import/img/path-16-3@2x.png" />
                <img className="path-17-adm0ag" src="./import/img/path-17-3@2x.png" />
                <img className="path-18-adm0ag" src="./import/img/path-18-6@2x.png" />
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
          <img className="shapes-and-symbols-1-5dZqGE" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-VMr6Om">
          <p className="user-experience-design-iK7RIc montserrat-light-white-16px">
            Grow your business and leadership skills with dynamic content
          </p>
          <img className="shapes-and-symbols-1-iK7RIc" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-mzXdH9">
          <p className="user-experience-design-H075ZE montserrat-light-white-16px">
            Find inspiration in minority success stories and teachings
          </p>
          <img className="shapes-and-symbols-1-H075ZE" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="land-your-dream-job-VMr6Om montserrat-semi-bold-white-38px">Opportunity</div>
        <div className="list-QxM5SU">
          <p className="user-experience-design-mY7ydO montserrat-light-white-16px">
            Find employment within companies committed to supporting minority professionals
          </p>
          <img className="shapes-and-symbols-1-mY7ydO" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-2P4qUJ">
          <p className="user-experience-design-gj8Lka montserrat-light-white-16px">
            Accelerate your career through reciprocal mentor relationships
          </p>
          <img className="shapes-and-symbols-1-gj8Lka" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-qr8e7q">
          <p className="user-experience-design-hcXFX1 montserrat-light-white-16px">
            Engage in on-going dialogue and professional support within the MPower community
          </p>
          <img className="shapes-and-symbols-1-hcXFX1" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
      </div>
      <div className="mpower-landing-tablet-720px screen">
        <div className="frame-64-C61RwL">
          <img className="bg-X8fKCS" src="./import/img/bg-7@1x.png" />
          <div className="img-X8fKCS">
            <img className="mockups-1-ql3H8Z" src="./import/img/mockups-1-7@1x.png" />
            <img className="ellipse-80-ql3H8Z" src="./import/img/ellipse-80-6@2x.png" />
            <img className="ellipse-81-ql3H8Z" src="./import/img/ellipse-81-6@2x.png" />
            <img className="ellipse-82-ql3H8Z" src="./import/img/ellipse-82-6@2x.png" />
            <img className="ellipse-74-ql3H8Z" src="./import/img/ellipse-74-12@2x.png" />
          </div>
          <img className="introducing-X8fKCS" src="./import/img/introducing-1@2x.png" />
          <div className="m-powerwhite-colored-X8fKCS">
            <div className="group-xHRUua"><img className="vector-LFud1Z" src="./import/img/vector-1130@2x.png" /></div>
            <img className="subtract-xHRUua" src="./import/img/subtract-21@2x.png" />
            <div className="group-79-xHRUua">
              <img className="ellipse-7-WZnges" src="./import/img/ellipse-7-12@2x.png" />
              <img className="ellipse-8-WZnges" src="./import/img/ellipse-8-45@2x.png" />
            </div>
            <div className="group-80-xHRUua">
              <img className="ellipse-7-VwiQxQ" src="./import/img/ellipse-7-40@2x.png" />
              <img className="ellipse-8-VwiQxQ" src="./import/img/ellipse-8-46@2x.png" />
            </div>
            <div className="group-81-xHRUua">
              <img className="ellipse-7-DPCeJC" src="./import/img/ellipse-7-41@2x.png" />
              <img className="ellipse-8-DPCeJC" src="./import/img/ellipse-8-47@2x.png" />
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
            <img className="ellipse-73-sbZbCF" src="./import/img/ellipse-80@2x.png" />
            <img className="ellipse-72-sbZbCF" src="./import/img/ellipse-81@2x.png" />
            <img className="ellipse-79-sbZbCF" src="./import/img/ellipse-82@2x.png" />
          </div>
          <div className="frame-63-X8fKCS">
            <img className="rectangle-772-5UzQEQ" src="./import/img/rectangle-772-3@2x.png" />
            <img className="rectangle-773-5UzQEQ" src="./import/img/rectangle-773-3@2x.png" />
            <img className="rectangle-774-5UzQEQ" src="./import/img/rectangle-774-3@2x.png" />
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
          <div className="m-powerwhite-colored-xjb0Rz">
            <div className="group-lNir8u"><img className="vector-npilsQ" src="./import/img/vector-1131@2x.png" /></div>
            <img className="subtract-lNir8u" src="./import/img/subtract-22@2x.png" />
          </div>
        </div>
        <div className="image-C61RwL">
          <div className="notebook-QfgQzB">
            <img className="object-q7uyGf" src="./import/img/object-18@1x.png" />
            <div className="device-q7uyGf">
              <img className="change-color-4t11Cc" src="./import/img/change-color-16@1x.png" />
              <img className="shadow-4t11Cc" src="./import/img/shadow-16@1x.png" />
              <img className="screen-4t11Cc" src="./import/img/screen-28@1x.png" />
            </div>
            <img className="mockup-q7uyGf" src="./import/img/mockup-20@1x.png" />
            <img className="border-q7uyGf" src="./import/img/border-16@1x.png" />
          </div>
          <div className="phone-QfgQzB">
            <img className="object-D1d72C" src="./import/img/object-1@2x.png" />
            <div className="device-D1d72C">
              <img className="change-color-cqQNQZ" src="./import/img/change-color-21@2x.png" />
              <img className="shadow-cqQNQZ" src="./import/img/shadow-1@2x.png" />
              <img className="screen-cqQNQZ" src="./import/img/screen-3@2x.png" />
            </div>
            <img className="mockup-D1d72C" src="./import/img/mockup-21@2x.png" />
            <img className="border-D1d72C" src="./import/img/border-1@2x.png" />
          </div>
        </div>
        <div className="shapesleft-C61RwL">
          <img className="ellipse-73-UKBqXM" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-UKBqXM" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-74-UKBqXM" src="./import/img/ellipse-74@2x.png" />
          <img className="ellipse-79-UKBqXM" src="./import/img/ellipse-82@2x.png" />
        </div>
        <div className="m-power-benefits-for-you-C61RwL montserrat-bold-white-32px">MPower Benefits for You</div>
        <div className="land-your-dream-job-C61RwL montserrat-semi-bold-white-38px">Education</div>
        <div className="list-C61RwL">
          <p className="user-experience-design-5dZqGE montserrat-light-white-12px">
            Learn how to use your minority experience as an asset
          </p>
          <img className="shapes-and-symbols-1-5dZqGE" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-VMr6Om">
          <p className="user-experience-design-iK7RIc montserrat-light-white-12px">
            Grow your business and leadership skills with dynamic content
          </p>
          <img className="shapes-and-symbols-1-iK7RIc" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-mzXdH9">
          <p className="user-experience-design-H075ZE montserrat-light-white-12px">
            Find inspiration in minority success stories and teachings
          </p>
          <img className="shapes-and-symbols-1-H075ZE" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="image-VMr6Om">
          <div className="notebook-6XZz6l">
            <img className="object-9qhfTY" src="./import/img/object-18@1x.png" />
            <div className="device-9qhfTY">
              <img className="change-color-GYQzfx" src="./import/img/change-color-22@1x.png" />
              <img className="shadow-GYQzfx" src="./import/img/shadow-16@1x.png" />
              <img className="screen-GYQzfx" src="./import/img/screen-36@1x.png" />
            </div>
            <img className="mockup-9qhfTY" src="./import/img/mockup-22@1x.png" />
            <img className="border-9qhfTY" src="./import/img/border-16@1x.png" />
          </div>
          <div className="phone-6XZz6l">
            <img className="object-fwnDGB" src="./import/img/object-1@2x.png" />
            <div className="device-fwnDGB">
              <img className="change-color-Pqb4I4" src="./import/img/change-color-21@2x.png" />
              <img className="shadow-Pqb4I4" src="./import/img/shadow-1@2x.png" />
              <img className="screen-Pqb4I4" src="./import/img/screen-3@2x.png" />
            </div>
            <img className="mockup-fwnDGB" src="./import/img/mockup-23@2x.png" />
            <img className="border-fwnDGB" src="./import/img/border-1@2x.png" />
          </div>
        </div>
        <div className="shapesright-C61RwL">
          <img className="ellipse-73-uZ523G" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-uZ523G" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-79-uZ523G" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-74-uZ523G" src="./import/img/ellipse-74@2x.png" />
        </div>
        <div className="land-your-dream-job-VMr6Om montserrat-semi-bold-white-38px">Opportunity</div>
        <img className="combined-shape-C61RwL" src="./import/img/combined-shape-22@2x.png" />
        <div className="list-QxM5SU">
          <p className="user-experience-design-mY7ydO montserrat-light-white-12px">
            Find employment within companies committed to supporting minority professionals
          </p>
          <img className="shapes-and-symbols-1-mY7ydO" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-2P4qUJ">
          <p className="user-experience-design-gj8Lka montserrat-light-white-12px">
            Accelerate your career through reciprocal mentor relationships
          </p>
          <img className="shapes-and-symbols-1-gj8Lka" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="list-qr8e7q">
          <p className="user-experience-design-hcXFX1 montserrat-light-white-12px">
            Engage in on-going dialogue and professional support within the MPower community
          </p>
          <img className="shapes-and-symbols-1-hcXFX1" src="./import/img/shapes-and-symbols--1-@2x.png" />
        </div>
        <div className="body-text-C61RwL montserrat-light-white-20px">
          Using proprietary technology MPower is a full scale platform for minority professionals.
        </div>
        <div className="take-your-best-decision-C61RwL montserrat-bold-white-32px">The MPower Platform Features​</div>
        <div className="frame-65-C61RwL">
          <div className="mockups-Kp0bi6">
            <div className="x2-J9ggRY">
              <img className="phone-et9WFm" src="./import/img/phone-14@2x.png" />
              <img className="screen-et9WFm" src="./import/img/screen-24@2x.png" />
              <div className="glass-et9WFm">
                <img className="glass-ZXKkVp" src="./import/img/glass-10@2x.png" />
                <img className="color-dodge-ZXKkVp" src="./import/img/color-dodge-10@2x.png" />
              </div>
              <img className="over-shadow-et9WFm" src="./import/img/over-shadow-5@2x.png" />
            </div>
            <div className="x1-J9ggRY">
              <img className="phone-HdEVyy" src="./import/img/phone-15@2x.png" />
              <img className="screen-HdEVyy" src="./import/img/screen-39@2x.png" />
              <div className="glass-HdEVyy">
                <img className="glass-4uFVIe" src="./import/img/glass-11@2x.png" />
                <img className="color-dodge-4uFVIe" src="./import/img/color-dodge-11@2x.png" />
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
            <div className="news-AozqBi"><img className="vector-ARB1Qa" src="./import/img/vector-539@2x.png" /></div>
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
            <div className="vector-hbJ0No"><img className="vector-gVXsHL" src="./import/img/vector-1113@2x.png" /></div>
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
                  <div className="group-QkoC5i"><img className="vector-37ovQi" src="./import/img/vector-541@2x.png" /></div>
                </div>
                <div className="group-NL2NDr">
                  <div className="group-mhxH0R"><img className="vector-JEQUZT" src="./import/img/vector-542@2x.png" /></div>
                </div>
                <div className="group-xC9krj">
                  <div className="group-HJoBEO"><img className="vector-wRge3V" src="./import/img/vector-543@2x.png" /></div>
                </div>
                <div className="group-WIR1v6">
                  <div className="group-8wsGAh"><img className="vector-6DkdbH" src="./import/img/vector-544@2x.png" /></div>
                </div>
                <div className="group-eZuiLp">
                  <div className="group-ap6NKd"><img className="vector-4Grx6h" src="./import/img/vector-545@2x.png" /></div>
                </div>
                <div className="group-X60Cvu">
                  <div className="group-cbm9MB"><img className="vector-tGpqBe" src="./import/img/vector-546@2x.png" /></div>
                </div>
                <div className="group-uxO0QB">
                  <div className="group-NSf0Ar"><img className="vector-EsNi4B" src="./import/img/vector-547@2x.png" /></div>
                </div>
                <div className="group-p5uhvD">
                  <div className="group-ERxX1c"><img className="vector-prsxEQ" src="./import/img/vector-548@2x.png" /></div>
                </div>
                <div className="group-PFJF24">
                  <div className="group-pcM0fb"><img className="vector-qxfCIT" src="./import/img/vector-549@2x.png" /></div>
                </div>
                <div className="group-paxBxB">
                  <div className="group-V41hRG"><img className="vector-Q7lB0J" src="./import/img/vector-550@2x.png" /></div>
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
            <div className="briefcase-idle-HIqYii"><img className="vector-7NiCqW" src="./import/img/vector-551@2x.png" /></div>
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
                <img className="vector-ZALkAD" src="./import/img/vector-552@2x.png" />
                <img className="vector-UUJMGM" src="./import/img/vector-553@2x.png" />
                <img className="vector-bqRaZp" src="./import/img/vector-554@2x.png" />
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
            <div className="more-mmqPLj"><img className="vector-gxIfC7" src="./import/img/vector-1128@2x.png" /></div>
          </div>
        </div>
        <img className="bg-C61RwL" src="./import/img/bg-6@1x.png" />
        <div className="imagesleft-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-aqX065" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-16@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-rH2EGN" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-9@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-sA1blt" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-18@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-iv3cuI" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-19@2x.png" />
          <img className="ellipse-73-aqX065" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-72-aqX065" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-79-aqX065" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-74-aqX065" src="./import/img/ellipse-74@2x.png" />
        </div>
        <div className="imagesright-C61RwL">
          <img className="x882704-ce-e445-a8-a613-b0-d041-JHLziL" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-4@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oCFqdE" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-13@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-oIkETf" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-6@2x.png" />
          <img className="x882704-ce-e445-a8-a613-b0-d041-yCrqj2" src="./import/img/882704ce-e445-4411-a93f-a8a613b0d041-7@2x.png" />
          <img className="ellipse-80-JHLziL" src="./import/img/ellipse-80@2x.png" />
          <img className="ellipse-81-JHLziL" src="./import/img/ellipse-81@2x.png" />
          <img className="ellipse-82-JHLziL" src="./import/img/ellipse-82@2x.png" />
          <img className="ellipse-83-JHLziL" src="./import/img/ellipse-74@2x.png" />
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
            <div className="group-AdFGRd"><img className="vector-023lla" src="./import/img/vector-1129@2x.png" /></div>
            <img className="subtract-AdFGRd" src="./import/img/subtract-12@2x.png" />
          </div>
        </div>
        <p className="copyright-2020-laa-C61RwL montserrat-normal-white-16px-2">
          Copyright © 2020 Lorem Ipsum. All Rights Reserved.
        </p>
        <div className="linksright-C61RwL">
          <div className="privacy-policy-ocPzvE montserrat-normal-white-16px">Privacy Policy</div>
          <div className="terms-of-use-ocPzvE montserrat-normal-white-16px">Terms of Use</div>
        </div>
        <div className="download-C61RwL">
          <div className="get-appex-on-your-device-Z2deF4 montserrat-bold-white-16px">Download the App</div>
          <div className="button-Z2deF4">
            <div className="app-store-E39PQu">
              <img className="path-3-YxXJMJ" src="./import/img/path-3-9@2x.png" />
              <img className="path-4-YxXJMJ" src="./import/img/path-4-10@2x.png" />
              <img className="path-5-YxXJMJ" src="./import/img/path-5@2x.png" />
              <div className="group-2-YxXJMJ"><img className="path-6-hvwlaS" src="./import/img/path-6-10@2x.png" /></div>
              <div className="group-3-YxXJMJ"><img className="path-7-KT2pOy" src="./import/img/path-7-9@2x.png" /></div>
            </div>
            <div className="play-store-E39PQu">
              <img className="path-8-hSbW8M" src="./import/img/path-8-3@2x.png" />
              <img className="path-9-hSbW8M" src="./import/img/path-5@2x.png" />
              <img className="path-10-hSbW8M" src="./import/img/path-10-3@2x.png" />
              <img className="path-11-hSbW8M" src="./import/img/path-11-3@2x.png" />
              <div className="group-4-hSbW8M">
                <img className="path-12-adm0ag" src="./import/img/path-12-6@2x.png" />
                <img className="path-13-adm0ag" src="./import/img/path-13-3@2x.png" />
                <img className="path-14-adm0ag" src="./import/img/path-14-6@2x.png" />
                <img className="path-15-adm0ag" src="./import/img/path-15-3@2x.png" />
                <img className="path-16-adm0ag" src="./import/img/path-16-3@2x.png" />
                <img className="path-17-adm0ag" src="./import/img/path-17-3@2x.png" />
                <img className="path-18-adm0ag" src="./import/img/path-18-6@2x.png" />
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
