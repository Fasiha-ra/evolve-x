import styled from "styled-components";
export const DiscussionWrap=styled.div`
background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  margin-bottom:20px;
  input{
    outline: none;
    border: none;
    padding: 10px 10px 20px;
  }
  .questionWrap{
  
    display: flex;
    justify-content: space-evenly;
    button{
      @media (min-width: 1200px) and (max-width:1440px){
      font-size: 14px;
     }
    }
    .questionSec{
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 14px;
        @media (min-width: 1240px){
          font-size: 13px;
          gap: 3px;
        }
        /* @media (min-width: 1440px){
          font-size: 16px;
          gap: 8px;
        } */
        img{
            width: 18px;
        }
    }
  }
`;