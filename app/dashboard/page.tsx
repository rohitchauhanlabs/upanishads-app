"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { getProgress, getPracticeEntries } from "@/lib/storage";
import { UserProgress, PracticeEntry } from "@/lib/types";

export default function DashboardPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [entries, setEntries] = useState<PracticeEntry[]>([]);

  useEffect(() => {
    setProgress(getProgress());
    setEntries(getPracticeEntries());
  }, []);

  if (!progress) return null;

  const completedLayers = [
    progress.layer1Complete,
    progress.layer2Complete,
    progress.layer3Complete,
  ].filter(Boolean).length;

  const shreyaCount = entries.filter((e) => e.choice === "shreya").length;
  const preyaCount = entries.filter((e) => e.choice === "preya").length;
  const totalEntries = entries.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Header */}
      <div className="w-full max-w-lg mx-auto px-4 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900">
            Your Journey
          </h1>
          <p className="mt-2 text-sm text-earth-500">
            Track your progress through ancient wisdom.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-lg mx-auto px-4 py-4 space-y-4">
        {/* Insight Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-elevated"
        >
          <h3 className="font-serif font-semibold text-earth-800 mb-4">
            Insight 1: Shreya vs. Preya
          </h3>

          <div className="space-y-3">
            {/* Layer 1 */}
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  progress.layer1Complete
                    ? "bg-sage-400 text-white"
                    : "bg-earth-100 text-earth-400"
                }`}
              >
                {progress.layer1Complete ? "✓" : "1"}
              </div>
              <span
                className={`text-sm ${
                  progress.layer1Complete ? "text-earth-700" : "text-earth-400"
                }`}
              >
                The Hook — 7 Cards
              </span>
            </div>

            {/* Layer 2 */}
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  progress.layer2Complete
                    ? "bg-sage-400 text-white"
                    : "bg-earth-100 text-earth-400"
                }`}
              >
                {progress.layer2Complete ? "✓" : "2"}
              </div>
              <span
                className={`text-sm ${
                  progress.layer2Complete ? "text-earth-700" : "text-earth-400"
                }`}
              >
                The Aha Moment
              </span>
            </div>

            {/* Layer 3 */}
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  progress.layer3Complete
                    ? "bg-sage-400 text-white"
                    : "bg-earth-100 text-earth-400"
                }`}
              >
                {progress.layer3Complete ? "✓" : "3"}
              </div>
              <span
                className={`text-sm ${
                  progress.layer3Complete ? "text-earth-700" : "text-earth-400"
                }`}
              >
                Full Insight
              </span>
            </div>
          </div>

          <div className="mt-4">
            <ProgressBar current={completedLayers} total={3} />
          </div>
        </motion.div>

        {/* Practice Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-elevated"
        >
          <h3 className="font-serif font-semibold text-earth-800 mb-4">
            Practice Log
          </h3>

          {totalEntries === 0 ? (
            <p className="text-sm text-earth-400">
              No practice entries yet. Start tracking your Shreya-Preya moments.
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-earth-800">
                  {totalEntries}
                </p>
                <p className="text-xs text-earth-400 mt-1">Total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-sage-500">
                  {shreyaCount}
                </p>
                <p className="text-xs text-earth-400 mt-1">🌿 Shreya</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-earth-500">
                  {preyaCount}
                </p>
                <p className="text-xs text-earth-400 mt-1">🍯 Preya</p>
              </div>
            </div>
          )}

          <Button
            variant="secondary"
            onClick={() => router.push("/practice-tracker")}
            className="w-full mt-4"
          >
            {totalEntries === 0 ? "Start Tracking" : "Log a Moment"}
          </Button>
        </motion.div>

        {/* Next Insight Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-elevated text-center"
        >
          <h3 className="font-serif font-semibold text-earth-800 mb-2">
            Next Insight
          </h3>
          <p className="text-sm text-earth-400 mb-4">
            More teachings are coming soon. Continue practicing with Insight 1.
          </p>
          <Button disabled variant="outline" className="w-full">
            Coming Soon
          </Button>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-3 pt-2 pb-8"
        >
          <Button
            variant="ghost"
            onClick={() => router.push("/insight/layer-1")}
            className="flex-1 text-xs"
          >
            Revisit Layer 1
          </Button>
          <Button
            variant="ghost"
            onClick={() => router.push("/insight/layer-2")}
            className="flex-1 text-xs"
          >
            Revisit Layer 2
          </Button>
          <Button
            variant="ghost"
            onClick={() => router.push("/insight/layer-3")}
            className="flex-1 text-xs"
          >
            Revisit Layer 3
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
