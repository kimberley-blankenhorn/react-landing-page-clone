import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CustomDesigns from './CustomDesigns';
import DesignerSection from './DesignerSection.js';
import HeroSection from './Hero';
import IconSection from './IconSection';
import YouTubeSection from './YouTubeSection';

// Need to move the images path to make the images public later

const testStyle = css`
  /* background-color: blue; */
`;
function App() {
  return (
    <div css={testStyle}>
      <HeroSection />
      <IconSection />
      <DesignerSection />
      <CustomDesigns />
      <YouTubeSection />
    </div>
  );
}

export default App;
