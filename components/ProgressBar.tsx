"use client";

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
}

export function ProgressBar({ current, total, showLabel = true }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-earth-500 font-medium">
            {current} of {total}
          </span>
          <span className="text-xs text-earth-400">{percentage}%</span>
        </div>
      )}
      <div className="w-full h-1.5 bg-earth-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-earth-400 to-earth-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
