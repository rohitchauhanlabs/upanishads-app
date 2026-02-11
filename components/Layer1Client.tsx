"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SwipeableCard } from "@/components/SwipeableCard";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Button } from "@/components/ui/button";
import { updateProgress } from "@/lib/storage";
import { BackButton } from "@/components/BackButton";
import { InsightCard } from "@/lib/types";

interface Layer1ClientProps {
  cards: InsightCard[];
}

export function Layer1Client({ cards }: Layer1ClientProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastCard = currentIndex === cards.length - 1;

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleContinue = () => {
    updateProgress({ layer1Complete: true });
    router.push("/insight/layer-2");
  };

  if (cards.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50 px-4">
        <div className="text-center">
          <p className="text-earth-500">Could not load card content.</p>
          <p className="text-earth-400 text-sm mt-2">
            Check that insight-1-layer-1.md exists in /content/insights/
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Header */}
      <div className="w-full max-w-lg mx-auto px-4 pt-6 pb-2 space-y-2">
        <BackButton href="/dashboard" label="Back" />
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-earth-400 font-medium"
          >
            Insight 1 · Layer 1
          </motion.span>
          <AudioPlayer label="Listen" />
        </div>
      </div>

      {/* Cards Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-lg">
          <SwipeableCard
            cards={cards}
            currentIndex={currentIndex}
            onNext={handleNext}
            onPrev={handlePrev}
          />

          {/* Continue button on last card */}
          {isLastCard && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <Button
                onClick={handleContinue}
                size="lg"
                className="rounded-full px-10"
              >
                Continue →
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="w-full max-w-lg mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-3 h-3 bg-earth-600"
                  : index < currentIndex
                  ? "w-2 h-2 bg-earth-400"
                  : "w-2 h-2 bg-earth-200"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-earth-300 mt-3">
          {currentIndex < cards.length - 1 ? "Tap or swipe to continue" : ""}
        </p>
      </div>
    </div>
  );
}
