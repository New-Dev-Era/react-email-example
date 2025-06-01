import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import { FC, PropsWithChildren } from 'react';

const Footer = () => {
  return (
    <Section style={{ marginTop: '20px' }}>
      <Row>
        <Column>
          <Hr />
        </Column>
      </Row>
      <Row>
        <Column align="center" style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>
          <Text>If you have any questions, please reply to this email.</Text>
          <Text>© {new Date().getFullYear()} WaffleHaus. All rights reserved.</Text>
          <Text>123 Innovation Way, Tech City, TC 12345</Text>
        </Column>
      </Row>
    </Section>
  );
};

const CallToActionButton = () => {
  return (
    <Section style={{ marginTop: '20px' }}>
      <Row>
        <Column align="center">
          <Button
            style={{
              backgroundColor: 'hsl(24, 83%, 70%)',
              borderRadius: '12px',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Respond to Comment
          </Button>
        </Column>
      </Row>
    </Section>
  );
};

const Header = () => {
  return (
    <Section style={{ marginTop: 10 }}>
      <Row style={{}}>
        <Column align="center" style={{}}>
          <Img
            src={
              'https://hc94gvx8kjmpaecx.public.blob.vercel-storage.com/logo-naTpHonYFqCM0LUNYtA61F1XPqc5bT.png'
            }
            style={{ width: '60px', height: 'auto' }}
          />
          <Heading style={{ fontSize: '18px', fontWeight: 'bold' }}>WaffleHaus</Heading>
        </Column>
      </Row>
    </Section>
  );
};

const EmailTemplate: FC<PropsWithChildren<{ previewText: string }>> = ({
  children,
  previewText,
}) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={{ backgroundColor: '#FFFFFF' }}>
        <Container style={{ margin: '0 auto' }}>{children}</Container>
      </Body>
    </Html>
  );
};

type EmailProps = {
  previewText: string;
  comment: {
    userName: string;
    text: string;
  };
};

export const Email: FC<EmailProps> = ({ previewText, comment }) => {
  return (
    <EmailTemplate previewText={previewText}>
      <Header />
      <Section>
        <Row>
          <Column align="center">
            <Text>Hey WaffleHaus Owner!</Text>
            <Text>You have a new comment from {comment.userName}:</Text>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row style={{ backgroundColor: 'hsl(24, 83%, 90%)', borderRadius: '12px' }}>
          <Column style={{ padding: '10px 20px' }}>
            <Text>{comment.text}</Text>
          </Column>
        </Row>
      </Section>
      <CallToActionButton />
      <Footer />
    </EmailTemplate>
  );
};
