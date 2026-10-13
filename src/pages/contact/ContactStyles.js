import styled, { keyframes } from "styled-components";
import { spacing } from '../../design-system/tokens';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageWrapper = styled.div`
  min-height: calc(100vh - 80px);
  padding: ${spacing['5xl']} ${spacing.xl} ${spacing['6xl']};
  background: #F5E9D7;
  font-family: "Instrument Sans", sans-serif;
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.sm} ${spacing['4xl']};
  }

  [data-theme='dark'] & {
    background: #1A0F11;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  font-size: 0.9rem;
  margin-bottom: ${spacing['3xl']};
  color: #5C554B;

  button {
    background: transparent;
    border: none;
    padding: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: 0.9rem;
    color: #5C554B;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: #7A1E2B;
    }
  }

  span.separator {
    color: #5C554B;
  }

  span.current {
    color: #7A1E2B;
    font-weight: 600;
  }

  [data-theme='dark'] & {
    color: #CBBFA9;

    button {
      color: #CBBFA9;

      &:hover {
        color: #C9A24C;
      }
    }

    span.separator {
      color: #CBBFA9;
    }

    span.current {
      color: #C9A24C;
    }
  }
`;

export const Hero = styled.section`
  text-align: center;
  max-width: 640px;
  margin: 0 auto ${spacing['5xl']};
`;

export const Eyebrow = styled.span`
  display: inline-block;
  padding: 6px 18px;
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #7A1E2B;
  margin-bottom: ${spacing.xl};

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
    color: #C9A24C;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Instrument Serif", serif;
  font-size: clamp(2.25rem, 4.8vw, 3rem);
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #7A1E2B;
  margin: 0 0 ${spacing.lg};

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const HeroSub = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: #5C554B;
  margin: 0;

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing['3xl']};
  align-items: flex-start;
  margin-bottom: ${spacing['5xl']};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #C9A24C;
  margin: 0 0 ${spacing.sm};

  [data-theme='dark'] & {
    color: #C9A24C;
  }
`;

export const ColumnTitle = styled.h2`
  font-family: "Instrument Serif", serif;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #7A1E2B;
  margin: 0 0 ${spacing.xl};

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const InfoCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  margin-bottom: ${spacing.xl};
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.lg};
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing.xl};
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);
  transition: all 0.2s ease;

  &:hover {
    border-color: #C9A24C;
    box-shadow: 0 4px 16px rgba(122, 30, 43, 0.12);
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
  }
`;

export const InfoIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(122, 30, 43, 0.08);
  border: 1px solid #E8D9C4;
  color: #7A1E2B;

  [data-theme='dark'] & {
    background: rgba(201, 162, 76, 0.12);
    border-color: #4A2E33;
    color: #C9A24C;
  }
`;

export const InfoBody = styled.div`
  min-width: 0;

  h3 {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #5C554B;
    margin: 0 0 4px;
  }

  p.value {
    font-size: 1.05rem;
    font-weight: 700;
    color: #1F1F1F;
    margin: 0 0 4px;
    word-break: break-word;
  }

  p.hint {
    font-size: 0.9rem;
    color: #5C554B;
    margin: 0;
  }

  [data-theme='dark'] & {
    h3 {
      color: #CBBFA9;
    }

    p.value {
      color: #F5E9D7;
    }

    p.hint {
      color: #CBBFA9;
    }
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: ${spacing.md};
  flex-wrap: wrap;
`;

export const OutlinePillButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  padding: 14px 28px;
  border-radius: 100px;
  background: transparent;
  border: 1px solid #7A1E2B;
  color: #7A1E2B;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #7A1E2B;
    color: #F5E9D7;
  }

  [data-theme='dark'] & {
    border-color: #C9A24C;
    color: #C9A24C;

    &:hover {
      background: #C9A24C;
      color: #1F1F1F;
    }
  }
`;

export const FormCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['3xl']};
  box-shadow: 0 2px 8px rgba(122, 30, 43, 0.08);

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
  }

  @media (max-width: 600px) {
    padding: ${spacing.xl};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

export const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.lg};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1F1F1F;
  }

  [data-theme='dark'] & {
    label {
      color: #F5E9D7;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #E8D9C4;
  border-radius: 8px;
  font-size: 0.95rem;
  background: #FFFFFF;
  color: #1F1F1F;
  font-family: "Instrument Sans", sans-serif;
  transition: all 0.2s ease;

  &::placeholder {
    color: #5C554B;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: #7A1E2B;
    box-shadow: 0 0 0 2px rgba(122, 30, 43, 0.12);
  }

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;
    color: #F5E9D7;

    &::placeholder {
      color: #CBBFA9;
    }

    &:focus {
      border-color: #C9A24C;
      box-shadow: 0 0 0 2px rgba(201, 162, 76, 0.2);
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #E8D9C4;
  border-radius: 8px;
  font-size: 0.95rem;
  background: #FFFFFF;
  color: #1F1F1F;
  font-family: "Instrument Sans", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #7A1E2B;
    box-shadow: 0 0 0 2px rgba(122, 30, 43, 0.12);
  }

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;
    color: #F5E9D7;

    &:focus {
      border-color: #C9A24C;
      box-shadow: 0 0 0 2px rgba(201, 162, 76, 0.2);
    }
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 130px;
  padding: 0.8rem;
  border: 1px solid #E8D9C4;
  border-radius: 8px;
  font-size: 0.95rem;
  background: #FFFFFF;
  color: #1F1F1F;
  font-family: "Instrument Sans", sans-serif;
  resize: vertical;
  transition: all 0.2s ease;

  &::placeholder {
    color: #5C554B;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: #7A1E2B;
    box-shadow: 0 0 0 2px rgba(122, 30, 43, 0.12);
  }

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;
    color: #F5E9D7;

    &::placeholder {
      color: #CBBFA9;
    }

    &:focus {
      border-color: #C9A24C;
      box-shadow: 0 0 0 2px rgba(201, 162, 76, 0.2);
    }
  }
`;

export const PrivacyNote = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #5C554B;
  margin: 0;

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${spacing.lg};
  background: #7A1E2B;
  color: #F5E9D7;
  border: none;
  border-radius: 100px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: all 0.2s ease;

  &:hover {
    background: #C9A24C;
    color: #1F1F1F;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }

  [data-theme='dark'] & {
    background: #7A1E2B;
    color: #F5E9D7;

    &:hover {
      background: #C9A24C;
      color: #1F1F1F;
    }
  }
`;
