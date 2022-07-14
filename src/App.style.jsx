import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #141414;
    flex-direction: column;
`;

export const Navigation = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;
export const Timeline = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;

    span {
        color: white;
        margin: 0 5px;
    }

    input[type="range"] {
        width: 600px;
    }
`;

export const Play = styled.button`
    transition: all 33ms cubic-bezier(0.3, 0, 0.7, 1) 0s;
    background-color: white;
    padding: 0;
    // 32px normalnie
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 0;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.on {
    }

    &.off {
    }

    &:hover {
        transform: scale(1.06);
    }
    &:active {
        transform: scale(0.99);
    }
`;
