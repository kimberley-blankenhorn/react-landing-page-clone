/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const tryUsOutStyle = css`
  background-image: url('/hero.svg');
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  width: 82vw;
  height: 68vh;
  margin: 150px auto 150px;
  padding-top: 50px;
  padding-bottom: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-family: 'DM Sans', sans-serif;
  p {
    font-size: 23px;
    line-height: 30px;
  }
  span {
    font-size: 25px;
    text-decoration: underline;
  }
  h2 {
    margin-top: -10px;
    font-size: 48px;
  }
  button {
    width: 323px;
    height: 73px;
    border-radius: 45px;
    border: 1px #fc687b;
    background-color: #fd576c;
    box-shadow: 0 0 0 6px rgb(253 87 108 / 25%);
    transition: box-shadow 0.2s, background-color 0.2s;
    margin-top: 30px;
    margin-right: 0;
    margin-left: 10px;
    font-family: 'DM Sans', sans-serif;
    color: #fff;
    font-size: 18px;
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

export default function TryUsOut() {
  return (
    <div>
      <section css={tryUsOutStyle}>
        <div>
          <h2>Try us out!</h2>
          <p>
            All our plans are backed by a <br />
            <span>14 day money-back guarantee.</span>
          </p>
          <button> SEE PRICING</button>
        </div>
      </section>
    </div>
  );
}
