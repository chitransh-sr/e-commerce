import styled from "styled-components";

export const FullWidthWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #ffffff !important;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  /* Custom scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: #667eea #f1f5f9;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(241, 245, 249, 0.8);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #764ba2, #667eea);
  }
  
  html[data-theme='dark'] &,
  &[data-theme='dark'] {
    background: rgba(30, 41, 59, 0.9);
    scrollbar-color: #764ba2 #0f172a;
    
    &::-webkit-scrollbar-track {
      background: rgba(30, 41, 59, 0.5);
    }
    
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(90deg, #764ba2, #667eea);
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(90deg, #667eea, #764ba2);
    }
  }
  
  @media (prefers-color-scheme: dark) {
    html:not([data-theme]) &,
    &:not([data-theme]) {
      background: rgba(30, 41, 59, 0.9);
      scrollbar-color: #764ba2 #0f172a;
      
      &::-webkit-scrollbar-track {
        background: rgba(30, 41, 59, 0.5);
      }
      
      &::-webkit-scrollbar-thumb {
        background: linear-gradient(90deg, #764ba2, #667eea);
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(90deg, #667eea, #764ba2);
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`;

export const SuccessCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 32px;
  padding: 4rem 3rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  }
  
  @media (prefers-color-scheme: dark) {
    html:not([data-theme]) & {
      background: rgba(30, 41, 59, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #10b981, #059669, #047857, #065f46);
    background-size: 300% 100%;
    animation: gradientShift 3s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @media (max-width: 640px) {
    padding: 3rem 2rem;
    border-radius: 24px;
  }
`;

export const SuccessIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  margin: 0 auto 2.5rem;
  color: white;
  box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
  animation: successPulse 3s ease-in-out infinite;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border-radius: 50%;
    opacity: 0.3;
    animation: successRing 2s ease-in-out infinite;
  }
  
  @keyframes successPulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
    }
    50% {
      transform: scale(1.08);
      box-shadow: 0 20px 50px rgba(16, 185, 129, 0.5);
    }
  }
  
  @keyframes successRing {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.15);
      opacity: 0.1;
    }
  }
  
  @media (max-width: 640px) {
    width: 120px;
    height: 120px;
  }
`;

export const OrderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 1.5rem 0;
  background: linear-gradient(135deg, #1e293b 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 20px rgba(16, 185, 129, 0.1);
  position: relative;
  z-index: 2;
  
  html[data-theme='dark'] & {
    background: linear-gradient(135deg, #f8fafc 0%, #10b981 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (prefers-color-scheme: dark) {
    html:not([data-theme]) & {
      background: linear-gradient(135deg, #f8fafc 0%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  
  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
`;

export const OrderMessage = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  margin: 0 0 2.5rem 0;
  line-height: 1.7;
  font-weight: 400;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  
  html[data-theme='dark'] & {
    color: #94a3b8;
  }
  
  @media (prefers-color-scheme: dark) {
    html:not([data-theme]) & {
      color: #94a3b8;
    }
  }
  
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

export const OrderNumber = styled.div`
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin: 2.5rem 0;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  
  html[data-theme='dark'] & {
    background: rgba(16, 185, 129, 0.1);
    border: 2px solid rgba(16, 185, 129, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    html:not([data-theme]) & {
      background: rgba(16, 185, 129, 0.1);
      border: 2px solid rgba(16, 185, 129, 0.3);
    }
  }
  
  .order-label {
    font-size: 0.95rem;
    color: #059669;
    margin-bottom: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    html[data-theme='dark'] & {
      color: #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      html:not([data-theme]) & {
        color: #10b981;
      }
    }
  }
  
  .order-value {
    font-size: 1.75rem;
    font-weight: 800;
    color: #059669;
    font-family: 'Courier New', monospace;
    letter-spacing: 1px;
    text-shadow: 0 2px 10px rgba(16, 185, 129, 0.2);
    
    html[data-theme='dark'] & {
      color: #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      html:not([data-theme]) & {
        color: #10b981;
      }
    }
    
    @media (max-width: 640px) {
      font-size: 1.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 2.5rem;
  margin: 2rem 0;
  text-align: left;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  
  html[data-theme='dark'] & {
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (prefers-color-scheme: dark) {
    html:not([data-theme]) & {
      background: rgba(30, 41, 59, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 1.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    html[data-theme='dark'] & {
      color: #f8fafc;
    }
    
    @media (prefers-color-scheme: dark) {
      html:not([data-theme]) & {
        color: #f8fafc;
      }
    }
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #e2e8f0;
    transition: all 0.2s;
    
    html[data-theme='dark'] & {
      border-bottom-color: #334155;
    }
    
    @media (prefers-color-scheme: dark) {
      html:not([data-theme]) & {
        border-bottom-color: #334155;
      }
    }
    
    &:hover {
      background: rgba(16, 185, 129, 0.02);
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      border-radius: 8px;
    }
    
    &:last-child {
      border-bottom: none;
    }
    
    .label {
      color: #64748b;
      font-weight: 500;
      font-size: 0.95rem;
      
      html[data-theme='dark'] & {
        color: #94a3b8;
      }
      
      @media (prefers-color-scheme: dark) {
        html:not([data-theme]) & {
          color: #94a3b8;
        }
      }
    }
    
    .value {
      color: #1e293b;
      font-weight: 600;
      font-size: 1rem;
      
      html[data-theme='dark'] & {
        color: #f8fafc;
      }
      
      @media (prefers-color-scheme: dark) {
        html:not([data-theme]) & {
          color: #f8fafc;
        }
      }
    }
  }
  
  @media (max-width: 640px) {
    padding: 2rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3.5rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(59, 130, 246, 0.5);
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    padding: 1.1rem 2rem;
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #64748b;
  padding: 1.25rem 2.5rem;
  border-radius: 16px;
  border: 2px solid rgba(226, 232, 240, 0.8);
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  html[data-theme='dark'] & {
    color: #94a3b8;
    background: rgba(30, 41, 59, 0.6);
    border: 2px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (prefers-color-scheme: dark) {
    html:not([data-theme]) & {
      color: #94a3b8;
      background: rgba(30, 41, 59, 0.6);
      border: 2px solid rgba(255, 255, 255, 0.1);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    
    html[data-theme='dark'] &:hover {
      background: rgba(30, 41, 59, 0.8);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
      html:not([data-theme]) &:hover {
        background: rgba(30, 41, 59, 0.8);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      }
    }
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    padding: 1.1rem 2rem;
  }
`;

export const ThemeToggle = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
  z-index: 1000;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  html[data-theme='dark'] &,
  &[data-theme='dark'] {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
    }
  }
  
  @media (prefers-color-scheme: dark) {
    html:not([data-theme]) &,
    &:not([data-theme]) {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
      
      &:hover {
        background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
        box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
      }
    }
  }
`;
