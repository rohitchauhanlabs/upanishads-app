import { getInsight2Layer2Content } from "@/lib/markdown-loader";
import { Insight2Layer2Client } from "@/components/Insight2Layer2Client";

export default function Insight2Layer2Page() {
  const content = getInsight2Layer2Content();

  return <Insight2Layer2Client content={content} />;
}
