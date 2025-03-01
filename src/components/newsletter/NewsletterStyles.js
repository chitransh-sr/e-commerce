import styled from 'styled-components';

export const NewsletterContainer = styled.div`
  max-width: 95vw;
  margin: 2rem auto;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgb(77, 196, 255) 0%, rgb(50, 22, 238) 50%, rgb(88, 150, 236) 100%);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(66, 153, 225, 0.05);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      rgba(255, 255, 255, 0) 100%);
    pointer-events: none;
  }
`;

export const Title = styled.h3`
  font-size: 1.75rem;
  color: white;
  margin-bottom: 1rem;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  font-weight: 700;
  position: relative;
  letter-spacing: -0.5px;
`;

export const Description = styled.p`
  color: white;
  font-size: 1.05rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  position: relative;
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
  padding: 0.875rem 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  width: 320px;
  background: rgba(255, 255, 255, 0.9);
  
  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
    @media (max-width: 480px) {
    width: auto;
  }
`;

export const Button = styled.button`
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f0fff4;
  color: #38a169;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  &::before {
    content: '✓';
    font-size: 1.1rem;
  }
`;
