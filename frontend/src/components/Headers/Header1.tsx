import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const HeaderContainer = styled.header`
  background: #f8f9fa;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // This will take the color from the parent element
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Logo>SeSAC!</Logo>
      </StyledLink>
      {/* 메뉴자리 */}
    </HeaderContainer>
  );
};

export default Header;
