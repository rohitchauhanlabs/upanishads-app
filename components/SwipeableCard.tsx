"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { InsightCard } from "@/lib/types";

interface SwipeableCardProps {
  cards: InsightCard[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export function SwipeableCard({ cards, currentIndex, onNext, onPrev }: SwipeableCardProps) {
  const [direction, setDirection] = useState(0);
  const card = cards[currentIndex];

  const swipeThreshold = 50;

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -swipeThreshold && currentIndex < cards.length - 1) {
      setDirection(1);
      onNext();
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setDirection(-1);
      onPrev();
    }
  };

  const handleTap = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      onNext();
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full" style={{ minHeight: "320px" }}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
          onClick={handleTap}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <div
            className={`h-full flex flex-col items-center justify-center text-center px-8 py-12 rounded-2xl border border-earth-100/50 bg-white/80 backdrop-blur-sm shadow-sm ${
              card.emphasis ? "bg-gradient-to-br from-earth-50 to-cream-200" : ""
            }`}
          >
            <p
              className={`font-serif leading-relaxed ${
                card.emphasis
                  ? "text-2xl sm:text-3xl font-bold text-earth-800"
                  : "text-xl sm:text-2xl font-semibold text-earth-900"
              }`}
            >
              {card.content}
            </p>
            {card.subtext && (
              <p className="mt-4 text-sm sm:text-base text-earth-500 leading-relaxed max-w-sm">
                {card.subtext}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
