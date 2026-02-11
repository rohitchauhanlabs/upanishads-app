"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/BackButton";

export default function InsightsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="w-full max-w-lg mx-auto px-4 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <BackButton href="/dashboard" label="Back to Dashboard" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900">
            Insights
          </h1>
          <p className="mt-2 text-sm text-earth-500">
            Explore the teachings of the Upanishads.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-lg mx-auto px-4 py-4 space-y-4">
        {/* Insight 1 Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-elevated cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push("/insight/layer-1")}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-semibold text-earth-800">
                The 2 AM Choice That's Destroying Your Peace
              </h3>
              <p className="text-xs text-earth-400 mt-1">
                Shreya vs. Preya • Insight #1
              </p>
              <p className="text-sm text-earth-500 mt-2">
                The path of the good vs. the path of the pleasant — from the Katha Upanishad.
              </p>
            </div>
            <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-sage-100 text-sage-500">
              Available
            </span>
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight/layer-1");
              }}
              className="text-xs"
            >
              📖 Introduction (2 min)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight/layer-2");
              }}
              className="text-xs"
            >
              🎯 Core Teaching (3 min)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight/layer-3");
              }}
              className="text-xs"
            >
              📚 Full Wisdom (10 min)
            </Button>
          </div>
        </motion.div>

        {/* Insight 2 Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-elevated cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push("/insight-2/intro")}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-semibold text-earth-800">
                Meet the Part of You That Never Panics
              </h3>
              <p className="text-xs text-earth-400 mt-1">
                The Witness Self • Sakshi • Insight #2
              </p>
              <p className="text-sm text-earth-500 mt-2">
                Discover the awareness that watches your anxious thoughts without drowning in them.
              </p>
            </div>
            <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-sage-100 text-sage-500">
              Available
            </span>
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight-2/intro");
              }}
              className="text-xs"
            >
              📖 Introduction (2 min)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight-2/layer-2");
              }}
              className="text-xs"
            >
              🎯 Core Teaching (3 min)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight-2/layer-3");
              }}
              className="text-xs"
            >
              📚 Full Wisdom (10 min)
            </Button>
          </div>
        </motion.div>

        {/* Insight 3 Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-elevated cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => router.push("/insight-3/intro")}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-semibold text-earth-800">
                Why You Feel Like a Fraud at Every Dinner Table
              </h3>
              <p className="text-xs text-earth-400 mt-1">
                The Two Birds • Jiva and Atman • Insight #3
              </p>
              <p className="text-sm text-earth-500 mt-2">
                End imposter syndrome by discovering which bird you really are.
              </p>
            </div>
            <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-sage-100 text-sage-500">
              Available
            </span>
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight-3/intro");
              }}
              className="text-xs"
            >
              📖 Introduction (2 min)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight-3/layer-2");
              }}
              className="text-xs"
            >
              🎯 Core Teaching (3 min)
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                router.push("/insight-3/layer-3");
              }}
              className="text-xs"
            >
              📚 Full Wisdom (10 min)
            </Button>
          </div>
        </motion.div>

        {/* Coming Soon Card - Only show if less than 5 insights */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-elevated text-center"
        >
          <h3 className="font-serif font-semibold text-earth-800 mb-2">
            More Insights Coming Soon
          </h3>
          <p className="text-sm text-earth-400">
            We&apos;re preparing more teachings from the Upanishads. Stay tuned.
          </p>
        </motion.div>
      </div>
    </div>
  );
}