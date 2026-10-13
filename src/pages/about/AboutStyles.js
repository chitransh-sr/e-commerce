import styled, { keyframes } from "styled-components";
import { spacing } from '../../design-system/tokens';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
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
  animation: ${fadeIn} 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.md} ${spacing['4xl']};
  }

  [data-theme='dark'] & {
    background: #1A0F11;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  font-size: 0.875rem;
  color: #5C554B;
  margin-bottom: ${spacing['3xl']};

  button {
    background: none;
    border: none;
    padding: 0;
    font-family: "Instrument Sans", sans-serif;
    font-size: 0.875rem;
    color: #7A1E2B;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      color: #C9A24C;
    }
  }

  span.separator {
    color: #C9A24C;
  }

  span.current {
    color: #1F1F1F;
    font-weight: 400;
  }

  [data-theme='dark'] & {
    color: #CBBFA9;

    button {
      color: #C9A24C;
    }

    span.separator,
    span.current {
      color: #CBBFA9;
    }
  }
`;

/* Shared eyebrow — one style used by every section */
export const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #7A1E2B;
  margin: 0 0 ${spacing.md};

  [data-theme='dark'] & {
    color: #C9A24C;
  }
`;

export const HeroSection = styled.section`
  text-align: center;
  max-width: 780px;
  margin: 0 auto ${spacing['5xl']};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(3rem, 7.2vw, 4.5rem);
  line-height: 1.1;
  letter-spacing: 0;
  color: #7A1E2B;
  margin: 0 0 ${spacing.lg};

  em {
    font-style: italic;
    color: #7A1E2B;
  }

  [data-theme='dark'] & {
    color: #E8CFC0;

    em {
      color: #C9A24C;
    }
  }
`;

export const HeroSub = styled.p`
  font-size: 1.125rem;
  line-height: 1.4;
  color: #5C554B;
  margin: 0 0 ${spacing.xl};
  max-width: 600px;

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

export const WelcomeText = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #5C554B;
  margin: 0;
  max-width: 640px;

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

export const GoldRule = styled.span`
  display: inline-block;
  width: 48px;
  height: 2px;
  background: #C9A24C;
  border-radius: 9999px;
  margin: ${spacing.xl} auto 0;
`;

export const StatsRow = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: ${spacing['3xl']};
  margin-top: ${spacing['4xl']};
  width: 100%;

  @media (max-width: 600px) {
    gap: ${spacing.xl};
  }
`;

export const StatItem = styled.div`
  text-align: center;
  flex: 1;
  max-width: 200px;

  & + & {
    border-left: 1px solid #E8D9C4;
    padding-left: ${spacing['3xl']};

    @media (max-width: 600px) {
      padding-left: ${spacing.xl};
    }
  }

  .number {
    display: block;
    font-family: "Instrument Serif", serif;
    font-size: 2rem;
    font-weight: 400;
    color: #7A1E2B;
    line-height: 1.1;
  }

  .label {
    display: block;
    margin-top: 4px;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #5C554B;
  }

  [data-theme='dark'] & {
    & + & {
      border-color: #4A2E33;
    }

    .number {
      color: #E8CFC0;
    }

    .label {
      color: #CBBFA9;
    }
  }
`;

export const CraftSection = styled.section`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: ${spacing['4xl']};
  align-items: stretch;
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['4xl']};
  margin-bottom: ${spacing['5xl']};
  box-shadow: 0px 4px 20px rgba(31, 31, 31, 0.15);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: ${spacing['3xl']} ${spacing.xl};
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
  }
`;

export const CraftText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CraftHeading = styled.h2`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(2.25rem, 4.8vw, 3rem);
  line-height: 1.1;
  letter-spacing: 0;
  color: #7A1E2B;
  margin: 0 0 ${spacing.lg};

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const CraftPara = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #5C554B;
  margin: 0 0 ${spacing.xl};

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

export const CheckList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

export const CheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  font-size: 0.95rem;
  font-weight: 400;
  color: #1F1F1F;

  .check {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #7A1E2B;
    color: #F5E9D7;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-theme='dark'] & {
    color: #F5E9D7;
  }
`;

export const CraftVisual = styled.div`
  background: #7A1E2B;
  border-radius: 1rem;
  padding: ${spacing['4xl']} ${spacing['3xl']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${spacing.md};
  position: relative;
  overflow: hidden;

  .mark {
    font-family: "Instrument Serif", serif;
    font-size: 4rem;
    line-height: 1;
    color: #C9A24C;
  }

  p {
    font-family: "Instrument Serif", serif;
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.25;
    color: #F5E9D7;
    margin: 0;
    max-width: 320px;
  }

  span.rule {
    display: inline-block;
    width: 48px;
    height: 2px;
    background: #C9A24C;
    border-radius: 9999px;
  }

  small {
    font-family: "Instrument Sans", sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #E8D9C4;
  }
`;

