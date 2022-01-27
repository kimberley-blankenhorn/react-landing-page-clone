/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Calendar } from './images/calendar.svg';
import { ReactComponent as Chat } from './images/chat.svg';
import { ReactComponent as Clock } from './images/clock.svg';
import { ReactComponent as Confused } from './images/confused.svg';
import { ReactComponent as Meditation } from './images/meditation.svg';
import { ReactComponent as Select } from './images/select.svg';
import { ReactComponent as SuperHero } from './images/superHero.svg';
import { ReactComponent as WorkingTogether } from './images/workingTogether.svg';
import { ReactComponent as Worried } from './images/worried.svg';

const bodyStyle = css`
  /* height: 100vw; */
  display: flex;
  flex-direction: column;
`;
const designerHeadingTextStyle = css`
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  line-height: 60px;
`;
const spanStyle = css`
  color: rgb(79, 185, 220);
`;

const cardSection = css`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const cardText = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  height: 20px;
  width: 380px;
  h1 {
    font-size: 30px;
    margin-left: 60px;
    line-height: 40px;
    font-weight: bolder;
    margin-bottom: -1px;
    color: rgb(255, 255, 255);
  }
  p {
    font-size: 19px;
    line-height: 30px;
    margin-left: 60px;
    font-weight: 500;
    color: rgb(192, 194, 235);
  }
`;

const onHoverStyle = css`
  transition: box-shadow 0.3s;
  box-shadow: 0px -1px 9px 4px rgba(105, 173, 194, 0.82);
`;
const confusedStyle = css`
  display: flex;
  flex-direction: column;
  height: 479px;
  width: 430px;
  /* margin-left: 30px; */
  margin-top: 100px;
  border-radius: 23px;
  box-shadow: 4px 1px 7px 0px rgba(105, 173, 194, 0.63);
  &:hover {
    box-shadow: ${onHoverStyle};
    transition: box-shadow 0.4s;
  }
`;

const confusedImageStyle = css`
  position: relative;
  margin-left: 30px;
  z-index: 1;
  top: -100px;
`;

const calendarStyle = css`
  display: flex;
  flex-direction: column;
  height: 479px;
  width: 430px;
  margin-left: 80px;
  margin-top: 100px;
  border-radius: 23px;
  box-shadow: 4px 1px 7px 0px rgba(105, 173, 194, 0.63);
  &:hover {
    box-shadow: ${onHoverStyle};
    transition: box-shadow 0.4s;
  }
`;

const worriedImageStyle = css`
  position: relative;
  margin-left: 30px;
  z-index: 1;
  top: -100px;
`;

const worriedStyle = css`
  display: flex;
  flex-direction: column;
  height: 479px;
  width: 430px;
  margin-left: 80px;
  margin-top: 100px;
  border-radius: 23px;
  box-shadow: 4px 1px 7px 0px rgba(105, 173, 194, 0.63);
  &:hover {
    box-shadow: ${onHoverStyle};
    transition: box-shadow 0.4s;
  }
`;

const calendarImageStyle = css`
  position: relative;
  margin-left: 30px;
  z-index: 1;
  top: -100px;
`;

const easySection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 150px;
`;

const bubbleSelect = css`
  position: relative;
  top: 160px;
  left: 210px;
`;

const bubbleChat = css`
  position: absolute;
  /* top: 10px; */
  left: 1100px;
`;

const bubbleClock = css`
  position: relative;
  top: 20px;
  left: 210px;
`;

const cardAndImageSection = css`
  display: flex;
  width: 100vw;
`;

const cardAndImageText = css`
  width: 32vw;
  margin: 250px 60px 50px 120px;
  h1 {
    color: white;
    font-size: 35px;
    line-height: 50px;
    margin-bottom: 0;
  }
  p {
    font-size: 20px;
    line-height: 35px;
    color: rgb(192, 194, 235);
  }
`;

const workingTogetherImage = css`
  margin-top: -120px;
  margin-left: 120px;
