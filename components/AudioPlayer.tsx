"use client";

import { useState } from "react";

interface AudioPlayerProps {
  label?: string;
}

export function AudioPlayer({ label = "Listen" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Placeholder - actual audio will be added in Phase 2
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-earth-100 hover:bg-earth-200 text-earth-600 text-xs font-medium transition-colors duration-200"
      aria-label={isPlaying ? "Pause audio" : "Play audio"}
    >
      {isPlaying ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
}
