import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ContentTitle = styled.div`
  text-align: end;
  display: flex;
  flex-direction: column;
`

export const Title = styled.a`
  font-size: 30px;
  cursor: pointer;
`;

export const Subtitle = styled.span``;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;

  @media(max-width: 560px) {
    display: flex;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const CloseSideBar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
  };
`

export const Ancora = styled.a`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;

  &.active {
    background-color: black;
  }
  
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`
