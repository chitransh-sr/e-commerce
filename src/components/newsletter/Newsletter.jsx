import React, { useState } from 'react';
import { Mail, Sparkles, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { fireConfetti } from '../../utils/confetti';
import { useToast } from '../../contexts/ToastContext';
import { 
  NewsletterContainer, 
  VipBadge,
  Title, 
  Description, 
  Form, 
  InputWrapper,
  Input, 
  Button, 
  TrustRow,
  SuccessMessage 
} from './NewsletterStyles';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setSuccess(true);
      fireConfetti({ x: 0.5, y: 0.6, count: 90, burstUp: true });
      showToast({
        heading: "VIP Invitation Sent!",
        message: "Check your inbox for your 15% discount code: VIP15",
      });
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const validateEmail = (val) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(val);
  };

  return (
    <NewsletterContainer id='newsletter'>
      <VipBadge>
        <Sparkles size={16} />
        VIP Club Exclusive
      </VipBadge>

      <Title>
        Get <span>15% Off</span> Your First Order
      </Title>

      <Description>
        Join our exclusive insider list for limited seasonal drops, private sales, and curated product previews before anyone else.
      </Description>

      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Mail size={18} className="icon" />
          <Input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
        </InputWrapper>
        <Button type="submit">
          Subscribe Now
          <Send size={16} />
        </Button>
      </Form>

      {success && (
        <SuccessMessage>
          <CheckCircle2 size={20} />
          Welcome to the VIP Club! Your 15% code is <strong>VIP15</strong>
        </SuccessMessage>
      )}

      <TrustRow>
        <ShieldCheck size={16} className="text-emerald-500" />
        <span>No spam ever. Unsubscribe anytime with 1 click.</span>
      </TrustRow>
    </NewsletterContainer>
  );
};

export default NewsletterSubscription;
