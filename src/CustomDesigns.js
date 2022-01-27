/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Flamingo } from './images/flamingo.svg';
import Habits from './images/habitsApp.jpeg';
import UiDesign from './images/uiDesign.png';
import Video from './images/video.gif';
import WebsiteDesign from './images/websiteDesign.png';
import Xrii from './images/xrii.png';

const customTextHeading = css`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
  h1 {
    font-size: 43px;
    margin: 0 0 22px 0;
    span {
      color: rgb(79, 185, 220);
    }
  }
  p {
    font-size: 22px;
    margin: 0 0 100px 0;
    color: rgb(212, 214, 255);
  }
`;

const customBodySection = css`
  display: flex;
  flex-direction: column;
`;
const imageRowStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;

  /* height: 1000px; */
`;

const uiImage = css`
  width: 34vw;
  height: 60vh;
  margin: 0px 50px 100px 50px;
  display: flex;
  justify-content: center;
  img {
    border-radius: 25px;
    /* grid-gap: 100px; */
    /* position: 50% 20%; */
  }
`;

const viewMoreSection = css`
  display: flex;
  justify-content: center;
`;

const onHoverButtonStyle = css`
  /* box-shadow: 0px 0px 18px -2px #fd435a, 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  background: #f8f8f8;
  border: solid #bdbdbd 0;
  box-shadow: 0px 0px 0px 6px rgba(245, 121, 121, 0.47);
`;

const buttonStyle = css`
  width: 350px;
  height: 70px;
  border-radius: 45px;
  border: 1px #fc687b;
  background-color: rgb(251, 67, 91);
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  transition: box-shadow 0.2s, background-color 0.2s;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  /* padding: 13px 10px 0 15px; */
  font-family: 'DM Sans', sans-serif;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  &:hover {
    box-shadow: ${onHoverButtonStyle};
    transition: box-shadow 0.3s ease-in-out;
  }
`;

export default function CustomDesigns() {
  return (
    <div>
      <section css={customBodySection}>
        <div css={customTextHeading}>
          <h1>
            <span>Custom</span> Designs
          </h1>
          <p>
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>
        <div css={imageRowStyle}>
          <div css={uiImage}>
            <img src={UiDesign} alt="UI Design" css={uiImage} />
            <img src={Xrii} alt="UI Design" css={uiImage} />
          </div>
        </div>
        <div css={imageRowStyle}>
          <div css={uiImage}>
            <img src={WebsiteDesign} alt="UI Design" css={uiImage} />
            <img src={Habits} alt="UI Design" css={uiImage} />
          </div>
        </div>
        <div css={imageRowStyle}>
          <div css={uiImage}>
            <img src={Xrii} alt="UI Design" css={uiImage} />
            <img src={Video} alt="UI Design" css={uiImage} />
          </div>
        </div>
        <div css={viewMoreSection}>
          <button css={buttonStyle}>VIEW MORE</button>
        </div>
      </section>
    </div>
  );
}
