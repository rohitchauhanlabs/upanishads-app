export interface OnboardingAnswers {
  whatBringsYou: string;
  biggestAnxiety: string;
  whenMostIntense: string;
  whatTriedSoFar: string;
  whatHopeChanges: string;
  lifeDifferent: string;
}

export interface VoiceOption {
  id: string;
  name: string;
  accent: string;
  gender: "male" | "female";
  description: string;
  previewUrl?: string;
}

export interface InsightCard {
  id: number;
  content: string;
  subtext?: string;
  emphasis?: boolean;
}

export interface PracticeEntry {
  id: string;
  date: string;
  description: string;
  choice: "shreya" | "preya";
  timestamp: number;
}

export interface UserProgress {
  onboardingComplete: boolean;
  voiceSelected: string | null;
  layer1Complete: boolean;
  layer2Complete: boolean;
  layer3Complete: boolean;
  currentInsight: number;
}

export interface AppState {
  onboardingAnswers: OnboardingAnswers | null;
  selectedVoice: string | null;
  practiceEntries: PracticeEntry[];
  progress: UserProgress;
}
