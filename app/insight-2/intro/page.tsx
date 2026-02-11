import { getInsight2IntroContent } from "@/lib/markdown-loader";
import { Insight2IntroClient } from "@/components/Insight2IntroClient";

export default function Insight2IntroPage() {
  const content = getInsight2IntroContent();

  return <Insight2IntroClient content={content} />;
}
