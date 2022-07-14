import React from "react";
import ReactDOM from "react-dom/client";

import { Navigation, Play, Wrapper, Timeline } from "./App.style";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            play: false,
            pause: true,
            time: 0,
            duration: 0,
            isTimelineUsing: false,
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);

        this.url = "/static/music/vetther.mp3";
        this.audio = new Audio(this.url);
    }

    // metoda od zmiany sekund na minuty i sekundy
    convert(seconds) {
        let sec = Math.floor(seconds);
        let min = Math.floor(sec / 60);
        min = min >= 10 ? min : "0" + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : "0" + sec;
        return min + ":" + sec;
    }

    // metoda od togglowania on/off
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

    // handler od klikania w przycisk
    handlePlayClick() {
        this.togglePlay();
    }

    // handler od zmiany sekundy w timelinie
    // handleTimelineChange() {
    //     this.timeline = document.querySelector("#timeline");
    //     this.pause();
    //     this.audio.currentTime = this.timeline.value;
    //     // this.setState({
    //     //     time: this.state.time,
    //     // });
    // }

    componentDidMount() {
        this.timeline = document.querySelector("#timeline");

        setInterval(() => {
            if (this.state.play) {
                if (!this.state.isTimelineUsing)
                    this.timeline.value = this.audio.currentTime;
            }
        }, 1);

        this.timeline.addEventListener("mouseup", () => {
            // this.play();
            this.audio.currentTime = this.timeline.value;
            this.setState({
                isTimelineUsing: false,
            });
        });

        // event od zmiany inputa w rangu
        // this.timeline.addEventListener(
        //     "input",
        //     () => {
        //         // this.audio.currentTime = this.value;
        //         console.log(this.timeline.value);
        //         // console.log(this.state.time);
        //         this.audio.currentTime = this.timeline.value;
        //         // this.setState({
        //         //     time: this.volumeControl.value,
        //         // });
        //     },
        //     false
        // );

        this.audio.addEventListener("canplay", () => {
            this.setState({
                duration: this.audio.duration,
            });
            this.timeline.value = this.audio.currentTime;
        });

        this.audio.addEventListener("ended", () =>
            this.setState({ play: false })
        );

        this.audio.addEventListener("timeupdate", () => {
            this.setState({
                time: this.audio.currentTime,
            });
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
                    <span>{this.convert(this.state.time)}</span>
                    <input
                        type="range"
                        id="timeline"
                        defaultValue="0"
                        max={this.state.duration}
                        // value={this.state.time}
                        step="0.1"
                        onChange={() => {
                            this.setState({
                                isTimelineUsing: true,
                            });
                        }}
                    />
                    <span>{this.convert(this.state.duration)}</span>
                </Timeline>
            </Wrapper>
        );
    }
}
