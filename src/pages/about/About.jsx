import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, Ruler, Leaf, ArrowRight, Check } from "lucide-react";
import {
  PageWrapper,
  Container,
  Breadcrumb,
  HeroSection,
  Eyebrow,
  HeroTitle,
  HeroSub,
  WelcomeText,
  GoldRule,
  StatsRow,
  StatItem,
  CraftSection,
  CraftText,
  CraftHeading,
  CraftPara,
  CheckList,
  CheckItem,
  CraftVisual,
  DifferenceSection,
  SectionHeading,
  SectionSub,
  CardsGrid,
  DifferenceCard,
  CardNumber,
  IconBadge,
  QuoteBanner,
  QuoteText,
  QuoteCaption,
  FounderCard,
  FounderHeading,
  FounderPara,
  Signature,
  CtaRow,
  CtaHeading,
  CtaText,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./AboutStyles";

const differenceCards = [
  {
    icon: Heart,
    title: "Curated Quality",
    text: "Every piece is hand-picked and quality-checked, so only the best finds make it to your door.",
  },
  {
    icon: Sparkles,
    title: "Made For Every Moment",
    text: "From everyday essentials to little luxuries, our collection fits every mood and occasion.",
  },
  {
    icon: Ruler,
    title: "Fair Prices, Honest Value",
    text: "Thoughtfully priced goods with no hidden costs — honest value you can trust.",
  },
  {
    icon: Leaf,
    title: "Responsibly Sourced",
    text: "We partner with makers who care, choosing materials and practices that tread lightly.",
  },
];

const craftPoints = [
  "Hand-checked quality, every time",
  "Curated makers and honest materials",
  "Secure checkout and careful packaging",
];

const stats = [
  { number: "50K+", label: "Happy Shoppers" },
  { number: "4.8", label: "Average Rating" },
  { number: "100+", label: "Curated Brands" },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Container>
        <Breadcrumb aria-label="Breadcrumb">
          <button onClick={() => navigate("/")} type="button">
            Home
          </button>
          <span className="separator">/</span>
          <span className="current">About Us</span>
        </Breadcrumb>

        <HeroSection>
          <Eyebrow>Our Story</Eyebrow>
          <HeroTitle>
            A Love Letter to <em>Shopping</em>
          </HeroTitle>
          <HeroSub>
            Curated finds crafted for your everyday — chosen with love,
            delivered with care.
          </HeroSub>
          <WelcomeText>
            Welcome to ShopNow — your home for curated lifestyle goods,
            gadgets, and apparel. We work with quality artisans and makers to
            bring you pieces that are beautiful, useful, and made to last.
          </WelcomeText>
          <GoldRule />
          <StatsRow>
            {stats.map((stat) => (
              <StatItem key={stat.label}>
                <span className="number">{stat.number}</span>
                <span className="label">{stat.label}</span>
              </StatItem>
            ))}
          </StatsRow>
        </HeroSection>

        <CraftSection>
          <CraftText>
            <Eyebrow>ShopNow With Love</Eyebrow>
            <CraftHeading>Every detail matters</CraftHeading>
            <CraftPara>
              From first sketch to final stitch, every ShopNow find passes
              careful curation and hands-on quality checks. We obsess over
              fabric, finish, and function — so what arrives at your door
              feels thoughtful, personal, and made to be loved.
            </CraftPara>
            <CheckList>
              {craftPoints.map((point) => (
                <CheckItem key={point}>
                  <span className="check">
                    <Check size={14} />
                  </span>
                  {point}
                </CheckItem>
              ))}
            </CheckList>
          </CraftText>
          <CraftVisual>
            <span className="mark">&ldquo;</span>
            <p>Chosen with love, crafted to last.</p>
            <span className="rule" />
            <small>ShopNow Promise</small>
          </CraftVisual>
        </CraftSection>

        <DifferenceSection>
          <Eyebrow>The ShopNow Difference</Eyebrow>
          <SectionHeading>Why Choose ShopNow?</SectionHeading>
          <SectionSub>
            Four little promises that go into every piece you bring home.
          </SectionSub>
          <GoldRule />
          <CardsGrid>
            {differenceCards.map(({ icon: Icon, title, text }, i) => (
              <DifferenceCard key={title}>
                <CardNumber>0{i + 1}</CardNumber>
                <IconBadge>
                  <Icon size={22} />
                </IconBadge>
                <h3>{title}</h3>
                <p>{text}</p>
              </DifferenceCard>
            ))}
          </CardsGrid>
        </DifferenceSection>

        <QuoteBanner>
          <QuoteText>Style your everyday, love every detail.</QuoteText>
          <QuoteCaption>Shop With Joy!</QuoteCaption>
        </QuoteBanner>

        <FounderCard>
          <Eyebrow>From The Founder&apos;s Desk</Eyebrow>
          <FounderHeading>A note from the founder</FounderHeading>
          <FounderPara>
            We started ShopNow with a simple belief: everyday shopping should
            feel joyful. Every collection is curated like a love letter to
            our customers — thoughtful, honest, and full of care.
          </FounderPara>
          <FounderPara>
            Thank you for letting us be part of your everyday. We promise to
            keep choosing quality pieces, fair prices, and service with a
            smile.
          </FounderPara>
          <Signature>
            <span className="avatar">SN</span>
            <div>
              <p className="name">Team ShopNow</p>
              <p className="role">Founders · ShopNow</p>
            </div>
          </Signature>
        </FounderCard>

        <CtaRow>
          <Eyebrow>Ready To Twirl?</Eyebrow>
          <CtaHeading>Ready to explore?</CtaHeading>
          <CtaText>
            Discover curated finds made for your everyday — chosen with love,
            delivered with care.
          </CtaText>
          <ButtonGroup>
            <PrimaryButton onClick={() => navigate("/new-arrivals")} type="button">
              Shop The Collection
              <ArrowRight size={16} />
            </PrimaryButton>
            <SecondaryButton onClick={() => navigate("/contact")} type="button">
              Get In Touch
            </SecondaryButton>
          </ButtonGroup>
        </CtaRow>
      </Container>
    </PageWrapper>
  );
};

export default About;
