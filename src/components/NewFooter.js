import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '../components/reusable-components/'
// import signup from '/src/assets/EmailSignup.html'
import instagramIcon from '../assets/icons/footer-intagram.svg'
import twitterIcon from '../assets/icons/footer-twitter.svg'
import linkedInIcon from '../assets/icons/footer-linkedin.svg'
import logoMobile from '../assets/images/footer-logo-320px.svg'
import logoDesktop from '../assets/images/footer-logo-1440px.svg'
import footerNmsdcDesktop from '../assets/images/footer-nmsdc-desktop.png'

const StyledFooter = styled.footer`
    padding: 64px 16px 48px 16px;
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    background: #191C23;

    @media (min-width: 1024px) {
        padding: 44px 64px 64px 64px;
    }

    @media (min-width: 1440px) {
        padding: 44px 140px 64px 140px;
    }

    & > .top-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;    
        // border: 2px dashed white;

        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            // border: 2px solid red;
        }

        & > .footer-header-container {
            margin-bottom: 64px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            // border: 2px solid blue;
    
            @media (min-width: 720px) {
                margin-bottom: 84px;
                width: 386px;
                // border: 2px dashed red;
            }

            @media (min-width: 1024px) {
                align-items: flex-start;
                order: 1;
                margin-bottom: 0px;
                width: 208px;
                // border: 2px dashed red;
            }
    
            & > .footer-logo {
                width: 120px;
                height: 42px;
                background-image:
                    url(${logoMobile});
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                margin-bottom: 16px;
                // border: 1px dashed lightgreen;

                @media (min-width: 1440px) {
                    margin-bottom: 24px;
                    width: 208px;
                    height: 74px;
                    background-image:
                        url(${logoDesktop});
                }
            }
        
            & > .footer-heading {
                font-family: DM Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 140%;
                text-align: center;
                color: #FFFFFF;
                // border: 1px dashed orange;

                @media (min-width: 1024px) {
                    text-align: left;
                }
            }
        }

        & > .footer-subscribe-container {
            width: 100%;
            // border: 2px dashed blue;
    
            @media (min-width: 720px) {
                width: 386px;
                // border: 2px dashed red;
            }

            @media (min-width: 1024px) {
                order: 4;
                width: 208px;
                // border: 2px dashed red;
            }
    
            & > .form-title {
                margin-bottom: 16px;
                font-family: Source Sans Pro;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 21px;
                text-align: center;
                color: #FFFFFF;
                // border: 1px dashed orange;

                @media (min-width: 1024px) {
                    text-align: left;
                }
            }
    
            & > .subscribe-button {
                margin-top: 16px;
                width: 100%;
            }
        }

        & > .about-container {
            width: 172px;
            margin-top: 48px;
            // border: 2px dashed blue;

            @media (min-width: 1024px) {
                order: 2;
                margin-top: 0px;
                // border: 2px dashed red;
            }
    
            & > .group-title {
                font-family: DM Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 21px;
                text-align: center;
                color: #FFFFFF;
                // border: 1px dashed orange;

                @media (min-width: 1024px) {
                    text-align: left;
                }
            }
    
            & > .link {
                text-decoration: none;
    
                & > p {
                    margin-top: 16px;
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 21px;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.5);
                    text-decoration: none;
                    // border: 1px dashed orange;

                    @media (min-width: 1024px) {
                        text-align: left;
                    }
                }
            }
        }

        & > .platform-container {
            width: 172px;
            margin-top: 48px;
            // border: 2px dashed blue;

            @media (min-width: 1024px) {
                order: 3;
                margin-top: 0px;
                // border: 2px dashed red;
            }
    
            & > .group-title {
                font-family: DM Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 21px;
                text-align: center;
                color: #FFFFFF;
                // border: 1px dashed orange;

                @media (min-width: 1024px) {
                    text-align: left;
                }
            }
    
            & > .link {
                text-decoration: none;
    
                & > p {
                    margin-top: 16px;
                    font-family: DM Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 21px;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.5);
                    text-decoration: none;
                    // border: 1px dashed orange;

                    @media (min-width: 1024px) {
                        text-align: left;
                    }
                }
            }
        }
    }

    & > .bottom-section {
        padding-top: 48px;
        margin-top: 48px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 2px solid #444444;

        @media (min-width: 1024px) {
            flex-direction: row;
            padding-top: 32px;
            justify-content: space-between;
        }

        & > .certified {
            margin-top: 48px;
            width: 73px;
            height: 69px;
            background-image:
                url(${footerNmsdcDesktop});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            // border: 1px dashed orange;

            @media (min-width: 1024px) {
                order: -1;
            }
        }

        & > .copyright {
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.5;
            // border: 1px dashed orange;
        }

        & > .terms {
            margin-top: 16px;
            font-family: DM Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
            mix-blend-mode: normal;
            // border: 1px dashed orange;

            @media (min-width: 1024px) {
                margin-top: 0px;
            }
        }

        & > .social-container {
            margin-top: 48px;
            display: flex;
            gap: 24px;
            justify-content: center;
            // border: 1px dashed orange;

            @media (min-width: 1024px) {
                margin-top: 0px;
            }

            & > .footer-icon {
                width: 24px;
            }
        }
    }
`

