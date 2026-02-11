import { getInsight3IntroContent } from "@/lib/markdown-loader";
import { Insight3IntroClient } from "@/components/Insight3IntroClient";

export default function Insight3IntroPage() {
  const content = getInsight3IntroContent();

  return <Insight3IntroClient content={content} />;
}
