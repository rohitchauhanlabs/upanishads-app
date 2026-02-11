"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/AudioPlayer";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { BackButton } from "@/components/BackButton";

interface Insight2IntroClientProps {
  content: string;
}

export function Insight2IntroClient({ content }: Insight2IntroClientProps) {
  const router = useRouter();

  const handleBegin = () => {
    router.push("/insight-2/layer-2");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Header */}
      <div className="w-full max-w-2xl mx-auto px-4 pt-8 pb-4 space-y-2">
        <BackButton href="/insights" label="Back" />
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-earth-400 font-medium"
          >
            Insight 2 · Intro
          </motion.span>
          <AudioPlayer label="Listen" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Markdown article */}
          <div className="card-elevated">
            <MarkdownRenderer content={content} />
          </div>
        </motion.div>
      </div>

      {/* Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-cream-50 via-cream-50 to-transparent pt-8 pb-8 px-4">
        <div className="w-full max-w-2xl mx-auto">
          <Button onClick={handleBegin} className="w-full" size="lg">
            Begin This Teaching →
          </Button>
        </div>
      </div>
    </div>
  );
}