const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 3px;

    color: #2A2C30;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    mix-blend-mode: normal;
    padding: 15px;

    &::placeholder {
        font-family: DM Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #82888E;
        mix-blend-mode: normal;
    }
`

export default function NewFooter(props) {
    const { footerDisplay } = props

    // Add HubSpot Form
    // Will generate multiple forms on Dev server because of hot-reloading. Safe for production
    useEffect(() => {
        const signupDiv = document.querySelector(".footer-subscribe-container");

        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/shell.js";
        script.async = true;
        signupDiv.appendChild(script);

        setTimeout(function () {
            if (window.hbspt) {
                const script2 = document.createElement("script");
                script2.text = 'hbspt.forms.create({ region: "na1", portalId: "20008151", formId: "d5b7ea37-7f3d-4a2e-bc67-3ed68f9b2c02" })';
                signupDiv.appendChild(script2);
            } else {
                console.warn("HubSpot not loaded");
            }
        }, 100);
    })

    return (
        <StyledFooter display={footerDisplay}>
            <div className={'top-section'}>
                <div className={'footer-header-container'}>
                    <div className={'footer-logo'}></div>
                    {/* <img
                        src={footerLogo}
                        alt={'Minority Moves Network'}
                        className={'footer-logo'}
                    /> */}
                    <p className={'footer-heading'}>{'A new approach to diversity, equity & inclusion. Meeting people & organizations where they are through proprietary technology.'}</p>
                </div>
                <div className={'footer-subscribe-container'}>
                    <p className={'form-title'}>{'Newsletter'}</p>
                    <StyledInput
                        placeholder={'Your email'}
                    />
                    <Button
                        label={'subscribe'}
                        className={'subscribe-button'}
                    />
                </div>

                <div className={'about-container'}>
                    <p className={'group-title'}>{'About'}</p>
                    <Link to={'/membership'} className={'link'}>
                        <p>{'Membership'}</p>
                    </Link>

                    <Link to={'/organization'} className={'link'}>
                        <p>{'Organization'}</p>
                    </Link>

                    <Link to={'/company'} className={'link'}>
                        <p>{'Company'}</p>
                    </Link>

                    <Link to={'/partners'} className={'link'}>
                        <p>{'Partnerships'}</p>
                    </Link>
                </div>

                <div className={'platform-container'}>
                    <p className={'group-title'}>{'Platform'}</p>
                    <Link to={'/mpower-app'} className={'link'}>
                        <p>{'iOS'}</p>
                    </Link>

                    <Link to={'/mpower-app'} className={'link'}>
                        <p>{'Android'}</p>
                    </Link>

                    <Link to={'/mpower-app'} className={'link'}>
                        <p>{'Browser'}</p>
                    </Link>
                </div>
            </div>

            <div className={'bottom-section'}>
                <p className={'copyright'}>{'©2021 M2N | Minority Moves Network Inc.  •  All rights reserved. '}</p>
                <p className={'terms'}>{'Terms & Conditions   |   Privacy Policy'}</p>
                <div className={'certified'}></div>

                <div className={'social-container'}>
                    <Link to={'https://www.instagram.com/m2n_mpower/'}>
                        <img
                            src={instagramIcon}
                            alt={'M2N Instagram'}
                            className={'footer-icon'}
                        />
                    </Link>
                    <Link to={'https://twitter.com/M2nNetwork/'}>
                        <img
                            src={twitterIcon}
                            alt={'M2N Twitter'}
                            className={'footer-icon'}
                        />
                    </Link>
                    <Link to={'https://www.linkedin.com/company/m2n-minority-moves-network/about/?viewAsMember=true'}>
                        <img
                            src={linkedInIcon}
                            alt={'M2N LinkedIn'}
                            className={'footer-icon'}
                        />
                    </Link>
                </div>
            </div>
        </StyledFooter>
    )
}
