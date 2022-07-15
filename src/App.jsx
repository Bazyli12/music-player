import React from "react";
import ReactDOM from "react-dom/client";

import {
    Player,
    PlayerLeft,
    PlayerRight,
    Play,
    Timeline,
    Buttons,
    Navigaton,
    NowPlaying,
    Options,
} from "./App.style";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlay: false,
            isPause: true,
            isUsingTimeline: false,
            soundTime: 0,
            soundDuration: 0,
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);

        this.url = "/static/music/vetther2.mp3";
        this.audio = new Audio(this.url);
    }

    convert(seconds) {
        let sec = Math.floor(seconds);
        let min = Math.floor(sec / 60);
        let hour = Math.floor(min / 60);

        hour = Math.floor(hour % 60);
        min = Math.floor(min % 60);
        sec = Math.floor(sec % 60);

        sec = sec >= 10 ? sec : "0" + sec;

        if (hour >= 1) {
            min = min >= 10 ? min : "0" + min;
            return hour + ":" + min + ":" + sec;
        }
        return min + ":" + sec;
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

    changeTimeline() {
        this.setState({
            isUsingTimeline: true,
        });
    }

    componentDidMount() {
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
                target = document.getElementById("range");
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
            <Navigaton>
                <NowPlaying></NowPlaying>
                <Player>
                    <Buttons>
                        <PlayerLeft>
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
                        </PlayerRight>
                    </Buttons>
                    <Timeline>
                        <div id="time">
                            {this.convert(this.state.soundTime)}
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
                            {this.convert(this.state.soundDuration)}
                        </div>
                    </Timeline>
                </Player>
                <Options></Options>
            </Navigaton>
        );
    }
}
