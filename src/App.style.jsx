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
        height: 4px;
        overflow: hidden;

        -webkit-appearance: none;
        background: #5e5e5e;
        outline: none;
        border-radius: calc(4px / 2);
    }

    input[type="range"]:focus {
        outline: none;
    }

    input[type="range"]::-webkit-slider-thumb:hover {
        // -webkit-appearance: none;

        background: #1db954;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        dispay: none;
        // background: red;
    }

    input[type="range"]::-webkit-slider-thumb {
        // -webkit-appearance: none;
        // width: 15px;
        // height: 15px;
        // border-radius: 50%;
        // background: #00fd0a;
        // cursor: pointer;
        // border: 4px solid #333;
        // box-shadow: -407px 0 0 400px #00fd0a;
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
