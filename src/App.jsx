import React from "react";
import ReactDOM from "react-dom/client";

import { Navigation, Play, Wrapper, Timeline } from "./App.style";

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

        this.url = "/static/music/vetther.mp3";
        this.audio = new Audio(this.url);
    }

    convert(seconds) {
        let sec = Math.floor(seconds);
        let min = Math.floor(sec / 60);
        min = min >= 10 ? min : "0" + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : "0" + sec;
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
            <Wrapper>
                <Navigation>
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
                </Navigation>
                <Timeline>
                    <div id="time">{this.convert(this.state.soundTime)}</div>
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
            </Wrapper>
        );
    }
}
