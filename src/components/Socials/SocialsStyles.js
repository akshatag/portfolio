import styled from 'styled-components';

export const SocialsContainer = styled.ul`
  padding-inline-start: 0px;
  margin-top: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 12px;
  }
`;

export const SocialsItem = styled.li`
  float: left;
  list-style-type: none;
  margin-right: 24px;
`;

export const SocialsIcon = styled.img`
  width: 32px;
  cursor: pointer;
`;