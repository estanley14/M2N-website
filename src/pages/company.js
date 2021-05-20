import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavDesktop from "../components/navDesktop"
import NavTablet from "../components/navTablet"
import NavMobile from "../components/navMobile"

// IMAGES
import cmbndShp2x from "../import/img/combined-shape@2x.png"
import pth2x from "../import/img/path@2x.png"
import vctr462x from "../import/img/vector-46@2x.png"
import vctr472x from "../import/img/footer-logo-desktop.png"
import vctr482x from "../import/img/vector-48@2x.png"
import vctr492x from "../import/img/vector-49@2x.png"
import vctr502x from "../import/img/vector-50@2x.png"
import vctr512x from "../import/img/vector-51@2x.png"
import vctr2312x from "../import/img/vector-231@2x.png"
import vctr2322x from "../import/img/vector-232@2x.png"
import vctr542x from "../import/img/vector-54@2x.png"
import vctr2342x from "../import/img/vector-234@2x.png"
import vctr2352x from "../import/img/vector-235@2x.png"
import vctr2362x from "../import/img/vector-236@2x.png"
import vctr592x from "../import/img/vector-59@2x.png"
import vctr602x from "../import/img/vector-60@2x.png"
import vctr612x from "../import/img/vector-61@2x.png"
import vctr622x from "../import/img/vector-62@2x.png"
import vctr632x from "../import/img/vector-63@2x.png"
import vctr2432x from "../import/img/vector-243@2x.png"
import vctr2442x from "../import/img/vector-244@2x.png"
import vctr662x from "../import/img/vector-66@2x.png"
import vctr2462x from "../import/img/vector-246@2x.png"
import vctr2472x from "../import/img/vector-247@2x.png"
import vctr2482x from "../import/img/vector-248@2x.png"
import vctr702x from "../import/img/vector-70@2x.png"
import vctr712x from "../import/img/vector-71@2x.png"
import vctr2512x from "../import/img/vector-251@2x.png"
import vctr732x from "../import/img/vector-73@2x.png"
import vctr742x from "../import/img/vector-74@2x.png"
import vctr2542x from "../import/img/vector-254@2x.png"
import vctr762x from "../import/img/vector-76@2x.png"
import vctr772x from "../import/img/vector-77@2x.png"
import vctr782x from "../import/img/vector-78@2x.png"
import vctr792x from "../import/img/vector-79@2x.png"
import vctr2592x from "../import/img/vector-259@2x.png"
import vctr2602x from "../import/img/vector-260@2x.png"
import vctr822x from "../import/img/vector-82@2x.png"
import vctr2622x from "../import/img/vector-262@2x.png"
import vctr842x from "../import/img/vector-84@2x.png"
import vctr2642x from "../import/img/vector-264@2x.png"
import vctr2652x from '../import/img/vector-265@2x.png'
import vctr2662x from "../import/img/vector-266@2x.png"
import rctngl41x from "../import/img/rectangle-4@1x.png"
import ln7122x from "../import/img/line-7-12@2x.png"
import ln8122x from "../import/img/line-8-12@2x.png"
import ln9122x from "../import/img/line-9-12@2x.png"
import ln10122x from "../import/img/line-10-12@2x.png"
import ln11122x from "../import/img/line-11-12@2x.png"
import ln12122x from "../import/img/line-12-12@2x.png"
import ln13122x from "../import/img/line-13-12@2x.png"
import pth71122x from "../import/img/path-71-12@2x.png"
import ln15122x from "../import/img/line-15-12@2x.png"
import rctngl51x from "../import/img/rectangle-5@1x.png"
import abstrctShps9311x from "../import/img/abstract-shapes-9-3-1@1x.png"
import img82x from "../import/img/image-8@2x.png"
import img62x from "../import/img/image-6@2x.png"
import ln7132x from "../import/img/line-7-13@2x.png"
import ln8132x from "../import/img/line-8-13@2x.png"
import ln9132x from "../import/img/line-9-13@2x.png"
import ln10132x from "../import/img/line-10-13@2x.png"
import ln11132x from "../import/img/line-11-13@2x.png"
import ln12132x from "../import/img/line-12-13@2x.png"
import ln13132x from "../import/img/line-13-13@2x.png"
import pth71132x from "../import/img/path-71-13@2x.png"
import ln15132x from "../import/img/line-15-13@2x.png"
import img72x from "../import/img/image-7@2x.png"
import rctngl182x from "../import/img/rectangle-18@2x.png"
import ln7412x from "../import/img/line-7-41@2x.png"
import ln8412x from "../import/img/line-8-41@2x.png"
import ln10412x from "../import/img/line-10-41@2x.png"
import ln11412x from "../import/img/line-11-41@2x.png"
import ln12412x from "../import/img/line-12-41@2x.png"
import ln13412x from "../import/img/line-13-41@2x.png"
import ln15412x from "../import/img/line-15-41@2x.png"
import rcrtngl192x from "../import/img/rectangle-19@2x.png"
import vctr4492x from "../import/img/footer-logo-desktop.png"
import vctr3132x from "../import/img/vector-313@2x.png"
import vctr3142x from "../import/img/vector-314@2x.png"
import vctr3152x from "../import/img/vector-315@2x.png"
import vctr3162x from "../import/img/vector-316@2x.png"
import vctr3172x from "../import/img/vector-317@2x.png"
import vctr4072x from "../import/img/vector-407@2x.png"
import vctr3192x from "../import/img/vector-319@2x.png"
import vctr3202x from "../import/img/vector-320@2x.png"
import vctr3212x from "../import/img/vector-321@2x.png"
import vctr3222x from "../import/img/vector-322@2x.png"
import vctr3232x from "../import/img/vector-323@2x.png"
import vctr3242x from "../import/img/vector-324@2x.png"
import vctr3252x from "../import/img/vector-325@2x.png"
import vctr3262x from "../import/img/vector-326@2x.png"
import vctr3272x from "../import/img/vector-327@2x.png"
import vctr3282x from "../import/img/vector-328@2x.png"
import vctr4182x from "../import/img/vector-418@2x.png"
import vctr4192x from "../import/img/vector-419@2x.png"
import vctr3312x from "../import/img/vector-331@2x.png"
import vctr4212x from "../import/img/vector-421@2x.png"
import vctr3332x from "../import/img/vector-333@2x.png"
import vctr3342x from "../import/img/vector-334@2x.png"
import vctr3352x from "../import/img/vector-335@2x.png"
import vctr3362x from "../import/img/vector-336@2x.png"
import vctr3372x from "../import/img/vector-337@2x.png"
import vctr3382x from "../import/img/vector-338@2x.png"
import vctr3392x from "../import/img/vector-339@2x.png"
import vctr3402x from "../import/img/vector-340@2x.png"
import vctr3412x from "../import/img/vector-341@2x.png"
import vctr3422x from "../import/img/vector-342@2x.png"
import vctr3432x from "../import/img/vector-343@2x.png"
import vctr3442x from "../import/img/vector-344@2x.png"
import vctr3452x from "../import/img/vector-345@2x.png"
import vctr3462x from "../import/img/vector-346@2x.png"
import vctr3472x from "../import/img/vector-347@2x.png"
import vctr3482x from "../import/img/vector-348@2x.png"
import vctr3492x from "../import/img/vector-349@2x.png"
import vctr3502x from "../import/img/vector-350@2x.png"
import vctr3512x from "../import/img/vector-351@2x.png"
import vctr3522x from "../import/img/vector-352@2x.png"
import cmbndShp52x from "../import/img/combined-shape-5@2x.png"
import vctr3532x from "../import/img/vector-353@2x.png"
import img612x from "../import/img/image-6-1@2x.png"
import abstrctShps9351x from "../import/img/abstract-shapes-9-3-5@1x.png"
import img822x from "../import/img/image-8-2@2x.png"
import ln7422x from "../import/img/line-7-42@2x.png"
import ln10422x from "../import/img/line-10-42@2x.png"
import ln11422x from "../import/img/line-11-42@2x.png"
import ln12422x from "../import/img/line-12-42@2x.png"
import ln13422x from "../import/img/line-13-42@2x.png"
import pth71422x from "../import/img/path-71-42@2x.png"
import ln15422x from "../import/img/line-15-42@2x.png"
import img712x from "../import/img/image-7-1@2x.png"
import vctr6542x from "../import/img/vector-654@2x.png"
import vctr3182x from "../import/img/vector-318@2x.png"
import vctr3292x from "../import/img/vector-329@2x.png"
import vctr3302x from "../import/img/vector-330@2x.png"
import vctr3322x from "../import/img/vector-332@2x.png"
import ovlcpy41x from "../import/img/oval-copy-4@1x.png"
import img8332x from "../import/img/image-8-3@2x.png"
import rctngl202x from "../import/img/rectangle-20@2x.png"
import ln7432x from "../import/img/line-7-43@2x.png"
import rctngl211x from "../import/img/rectangle-21@1x.png"
import img842x from "../import/img/image-8-4@2x.png"
import img622x from "../import/img/image-6-2@2x.png"
import ln7442x from "../import/img/line-7-44@2x.png"
import img722x from "../import/img/image-7-2@2x.png"
import img852x from "../import/img/image-8-5@2x.png"
import ovlcpy141x from "../import/img/oval-copy-14@1x.png"
import ln7452x from "../import/img/line-7-45@2x.png"
import ln13452x from "../import/img/line-13-45@2x.png"
import rctngl232x from "../import/img/rectangle-23@2x.png"
import img632x from "../import/img/image-6-3@2x.png"
import img862x from "../import/img/image-8-6@2x.png"
import ln7462x from "../import/img/line-7-46@2x.png"
import img732x from "../import/img/image-7-3@2x.png"
import img812x from "../import/img/image-8-1@2x.png"
import img872x from "../import/img/image-8-7@2x.png"

