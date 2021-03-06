/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const bodyStyle = css`
  display: flex;
  flex-direction: column;
  color: rgb(147, 148, 168);
  margin-left: 100px;
  align-items: flex-start;
  padding-bottom: 80px;
`;
const footerStyle = css`
  display: flex;
  width: 100vw;
`;
const footerSectionStyle = css`
  width: 220px;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  /* padding-left: 30px; */
`;

const buttonSectionStyle = css`
  width: 500px;
  line-height: 30px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  margin-left: 50px;
`;

const secondColumnStyle = css`
  margin-left: -150px;
  width: 220px;
`;

const firstLineStyle = css`
  font-weight: bold;
  font-size: 14px;
  color: white;
`;

const buttonStyle = css`
  width: 213px;
  height: 50px;
  border-radius: 45px;
  border: 1px #fc687b;
  background-color: rgb(251, 67, 91);
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  transition: box-shadow 0.2s, background-color 0.2s;
  margin-top: 20px;
  margin-right: 0;
  margin-left: 10px;
  font-family: 'DM Sans', sans-serif;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  &:hover {
    border: solid #bdbdbd 0;
    box-shadow: 0px 0px 0px 6px rgba(245, 121, 121, 0.47);
  }
`;

const allRightsStyle = css`
  width: 100vw;
  height: 10px;
  margin: 100px 0 -40px -100px;
  text-align: center;
  font-size: 12px;
  hr {
    opacity: 0.2;
  }
  p {
    color: white;
  }
`;

export default function Footer() {
  return (
    <div css={bodyStyle}>
      <div css={footerStyle}>
        <div css={buttonSectionStyle}>
          <p>
            Get actionable tips on how to increase sales <br /> and conversions
            with design!
          </p>
          <button css={buttonStyle}>READ NOW 🤓</button>
        </div>
        <div css={secondColumnStyle}>
          <p css={firstLineStyle}>Services</p>
          <p>Our Platform</p>
          <p>Testimonials</p>
          <p>Our Work</p>
          <p>Pricing</p>
          <p>Schedule A Demo</p>
        </div>
        <div css={footerSectionStyle}>
          <p css={firstLineStyle}>Company</p>
          <p>About Us</p>
          <p>Case Studies</p>
          <p>License</p>
          <p>FAQs</p>
          <p>Refund Policy</p>
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div css={footerSectionStyle}>
          <p css={firstLineStyle}>Resources</p>
          <p>Blog</p>
          <p>Website &amp; App Cost Calculator</p>
          <p>Mockup Generator</p>
          <p>Free Illustrations</p>
          <p>Illustration Packs</p>
        </div>
        <div css={footerSectionStyle}>
          <p css={firstLineStyle}>Contact</p>
          <p>support@pixeltrue.com</p>
        </div>
      </div>
      <div css={allRightsStyle}>
        <div>
          <hr />
        </div>
        <div>
          <p>All Rights Reserved PIXEL TRUE 2019-2021</p>
        </div>
      </div>
    </div>
  );
}
