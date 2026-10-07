import React from 'react';
import { 
  FooterContainer,
  FooterWrap,
  FooterTopRow,
  BrandColumn,
  FooterLinkColumn,
  ColumnTitle,
  StyledFooterLink,
  FooterBottomRow,
  Copyright,
  SocialLinks,
  SocialButton
} from './FooterStyles';
import { LogoWrapper, LogoBadge, LogoText } from '../header/HeaderStyles';
import { Sparkles } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterTopRow>
          <BrandColumn>
            <LogoWrapper>
              <LogoBadge>
                <Sparkles size={20} />
              </LogoBadge>
              <LogoText>
                Shop<span>Now</span>
              </LogoText>
            </LogoWrapper>
            <p>
              The next-generation marketplace delivering curated premium lifestyle goods, gadgets, and apparel with lightning-fast worldwide delivery.
            </p>
          </BrandColumn>

          <FooterLinkColumn>
            <ColumnTitle>Shop & Discover</ColumnTitle>
            <StyledFooterLink to="/">Trending Products</StyledFooterLink>
            <StyledFooterLink to="/">Featured Deals</StyledFooterLink>
            <StyledFooterLink to="/">VIP Discounts</StyledFooterLink>
            <StyledFooterLink to="/">Customer Reviews</StyledFooterLink>
          </FooterLinkColumn>

          <FooterLinkColumn>
            <ColumnTitle>Customer Support</ColumnTitle>
            <StyledFooterLink to="/cart">My Shopping Cart</StyledFooterLink>
            <StyledFooterLink to="/">Order Tracking</StyledFooterLink>
            <StyledFooterLink to="/">Returns & Warranty</StyledFooterLink>
            <StyledFooterLink to="/">Shipping Information</StyledFooterLink>
          </FooterLinkColumn>

          <FooterLinkColumn>
            <ColumnTitle>About & Legal</ColumnTitle>
            <StyledFooterLink to="/">Our Mission</StyledFooterLink>
            <StyledFooterLink to="/">Privacy Policy</StyledFooterLink>
            <StyledFooterLink to="/">Terms of Service</StyledFooterLink>
            <StyledFooterLink to="/">Security Certification</StyledFooterLink>
          </FooterLinkColumn>
        </FooterTopRow>

        <FooterBottomRow>
          <Copyright>
            © {new Date().getFullYear()} ShopNow. All rights reserved. Built for the next generation of commerce.
          </Copyright>

          <SocialLinks>
            <SocialButton href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </SocialButton>
            <SocialButton href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </SocialButton>
            <SocialButton href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </SocialButton>
            <SocialButton href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </SocialButton>
          </SocialLinks>
        </FooterBottomRow>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;