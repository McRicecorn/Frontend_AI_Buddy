import React, { useState, useEffect } from "react"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import Tooltip from '@mui/material/Tooltip';

const TextToSpeech = ({ text, lang }) => {
    const [isPaused, setIsPaused] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [voices, setVoices] = useState([])

    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices()
            setVoices(availableVoices)
        }

        loadVoices()
        window.speechSynthesis.onvoiceschanged = loadVoices
    }, [])

    useEffect(() => {
        window.speechSynthesis.cancel()
        setTimeout(() => {
            setIsPaused(false)
            setIsPlaying(false)
        }, 0)
    }, [text])

    const handlePlay = () => {
        const synth = window.speechSynthesis

        if (isPaused) {
            synth.resume()
        } else {
            const utterance = new SpeechSynthesisUtterance(text)
            utterance.lang = lang

            if (lang === "de-DE") {
                const selectedVoice = voices.find(v => v.name === "Google Deutsch") // diese Stimme ist nur in Chrome verfügbar
                if (selectedVoice) {
                    utterance.voice = selectedVoice
                }
            } else if (lang === "en-US") {
                const selectedVoice = voices.find(v => v.name === "Google US English") // diese Stimme ist nur in Chrome verfügbar
                if (selectedVoice) {
                    utterance.voice = selectedVoice
                }
            }
            utterance.onend = () => setIsPlaying(false)
            synth.speak(utterance)
            setIsPlaying(true)
        }

        setIsPaused(false)
    }

    const handlePause = () => {
        window.speechSynthesis.pause()
        setIsPaused(true)
    }

    const handleStop = () => {
        window.speechSynthesis.cancel()
        setIsPaused(false)
        setIsPlaying(false)
    }

    return (
    <div>
        <Stack direction="row">
            <Tooltip title="Start" arrow>
                <IconButton onClick={handlePlay} disabled={isPlaying && !isPaused} aria-label="play">
                    <PlayCircleOutlineIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Pause" arrow>
                <IconButton onClick={handlePause} disabled={!isPlaying || isPaused} aria-label="pause">
                    <PauseCircleOutlineIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Stopp" arrow>
                <IconButton onClick={handleStop} disabled={!isPlaying && !isPaused} aria-label="stopp">
                    <StopCircleIcon />
                </IconButton>
            </Tooltip>
        </Stack>
    </div>
    )
}

export default TextToSpeech