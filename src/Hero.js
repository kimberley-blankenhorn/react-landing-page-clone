/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
// import { ReactComponent as LightningBolt } from './images/lightningBolt.svg';
import { ReactComponent as NavBarLogo } from './images/navBarLogo.svg';

const HeroImage = css`
  background-image: url('/hero.svg');
  background-repeat: no-repeat;
  background-size: cover;
  position: center;
  width: 100vw;
  height: 105vh;
`;
// const SectionInnerDiv = css`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
/* display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 250px 1fr;
//   grid-area: 1 / 1 / 1 / 1; */
// `;

// const SectionOuterDiv = css`
//   /* display: grid;
//   grid-template-columns: 250px 1fr;
//   grid-template-rows: 250px 1fr;
//   grid-area: 1 / 1/ 1 / 1; */
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
// `;

const NavLogoSectionStyle = css`
  display: flex;
  position: absolute;
  top: 30px;
  left: 0px;
  width: 10%;
  padding: 0 80px;
  margin: auto;
  align-items: center;
  /* justify-content: space-between; */
  font-family: 'DM Sans', sans-serif;
  font-size: 25px;
  font-weight: 500;
  color: white;
`;

const LogoStyle = css`
  display: block;
  width: 40px;
  height: auto;
  margin-top: 19px;
  margin-left: 5px;
  padding-left: 10px;
  color: #fff;
`;

const LogoTextStyle = css`
  padding-left: 8px;
`;

const NavigationStyle = css`
  display: flex;
  position: static;
  /* top: 20px; */
  left: 10px;
  width: 65%;
  padding: 20px 10px;
  margin-left: 30vw;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

const ButtonStyle = css`
  width: 253px;
  height: 64px;
  border-radius: 45px;
  border: 1px #fc687b;
  background-color: #fd576c;
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  transition: box-shadow 0.2s, background-color 0.2s;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  /* padding: 13px 10px 0 15px; */
  font-family: 'DM Sans', sans-serif;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
`;

const ATagColorStyle = css`
  color: white;
  text-decoration: none;
`;

const Iconstyle = css`
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 20px;
`;
const TextAreaStyle = css`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
`;
const HeroTextStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  text-align: center;
  /* height: 40vw; */
  color: white;
  h1 {
    line-height: 0px;
    margin-top: 22px;
    padding: 0;
    font-size: 60px;
  }
  p {
    /* width: 40vw; */
    text-align: center;
    margin-top: 10px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
  }
`;
const PricingButton = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  button {
    width: 300px;
    height: 64px;
    border-radius: 45px;
    border: 1px #fc687b;
    background-color: rgb(251, 67, 91);
    box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
    transition: box-shadow 0.2s, background-color 0.2s;
    margin-top: 50px;
    margin-right: 0;
    /* margin-left: 42vw; */
    /* padding: 13px 10px 0 15px; */
    font-family: 'DM Sans', sans-serif;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
  }
`;
const ContactButton = css`
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
  button {
    width: 200px;
    height: 50px;
    border-radius: 45px;
    border: 1px #fc687b;
    background-color: rgb(251, 67, 91);
    box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
    transition: box-shadow 0.2s, background-color 0.2s;
    /* margin-top: 500px; */

    /* margin-right: 0; */
    margin-right: 100px;
    /* padding: 13px 10px 0 15px; */
    font-family: 'DM Sans', sans-serif;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
  }
`;

export default function HeroSection() {
  return (
    <div>
      <section css={HeroImage}>
        {/* <div></div> */}
        <div>
          <nav>
            <div css={NavLogoSectionStyle}>
              <div>
                <NavBarLogo css={LogoStyle} />
              </div>
              <div css={LogoTextStyle}>pixeltrue</div>
            </div>
            <div css={NavigationStyle}>
              <div>Case Studies</div>
              <div>Pricing</div>
              <div>Our Work</div>
              <div>Our Platform</div>
              <div>
                <li>
                  <a href="/" css={ATagColorStyle}>
                    More
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="/" css={ATagColorStyle}>
                    Login
                  </a>
                </li>
              </div>
              <button css={ButtonStyle}>Schedule Demo</button>
            </div>
          </nav>
          <div css={TextAreaStyle}>
            <div css={HeroTextStyle}>
              <h1>Get A Superhero Design Team </h1>
              <h1>To Grow Your Business</h1>
              <p>
                We provide an experienced design team that works with you
                everyday to <br />
                create high-quality design assets to help grow your business.
                Zero <br />
                headaches, fixed pricing and no contracts.
              </p>
              <div css={PricingButton}>
                <button>SEE OUR PRICING</button>
              </div>
            </div>
            <div css={ContactButton}>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
