// import React from 'react'
// import styled from "styled-components";
// import LanguageIcon from '@mui/icons-material/Language';


// const FooterContainer = styled.div`
//   font-weight: 400;
//   line-height: 1.4;
//   font-size: 1.6rem;
//   color: #1c1d1f;
// ` 
// const FooterSection = styled.section`
//   padding: 2.4rem 3.2rem 0 3.2rem;
//   background-color: #1c1d1f;
//   color: #fff;
//   border-top: 1px solid #3e4143;
// ` 
// const FooterTop = styled.div`
//   display: flex;
// ` 
// const LanguageSelectorContainer = styled.div`
//   padding: 0;
//   order: 1;
//   flex-shrink: 1;
//   margin-left: auto;
// `
// const LanguageSelectorBtn = styled.div`
//   border: 1px solid #fff;
//   color: #fff;
//   justify-content: flex-start;
//   padding: 0 1.6rem;
//   min-width: 14rem;
//   background-color: transparent;
//   height: 4rem;
//   position: relative;
//   align-items: center;
//   display: inline-flex;
//   cursor: pointer;
//   font-weight: 400;
//   line-height: 1.4;
//   font-size: 1.6rem;
// ` 
// const LanguageSpan = styled.span`
//   margin-left: 0.4rem;
// `
// const FooterListUl = styled.ul`
//   flex-basis: 25.6rem;
//   margin: 0 1.6rem 0 0;
//   padding: 0;
//   list-style: none;
// ` 
// const FooterListLi = styled.li`
//   padding-left: 0;
// `
// const  FooterLink  = styled.li`
//   color: #fff;
//   display: block;
//   font-weight: 400;
//   font-size: 1.4rem;
//   text-decoration: none;
//   padding: 0.4rem 0;

//   &:hover {
//   cursor: pointer;
//   text-decoration: underline;
//   }
// ` 
// const FooterBottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 6.4rem 0 3.2rem 0;
//   color: #fff;
// ` 
// const LogoLink = styled.a`
//   display: block;
//   cursor: pointer;
//   width: 91px;
//   height: 34px;
// ` 
// const LogoImg = styled.img`
//   width: 100%;
//   height: auto;
// ` 
// const Copyright = styled.div`
//   padding: 0;
//   font-size: 1.2rem;
// ` 

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterSection>
//         <FooterTop>
//           <LanguageSelectorContainer>
//             <LanguageSelectorBtn>
//               <LanguageIcon style={{ width: '2rem', height: '2rem' }} />
//               <LanguageSpan>English</LanguageSpan>
//             </LanguageSelectorBtn>
//           </LanguageSelectorContainer>
//           <FooterListUl>
//             <div className="footer-list-li"><div className="footer-link" href="#">Careers</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Blog</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Help and Support</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Affiliate</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Investors</div></div>
//           </FooterListUl>
//           <FooterListUl>
//             <div className="footer-list-li"><div className="footer-link" href="#">Share Your Skill</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">About us</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Contact us</div></div>
//           </FooterListUl>
         
//           <FooterListUl>
//             <div className="footer-list-li"><div className="footer-link" href="#">Terms</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Privacy policy</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Cookie settings</div></div>
//           </FooterListUl>
//         </FooterTop>
//         <FooterBottom>
//           <div><LogoLink href="#"></LogoLink></div>
//           <Copyright>&copy; 2022 SkillHub, Inc.</Copyright>
//         </FooterBottom>
//       </FooterSection>
//     </FooterContainer>
//   )
// }

// export default Footer;
// import React from 'react'
// import styled from "styled-components";
// import "./Footer.css";
// import LanguageIcon from '@mui/icons-material/Language';






// const Footer = () => {
//   return (
//     <div className="FooterContainer">
//       <div className='FooterSection'>
//         <div className='footer-top'>
//           <div className='language-selector-container'>
//             <div className='language-selector-btn'>
//               <LanguageIcon style={{ width: '2rem', height: '2rem' }} />
//               <div className='language-span'>English</div>
//             </div>
//           </div>
//           <div className='footer-list-ul'>
//             <div className='footer-list-li'><div className="footer-link" href="#">Careers</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Blog</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Help and Support</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Affiliate</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Investors</div></div>
//           </div>
//           <FooterListUl>
//             <div className="footer-list-li"><div className="footer-link" href="#">Share Your Skill</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">About us</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Contact us</div></div>
//           </FooterListUl>
         
//           <FooterListUl>
//             <div className="footer-list-li"><div className="footer-link" href="#">Terms</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Privacy policy</div></div>
//             <div className="footer-list-li"><div className="footer-link" href="#">Cookie settings</div></div>
//           </FooterListUl>
//         </div>
//         <div className='footer-bottom'>
//           <div><div className='logo-link ' href="#"></div></div>
//           <div className='copy-right'>&copy; 2022 SkillHub, Inc.</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start' style={{ fontSize: '1.4rem' ,color:"white", "margin-top": "2%"}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-5 border-bottom'  style={{ fontSize: '1.7rem'}}>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a style={{"text-decoration":" none"}} href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='facebook-f' />
          </a>
          <a style={{"text-decoration":" none"}} href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='twitter' />
          </a>
          <a style={{"text-decoration":" none"}} href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='google' />
          </a>
          <a style={{"text-decoration":" none"}} href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='instagram' />
          </a>
          <a style={{"text-decoration":" none"}} href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='linkedin' />
          </a>
          <a style={{"text-decoration":" none"}} href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='github' />
          </a>
        </div>
      </section>

      <section className='border-bottom' >
        <MDBContainer className='text-center text-md-start mt-5 '>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'style={{"width":"30%"}}>
              <h6 className='text-uppercase fw-bold mb-4' style={{"font-size":"1.4rem"}}>
                <MDBIcon color='white' icon='gem' className='me-3' />
                SkillHub
              </h6>
              <p>
              At SkillHub, we're passionate about helping people learn and grow. Our platform offers a diverse selection of courses taught by multiple instructors, so you can find the perfect course for your needs. Join the SkillHub community today and start your learning journey!
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4' style={{"text-decoration":"none"}}>
              <h6 className='text-uppercase fw-bold mb-4' style={{"font-size":"1.4rem"}}>Products</h6>
              <p>
                <a style={{"text-decoration":" none"}} href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a style={{"text-decoration":" none"}} href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a style={{"text-decoration":" none"}} href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a style={{"text-decoration":" none"}} href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{"font-size":"1.4rem"}}>Useful links</h6>
              <p>
                <a style={{"text-decoration":" none"}} href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a style={{"text-decoration":" none"}} href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a style={{"text-decoration":" none"}} href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a style={{"text-decoration":" none"}} href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{"font-size":"1.4rem"}}>Contact</h6>
              <p>
                <MDBIcon color='white' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='white' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='white' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='white' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        &copy; 2023 SkillHub. All rights reserved.
      </div>
    </MDBFooter>
  );
};