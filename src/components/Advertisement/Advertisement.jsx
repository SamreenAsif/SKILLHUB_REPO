import React from "react";
import styled from "styled-components";
// import LinkButton from '../../share/UIElements/LinkButton/LinkButton';
import "../Btn.css";
import { useNavigate } from "react-router-dom";
import Card from "../Header/Card/Card";

const AdvertisementContainer = styled.div`
  margin: 0;
  margin-top: 6.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`;
const AdvertisementSection = styled.div`
  // padding: 4rem 0;
  width: 100%;
  max-width: 134rem;
  margin-right: auto;
  margin-left: auto;
  height: 55rem;
  background: aliceblue;
  // border: 2px solid;
`;
const AdvertisementContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32rem;
  // border: 2px solid purple;
`;
const AdvertisementWrapper = styled.div`
  display: flex;
  padding: 0;
  // border: 2px solid red;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  // border: 2px solid red;
  /* background: pink; */
  height: 67%;
  width: 62%;
`;

const AdvertisementImg = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: contain;
  max-width: 100%;
  margin: 0 9.6rem 0 0;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 40rem;
`;
const DescriptionHeading = styled.h3`
  font-family: var(--suisse-works-alternative);
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.25;
  letter-spacing: -0.05rem;
  margin-bottom: 0.8rem;
`;
const DescriptionPara = styled.p`
  font-size: 1.9rem;
  margin-top: 0;
  margin-bottom: 1.6rem;
  font-weight: 400;
  line-height: 1.4;
`;
const AdvertisementWrapper2 = styled.div`
  display: flex;
  padding: 0;
`;
const AdvertisementImg2 = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: contain;
  max-width: 100%;
  margin: 0;
`;
const Description2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 40rem;
  margin: 0 9.6rem 0 0;
`;
const DescriptionHeadingImg = styled.img`
  margin-bottom: 0.8rem;
  width: 282px;
  height: 48px;
`;
const Advertisement3 = styled.div`
  margin: 6.4rem 0 9.6rem 0;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`;
const CompanyLogo = styled.div`
  margin-top: 6.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`;
const CompanyLogoSection = styled.section`
  background-color: #f7f9fa;
  border: 0;
  padding: 3.2rem 0;
  margin-top: 4.8rem;
`;
const CompanyLogoContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -1.6rem;
`;
const CompanyLogoHeading = styled.h3`
  font-family: var(--suisse-works-alternative);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -0.02rem;
  margin: 0 0 0 0.8rem;
`;
const CompanyLogoWrapper = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;
const CompanyLogoEach = styled.div`
  margin: 1.6rem;
  display: inline-flex;
  align-items: center;
`;
const CompanyLogoImg = styled.img`
  width: 100%;
  height: auto;
`;
const AdvertisementBg = styled.img`
  width: 100%;
  height: 99%;
`;

const Advertisement = () => {
  const navigate = useNavigate();
  const gotoTeaching = () => {
    navigate("./teaching");
  };
  const advertisement_text =
    "Join Skillhub and teach over 10 million learners worldwide! With our expert support and cutting-edge tools, you can easily create and publish engaging courses that showcase your unique expertise and passions. Sign up now and start shaping the future of online education with Skillhub!";
  return (
    <>
      <AdvertisementSection>
        {/* <AdvertisementContain> */}
        <Wrapper>
          <Card
            heading="Become an Instructor"
            text={advertisement_text}
            width="55%"
            height ="42rem"
           
          />
        </Wrapper>
        <div
          style={{
            width: "100%",
            
            "padding-left": "38%",
            "padding-right": "38%",
          }}
        >
          <div
            className="LinkButton"
            style={{
              "--height": "7rem",
              "border-radius": "40px",
              padding: "2%",
              "--font-size": "1.8rem",
              border: "none",
              margin: "auto",
              width: "90%",
            }}
            onClick={() => gotoTeaching()}
          >
            Start teaching today
          </div>
        </div>
        {/* <Description>
        </Description> */}
        {/* <AdvertisementBg src="/images/advertisement/ad_bg.jpg" /> */}
        {/* <AdvertisementWrapper>
            <Description>
              <DescriptionHeading>Become an instructor</DescriptionHeading>
              <DescriptionPara>
                Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </DescriptionPara>
              <div>
                <div
                  className="LinkButton"
                  style={{
                    "--height": "4.8rem",
                    "border-radius": "25px",
                    padding: "6%",
                    "--font-size": "1.8rem",
                    border:"none",
                  }}
                  onClick={() => gotoTeaching()}
                >
                  Start teaching today
                </div>
              </div>
            </Description>
            <AdvertisementImg src="/images/advertisement/instructor_1.png" />
          </AdvertisementWrapper> */}
        {/* </AdvertisementContain> */}
      </AdvertisementSection>
    </>
  );
};

export default Advertisement;
