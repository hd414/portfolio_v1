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
  
  @media only screen and (max-width: 600px) {
    margin-left: 2rem;
    top: 20rem;
    max-width: 50vw;
  }

  strong {
    font-size: 4rem;
  }
  div {
   
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 1.4rem;
      font-weight:500;
      color:#64ffda;

      .name{
         color : #f3f3f3;
         font-weight : 700; 
         letter-spacing: 0.2rem 
      }
      
    }
    @media only screen and (max-width: 600px) {
  .main{
    font-size: 1.4rem;
     
    .name{
      font-weight : 600;
      font-size : 3rem;
    }
  }
  .sub{
     font-size: 1rem;
      letter-spacing: 2px;
      font-weight:500;
    }
}
    .sub {
      font-size: 4rem;
      letter-spacing: 2px;
      font-weight:800;
    }

  }`;
