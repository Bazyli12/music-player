import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        overflow: hidden;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        #__next {
            height: 100vh;
            width: 100vw;
            background-color: #121212;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #181818;
    border-top: 1px solid #282828;
`;

export const Navigaton = styled.div`
    min-width: 620px;
    height: 110px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
`;

export const Player = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    width: 40%;
    min-width: 360px;
`;

export const NowPlaying = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    width: 30%;
`;
export const Options = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: flex-end;
    min-width: 180px;
    width: 30%;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 8px;
    gap: 16px;
`;

export const Timeline = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&display=swap");

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 8px;

    #time,
    #duration {
        font-family: "Athiti", sans-serif;
        font-size: 12px;
        font-weight: 500;
        color: #a7a7a7;
        cursor: default;
        user-select: none;
    }

    #time {
        min-width: 40px;
        text-align: right;
    }

    #duration {
        min-width: 40px;
        text-align: left;
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

export const VolumeBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        transition: all 33ms cubic-bezier(0.3, 0, 0.7, 1) 0s;
        color: #fff;
        background-color: transparent;
        padding: 0;
        width: 48px;
        height: 48px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover svg {
            fill: white;
        }

        :active svg {
            fill: #bababa;
        }
    }

    input[type="range"] {
        --color: transparent;
        --volume-color: linear-gradient(#fff, #fff);
        --shadow: 0;

        :active {
            outline: none;
        }

        appearance: none;
        height: 4px;
        width: 125px;
        background: #5e5e5e;
        border-radius: 5px;
        background-image: var(--volume-color);
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

export const PlayerLeft = styled.div`
    display: flex;
    gap: 8px;
    button {
        transition: all 33ms cubic-bezier(0.3, 0, 0.7, 1) 0s;
        color: #fff;
        background-color: transparent;
        padding: 0;
        width: 48px;
        height: 48px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover svg {
            fill: white;
        }

        :active svg {
            fill: #bababa;
        }
    }
`;

export const PlayerRight = styled.div`
    display: flex;
    gap: 8px;
    button {
        transition: all 33ms cubic-bezier(0.3, 0, 0.7, 1) 0s;
        color: #fff;
        background-color: transparent;
        padding: 0;
        width: 48px;
        height: 48px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover svg {
            fill: white;
        }

        :active svg {
            fill: #bababa;
        }
    }
`;

export const Play = styled.button`
    align-items: center;
    transition: all 33ms cubic-bezier(0.3, 0, 0.7, 1) 0s;
    background-color: white;
    padding: 0;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.06);
    }
    &:active {
        transform: scale(0.99);
    }
`;
