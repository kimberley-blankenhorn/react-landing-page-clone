/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const BodyStyle = css`
  height: 100vw;
`;
const DesignerHeadingTextStyle = css`
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  line-height: 60px;
`;
const SpanStyle = css`
  color: rgb(79, 185, 220);
`;

export default function DesignerSection() {
  return (
    <div>
      <section css={BodyStyle}>
        <div>
          <h1 css={DesignerHeadingTextStyle}>
            We get it. Reliable designers
            <br />
            <span css={SpanStyle}>are hard to find</span>
          </h1>
        </div>
      </section>
    </div>
  );
}