export const DifferenceSection = styled.section`
  text-align: center;
  margin-bottom: ${spacing['5xl']};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeading = styled.h2`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(2.25rem, 4.8vw, 3rem);
  line-height: 1.1;
  letter-spacing: 0;
  color: #7A1E2B;
  margin: 0;

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const SectionSub = styled.p`
  font-size: 1rem;
  color: #5C554B;
  margin: ${spacing.sm} 0 0;
  max-width: 560px;

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.xl};
  text-align: left;
  width: 100%;
  margin-top: ${spacing['3xl']};

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const DifferenceCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['3xl']} ${spacing.xl};
  box-shadow: 0 2px 8px rgba(31, 31, 31, 0.06);
  transition: border-color 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    border-color: #C9A24C;
  }

  h3 {
    font-family: "Instrument Serif", serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.25;
    color: #7A1E2B;
    margin: 0 0 ${spacing.sm};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.4;
    color: #5C554B;
    margin: 0;
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;

    h3 {
      color: #E8CFC0;
    }

    p {
      color: #CBBFA9;
    }
  }
`;

export const CardNumber = styled.span`
  font-family: "Instrument Serif", serif;
  font-style: italic;
  font-size: 0.875rem;
  color: #C9A24C;
  margin-bottom: ${spacing.md};
`;

export const IconBadge = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5E9D7;
  border: 1px solid #E8D9C4;
  color: #7A1E2B;
  margin-bottom: ${spacing.lg};

  [data-theme='dark'] & {
    background: #1A0F11;
    border-color: #4A2E33;
    color: #C9A24C;
  }
`;

export const QuoteBanner = styled.section`
  background: #7A1E2B;
  border-radius: 1rem;
  padding: ${spacing['5xl']} ${spacing['3xl']};
  text-align: center;
  margin-bottom: ${spacing['5xl']};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: ${spacing['4xl']} ${spacing.xl};
  }
`;

export const QuoteText = styled.blockquote`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-style: italic;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.25;
  color: #F5E9D7;
  margin: 0;
  max-width: 720px;
`;

export const QuoteCaption = styled.p`
  margin: ${spacing.lg} 0 0;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #C9A24C;
`;

export const FounderCard = styled.section`
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['4xl']};
  margin-bottom: ${spacing['5xl']};
  box-shadow: 0 2px 8px rgba(31, 31, 31, 0.06);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: ${spacing['3xl']} ${spacing.xl};
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
  }
`;

export const FounderHeading = styled.h2`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(2.25rem, 4.8vw, 3rem);
  line-height: 1.1;
  letter-spacing: 0;
  color: #7A1E2B;
  margin: 0 0 ${spacing.xl};

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const FounderPara = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #5C554B;
  margin: 0 0 ${spacing.lg};

  &:last-of-type {
    margin-bottom: ${spacing.xl};
  }

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

export const Signature = styled.div`
  border-top: 1px solid #E8D9C4;
  padding-top: ${spacing.lg};
  margin-top: ${spacing.sm};
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${spacing.md};

  .avatar {
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #7A1E2B;
    color: #F5E9D7;
    font-family: "Instrument Serif", serif;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p.name {
    font-family: "Instrument Serif", serif;
    font-size: 1.25rem;
    color: #7A1E2B;
    margin: 0 0 2px;
  }

  p.role {
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #5C554B;
    margin: 0;
  }

  [data-theme='dark'] & {
    border-color: #4A2E33;

    p.name {
      color: #E8CFC0;
    }

    p.role {
      color: #CBBFA9;
    }
  }
`;

export const CtaRow = styled.section`
  text-align: center;
  background: #FFFFFF;
  border: 1px solid #E8D9C4;
  border-radius: 1rem;
  padding: ${spacing['5xl']} ${spacing['3xl']};
  box-shadow: 0 2px 8px rgba(31, 31, 31, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: ${spacing['4xl']} ${spacing.xl};
  }

  [data-theme='dark'] & {
    background: #2A161A;
    border-color: #4A2E33;
  }
`;

export const CtaHeading = styled.h2`
  font-family: "Instrument Serif", serif;
  font-weight: 400;
  font-size: clamp(2.25rem, 4.8vw, 3rem);
  line-height: 1.1;
  letter-spacing: 0;
  color: #7A1E2B;
  margin: 0;

  [data-theme='dark'] & {
    color: #E8CFC0;
  }
`;

export const CtaText = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #5C554B;
  margin: ${spacing.sm} 0 ${spacing['3xl']};
  max-width: 520px;

  [data-theme='dark'] & {
    color: #CBBFA9;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.md};
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  padding: 16px 24px;
  background: #7A1E2B;
  color: #F5E9D7;
  border: none;
  border-radius: 100px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background: #C9A24C;
    color: #1F1F1F;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SecondaryButton = styled.button`
  padding: 16px 24px;
  background: transparent;
  color: #7A1E2B;
  border: 1px solid #7A1E2B;
  border-radius: 100px;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background: #7A1E2B;
    color: #F5E9D7;
  }

  [data-theme='dark'] & {
    color: #E8CFC0;
    border-color: #E8CFC0;

    &:hover {
      background: #C9A24C;
      border-color: #C9A24C;
      color: #1F1F1F;
    }
  }
`;
