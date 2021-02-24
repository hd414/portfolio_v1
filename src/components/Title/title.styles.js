import styled from "styled-components";
export const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index:8; 
  margin-top: -130px;
  text-align: left;
  margin-left:6rem;
  color:white;
  strong {
    font-size: 4rem;
  }
  div {
    color: #8892b0;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 2rem;
      
    }
    @media only screen and (max-width: 600px) {
  .main{
    font-size: 30px;
  }
}
    .sub {
      font-size: 4rem;
      letter-spacing: 2px;
      font-weight:800;
    }
    @media only screen and (max-width: 600px) {
  .sub{
    font-size: 15px;
      letter-spacing: 2px;
      font-weight:500;
    }
    
   }
  }`;
