"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/AudioPlayer";
import { VOICE_OPTIONS } from "@/lib/constants";
import { BackButton } from "@/components/BackButton";
import { saveSelectedVoice } from "@/lib/storage";

export default function VoiceSelectionPage() {
  const router = useRouter();
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedVoice) {
      saveSelectedVoice(selectedVoice);
      router.push("/insight/layer-1");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Header */}
      <div className="w-full max-w-lg mx-auto px-4 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <BackButton href="/onboarding" label="Back" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900">
            Choose Your Guide
          </h1>
          <p className="mt-2 text-sm text-earth-500">
            Select the voice that will accompany your journey.
          </p>
        </motion.div>
      </div>

      {/* Voice Grid */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <div className="w-full max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {VOICE_OPTIONS.map((voice, index) => (
            <motion.button
              key={voice.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedVoice(voice.id)}
              className={`relative text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                selectedVoice === voice.id
                  ? "border-earth-500 bg-earth-50/80 shadow-sm"
                  : "border-earth-100/50 bg-white/60 hover:border-earth-200 hover:bg-white/80"
              }`}
            >
              {/* Selected indicator */}
              {selectedVoice === voice.id && (
                <motion.div
                  layoutId="selected-voice"
                  className="absolute top-3 right-3 w-5 h-5 rounded-full bg-earth-500 flex items-center justify-center"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
              )}

              {/* Voice icon */}
              <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center mb-3">
                <span className="text-sm font-medium text-earth-600">
                  {voice.name[0]}
                </span>
              </div>

              <h3 className="font-medium text-earth-900">{voice.name}</h3>
              <p className="text-xs text-earth-400 mt-0.5">
                {voice.accent} · {voice.gender === "male" ? "Male" : "Female"}
              </p>
              <p className="text-xs text-earth-500 mt-1.5">
                {voice.description}
              </p>

              {/* Preview button */}
              <div className="mt-3">
                <AudioPlayer label="Preview" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-lg mx-auto px-4 py-8">
        <Button
          onClick={handleContinue}
          disabled={!selectedVoice}
          className="w-full"
          size="lg"
        >
          Continue with{" "}
          {selectedVoice
            ? VOICE_OPTIONS.find((v) => v.id === selectedVoice)?.name
            : "..."}
        </Button>
      </div>
    </div>
  );
}
