import styled from "styled-components";
export const BlogWrap = styled.div`
  .post {
    background-color: var(--white);
    border-radius: 25px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    padding: 20px 10px;
    margin-bottom: 20px;
    .blogHeader {
      display: flex;
      justify-content: space-between;
      align-items: start;
      padding-bottom: 20px;
      .logo {
        display: flex;
        gap: 10px;
        .titleHolder {
          .tags {
            display: flex;
            gap: 10px;
            span {
              color: var(--primary-text-color);
              font-size: 16px;
              font-weight: 400;
            }
          }
        }
      }

      .icon {
        color: var(--light-gray);
      }
    }
    .para {
      padding-bottom: 10px;
      p {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
      }
    }
    .replyWrap {
      padding: 20px 0 0;
      display: inline-flex;
      justify-content: start;
      gap: 10px;
      @media (min-width: 1440px) {
        gap: 20px;
      }
      button {
        min-width: 90px;
        font-size: 14px;
        color: var(--light-gray);
        &:nth-child(2) {
          min-width: 100px;
          @media (min-width: 1200px) {
            min-width: 70px;
          }
        }
        @media (min-width: 1200px) {
          min-width: 40px;
        }
        @media (min-width: 1440px) {
          font-size: 18px;
          min-width: 90px;
          gap: 5px;
        }
      }
    }
  }
  .postBtn {
    button {
      display: flex;
      justify-content: center;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