const OurCompany = () => (
  <Layout>
    <Seo title="Company" />
    <input type="hidden" id="anPageName" name="page" value="company-mobile-320px" />
    <div className="company-desktop-1440px screen">
      <div className="footer-desktop-C61RwL">
        <div className="icongroup-VNfvnu">
          <div className="instagram-5R3sf4"><img className="combined-shape-TnWo79" src={cmbndShp2x} /></div>
          <div className="twitter-5R3sf4"><img className="path-4KRaeG" src={pth2x} /></div>
          <div className="linkedin-5R3sf4"><img className="vector-pXCSGN" src={vctr462x} /></div>
        </div>
        <p className="terms-and-conditions-i19681492-VNfvnu dmsans-normal-white-14px-2">
          <span className="span0-MXW4WD dmsans-normal-white-14px">Terms &amp; Conditions&nbsp;&nbsp; </span
          ><span className="span1-MXW4WD dmsans-normal-white-14px-3">|&nbsp;&nbsp;</span
          ><span className="span2-MXW4WD dmsans-normal-white-14px"> Privacy Policy</span>
        </p>
        <p className="company-i19681491-VNfvnu dmsans-normal-white-16px-2">
          ©2021 M2N, LLC&nbsp;&nbsp;•&nbsp;&nbsp;All rights reserved.
        </p>
        <div className="divider-VNfvnu"></div>
        <div className="newslettersignup-VNfvnu">
          <div className="newsletter-i19681499-vxY8x4 sourcesanspro-bold-white-16px">Newsletter</div>
          <form action="">
            <div className="input-default-vxY8x4">
              <div className="input-GVqwCV border-1px-celeste"></div>
              <input
                className="placeholder-i19681503-GVqwCV dmsans-normal-gunsmoke-16px"
                name="email"
                placeholder="Your email"
                type="email"
                required
                />
            </div>
            {/* <div className="default-text-vxY8x4 smart-layers-pointers">
              <div className="font-i19681507-kEobNx sourcesanspro-bold-white-16px">Subscribe</div>
            </div>
            <div className="button-primary-desktop-vxY8x4">
              <div className="font-i1968129778-U7FTmp valign-text-middle dmsans-bold-white-14px">SUBSCRIBE</div>
            </div> */}
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
          <p className="aboutblurb-i19681487-dewRqW dmsans-normal-white-14px">
           A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
          </p>
        </div>
      </div>
      <div className="hero-C61RwL">
        <img className="oval-copy-6yINq5" src={ovlcpy41x} />
        <div className="text-6yINq5">
          <div className="rectangle-8-VpwlJ3"></div>
          <div className="we-create-design-VpwlJ3 dmsans-bold-baltic-sea-62px">Our Company</div>
          <p className="our-mission-is-for-individuals-VpwlJ3 dmsans-normal-big-stone-16px">
            <span className="span0-Ez0jXp dmsans-normal-big-stone-16px">Our </span
            ><span className="span1-Ez0jXp dmsans-bold-big-stone-16px">mission</span
            ><span className="span2-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;is to create a true and equal opportunity employment culture.<br /><br />Our </span
            ><span className="span3-Ez0jXp dmsans-bold-big-stone-16px">goal</span
            ><span className="span4-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;is to promote an inclusive workplace of professional diversity within all organizations.<br /><br />Our </span
            ><span className="span5-Ez0jXp dmsans-bold-big-stone-16px">MPower</span
            ><span className="span6-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;platform provides an affordable, comprehensive, member-centric approach to transform employment
              opportunities for individuals.
            </span>
          </p>
        </div>
        <div className="imageframe-6yINq5">
          <img className="rectangle-vx3RBp" src={rctngl41x} />
          <div className="group-1-vx3RBp">
            <img className="line7-cdH8X2" src={ln7122x} />
            <img className="line8-cdH8X2" src={ln8122x} />
            <img className="line9-cdH8X2" src={ln9122x} />
            <img className="line10-cdH8X2" src={ln10122x} />
            <img className="line11-cdH8X2" src={ln11122x} />
            <img className="line12-cdH8X2" src={ln12122x} />
            <img className="line13-cdH8X2" src={ln13122x} />
            <img className="path71-cdH8X2" src={pth71122x} />
            <img className="line15-cdH8X2" src={ln15122x} />
          </div>
          <img className="rectangle-zXklk4" src={rctngl51x} />
        </div>
        <p className="m2-n-uses-the-t-aints-or-labels-6yINq5 dmsans-normal-raven-12px">
          *M2N uses the term minority to include any individual who identifies as something other than the white male
          majority.&nbsp;&nbsp;We have not yet determined the perfect term that accurately encompasses both unique
          individual identities while providing a sense of belonging within groups of people. Our aim is to provide an
          inclusive experience for all members by allowing every individual to identify themselves as they prefer
          without creating additional constraints or labels.
        </p>
      </div>
      <div className="contentsection-C61RwL">
        <div className="bg-OvIgOz"></div>
        <img className="abstract-shapes-9-3-OvIgOz" src={abstrctShps9311x} />
        <div className="text-OvIgOz">
          <div className="group-585-Yt67U8">
            <div className="we-create-design-3wMB6Q dmsans-bold-big-stone-40px">Eric Stanley</div>
            <div className="founder-ceo-3wMB6Q dmsans-normal-royal-blue-20px">FOUNDER &amp; CEO</div>
            <p className="robert-eric-sta-power-platform-3wMB6Q dmsans-normal-big-stone-16px">
              Robert Eric Stanley is an accomplished Black business professional with extensive experience in the
              pharmaceutical, insurance and technology industries.&nbsp;&nbsp;He built a successful career through
              continuing education, empowerment of his ethnicity, and executive mentorship. <br /><br />Over the last
              few years initiatives to increase diversity and inclusion in the workplace have increased, however, the
              results of these efforts have been underwhelming. <br /><br />The failure of these programs, coupled with
              Eric’s desire to leverage his lived experience, serves as the inspiration for creating M2N, the Minority
              Moves Network, and the MPower platform.
            </p>
          </div>
        </div>
        <div className="we-create-design-OvIgOz dmsans-bold-big-stone-28px">Shaun Hawkins</div>
        <div className="advisory-board-OvIgOz dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-8-OvIgOz" src={img82x} />
        <div className="we-create-design-YnzbAF dmsans-bold-big-stone-28px">Paul Lockhart</div>
        <div className="advisory-board-YnzbAF dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-6-OvIgOz" src={img62x} />
        <div className="imageframe-OvIgOz">
          <div className="group-2-L3W6LR">
            <img className="line7-SYOCph" src={ln7132x} />
            <img className="line8-SYOCph" src={ln8132x} />
            <img className="line9-SYOCph" src={ln9132x} />
            <img className="line10-SYOCph" src={ln10132x} />
            <img className="line11-SYOCph" src={ln11132x} />
            <img className="line12-SYOCph" src={ln12132x} />
            <img className="line13-SYOCph" src={ln13132x} />
            <img className="path71-SYOCph" src={pth71132x} />
            <img className="line15-SYOCph" src={ln15132x} />
          </div>
          <img className="image-7-L3W6LR" src={img72x} />
        </div>
        <div className="we-create-design-u2Rhhl dmsans-bold-big-stone-28px">Kathy Jordan</div>
        <div className="advisory-board-u2Rhhl dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-8-YnzbAF" src={img812x} />
        <p className="shaun-is-the-fo-or-eli-lilly-co-OvIgOz dmsans-normal-big-stone-16px">
          Shaun is the founder of the ProSyte Companies, a diversified holding entity investing in businesses and real
          estate in the US and Europe. Hawkins was the Chief Diversity Officer for Eli Lilly &amp; Co.
        </p>
        <p className="paul-is-a-seaso-und-engagements-OvIgOz dmsans-normal-big-stone-16px">
          Paul is a seasoned executive recognized for his ability to grow high-performing organizations by rapidly
          scaling revenue operations in both start-up and turn- around engagements.
        </p>
        <p className="kathy-is-the-ce-ess-performance-OvIgOz dmsans-normal-big-stone-16px">
          Kathy is the CEO of KJordan Consulting, a strategic coaching firm which works with entertainers and
          professional athletes to maximize their personal, professional, and business performance.
        </p>
      </div>
      <NavDesktop />
    </div>
    <div className="company-tablet-720px screen">
    <NavMobile />
      {/* <div className="navbar-mobile-C61RwL">
        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-494@2x.png" /></div>
        <div className="menu24px-gTO9GM">
          <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
        </div>
      </div> */}
      {/* <div className="navbar-mobile-VMr6Om">
        <div className="logo-8x5SRt"><img className="vector-Ztm0bx" src="./import/img/vector-443@2x.png" /></div>
        <div className="menu24px-8x5SRt">
          <img className="iconnavigationmenu24px-BAyIoO" src="./import/img/icon-navigation-menu-24px@2x.png" />
        </div>
      </div> */}
      <div className="hero-C61RwL">
        <img className="oval-copy-6yINq5" src={ovlcpy41x} />
        <div className="text-6yINq5">
          <div className="rectangle-8-VpwlJ3"></div>
          <div className="we-create-design-VpwlJ3 dmsans-bold-baltic-sea-40px">Our Company</div>
          <p className="our-mission-is-for-individuals-VpwlJ3 dmsans-normal-big-stone-16px">
            <span className="span0-Ez0jXp dmsans-normal-big-stone-16px">Our </span
            ><span className="span1-Ez0jXp dmsans-bold-big-stone-16px">mission</span
            ><span className="span2-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;is to create a true and equal opportunity employment culture.<br /><br />Our </span
            ><span className="span3-Ez0jXp dmsans-bold-big-stone-16px">goal</span
            ><span className="span4-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;is to promote an inclusive workplace of professional diversity within all organizations.<br /><br />Our </span
            ><span className="span5-Ez0jXp dmsans-bold-big-stone-16px">MPower</span
            ><span className="span6-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;platform provides an affordable, comprehensive, member-centric approach to transform employment
              opportunities for individuals.
            </span>
          </p>
        </div>
        <div className="imageframe-6yINq5">
          <img className="rectangle-vx3RBp" src={rctngl182x} />
          <div className="group-1-vx3RBp">
            <img className="line7-cdH8X2" src={ln7412x} />
            <img className="line8-cdH8X2" src={ln8412x} />
            <img className="line9-cdH8X2" src={ln9122x} />
            <img className="line10-cdH8X2" src={ln10412x} />
            <img className="line11-cdH8X2" src={ln11412x} />
            <img className="line12-cdH8X2" src={ln12412x} />
            <img className="line13-cdH8X2" src={ln13412x} />
            <img className="path71-cdH8X2" src={pth71122x} />
            <img className="line15-cdH8X2" src={ln15412x} />
          </div>
          <img className="rectangle-zXklk4" src={rcrtngl192x} />
        </div>
        <p className="m2-n-uses-the-t-aints-or-labels-6yINq5 dmsans-normal-raven-12px">
          *M2N uses the term minority to include any individual who identifies as something other than the white male
          majority.&nbsp;&nbsp;We have not yet determined the perfect term that accurately encompasses both unique
          individual identities while providing a sense of belonging within groups of people. Our aim is to provide an
          inclusive experience for all members by allowing every individual to identify themselves as they prefer
          without creating additional constraints or labels.
        </p>
      </div>
      <div className="footer-C61RwL">
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
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
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
      </div>
      <div className="contentsection-C61RwL">
        <div className="bg-OvIgOz"></div>
        <div className="we-create-design-OvIgOz dmsans-bold-big-stone-24px">Paul Lockhart</div>
        <div className="advisory-board-OvIgOz dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-6-OvIgOz" src={img612x} />
        <p className="paul-is-a-seaso-und-engagements-OvIgOz dmsans-normal-big-stone-16px">
          Paul is a seasoned executive recognized for his ability to grow high-performing organizations by rapidly
          scaling revenue operations in both start-up and turn- around engagements.
        </p>
        <img className="abstract-shapes-9-3-OvIgOz" src={abstrctShps9351x} />
        <div className="text-OvIgOz">
          <div className="group-585-Yt67U8">
            <div className="we-create-design-3wMB6Q">Eric Stanley</div>
            <div className="founder-ceo-3wMB6Q dmsans-normal-royal-blue-20px">FOUNDER &amp; CEO</div>
            <p className="robert-eric-sta-power-platform-3wMB6Q dmsans-normal-big-stone-16px">
              Robert Eric Stanley is an accomplished Black business professional with extensive experience in the
              pharmaceutical, insurance and technology industries.&nbsp;&nbsp;He built a successful career through
              continuing education, empowerment of his ethnicity, and executive mentorship. <br /><br />Over the last
              few years initiatives to increase diversity and inclusion in the workplace have increased, however, the
              results of these efforts have been underwhelming. <br /><br />The failure of these programs, coupled with
              Eric’s desire to leverage his lived experience, serves as the inspiration for creating M2N, the Minority
              Moves Network, and the MPower platform.
            </p>
          </div>
        </div>
        <div className="we-create-design-YnzbAF dmsans-bold-big-stone-24px">Shaun Hawkins</div>
        <div className="advisory-board-YnzbAF dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-8-OvIgOz" src={img822x} />
        <div className="imageframe-OvIgOz">
          <div className="group-2-L3W6LR">
            <img className="line7-SYOCph" src={ln7422x} />
            <img className="line8-SYOCph" src={ln8132x} />
            <img className="line9-SYOCph" src={ln9132x} />
            <img className="line10-SYOCph" src={ln10422x} />
            <img className="line11-SYOCph" src={ln11422x} />
            <img className="line12-SYOCph" src={ln12422x} />
            <img className="line13-SYOCph" src={ln13422x} />
            <img className="path71-SYOCph" src={pth71422x} />
            <img className="line15-SYOCph" src={ln15422x} />
          </div>
          <img className="image-7-L3W6LR" src={img712x} />
        </div>
        <div className="we-create-design-u2Rhhl dmsans-bold-big-stone-24px">Kathy Jordan</div>
        <div className="advisory-board-u2Rhhl dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-8-YnzbAF" src={img8332x} />
        <p className="shaun-is-the-fo-or-eli-lilly-co-OvIgOz dmsans-normal-big-stone-16px">
          Shaun is the founder of the ProSyte Companies, a diversified holding entity investing in businesses and real
          estate in the US and Europe. Hawkins was the Chief Diversity Officer for Eli Lilly &amp; Co.
        </p>
        <p className="kathy-is-the-ce-ess-performance-OvIgOz dmsans-normal-big-stone-16px">
          Kathy is the CEO of KJordan Consulting, a strategic coaching firm which works with entertainers and
          professional athletes to maximize their personal, professional, and business performance.
        </p>
      </div>
    </div>
    <div className="company-desktop-1024px screen">
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
        <NavTablet />
      <div className="footer-C61RwL">
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
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
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
      </div>
      <div className="hero-C61RwL">
        <img className="oval-copy-6yINq5" src={ovlcpy41x} />
        <div className="text-6yINq5">
          <div className="rectangle-8-VpwlJ3"></div>
          <div className="we-create-design-VpwlJ3 dmsans-bold-baltic-sea-62px">Our Company</div>
          <p className="our-mission-is-for-individuals-VpwlJ3 dmsans-normal-big-stone-16px">
            <span className="span0-Ez0jXp dmsans-normal-big-stone-16px">Our </span
            ><span className="span1-Ez0jXp dmsans-bold-big-stone-16px">mission</span
            ><span className="span2-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;is to create a true and equal opportunity employment culture.<br /><br />Our </span
            ><span className="span3-Ez0jXp dmsans-bold-big-stone-16px">goal</span
            ><span className="span4-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;is to promote an inclusive workplace of professional diversity within all organizations.<br /><br />Our </span
            ><span className="span5-Ez0jXp dmsans-bold-big-stone-16px">MPower</span
            ><span className="span6-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;platform provides an affordable, comprehensive, member-centric approach to transform employment
              opportunities for individuals.
            </span>
          </p>
        </div>
        <div className="imageframe-6yINq5">
          <img className="rectangle-vx3RBp" src={rctngl202x} />
          <div className="group-1-vx3RBp">
            <img className="line7-cdH8X2" src={ln7432x} />
            <img className="line8-cdH8X2" src={ln8412x} />
            <img className="line9-cdH8X2" src={ln9122x} />
            <img className="line10-cdH8X2" src={ln10412x} />
            <img className="line11-cdH8X2" src={ln11412x} />
            <img className="line12-cdH8X2" src={ln12412x} />
            <img className="line13-cdH8X2" src={ln13412x} />
            <img className="path71-cdH8X2" src={pth71122x} />
            <img className="line15-cdH8X2" src={ln15412x} />
          </div>
          <img className="rectangle-zXklk4" src={rctngl211x} />
        </div>
        <p className="m2-n-uses-the-t-aints-or-labels-6yINq5 dmsans-normal-raven-12px">
          *M2N uses the term minority to include any individual who identifies as something other than the white male
          majority.&nbsp;&nbsp;We have not yet determined the perfect term that accurately encompasses both unique
          individual identities while providing a sense of belonging within groups of people. Our aim is to provide an
          inclusive experience for all members by allowing every individual to identify themselves as they prefer
          without creating additional constraints or labels.
        </p>
      </div>
      <div className="contentsection-C61RwL">
        <div className="bg-OvIgOz"></div>
        <img className="abstract-shapes-9-3-OvIgOz" src={abstrctShps9351x} />
        <div className="text-OvIgOz">
          <div className="group-585-Yt67U8">
            <div className="we-create-design-3wMB6Q dmsans-bold-big-stone-40px">Eric Stanley</div>
            <div className="founder-ceo-3wMB6Q dmsans-normal-royal-blue-20px">FOUNDER &amp; CEO</div>
            <p className="robert-eric-sta-power-platform-3wMB6Q dmsans-normal-big-stone-16px">
              Robert Eric Stanley is an accomplished Black business professional with extensive experience in the
              pharmaceutical, insurance and technology industries.&nbsp;&nbsp;He built a successful career through
              continuing education, empowerment of his ethnicity, and executive mentorship. <br /><br />Over the last
              few years initiatives to increase diversity and inclusion in the workplace have increased, however, the
              results of these efforts have been underwhelming. <br /><br />The failure of these programs, coupled with
              Eric’s desire to leverage his lived experience, serves as the inspiration for creating M2N, the Minority
              Moves Network, and the MPower platform.
            </p>
          </div>
        </div>
        <div className="we-create-design-OvIgOz dmsans-bold-big-stone-28px">Shaun Hawkins</div>
        <div className="advisory-board-OvIgOz dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-8-OvIgOz" src={img842x} />
        <div className="we-create-design-YnzbAF dmsans-bold-big-stone-28px">Paul Lockhart</div>
        <div className="advisory-board-YnzbAF dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-6-OvIgOz" src={img622x} />
        <div className="imageframe-OvIgOz">
          <div className="group-2-L3W6LR">
            <img className="line7-SYOCph" src={ln7442x} />
            <img className="line8-SYOCph" src={ln8132x} />
            <img className="line9-SYOCph" src={ln9132x} />
            <img className="line10-SYOCph" src={ln10422x} />
            <img className="line11-SYOCph" src={ln11422x} />
            <img className="line12-SYOCph" src={ln12422x} />
            <img className="line13-SYOCph" src={ln13422x} />
            <img className="path71-SYOCph" src={pth71422x} />
            <img className="line15-SYOCph" src={ln15422x} />
          </div>
          <img className="image-7-L3W6LR" src={img722x} />
        </div>
        <div className="we-create-design-u2Rhhl dmsans-bold-big-stone-28px">Kathy Jordan</div>
        <div className="advisory-board-u2Rhhl dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-8-YnzbAF" src={img852x} />
        <p className="shaun-is-the-fo-or-eli-lilly-co-OvIgOz dmsans-normal-big-stone-16px">
          Shaun is the founder of the ProSyte Companies, a diversified holding entity investing in businesses and real
          estate in the US and Europe. Hawkins was the Chief Diversity Officer for Eli Lilly &amp; Co.
        </p>
        <p className="paul-is-a-seaso-und-engagements-OvIgOz dmsans-normal-big-stone-16px">
          Paul is a seasoned executive recognized for his ability to grow high-performing organizations by rapidly
          scaling revenue operations in both start-up and turn- around engagements.
        </p>
        <p className="kathy-is-the-ce-ess-performance-OvIgOz dmsans-normal-big-stone-16px">
          Kathy is the CEO of KJordan Consulting, a strategic coaching firm which works with entertainers and
          professional athletes to maximize their personal, professional, and business performance.
        </p>
      </div>
    </div>
    <div className="company-mobile-320px screen">
      {/* <div className="navbar-mobile-C61RwL">
        <div className="logo-gTO9GM"><img className="vector-xvusrZ" src="./import/img/vector-494@2x.png" /></div>
        <div className="menu24px-gTO9GM">
          <img className="iconnavigationmenu24px-xsYvp9" src="./import/img/icon-navigation-menu-24px-1@2x.png" />
        </div>
      </div> */}
      <NavMobile />
      <div className="footer-C61RwL">
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
          {/* <div className="default-text-iPe1yZ">
            <div className="button-TQGk14">
              <div className="style-BFaroP"></div>
            </div>
            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
          </div> */}
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
      </div>
      {/* <div className="navbar-mobile-VMr6Om">
        <div className="logo-8x5SRt"><img className="vector-Ztm0bx" src="./import/img/vector-443@2x.png" /></div>
        <div className="menu24px-8x5SRt">
          <img className="iconnavigationmenu24px-BAyIoO" src="./import/img/icon-navigation-menu-24px@2x.png" />
        </div>
      </div> */}
      <NavMobile />
      <div className="hero-C61RwL">
        <img className="oval-copy-6yINq5" src={ovlcpy141x} />
        <div className="text-6yINq5">
          <div className="rectangle-8-VpwlJ3"></div>
          <div className="we-create-design-VpwlJ3 dmsans-bold-baltic-sea-40px">Our Company</div>
          <p className="our-mission-is-for-individuals-VpwlJ3 dmsans-normal-big-stone-16px">
            <span className="span0-Ez0jXp dmsans-normal-big-stone-16px">Our </span
            ><span className="span1-Ez0jXp dmsans-bold-big-stone-16px">mission</span
            ><span className="span2-Ez0jXp dmsans-normal-big-stone-16px">
                &nbsp;is to create a true and equal opportunity employment culture.<br /><br />Our </span
            ><span className="span3-Ez0jXp dmsans-bold-big-stone-16px">goal</span
            ><span className="span4-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;is to promote an inclusive workplace of professional diversity within all organizations.<br /><br />Our </span
            ><span className="span5-Ez0jXp dmsans-bold-big-stone-16px">MPower</span
            ><span className="span6-Ez0jXp dmsans-normal-big-stone-16px">
              &nbsp;platform provides an affordable, comprehensive, member-centric approach to transform employment
              opportunities for individuals.
            </span>
          </p>
        </div>
        <div className="imageframe-6yINq5">
          <img className="rectangle-vx3RBp" src={rctngl182x} />
          <div className="group-1-vx3RBp">
            <img className="line7-cdH8X2" src={ln7452x} />
            <img className="line8-cdH8X2" src={ln8412x} />
            <img className="line9-cdH8X2" src={ln9122x} />
            <img className="line10-cdH8X2" src={ln10412x} />
            <img className="line11-cdH8X2" src={ln11412x} />
            <img className="line12-cdH8X2" src={ln12122x} />
            <img className="line13-cdH8X2" src={ln13452x} />
            <img className="path71-cdH8X2" src={pth71122x} />
            <img className="line15-cdH8X2" src={ln15412x} />
          </div>
          <img className="rectangle-zXklk4" src={rctngl232x} />
        </div>
        <p className="m2-n-uses-the-t-aints-or-labels-6yINq5 dmsans-normal-raven-12px">
          *M2N uses the term minority to include any individual who identifies as something other than the white male
          majority.&nbsp;&nbsp;We have not yet determined the perfect term that accurately encompasses both unique
          individual identities while providing a sense of belonging within groups of people. Our aim is to provide an
          inclusive experience for all members by allowing every individual to identify themselves as they prefer
          without creating additional constraints or labels.
        </p>
      </div>
      <div className="contentsection-C61RwL">
        <div className="bg-OvIgOz"></div>
        <div className="we-create-design-OvIgOz dmsans-bold-big-stone-24px">Paul Lockhart</div>
        <div className="advisory-board-OvIgOz dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-6-OvIgOz" src={img632x} />
        <p className="paul-is-a-seaso-und-engagements-OvIgOz dmsans-normal-big-stone-16px">
          Paul is a seasoned executive recognized for his ability to grow high-performing organizations by rapidly
          scaling revenue operations in both start-up and turn- around engagements.
        </p>
        <img className="abstract-shapes-9-3-OvIgOz" src={abstrctShps9351x} />
        <div className="text-OvIgOz">
          <div className="group-585-Yt67U8">
            <div className="we-create-design-3wMB6Q">Eric Stanley</div>
            <div className="founder-ceo-3wMB6Q dmsans-normal-royal-blue-20px">FOUNDER &amp; CEO</div>
            <p className="robert-eric-sta-power-platform-3wMB6Q dmsans-normal-big-stone-16px">
              Robert Eric Stanley is an accomplished Black business professional with extensive experience in the
              pharmaceutical, insurance and technology industries.&nbsp;&nbsp;He built a successful career through
              continuing education, empowerment of his ethnicity, and executive mentorship. <br /><br />Over the last
              few years initiatives to increase diversity and inclusion in the workplace have increased, however, the
              results of these efforts have been underwhelming. <br /><br />The failure of these programs, coupled with
              Eric’s desire to leverage his lived experience, serves as the inspiration for creating M2N, the Minority
              Moves Network, and the MPower platform.
            </p>
          </div>
        </div>
        <div className="we-create-design-YnzbAF dmsans-bold-big-stone-24px">Shaun Hawkins</div>
        <div className="advisory-board-YnzbAF dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-8-OvIgOz" src={img862x} />
        <div className="imageframe-OvIgOz">
          <div className="group-2-L3W6LR">
            <img className="line7-SYOCph" src={ln7462x} />
            <img className="line8-SYOCph" src={ln8132x} />
            <img className="line9-SYOCph" src={ln9132x} />
            <img className="line10-SYOCph" src={ln10422x} />
            <img className="line11-SYOCph" src={ln11422x} />
            <img className="line12-SYOCph" src={ln12422x} />
            <img className="line13-SYOCph" src={ln13422x} />
            <img className="path71-SYOCph" src={pth71422x} />
            <img className="line15-SYOCph" src={ln15422x} />
          </div>
          <img className="image-7-L3W6LR" src={img732x} />
        </div>
        <div className="we-create-design-u2Rhhl dmsans-bold-big-stone-24px">Kathy Jordan</div>
        <div className="advisory-board-u2Rhhl dmsans-normal-royal-blue-14px">ADVISORY BOARD</div>
        <img className="image-8-YnzbAF" src={img872x} />
        <p className="shaun-is-the-fo-or-eli-lilly-co-OvIgOz dmsans-normal-big-stone-16px">
          Shaun is the founder of the ProSyte Companies, a diversified holding entity investing in businesses and real
          estate in the US and Europe. Hawkins was the Chief Diversity Officer for Eli Lilly &amp; Co.
        </p>
        <p className="kathy-is-the-ce-ess-performance-OvIgOz dmsans-normal-big-stone-16px">
          Kathy is the CEO of KJordan Consulting, a strategic coaching firm which works with entertainers and
          professional athletes to maximize their personal, professional, and business performance.
        </p>
      </div>
    </div>
  </Layout>
)

export default OurCompany