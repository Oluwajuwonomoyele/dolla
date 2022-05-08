import React from "react";
import {
    FooterSection,
    FooterContainer,
    FooterCol,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    Social,
    SocialContainer,
    SocialLogo,
    SocialIcons,
    Copyrights,
    Icon,
} from "./footer.style";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";

const Footer = () => {
    const scrollHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterSection>
                <FooterContainer>
                    <FooterCol>
                        <FooterLinks>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">
                                Terms of Service
                            </FooterLink>
                        </FooterLinks>
                        <FooterLinks>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinks>
                    </FooterCol>
                    <FooterCol>
                        <FooterLinks>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Videos</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinks>
                        <FooterLinks>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinks>
                    </FooterCol>
                </FooterContainer>
                <Social>
                    <SocialContainer>
                        <SocialLogo to="/" onClick={scrollHome}>
                            dolla
                        </SocialLogo>
                        <Copyrights>
                            dolla &copy; {new Date().getFullYear()} All rights
                            reserved
                        </Copyrights>
                        <SocialIcons>
                            <Icon
                                href="/"
                                target="-blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </Icon>
                            <Icon
                                href="/"
                                target="-blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </Icon>
                            <Icon href="/" target="-blank" aria-label="Youtube">
                                <FaYoutube />
                            </Icon>
                            <Icon href="/" target="-blank" aria-label="Twitter">
                                <FaTwitter />
                            </Icon>
                            <Icon
                                href="/"
                                target="-blank"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </Icon>
                        </SocialIcons>
                    </SocialContainer>
                </Social>
            </FooterSection>
        </>
    );
};

export default Footer;
