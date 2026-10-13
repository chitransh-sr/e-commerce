import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

/* Bannoji announcement bar: dark #1F1F1F, sand text, rotating messages */

const Bar = styled.div`
  background: #1F1F1F;
  color: #E8D9C4;
  font-family: "Instrument Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-align: center;
  position: relative;
  padding: 10px 44px;
  min-height: 38px;
  display: ${({ $dismissed }) => ($dismissed ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
`;

const Message = styled.span`
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  position: ${({ $active }) => ($active ? 'static' : 'absolute')};
  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
`;

const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #E8D9C4;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    color: #C9A24C;
  }
`;

const MESSAGES = [
  '5% Off on Prepaid Orders',
  'Free shipping on all orders',
  'New arrivals — shop the latest collection',
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [dismissed]);

  return (
    <Bar $dismissed={dismissed} role="region" aria-label="Announcements">
      {MESSAGES.map((msg, i) => (
        <Message key={msg} $active={i === index} aria-hidden={i !== index}>
          {msg}
        </Message>
      ))}
      <CloseButton onClick={() => setDismissed(true)} aria-label="Dismiss announcements">
        <X size={14} />
      </CloseButton>
    </Bar>
  );
};

export default AnnouncementBar;
