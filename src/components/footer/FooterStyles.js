import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #1a365d;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 3rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 16px 0;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  margin: 16px;
  width: 200px;
  box-sizing: border-box;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 8px 0;
    align-items: center;
    text-align: center;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (max-width: 820px) {
    margin-bottom: 12px;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(255, 102, 0);
    padding-left: 6px;
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 0.8rem;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(255, 102, 0);
    transform: scale(1.05);
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  font-size: 12px;

  @media screen and (max-width: 820px) {
    margin: 8px 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width: 820px) {
    width: 100%;
    justify-content: center;
    gap: 24px;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(255, 102, 0);
    transform: translateY(-3px);
  }
`;