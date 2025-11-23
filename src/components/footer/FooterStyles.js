import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  position: relative;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #f97316);
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border-top: 1px solid rgba(59, 130, 246, 0.3);
  }
`;

export const FooterWrap = styled.div`
  padding: 60px 24px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden;

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: #1e293b;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3rem;
  gap: 1.5rem;
  overflow-x: hidden;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 1rem;
  }
  
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #f1f5f9;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0;
  gap: 1.5rem;
  min-width: 0;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
    gap: 1rem;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #f1f5f9;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #1e293b;
  margin: 0;
  min-width: 0;
  flex: 1;
  max-width: 280px;
  box-sizing: border-box;
  padding: 20px;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.08);
    border-color: rgba(249, 115, 22, 0.2);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.1);
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 8px 0;
    align-items: center;
    text-align: center;
    max-width: none;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #f1f5f9;
    background: rgba(249, 115, 22, 0.1);
    border-color: rgba(249, 115, 22, 0.2);

    &:hover {
      background: rgba(249, 115, 22, 0.15);
      border-color: rgba(59, 130, 246, 0.3);
      box-shadow: 0 4px 15px rgba(249, 115, 22, 0.2);
    }
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 820px) {
    margin-bottom: 0.8rem;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(135deg, #f97316, #ea580c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const FooterLink = styled(Link)`
  color: #64748b;
  text-decoration: none;
  margin-bottom: 0.75rem;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding-left: 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #f97316);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #3b82f6;
    padding-left: 8px;
    
    &::before {
      width: 100%;
    }
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 0.8rem;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #94a3b8;

    &:hover {
      color: #f97316;
    }
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1200px;
  overflow-x: hidden;

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: #1e293b;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  padding-top: 2.5rem;
  width: 100%;
  min-width: 0;
  gap: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  @media screen and (max-width: 640px) {
    padding: 2rem 1rem 1rem;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    border-top: 1px solid rgba(59, 130, 246, 0.3);
  }
`;

export const SocialLogo = styled(Link)`
  color: #1e293b;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 0;
 
  &:hover {
    transform: scale(1.05);
    color: #3b82f6;
    
    & span {
      color: #f97316;
      text-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
    }
  }
  
  span {
    color: #f97316;
    transition: all 0.3s ease;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #f1f5f9;

    &:hover {
      color: #f97316;
    }
  }
`;

export const WebsiteRights = styled.small`
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  min-width: 0;
  flex-shrink: 1;
  text-align: center;

  @media screen and (max-width: 820px) {
    margin: 8px 0;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #94a3b8;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  min-width: 0;

  @media screen and (max-width: 820px) {
    width: 100%;
    justify-content: center;
    gap: 20px;
  }
  
  @media screen and (max-width: 640px) {
    gap: 16px;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #94a3b8;
  }
`;

export const SocialIconLink = styled.a`
  color: #64748b;
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  flex-shrink: 0;

  &:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
    border-color: transparent;
  }
  
  @media screen and (max-width: 640px) {
    font-size: 18px;
    padding: 8px;
    min-width: 40px;
    min-height: 40px;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #94a3b8;
    background: rgba(249, 115, 22, 0.1);
    border-color: rgba(249, 115, 22, 0.2);

    &:hover {
      color: #ffffff;
      background: linear-gradient(135deg, #f97316, #ea580c);
      box-shadow: 0 8px 25px rgba(249, 115, 22, 0.3);
    }
  }
`;