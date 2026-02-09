"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ProgressBar } from "@/components/ProgressBar";
import { ONBOARDING_QUESTIONS } from "@/lib/constants";
import { saveOnboardingAnswers } from "@/lib/storage";
import { OnboardingAnswers } from "@/lib/types";

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1);

  const question = ONBOARDING_QUESTIONS[currentStep];
  const isLastStep = currentStep === ONBOARDING_QUESTIONS.length - 1;
  const currentAnswer = answers[question.id] || "";

  const handleNext = () => {
    if (isLastStep) {
      const onboardingAnswers: OnboardingAnswers = {
        whatBringsYou: answers["whatBringsYou"] || "",
        biggestAnxiety: answers["biggestAnxiety"] || "",
        whenMostIntense: answers["whenMostIntense"] || "",
        whatTriedSoFar: answers["whatTriedSoFar"] || "",
        whatHopeChanges: answers["whatHopeChanges"] || "",
        lifeDifferent: answers["lifeDifferent"] || "",
      };
      saveOnboardingAnswers(onboardingAnswers);
      router.push("/voice-selection");
    } else {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream-50 to-cream-100">
      {/* Header */}
      <div className="w-full max-w-lg mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBack}
            className={`text-sm text-earth-400 hover:text-earth-600 transition-colors ${
              currentStep === 0 ? "invisible" : ""
            }`}
          >
            ← Back
          </button>
          <span className="text-xs text-earth-400 font-medium">
            {currentStep + 1} / {ONBOARDING_QUESTIONS.length}
          </span>
        </div>
        <ProgressBar
          current={currentStep + 1}
          total={ONBOARDING_QUESTIONS.length}
          showLabel={false}
        />
      </div>

      {/* Question Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-earth-900 leading-snug">
                {question.question}
              </h2>
              <Textarea
                value={currentAnswer}
                onChange={(e) => handleAnswerChange(e.target.value)}
                placeholder={question.placeholder}
                className="min-h-[140px] text-base"
                autoFocus
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-lg mx-auto px-4 py-8">
        <div className="flex gap-3">
          {!isLastStep && (
            <Button
              variant="ghost"
              onClick={handleNext}
              className="text-earth-400"
            >
              Skip
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="flex-1"
            disabled={!currentAnswer.trim() && isLastStep}
          >
            {isLastStep ? "Continue" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
