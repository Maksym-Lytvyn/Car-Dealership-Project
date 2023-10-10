import styled from "@emotion/styled";


export const iconStyles = {
  position: "absolute",
  stroke: "#3470FF",
  fill: "transparent",
  top: 14,
  right: 14,
  cursor: "pointer",
};


export const DetailsItem = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const Button = styled.button`
    width: 100%;
    height: 44px;

    border-radius: 12px;
    background-color: #3470FF;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover,
        &:focus {
        background-color: #0B44CD;
`;