`;

const cardAndImageWorkingText = css`
  width: 32vw;
  margin: 100px 60px 50px 200px;
  h1 {
    color: white;
    font-size: 35px;
    line-height: 50px;
    margin-bottom: 0;
  }
  p {
    font-size: 20px;
    line-height: 35px;
    color: rgb(192, 194, 235);
  }
`;

const meditationImage = css`
  margin-top: -220px;
  /* margin-left: 20px; */
`;

const cardAndImageMeditationText = css`
  width: 32vw;
  margin: 130px 60px 50px 120px;
  h1 {
    color: white;
    font-size: 35px;
    line-height: 50px;
    margin-bottom: 0;
  }
  p {
    font-size: 20px;
    line-height: 35px;
    color: rgb(192, 194, 235);
  }
`;

export default function DesignerSection() {
  return (
    <div>
      <section css={bodyStyle}>
        <div>
          <h1 css={designerHeadingTextStyle}>
            We get it. Reliable designers
            <br />
            <span css={spanStyle}>are hard to find</span>
          </h1>
        </div>
        <div css={cardSection}>
          <div css={confusedStyle}>
            <div css={confusedImageStyle}>
              <Confused height="250px" width="260px" />
            </div>
            <div css={cardText}>
              <h1>Poor Quality</h1>
              <p>
                You're tired of the guessing <br />
                game to find the right designer.
              </p>
            </div>
          </div>
          <div css={worriedStyle}>
            <div css={worriedImageStyle}>
              <Worried height="250px" width="260px" />
            </div>
            <div css={cardText}>
              <h1>Bad Communication</h1>
              <p>
                You’re fed up with having to explain <br />
                yourself multiple times.
              </p>
            </div>
          </div>
          <div css={calendarStyle}>
            <div css={calendarImageStyle}>
              <Calendar height="250px" width="260px" />
            </div>
            <div css={cardText}>
              <h1>Missed deadlines</h1>
              <p>
                You lose hope as deadlines are <br />
                missed over and over again.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div css={easySection}>
            <h1 css={designerHeadingTextStyle}>
              Design doesn't have to be hard. <br />
              <span css={spanStyle}>We make it easy.</span>
            </h1>
          </div>
        </div>
        <div>
          <div css={cardAndImageSection}>
            <div css={bubbleSelect}>
              <Select width="110px" height="120px" />
            </div>
            <div css={cardAndImageText}>
              <h1> Breath-taking Designs</h1>
              <p>
                All of our designers are carefully vetted and have years of
                experience working in the design industry.
              </p>
              <p>
                You’ll get a dedicated UI Designer, Graphic Designer,
                Illustrator and Project Manager. With a full design team,
                getting breath-taking designs couldn't be any easier!
              </p>
            </div>

            <div>
              <SuperHero width="800px" height="800px" />
            </div>
          </div>

          <div css={cardAndImageSection}>
            <div css={workingTogetherImage}>
              <WorkingTogether width="800px" height="800px" />
            </div>
            <div css={bubbleChat}>
              <Chat width="110px" height="120px" />
            </div>
            <div css={cardAndImageWorkingText}>
              <h1>Communication That Matters</h1>
              <p>
                With a dedicated Project Manager who cares about your success
                and direct live-chat access to your experienced designers,
                communication issues will be no more!
              </p>
            </div>
          </div>

          <div css={cardAndImageSection}>
            <div css={bubbleClock}>
              <Clock width="110px" height="120px" />
            </div>
            <div css={cardAndImageMeditationText}>
              <h1> No More Missed Deadlines</h1>
              <p>
                Need that design done on a specific date? You can trust us to
                deliver it on time. Once we commit to a date, we'll get it done.
              </p>
              <p>
                Job requests will on average be delivered in a few business
                days. Simpler tasks such as graphic designs and revisions will
                be delivered within 24 hours.
              </p>
            </div>
            <div css={meditationImage}>
              <Meditation width="800px" height="800px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
