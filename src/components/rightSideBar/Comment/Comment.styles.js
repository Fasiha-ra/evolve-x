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
    /* gap: 60px; */
    justify-content: space-evenly;
    @media (min-width: 1200px){
      justify-content: space-between;
    }
    
    .questionSec{
        display: flex;
        gap: 2px;
        align-items: center;
        img{
            width: 18px;
        }
    }
  }
`;