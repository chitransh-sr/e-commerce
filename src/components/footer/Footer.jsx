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
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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
              <LogoText>Shop<span>Now</span></LogoText>
            </LogoWrapper>
            <p>
              Curated lifestyle finds — quality goods, honest prices, delivered with care.
            </p>

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
          </BrandColumn>

          <FooterLinkColumn>
            <ColumnTitle>Shop</ColumnTitle>
            <StyledFooterLink to="/new-arrivals">New Arrivals</StyledFooterLink>
            <StyledFooterLink to="/cart">My Shopping Bag</StyledFooterLink>
            <StyledFooterLink to="/checkout">Checkout</StyledFooterLink>
          </FooterLinkColumn>

          <FooterLinkColumn>
            <ColumnTitle>Help</ColumnTitle>
            <StyledFooterLink to="/contact">Contact Us</StyledFooterLink>
            <StyledFooterLink to="/contact">Shipping & Returns</StyledFooterLink>
            <StyledFooterLink to="/contact">Returns & Exchange</StyledFooterLink>
            <StyledFooterLink to="/contact">FAQs</StyledFooterLink>
          </FooterLinkColumn>

          <FooterLinkColumn>
            <ColumnTitle>Explore</ColumnTitle>
            <StyledFooterLink to="/about">About Us</StyledFooterLink>
            <StyledFooterLink to="/contact">Contact</StyledFooterLink>
            <StyledFooterLink to="/">Home</StyledFooterLink>
          </FooterLinkColumn>
        </FooterTopRow>

        <FooterBottomRow>
          <Copyright>
            © {new Date().getFullYear()} ShopNow. All rights reserved.
          </Copyright>
        </FooterBottomRow>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
