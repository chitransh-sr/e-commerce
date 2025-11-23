import styled from 'styled-components';

export const NewsletterContainer = styled.div`
  max-width: 95vw;
  margin: 3rem auto;
  padding: 3rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #f97316);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
    pointer-events: none;
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
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  width: 350px;
  background: #ffffff;
  color: #1e293b;
  transition: all 0.3s ease;
  
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
`;

export const Button = styled.button`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
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
    box-shadow: 0 6px 25px rgba(249, 115, 22, 0.4);
    background: linear-gradient(135deg, #ea580c, #dc2626);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  color: #16a34a;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(34, 197, 94, 0.2);
  box-shadow: 0 2px 10px rgba(34, 197, 94, 0.1);

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
`;
