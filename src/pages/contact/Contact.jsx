import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { useToast } from "../../contexts/ToastContext";
import {
  PageWrapper,
  Container,
  Breadcrumb,
  Hero,
  Eyebrow,
  HeroTitle,
  HeroSub,
  ContactGrid,
  ColumnLabel,
  ColumnTitle,
  InfoCards,
  InfoCard,
  InfoIcon,
  InfoBody,
  ButtonRow,
  OutlinePillButton,
  FormCard,
  Form,
  FieldRow,
  Field,
  Input,
  Select,
  Textarea,
  PrivacyNote,
  SubmitButton,
} from "./ContactStyles";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

const Contact = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [form, setForm] = useState(initialForm);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const subject = `Enquiry: ${form.topic || "General"} — ${form.name}`;
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "-"}`,
        `Topic: ${form.topic || "-"}`,
        ``,
        form.message,
      ].join("\n");
      window.location.href = `mailto:support@shopnow.in?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      showToast({
        heading: "Message Sent",
        message: "Thanks! Your enquiry is on its way to support@shopnow.in.",
      });
      setForm(initialForm);
    },
    [showToast, form]
  );

  return (
    <PageWrapper>
      <Container>
        <Breadcrumb aria-label="Breadcrumb">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <span className="separator">/</span>
          <span className="current">Contact</span>
        </Breadcrumb>

        <Hero>
          <Eyebrow>WE&apos;RE HERE FOR YOU</Eyebrow>
          <HeroTitle>We&apos;d love to hear from you</HeroTitle>
          <HeroSub>
            Got a question about your order, shipping, or products? Drop us a
            line — we usually reply within a few hours.
          </HeroSub>
        </Hero>

        <ContactGrid>
          <div>
            <ColumnLabel>REACH US AT</ColumnLabel>
            <ColumnTitle>Customer Care</ColumnTitle>
            <InfoCards>
              <InfoCard>
                <InfoIcon>
                  <Mail size={20} />
                </InfoIcon>
                <InfoBody>
                  <h3>EMAIL</h3>
                  <p className="value">support@shopnow.in</p>
                  <p className="hint">Replies within a few hours</p>
                </InfoBody>
              </InfoCard>
              <InfoCard>
                <InfoIcon>
                  <Phone size={20} />
                </InfoIcon>
                <InfoBody>
                  <h3>PHONE</h3>
                  <p className="value">+91 98765 43210</p>
                  <p className="hint">Mon–Sat, 10AM–7PM</p>
                </InfoBody>
              </InfoCard>
              <InfoCard>
                <InfoIcon>
                  <Clock size={20} />
                </InfoIcon>
                <InfoBody>
                  <h3>BUSINESS HOURS</h3>
                  <p className="value">Monday to Saturday</p>
                  <p className="hint">10:00 AM – 7:00 PM</p>
                </InfoBody>
              </InfoCard>
            </InfoCards>
            <ButtonRow>
              <OutlinePillButton href="mailto:support@shopnow.in">
                <Mail size={16} />
                Email Us
              </OutlinePillButton>
              <OutlinePillButton href="tel:+919876543210">
                <Phone size={16} />
                Call Us
              </OutlinePillButton>
            </ButtonRow>
          </div>

          <FormCard>
            <ColumnLabel>SEND US A MESSAGE</ColumnLabel>
            <ColumnTitle>Drop us a line</ColumnTitle>
            <Form onSubmit={handleSubmit}>
              <FieldRow>
                <Field>
                  <label htmlFor="contact-name">Your Name*</label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <label htmlFor="contact-email">Email*</label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </Field>
              </FieldRow>
              <FieldRow>
                <Field>
                  <label htmlFor="contact-phone">Phone</label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Field>
                <Field>
                  <label htmlFor="contact-topic">What&apos;s this about?</label>
                  <Select
                    id="contact-topic"
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                  >
                    <option value="">Choose a topic</option>
                    <option value="order-status">Order status</option>
                    <option value="product-question">Product question</option>
                    <option value="returns">Returns &amp; exchanges</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Something else</option>
                  </Select>
                </Field>
              </FieldRow>
              <Field>
                <label htmlFor="contact-message">Your message*</label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Field>
              <PrivacyNote>
                By submitting this form, you agree to be contacted about your
                enquiry. We never share your details.
              </PrivacyNote>
              <SubmitButton type="submit">
                <Send size={16} />
                Send Message
              </SubmitButton>
            </Form>
          </FormCard>
        </ContactGrid>
      </Container>
    </PageWrapper>
  );
};

export default Contact;
