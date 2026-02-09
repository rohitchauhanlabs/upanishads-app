import { VoiceOption, InsightCard } from "./types";

export const ONBOARDING_QUESTIONS = [
  {
    id: "whatBringsYou",
    question: "What brings you here today?",
    placeholder: "I've been feeling...",
  },
  {
    id: "biggestAnxiety",
    question: "What's your biggest source of anxiety right now?",
    placeholder: "The thing that weighs on me most is...",
  },
  {
    id: "whenMostIntense",
    question: "When does this anxiety feel most intense?",
    placeholder: "It hits hardest when...",
  },
  {
    id: "whatTriedSoFar",
    question: "What have you tried so far?",
    placeholder: "I've tried...",
  },
  {
    id: "whatHopeChanges",
    question: "What do you hope will change?",
    placeholder: "I want to feel...",
  },
  {
    id: "lifeDifferent",
    question: "How would your life be different without this anxiety?",
    placeholder: "Without this anxiety, I would...",
  },
] as const;

export const VOICE_OPTIONS: VoiceOption[] = [
  {
    id: "american-male",
    name: "James",
    accent: "American",
    gender: "male",
    description: "Warm, calm American male voice",
  },
  {
    id: "american-female",
    name: "Sarah",
    accent: "American",
    gender: "female",
    description: "Soothing, gentle American female voice",
  },
  {
    id: "british-male",
    name: "Oliver",
    accent: "British",
    gender: "male",
    description: "Composed, thoughtful British male voice",
  },
  {
    id: "british-female",
    name: "Emma",
    accent: "British",
    gender: "female",
    description: "Warm, reassuring British female voice",
  },
  {
    id: "indian-male",
    name: "Arjun",
    accent: "Indian",
    gender: "male",
    description: "Deep, grounding Indian male voice",
  },
  {
    id: "indian-female",
    name: "Priya",
    accent: "Indian",
    gender: "female",
    description: "Serene, melodic Indian female voice",
  },
];

export const LAYER1_CARDS: InsightCard[] = [
  {
    id: 1,
    content: "You made this choice today.",
    subtext: "To be here. To look inward. That matters.",
  },
  {
    id: 2,
    content: "At 2 AM, scrolling instead of sleeping...",
    subtext: "You know the feeling. The pull toward what's easy. The regret that follows.",
  },
  {
    id: 3,
    content: "This wasn't random. It was a choice between two paths.",
    subtext: "One path feels good now. The other feels right later.",
  },
  {
    id: 4,
    content: "SHREYA vs. PREYA",
    subtext: "3,000 years ago, the Katha Upanishad named these two paths. Shreya: the good. Preya: the pleasant.",
    emphasis: true,
  },
  {
    id: 5,
    content: "Every time you choose the pleasant, your anxiety compounds.",
    subtext: "The scroll. The snack. The avoidance. Each one a tiny deposit in the anxiety bank.",
  },
  {
    id: 6,
    content: "You've been choosing wrong your whole life.",
    subtext: "Not wrong as in broken. Wrong as in asleep. You didn't know there was a name for it.",
  },
  {
    id: 7,
    content: "There's a 3,000-year-old solution. Want to learn it?",
    subtext: "The sages didn't just name the problem. They found the way through.",
  },
];

export const APP_CONFIG = {
  appName: "Upanishadic Wisdom",
  tagline: "Ancient wisdom for modern anxiety",
  totalInsights: 1,
  layersPerInsight: 3,
} as const;
