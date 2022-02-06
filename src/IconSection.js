/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Bridge } from './images/bridge.svg';
import Educative_Logo from './images/Educative_Logo.png';
// import { ReactComponent as Inquivix } from './images/inquivix.svg';
import LIGR from './images/LIGR.png';
import Streak_Logo from './images/Streak_Logo.png';

const bodyStyle = css`
  background-color: rgb(16, 18, 60);
`;

const iconRowStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 400px;
  width: 60vw;
  text-align: center;
  margin-left: 20%;

  .educative > img {
    height: 60px;
    width: 90px;
    margin: 0 40px;
  }

  .streak > img {
    height: 65px;
    width: 75px;
    margin: 0 40px;
  }

  .ligr > img {
    height: 80px;
    width: 80px;
    padding-bottom: 10px;
    margin: 0 40px;
  }
`;
const bridgeStyle = css`
  height: 110px;
  width: 150px;
  margin: -1px 20px -30px 20px;
  padding: 0;
`;

// const CompanyIconStyle = css`
//   height: 100px;
//   width: 140px;
// `;
export default function IconSection() {
  return (
    <div>
      <section css={bodyStyle}>
        <div css={iconRowStyle}>
          <div className="educative">
            <img
              src={Educative_Logo}
              alt="Educative Logo"
              // css={CompanyIconStyle}
            />
          </div>
          <div className="streak">
            <img src={Streak_Logo} alt="Streak Logo" />
          </div>
          <div className="ligr">
            <img src={LIGR} alt="Lion" />
          </div>
          <div className="bridge">
            <Bridge css={bridgeStyle} />
          </div>
          <div className="streak">
            <img src={Streak_Logo} alt="Streak Logo" />
          </div>
          <div className="bridge">
            <Bridge css={bridgeStyle} />
          </div>
          <div className="educative">
            <img
              src={Educative_Logo}
              alt="Educative Logo"
              // css={CompanyIconStyle}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
