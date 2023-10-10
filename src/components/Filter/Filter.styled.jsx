import styled from '@emotion/styled';


export const InputMileageFrom = styled.input`
    box-sizing: border-box;
    width: 125px;     
    height: 48px;
    padding: 14px 14px 14px 70px;
    background-color: rgba(247, 247, 251, 1);
    outline: transparent;
    font-size: 16px;
    border-color: transparent;
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.20);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    :focus {
        border-color: #2684FF;
    }

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    @media screen and (min-width: 768px) {
        width: 160px;
        padding: 14px 14px 14px 86px;
    }
`;

export const InputMileageTo = styled.input`
    box-sizing: border-box;
    width: 125px; 
    height: 48px;
    padding: 14px 14px 14px 70px;
    background-color: rgba(247, 247, 251, 1);
    outline: transparent;
    font-size: 16px;
    border-color: transparent;
    border-radius: 0px 14px 14px 0px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    

    &:hover,
    &:focus {
        border-color: #2684FF;
    }

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    @media screen and (min-width: 768px) {
        width: 160px;
        padding: 14px 14px 14px 86px;
    }
`;

