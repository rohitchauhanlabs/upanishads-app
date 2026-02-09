"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-cream-50 via-cream-100 to-earth-100/30">
      {/* Subtle decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, #D4B896 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Logo / Symbol */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-earth-300 to-earth-500 flex items-center justify-center shadow-sm">
            <span className="text-2xl text-cream-50 font-serif">Om</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl font-serif font-bold text-earth-900 leading-tight"
        >
          Upanishadic
          <br />
          <span className="text-gradient">Wisdom</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg text-earth-500 leading-relaxed"
        >
          Ancient wisdom for modern anxiety.
          <br />
          <span className="text-earth-400">
            A journey through the Katha Upanishad.
          </span>
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 w-16 h-px bg-earth-300 mx-auto"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 text-sm text-earth-400 leading-relaxed max-w-sm mx-auto"
        >
          Explore teachings that have guided seekers for over 3,000 years —
          now delivered in a way that speaks to your life today.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10"
        >
          <Button
            size="lg"
            onClick={() => router.push("/onboarding")}
            className="px-10 py-4 text-base rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Start Your Journey
          </Button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 text-xs text-earth-300"
        >
          5 minutes · No account needed · Free
        </motion.p>
      </div>
    </div>
  );
}
