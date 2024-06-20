import styled from "styled-components";
export const MainLayoutSection = styled.div`
  position: relative;
  background-color: var(--body-color);
  .mainHeader {
    position: sticky;
    top: 0;
    z-index: 9999;
  }
  .mainSidebarContent {
    display: flex;
    .mainSidebar {
      width: 360px;
      overflow: hidden;
      padding: 0 10px;
      z-index: 9;
      position: sticky;
      top: 88px;
      height: calc(100vh - 89px);
      padding-top: 30px;
    }
    .mainContent {
    }
  }
`;
