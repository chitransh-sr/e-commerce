import React, { useState } from 'react';
import { 
  NewsletterContainer, Title, Description, 
  Form, Input, Button, SuccessMessage 
} from './NewsletterStyles';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <NewsletterContainer id='newsletter'>
      <Title>Subscribe to Our Newsletter</Title>
      <Description>
        Join our exclusive community and receive curated insights, expert perspectives, and premium content directly to your email.
      </Description>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <Button type="submit">Subscribe</Button>
      </Form>

      {success && <SuccessMessage>Thank you for subscribing!</SuccessMessage>}
    </NewsletterContainer>
  );
};

export default NewsletterSubscription;
