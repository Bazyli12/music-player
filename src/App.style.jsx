import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #141414;
    flex-direction: column;
    padding: 20px 0;
`;

export const Navigation = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 8px;
`;
export const Timeline = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&display=swap");

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    #time,
    #duration {
        font-family: "Athiti", sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: #a7a7a7;
        margin: 0 5px;
    }

    input[type="range"] {
        --color: transparent;
        --timeline-color: linear-gradient(#fff, #fff);
        --shadow: 0;

        :active {
            outline: none;
        }
        appearance: none;
        width: 600px;
        height: 4px;
        background: #5e5e5e;
        border-radius: 5px;
        background-image: var(--timeline-color);
        background-size: 0% 100%;
        background-repeat: no-repeat;

        ::-webkit-slider-thumb {
            :hover {
                background: var(--color);
                box-shadow: var(--shadow);
            }
            appearance: none;
            height: 14px;
            width: 14px;
            border-radius: 50%;
            background: var(--color);
            box-shadow: var(--shadow);
        }
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
