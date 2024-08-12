import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for layout
const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#fff', // Adjust the background color as needed
});

const Section = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const Logo = styled('img')({
  height: '50px', // Set height of logos
  width: 'auto',
  margin: '10px'
});

// TypeScript Props for the logo component
interface LogoProps {
  src: string;
  alt: string;
}

const LogoComponent: React.FC<LogoProps> = ({ src, alt }) => (
  <Logo src={src} alt={alt} />
);

const FundingInfo: React.FC = () => {
  return (
    <Container>
      <Section>
        <Typography variant="h6">Lupai is funded by</Typography>
        <LogoComponent src="/path-to-civic-innovation-logo.svg" alt="Civic Innovation Platform" />
        <LogoComponent src="/path-to-government-logo.svg" alt="Bundesministerium für Arbeit und Soziales" />
      </Section>
      <Section>
        <Typography variant="h6">Projects making Lupai</Typography>
        <LogoComponent src="/path-to-education-center-logo.svg" alt="Bildungszentrum Lohana Berkins" />
        <LogoComponent src="/path-to-eureka-logo.svg" alt="Eureka" />
      </Section>
    </Container>
  );
};

export default FundingInfo;
