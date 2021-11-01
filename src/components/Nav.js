import styled from "styled-components";

const Header = styled.div`
  height: 50px;
  background-color: #333;
  color: #fff;
  text-align: left;
`;

const Logo = styled.h1`
  float: left;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  color: #d52d2d;
  font-size: 20px;
  font-weight: 500;
`;

const Nav = () => {
  return (
    <Header>
      <Logo>MyMovie</Logo>
    </Header>
  );
};

export default Nav;
