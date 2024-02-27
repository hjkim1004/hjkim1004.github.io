import React, {useEffect, useState} from 'react';
import {TbMusicCog} from "react-icons/tb";
import {Box, Fade, IconButton, Paper, Popper, Slider, Stack, Typography} from "@mui/material";
import PopupState, {bindPopper, bindToggle} from "material-ui-popup-state";
import {PauseRounded, PlayArrowRounded, VolumeDown, VolumeUp} from "@mui/icons-material";
import './style.css'

interface IAudioPlayerProps {
    src: string
    autoPlay?: boolean
}

const AudioPlayer = (props: IAudioPlayerProps) => {
    const [audio] = useState(new Audio(props.src))
    const [paused, setPaused] = useState(!props.autoPlay)
    const [volume, setVolume] = useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setVolume(newValue as number);
    };

    useEffect(() => {
        paused ? audio.pause() : audio.play();
    }, [paused]);

    useEffect(() => {
        audio.volume = volume / 100;
    }, [volume]);

    return (
        <div className="audio-controls">
            <div className="audio-play">
                <IconButton
                    aria-label={paused ? 'play' : 'pause'}
                    onClick={() => setPaused(!paused)}
                >
                    {paused ? (
                        <PlayArrowRounded/>
                    ) : (
                        <PauseRounded/>
                    )}
                </IconButton>
            </div>
            <div className="audio-volume">
                <Stack spacing={2} direction="row" alignItems="center">
                    <VolumeDown/>
                    <Slider aria-label="Volume" min={0} max={100} value={volume} onChange={handleChange}/>
                    <VolumeUp/>
                </Stack>
            </div>
        </div>
    );
}

export default AudioPlayer;

