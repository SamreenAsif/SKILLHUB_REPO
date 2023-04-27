import React from "react";
import styled from "styled-components";
// import LinkButton from '../../share/UIElements/LinkButton/LinkButton';
import "../Btn.css";
import { useNavigate } from "react-router-dom";

const AdvertisementContainer = styled.div`
  margin: 0;
  margin-top: 6.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`;
const AdvertisementSection = styled.div`
  padding: 4rem 0;
  width: 100%;
  max-width: 134rem;
  margin-right: auto;
  margin-left: auto;
`;
const AdvertisementContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32rem;
`;
const AdvertisementWrapper = styled.div`
  display: flex;
  padding: 0;
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

const Advertisement = () => {
  const navigate = useNavigate();
  const gotoTeaching =()=>{
    navigate("./teaching");
  }
  return (
    <>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper>
            <AdvertisementImg src="/images/advertisement/instructor-2x-v3.jpeg" />
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
                    // "--width": "8rem",
                    // "--font-size": "1.4rem",
                    "--font-size": "1.8rem",
                  }}
                  onClick={()=>gotoTeaching()}
                >
                  Start teaching today
                </div>
              </div>
            </Description>
          </AdvertisementWrapper>
        </AdvertisementContain>
      </AdvertisementSection>
    </>
  );
};

export default Advertisement;
