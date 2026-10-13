import { useState } from 'react';
import { Mail, Sparkles, Send, CheckCircle2, ShieldCheck, Trophy } from 'lucide-react';
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
  SuccessMessage,
  BenefitsList,
  BenefitItem,
  StatsRow,
  StatItem,
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
        <Sparkles size={18} />
        VIP Club Exclusive
      </VipBadge>

      <Title>
        Join the <span>ShopNow VIP</span> & Save <span>15%+</span>
      </Title>

      <Description>
        Unlock exclusive member-only deals, early access to new collections, birthday rewards, and personalized recommendations.
      </Description>

      <BenefitsList>
        <BenefitItem>
          <Trophy size={18} />
          <span>Early access to sales & drops</span>
        </BenefitItem>
        <BenefitItem>
          <Sparkles size={18} />
          <span>Birthday surprise every year</span>
        </BenefitItem>
        <BenefitItem>
          <CheckCircle2 size={18} />
          <span>VIP-only customer service line</span>
        </BenefitItem>
      </BenefitsList>

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

      <StatsRow>
        <StatItem>
          <span className="number">50K+</span>
          <span className="label">Happy Members</span>
        </StatItem>
        <StatItem>
          <span className="number">15%</span>
          <span className="label">Welcome Discount</span>
        </StatItem>
        <StatItem>
          <span className="number">4.9/5</span>
          <span className="label">Member Rating</span>
        </StatItem>
      </StatsRow>

      <TrustRow>
        <ShieldCheck size={16} className="text-emerald-500" />
        <span>No spam ever. Unsubscribe anytime with 1 click.</span>
      </TrustRow>
    </NewsletterContainer>
  );
};

export default NewsletterSubscription;