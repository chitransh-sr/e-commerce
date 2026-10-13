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
import { LogoWrapper, LogoBadge } from '../header/HeaderStyles';
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
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: 800,
                background: 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Shop<span style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Now</span></span>
            </LogoWrapper>
            <p>
              The next-generation marketplace delivering curated premium lifestyle goods, gadgets, and apparel with lightning-fast worldwide delivery.
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
            <StyledFooterLink to="/">Trending Products</StyledFooterLink>
            <StyledFooterLink to="/">Featured Deals</StyledFooterLink>
            <StyledFooterLink to="/">VIP Discounts</StyledFooterLink>
            <StyledFooterLink to="/">New Arrivals</StyledFooterLink>
            <StyledFooterLink to="/">Gift Cards</StyledFooterLink>
          </FooterLinkColumn>

          <FooterLinkColumn>
            <ColumnTitle>Support</ColumnTitle>
            <StyledFooterLink to="/cart">My Shopping Bag</StyledFooterLink>
            <StyledFooterLink to="/">Order Tracking</StyledFooterLink>
            <StyledFooterLink to="/">Returns & Warranty</StyledFooterLink>
            <StyledFooterLink to="/">Shipping Information</StyledFooterLink>
            <StyledFooterLink to="/">FAQs</StyledFooterLink>
          </FooterLinkColumn>

          <FooterLinkColumn>
            <ColumnTitle>Company</ColumnTitle>
            <StyledFooterLink to="/">About Us</StyledFooterLink>
            <StyledFooterLink to="/">Careers</StyledFooterLink>
            <StyledFooterLink to="/">Blog</StyledFooterLink>
            <StyledFooterLink to="/">Privacy Policy</StyledFooterLink>
            <StyledFooterLink to="/">Terms of Service</StyledFooterLink>
          </FooterLinkColumn>
        </FooterTopRow>

        <FooterBottomRow>
          <Copyright>
            © {new Date().getFullYear()} ShopNow. All rights reserved. Built for the next generation of commerce.
          </Copyright>
        </FooterBottomRow>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;