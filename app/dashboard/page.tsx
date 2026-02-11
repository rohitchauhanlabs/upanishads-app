"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { getProgress, getPracticeEntries } from "@/lib/storage";
import { UserProgress, PracticeEntry } from "@/lib/types";
import { Check, ArrowRight, Lock } from "lucide-react";

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

  // Determine the first uncompleted layer for Insight 1
  const getInsight1NextRoute = () => {
    if (!progress.layer1Complete) return "/insight-1/intro";
    if (!progress.layer2Complete) return "/insight/layer-2";
    if (!progress.layer3Complete) return "/insight/layer-3";
    return "/insight-1/intro"; // All complete, revisit from start
  };

  // Layer state helper
  type LayerState = "completed" | "current" | "locked";

  const getLayerState = (layerIndex: number): LayerState => {
    const layers = [
      progress.layer1Complete,
      progress.layer2Complete,
      progress.layer3Complete,
    ];
    if (layers[layerIndex]) return "completed";
    // Current = first uncompleted layer
    const firstUncompleted = layers.findIndex((l) => !l);
    if (layerIndex === firstUncompleted) return "current";
    return "locked";
  };

  const getLayerRoute = (layerIndex: number): string => {
    const routes = ["/insight-1/intro", "/insight/layer-2", "/insight/layer-3"];
    return routes[layerIndex];
  };

  const layerLabels = [
    "Introduction",
    "The Aha Moment",
    "Full Insight",
  ];

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
        {/* Insight 1 Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-elevated cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push(getInsight1NextRoute())}
        >
          {/* Clickable title */}
          <h3 className="font-serif font-semibold text-earth-800 mb-4 hover:text-earth-600 transition-colors">
            Insight 1: Shreya vs. Preya
          </h3>

          <div className="space-y-2">
            {layerLabels.map((label, index) => {
              const state = getLayerState(index);
              return (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (state !== "locked") {
                      router.push(getLayerRoute(index));
                    }
                  }}
                  disabled={state === "locked"}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                    state === "completed"
                      ? "bg-sage-50/60 hover:bg-sage-100/60"
                      : state === "current"
                      ? "bg-earth-50 hover:bg-earth-100/60 ring-1 ring-earth-200"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      state === "completed"
                        ? "bg-sage-400 text-white"
                        : state === "current"
                        ? "bg-earth-600 text-white"
                        : "bg-earth-100 text-earth-300"
                    }`}
                  >
                    {state === "completed" ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : state === "current" ? (
                      <ArrowRight className="w-3.5 h-3.5" />
                    ) : (
                      <Lock className="w-3 h-3" />
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      state === "completed"
                        ? "text-earth-700"
                        : state === "current"
                        ? "text-earth-800 font-medium"
                        : "text-earth-400"
                    }`}
                  >
                    {label}
                  </span>
                  {state === "current" && (
                    <span className="ml-auto text-xs text-earth-500 font-medium">
                      Continue →
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4">
            <ProgressBar current={completedLayers} total={3} />
          </div>
        </motion.div>

        {/* Insight 2 Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="card-elevated cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push("/insight-2/intro")}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-semibold text-earth-800 hover:text-earth-600 transition-colors">
                Insight 2: The Witness Self
              </h3>
              <p className="text-xs text-earth-400 mt-1">
                Sakshi • Katha Upanishad
              </p>
            </div>
            <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-sage-100 text-sage-500">
              Available
            </span>
          </div>
          <p className="text-sm text-earth-500 mt-2">
            Meet the part of you that never panics — the awareness behind your anxious thoughts.
          </p>
        </motion.div>

        {/* Insight 3 Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-elevated cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push("/insight-3/intro")}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-semibold text-earth-800 hover:text-earth-600 transition-colors">
                Insight 3: The Two Birds
              </h3>
              <p className="text-xs text-earth-400 mt-1">
                Jiva & Atman • Mundaka Upanishad
              </p>
            </div>
            <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-sage-100 text-sage-500">
              Available
            </span>
          </div>
          <p className="text-sm text-earth-500 mt-2">
            End imposter syndrome by discovering which bird you really are.
          </p>
        </motion.div>

        {/* Practice Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
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
      </div>
    </div>
  );
}
