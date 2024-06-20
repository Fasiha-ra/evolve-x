import styled from "styled-components";
export const HeaderWrap = styled.div`
padding: 10px 20px;
background-color: #fff;
box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logos{
        .logo{
            width: 305px;
        }
        .mainLogo{
            width: 105px;
            height: 29px;
        }
    }
    ul{
        li{
            font-size: 14px;
            .item{
                img{
                    width: 28px;
                    height: 28px;
                    margin:0 auto 10px;
                }
            }
        }
    }
    .logos, ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }
}
`;