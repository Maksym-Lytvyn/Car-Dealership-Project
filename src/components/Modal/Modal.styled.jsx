import styled from '@emotion/styled';

export const iconStyles = {
  position: 'absolute',
  stroke: 'transparent',
  fill: '#121417',
  top: 12,
  right: 12,
  width: 22,
  height: 22,
  cursor: 'pointer',
};

export const DetailsItem = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`;
