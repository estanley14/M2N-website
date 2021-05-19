import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Footer = ({ breakpoint }) => {
    return (
            <div>
                {breakpoint === "tablet" && (
                    <div className="footer-C61RwL">
                    <div className="background-iPe1yZ"></div>
                    <div className="frame-iPe1yZ">
                      <img className="vector-gq7idq" src="./import/img/footer-logo-desktop.png" />
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
                    <form action="">
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
                      <input className="default-text-iPe1yZ sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
                    </form>

                    {/* <div className="default-text-iPe1yZ">
                      <div className="button-TQGk14">
                        <div className="style-BFaroP"></div>
                      </div>
                      <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
                    </div> */}
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
                )} 
                {breakpoint === "desktop" && (
                    <div className="footer-desktop-C61RwL">
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
                    <form action="">
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
                      {/* <div className="default-text-vxY8x4 smart-layers-pointers">
                          <div className="font-kEobNx sourcesanspro-bold-white-16px">Subscribe</div>
                      </div> */}
                      <input className="default-text-vxY8x4 sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
                    </form>

                    {/* <div className="button-primary-desktop-vxY8x4">
                        <div className="font-U7FTmp valign-text-middle dmsans-bold-white-14px">SUBSCRIBE</div>
                    </div> */}
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
                      <Link to="/company">
                          <div className="company-aRtUZh dmsans-normal-white-16px">Company</div>
                      </Link>
                      <Link to="/partners">
                          <div className="partnerships-aRtUZh dmsans-normal-white-16px">Partnerships</div>
                      </Link>
                    </div>
                    <div className="column1-VNfvnu">
                    <div className="logo-dewRqW">
                        <img className="vector-ouSEQ4" src="./import/img/footer-logo-desktop.png" />
                    </div>
                    <p className="aboutblurb-dewRqW dmsans-normal-white-14px">
                      A new approach to diversity, equity &amp; inclusion. Meeting people &amp; organizations where they are through proprietary technology.
                    </p>
                    </div>
                    </div>
                )}

                {breakpoint === "mobile" && (
                          <div className="footer-C61RwL">
                          <div className="newsletter-iPe1yZ sourcesanspro-bold-white-16px">Newsletter</div>
                          <form action="">
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
                            <input className="default-text-iPe1yZ sourcesanspro-bold-white-16px footer-submit" type="submit" value="Subscribe" />
                          </form>
                          {/* <div className="default-text-iPe1yZ">
                            <div className="button-TQGk14">
                              <div className="style-BFaroP"></div>
                            </div>
                            <div className="font-TQGk14 sourcesanspro-bold-white-16px">Subscribe</div>
                          </div> */}
                          <div className="frame-iPe1yZ">
                            <img className="vector-gq7idq" src="./import/img/footer-logo-desktop.png" />
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
                )}
                
        </div>
    )
}

export default Footer
