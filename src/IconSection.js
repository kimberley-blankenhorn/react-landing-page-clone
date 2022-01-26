/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Bridge } from './images/bridge.svg';
import Educative_Logo from './images/Educative_Logo.png';
// import { ReactComponent as Inquivix } from './images/inquivix.svg';
import LIGR from './images/LIGR.png';
import Streak_Logo from './images/Streak_Logo.png';

const BodyStyle = css`
  background-color: rgb(16, 18, 60);
`;

const IconRowStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 400px;
  width: 70vw;
  text-align: center;
  margin-left: 15%;

  .educative > img {
    height: 80px;
    width: 110px;
    margin: 0 60px;
  }

  .streak > img {
    height: 85px;
    width: 95px;
    margin: 0 60px;
  }

  .ligr > img {
    height: 110px;
    width: 110px;
    padding-bottom: 10px;
    margin: 0 60px;
  }
`;
const BridgeStyle = css`
  height: 140px;
  width: 180px;
  margin: 20px 60px -30px 60px;
  padding: 0;
`;

// const CompanyIconStyle = css`
//   height: 100px;
//   width: 140px;
// `;
export default function IconSection() {
  return (
    <div>
      <section css={BodyStyle}>
        <div css={IconRowStyle}>
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
            <Bridge css={BridgeStyle} />
          </div>
          <div className="streak">
            <img src={Streak_Logo} alt="Streak Logo" />
          </div>
          <div className="bridge">
            <Bridge css={BridgeStyle} />
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
