import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
    GlobalStyle,
    Player,
    PlayerLeft,
    PlayerRight,
    Play,
    Timeline,
    Buttons,
    Navigaton,
    NowPlaying,
    Options,
    Footer,
} from "./_App";

import convertTime from "../utils/convertTime";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "/music/vetther2.mp3",
            isPlay: false,
            isPause: true,
            isUsingTimeline: false,
            soundTime: 0,
            soundDuration: 0,
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    togglePlay() {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    play() {
        this.setState({ play: true, pause: false });
        this.audio.play();
    }

    pause() {
        this.setState({ play: false, pause: true });
        this.audio.pause();
    }

    handlePlayClick() {
        this.togglePlay();
    }

    handleForwardClick() {
        this.audio.currentTime += 15;
    }

    handleRewindClick() {
        this.audio.currentTime -= 15;
    }

    changeTimeline() {
        this.setState({
            isUsingTimeline: true,
        });
    }

    componentDidMount() {
        this.audio = new Audio(this.state.url);
        this.timeline = document.querySelector("#timeline");

        setInterval(() => {
            if (this.state.play) {
                if (!this.state.isUsingTimeline) {
                    this.timeline.value = this.audio.currentTime;

                    const min = this.timeline.min;
                    const max = this.timeline.max;
                    const val = this.timeline.value;

                    this.timeline.style.backgroundSize =
                        ((val - min) * 100) / (max - min) + "% 100%";
                }
            }
        }, 1);

        this.timeline.addEventListener("mouseup", () => {
            this.audio.currentTime = this.timeline.value;
            this.setState({
                isUsingTimeline: false,
            });
        });

        this.audio.addEventListener("canplay", () => {
            this.setState({
                soundDuration: this.audio.duration,
            });
            this.timeline.value = this.audio.currentTime;
        });

        this.audio.addEventListener("ended", () =>
            this.setState({ play: false })
        );

        this.audio.addEventListener("timeupdate", () => {
            this.setState({
                soundTime: this.audio.currentTime,
            });
        });

        this.rangeInputs = document.querySelectorAll('input[type="range"]');

        function handleInputChange(e) {
            let target = e.target;
            if (e.target.type !== "range") {
                target = document.querySelector("#range");
            }
            const min = target.min;
            const max = target.max;
            const val = target.value;

            target.style.backgroundSize =
                ((val - min) * 100) / (max - min) + "% 100%";
        }

        this.rangeInputs.forEach((input) => {
            input.addEventListener("input", handleInputChange);
        });

        this.timeline.addEventListener("mouseover", () => {
            this.timeline.style.setProperty("--color", "#fff");
            this.timeline.style.setProperty(
                "--timeline-color",
                "linear-gradient(#1db954, #1db954)"
            );
            this.timeline.style.setProperty(
                "--shadow",
                "0 2px 4px 0 rgb(0 0 0 / 50%)"
            );
        });
        this.timeline.addEventListener("mouseout", () => {
            this.timeline.style.setProperty("--color", "transparent");
            this.timeline.style.setProperty(
                "--timeline-color",
                "linear-gradient(#fff, #fff)"
            );
            this.timeline.style.setProperty("--shadow", "0");
        });
    }

    componentWillUnmount() {
        this.audio.removeEventListener("ended", () =>
            this.setState({ play: false })
        );
    }

    render() {
        return (
            <>
                <GlobalStyle />
                <Footer>
                    <Navigaton>
                        <NowPlaying></NowPlaying>
                        <Player>
                            <Buttons>
                                <PlayerLeft>
                                    <button
                                        onClick={() => this.handleRewindClick()}
                                    >
                                        <svg
                                            height="22"
                                            width="22"
                                            viewBox="0 0 16 16"
                                            fill="#bababa"
                                        >
                                            <path d="M2.464 4.5h1.473a.75.75 0 110 1.5H0V2.063a.75.75 0 011.5 0v1.27a8.25 8.25 0 1110.539 12.554.75.75 0 01-.828-1.25A6.75 6.75 0 102.464 4.5z"></path>
                                            <path d="M.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H0v-1.5h.303zm4.832-.911h4.05v1.5H6.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924C9.843 14.5 8.51 15.8 6.89 15.8a2.945 2.945 0 01-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z"></path>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg
                                            height="22"
                                            width="22"
                                            viewBox="0 0 16 16"
                                            fill="#bababa"
                                        >
                                            <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
                                        </svg>
                                    </button>
                                </PlayerLeft>
                                <Play
                                    className={this.state.play ? "on" : "off"}
                                    onClick={() => this.handlePlayClick()}
                                >
                                    {this.state.play ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path>{" "}
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="22"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>{" "}
                                        </svg>
                                    )}
                                </Play>
                                <PlayerRight>
                                    <button>
                                        <svg
                                            height="22"
                                            width="22"
                                            viewBox="0 0 16 16"
                                            fill="#bababa"
                                        >
                                            <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() =>
                                            this.handleForwardClick()
                                        }
                                    >
                                        <svg
                                            height="22"
                                            width="22"
                                            viewBox="0 0 16 16"
                                            fill="#bababa"
                                        >
                                            <path d="M13.536 4.5h-1.473a.75.75 0 100 1.5H16V2.063a.75.75 0 00-1.5 0v1.27A8.25 8.25 0 103.962 15.887a.75.75 0 10.827-1.25A6.75 6.75 0 1113.535 4.5z"></path>
                                            <path d="M6.303 8.407c.79 0 1.214-.52 1.214-.907h1.5v8h-1.5V9.907H6v-1.5h.303zm4.832-.911h4.05v1.5H12.33l-.245 1.067c.256-.071.525-.11.804-.11 1.621 0 2.954 1.3 2.954 2.924 0 1.624-1.333 2.923-2.954 2.923a2.945 2.945 0 01-2.93-2.54l1.487-.197c.092.69.696 1.237 1.443 1.237.813 0 1.454-.647 1.454-1.423s-.64-1.423-1.454-1.423c-.49 0-.92.235-1.183.594l-.01.014-.206.254-1.314-.639.96-4.181z"></path>
                                        </svg>
                                    </button>
                                </PlayerRight>
                            </Buttons>
                            <Timeline>
                                <div id="time">
                                    {convertTime(this.state.soundTime)}
                                </div>
                                <input
                                    type="range"
                                    id="timeline"
                                    defaultValue="0"
                                    max={this.state.soundDuration}
                                    step="0.01"
                                    onChange={() => this.changeTimeline()}
                                />
                                <div id="duration">
                                    {convertTime(this.state.soundDuration)}
                                </div>
                            </Timeline>
                        </Player>
                        <Options></Options>
                    </Navigaton>
                </Footer>
            </>
        );
    }
}
