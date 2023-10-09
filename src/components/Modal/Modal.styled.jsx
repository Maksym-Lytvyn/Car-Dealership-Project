import styled from '@emotion/styled';

export const ModalStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 14px;
    background-color: var(--text-button-color);
    padding: 30px;
    width: calc(100% - 20px);
    max-height: calc(100% - 20px);
    overflow: auto;

    @media screen and (min-width: 480px) {
        width: 450px;
        padding: 32px;
    }
    
    @media screen and (min-width: 768px) {
        width: 541px;
        padding: 34px;
        max-height: 830px;
    }
`;

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
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;

    &:not(:last-child)::after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 16px;
        background-color: var(--lines-background-color);
        margin-left: 6px;
        margin-right: 6px;
    }
`;

