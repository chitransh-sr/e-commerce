import styled from 'styled-components';

export const NewsletterContainer = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  box-shadow: 0 -20px 60px rgba(102, 126, 234, 0.15), 0 -8px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 -30px 80px rgba(102, 126, 234, 0.25), 0 -12px 40px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
    border-radius: 24px 24px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    pointer-events: none;
    animation: rotate 20s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.8);
    border: none;
    box-shadow: 0 -20px 60px rgba(0, 0, 0, 0.3), 0 -8px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  font-weight: 700;
  position: relative;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(135deg, #f97316, #ea580c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Description = styled.p`
  color: #64748b;
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  position: relative;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  /* Dark mode styles */
  [data-theme="dark"] & {
    color: #94a3b8;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  border: 2px solid rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  width: 350px;
  background: rgba(255, 255, 255, 0.8);
  color: #1e293b;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    transform: translateY(-1px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(249, 115, 22, 0.2);
    color: #f1f5f9;

    &:focus {
      border-color: #f97316;
      box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
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
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: linear-gradient(135deg, #f97316, #ea580c);
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);

    &:hover {
      background: linear-gradient(135deg, #ea580c, #dc2626);
      box-shadow: 0 6px 25px rgba(249, 115, 22, 0.4);
    }
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  color: #16a34a;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(34, 197, 94, 0.2);
  box-shadow: 0 2px 10px rgba(34, 197, 94, 0.1);
  backdrop-filter: blur(10px);

  &::before {
    content: '✓';
    font-size: 1.1rem;
    background: linear-gradient(135deg, #16a34a, #15803d);
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Dark mode styles */
  [data-theme="dark"] & {
    background: rgba(16, 185, 129, 0.15);
    border-color: rgba(34, 197, 94, 0.3);
    color: #22c55e;
  }
`;
