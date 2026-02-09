"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getPracticeEntries, savePracticeEntry } from "@/lib/storage";
import { PracticeEntry } from "@/lib/types";

export default function PracticeTrackerPage() {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [choice, setChoice] = useState<"shreya" | "preya" | null>(null);
  const [entries, setEntries] = useState<PracticeEntry[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setEntries(getPracticeEntries());
  }, []);

  const handleSave = () => {
    if (!description.trim() || !choice) return;

    savePracticeEntry({
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      description: description.trim(),
      choice,
    });

    setEntries(getPracticeEntries());
    setDescription("");
    setChoice(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const recentEntries = entries.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Header */}
      <div className="w-full max-w-lg mx-auto px-4 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => router.push("/insight/layer-2")}
            className="text-sm text-earth-400 hover:text-earth-600 transition-colors mb-4 block"
          >
            ← Back to Insight
          </button>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900">
            Practice Tracker
          </h1>
          <p className="mt-2 text-sm text-earth-500">
            Log your Shreya-Preya moments throughout the day.
          </p>
        </motion.div>
      </div>

      {/* Input Form */}
      <div className="w-full max-w-lg mx-auto px-4 py-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-elevated space-y-4"
        >
          <h3 className="font-medium text-earth-800 text-sm">
            What moment are you reflecting on?
          </h3>

          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="I chose to scroll social media instead of going to bed early..."
            className="min-h-[100px]"
          />

          {/* Choice Radio Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setChoice("shreya")}
              className={`flex-1 py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                choice === "shreya"
                  ? "border-sage-400 bg-sage-100 text-sage-500"
                  : "border-earth-100 bg-white/50 text-earth-500 hover:border-earth-200"
              }`}
            >
              <span className="block text-lg mb-1">🌿</span>
              Shreya
              <span className="block text-xs font-normal mt-0.5 opacity-70">
                The good choice
              </span>
            </button>
            <button
              onClick={() => setChoice("preya")}
              className={`flex-1 py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                choice === "preya"
                  ? "border-earth-400 bg-earth-50 text-earth-600"
                  : "border-earth-100 bg-white/50 text-earth-500 hover:border-earth-200"
              }`}
            >
              <span className="block text-lg mb-1">🍯</span>
              Preya
              <span className="block text-xs font-normal mt-0.5 opacity-70">
                The pleasant choice
              </span>
            </button>
          </div>

          <Button
            onClick={handleSave}
            disabled={!description.trim() || !choice}
            className="w-full"
          >
            Log This Moment
          </Button>

          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center text-sm text-sage-500 font-medium"
              >
                Logged successfully ✓
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Recent Entries */}
      <div className="w-full max-w-lg mx-auto px-4 py-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-medium text-earth-600 mb-3">
            Recent Reflections
          </h3>

          {recentEntries.length === 0 ? (
            <p className="text-sm text-earth-400 text-center py-8">
              No entries yet. Start by logging your first moment above.
            </p>
          ) : (
            <div className="space-y-3">
              {recentEntries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/60 rounded-xl p-4 border border-earth-100/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-sm text-earth-800 leading-relaxed">
                        {entry.description}
                      </p>
                      <p className="text-xs text-earth-400 mt-1.5">
                        {entry.date}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                        entry.choice === "shreya"
                          ? "bg-sage-100 text-sage-500"
                          : "bg-earth-100 text-earth-500"
                      }`}
                    >
                      {entry.choice === "shreya" ? "🌿 Shreya" : "🍯 Preya"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
