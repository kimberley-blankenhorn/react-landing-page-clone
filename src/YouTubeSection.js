/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const youTubeH1 = css`
  display: flex;
  justify-content: center;
  color: white;
  margin: 100px 50px 40px 50px;
  font-size: 30px;
  font-family: sans-serif;
`;

const videoSection = css`
  display: flex;
  justify-content: center;
`;

const h1Span = css`
  color: rgb(79, 185, 220);
`;

export default function YouTubeSection() {
  return (
    <div>
      <section>
        <div css={youTubeH1}>
          <h1>
            Our Process on <span css={h1Span}>Youtube</span>
          </h1>
        </div>
        <div css={videoSection}>
          <iframe
            width="1044"
            height="586"
            src="https://www.youtube.com/embed/A6WEAuSvcgY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </section>
    </div>
  );
}
