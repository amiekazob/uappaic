"use client"

import React, { useEffect, useRef } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"
import "videojs-youtube"

// Define the props interface for the VideoPlayer component
interface VideoPlayerProps {
  options: any // video.js options
  onReady?: (player: any) => void
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<any | null>(null)

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The DOM element for the player needs to exist
      const videoElement = document.createElement("video-js")
      videoElement.classList.add("vjs-big-play-centered")
      if (videoRef.current) {
        videoRef.current.appendChild(videoElement)

        const player = (playerRef.current = videojs(videoElement, options, () => {
          player.log("player is ready")
          if (onReady) {
            onReady(player)
          }
        }))
      }
    } else {
      // You can update player options here if they change
      const player = playerRef.current
      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef, onReady])

  // Dispose the Video.js player when the component unmounts
  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [])

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  )
}

export default VideoPlayer 