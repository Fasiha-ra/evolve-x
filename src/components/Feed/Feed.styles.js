import styled from "styled-components";
export const FeedWrap = styled.div`
  display: block;
  @media (min-width: 1200px) {
    display: flex;
    gap: 10px;
    flex: 1;
  }
  .headingWrapper{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h5{
        margin: 0;
        color: var(--primary-text-color);
    }
    .arrowIcon{
        color: var(--primary-text-color);
    }
  }
`;
