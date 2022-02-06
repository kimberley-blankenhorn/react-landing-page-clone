/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
// import { ReactComponent as LightningBolt } from './images/lightningBolt.svg';
import { ReactComponent as NavBarLogo } from './images/navBarLogo.svg';

const heroImage = css`
  background-image: url('/hero.svg');
  background-repeat: no-repeat;
  background-size: cover;

  background-position: 100% 40%;
  width: 100vw;
  height: 100vh;
`;

const navLogoSectionStyle = css`
  display: flex;
  position: absolute;
  top: 30px;
  left: 0px;
  width: 10%;
  padding: 0 80px;
  margin: -20px 0;
  align-items: center;
  /* justify-content: space-between; */
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

const logoStyle = css`
  display: block;
  width: 45px;
  height: auto;
  margin-top: 19px;
  margin-left: 5px;
  padding-left: 10px;
  color: #fff;
`;

const logoTextStyle = css`
  padding: 10px;
  margin-top: 8px;
`;

const navigationStyle = css`
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
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

const buttonStyle = css`
  width: 213px;
  height: 54px;
  border-radius: 45px;
  border: 1px #fc687b;
  background-color: #fd576c;
  box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
  transition: box-shadow 0.2s, background-color 0.2s;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  font-family: 'DM Sans', sans-serif;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  &:hover {
    border: solid #bdbdbd 0;
    box-shadow: 0px 0px 0px 6px rgba(245, 121, 121, 0.47);
  }
`;

const aTagColorStyle = css`
  color: white;
  text-decoration: none;
`;

// const iconstyle = css`
//   display: flex;
//   flex-direction: row;
//   height: 20px;
//   width: 20px;
// `;
const textAreaStyle = css`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
`;
const heroTextStyle = css`
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
    font-size: 45px;
  }
  p {
    /* width: 40vw; */
    text-align: center;
    margin-top: 10px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
  }
`;
const pricingButton = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  button {
    width: 280px;
    height: 60px;
    border-radius: 45px;
    border: 1px #fc687b;
    background-color: rgb(251, 67, 91);
    box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
    transition: box-shadow 0.2s, background-color 0.2s;
    margin-top: 50px;
    margin-right: 0;
    font-family: 'DM Sans', sans-serif;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
    &:hover {
      border: solid #bdbdbd 0;
      box-shadow: 0px 0px 0px 6px rgba(245, 121, 121, 0.47);
    }
  }
`;
const contactButton = css`
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  align-content: flex-end;
  align-items: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
  button {
    width: 130px;
    height: 45px;
    border-radius: 45px;
    border: 1px #fc687b;
    background-color: rgb(251, 67, 91);
    box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
    transition: box-shadow 0.2s, background-color 0.2s;
    margin: 25px;
    font-family: 'DM Sans', sans-serif;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    letter-spacing: 1px;
    position: fixed;
    &:hover {
      /* background: #f8f8f8; */
      border: solid #bdbdbd 0;
      box-shadow: 0px 0px 0px 6px rgba(245, 121, 121, 0.47);
    }
  }
`;

export default function HeroSection() {
  return (
    <div>
      <section css={heroImage}>
        {/* <div></div> */}
        <div>
          <nav>
            <div css={navLogoSectionStyle}>
              <div>
                <NavBarLogo css={logoStyle} />
              </div>
              <div css={logoTextStyle}>pixeltrue</div>
            </div>
            <div css={navigationStyle}>
              <div>Case Studies</div>
              <div>Pricing</div>
              <div>Our Work</div>
              <div>Our Platform</div>
              <div>
                <li>
                  <a href="/" css={aTagColorStyle}>
                    More
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="/" css={aTagColorStyle}>
                    Login
                  </a>
                </li>
              </div>
              <button css={buttonStyle}>Schedule Demo</button>
            </div>
          </nav>
          <div css={textAreaStyle}>
            <div css={heroTextStyle}>
              <h1>Get A Superhero Design Team </h1>
              <h1>To Grow Your Business</h1>
              <p>
                We provide an experienced design team that works with you
                everyday to <br />
                create high-quality design assets to help grow your business.
                Zero <br />
                headaches, fixed pricing and no contracts.
              </p>
              <div css={pricingButton}>
                <button>SEE OUR PRICING</button>
              </div>
            </div>
            <div css={contactButton}>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
