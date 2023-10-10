import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";




export const Link = styled(NavLink)`
  padding-top: 24px;
  padding-bottom: 24px;

  text-decoration: none;
  color: #121417;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;

  &:first-child {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin-right: 24px;

  @media screen and (min-width: 768px) {
      font-size: 24px;
      margin-right: 34px;
    }
  }

  &:not(:first-child) {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      color: #3470FF;
    }

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;
