import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DesignerSection from './DesignerSection.js';
import HeroSection from './Hero';
import IconSection from './IconSection';

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
    </div>
  );
}

export default App;
