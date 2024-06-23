import styled from "styled-components";
export const ProfileWrap = styled.div`
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0 1 3 0 rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  .editHolder {
    text-align: right;
  }
  .imgHolder {
    img {
      margin: 0 auto;
    }
  }
  .textHolder{
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 1px solid var(--light-gray);
    h4{
        /* margin: 0; */
    }
    p{
        color: var(--light-gray);
    }
  }
  .session{
    padding:10px 0;
    display:flex;
    justify-content:space-between;
    .iconHolder{
        display:flex;
        align-items: center;
        gap:10px;
    }
  }
`;
