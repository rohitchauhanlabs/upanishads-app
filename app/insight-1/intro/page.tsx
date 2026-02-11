import { getInsight1IntroContent } from "@/lib/markdown-loader";
import { Insight1IntroClient } from "@/components/Insight1IntroClient";

export default function Insight1IntroPage() {
  const content = getInsight1IntroContent();

  return <Insight1IntroClient content={content} />;
}
