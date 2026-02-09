"use client";

import { OnboardingAnswers, PracticeEntry, UserProgress, AppState } from "./types";

const STORAGE_KEYS = {
  ONBOARDING: "upanishads_onboarding",
  VOICE: "upanishads_voice",
  PRACTICE: "upanishads_practice",
  PROGRESS: "upanishads_progress",
} as const;

function getItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setItem(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
}

// Onboarding
export function getOnboardingAnswers(): OnboardingAnswers | null {
  return getItem<OnboardingAnswers | null>(STORAGE_KEYS.ONBOARDING, null);
}

export function saveOnboardingAnswers(answers: OnboardingAnswers): void {
  setItem(STORAGE_KEYS.ONBOARDING, answers);
  updateProgress({ onboardingComplete: true });
}

// Voice
export function getSelectedVoice(): string | null {
  return getItem<string | null>(STORAGE_KEYS.VOICE, null);
}

export function saveSelectedVoice(voiceId: string): void {
  setItem(STORAGE_KEYS.VOICE, voiceId);
  updateProgress({ voiceSelected: voiceId });
}

// Practice
export function getPracticeEntries(): PracticeEntry[] {
  return getItem<PracticeEntry[]>(STORAGE_KEYS.PRACTICE, []);
}

export function savePracticeEntry(entry: Omit<PracticeEntry, "id" | "timestamp">): void {
  const entries = getPracticeEntries();
  const newEntry: PracticeEntry = {
    ...entry,
    id: crypto.randomUUID(),
    timestamp: Date.now(),
  };
  entries.unshift(newEntry);
  setItem(STORAGE_KEYS.PRACTICE, entries);
}

// Progress
export function getProgress(): UserProgress {
  return getItem<UserProgress>(STORAGE_KEYS.PROGRESS, {
    onboardingComplete: false,
    voiceSelected: null,
    layer1Complete: false,
    layer2Complete: false,
    layer3Complete: false,
    currentInsight: 1,
  });
}

export function updateProgress(update: Partial<UserProgress>): void {
  const current = getProgress();
  setItem(STORAGE_KEYS.PROGRESS, { ...current, ...update });
}

// Full state
export function getAppState(): AppState {
  return {
    onboardingAnswers: getOnboardingAnswers(),
    selectedVoice: getSelectedVoice(),
    practiceEntries: getPracticeEntries(),
    progress: getProgress(),
  };
}

export function clearAllData(): void {
  if (typeof window === "undefined") return;
  Object.values(STORAGE_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });
}
