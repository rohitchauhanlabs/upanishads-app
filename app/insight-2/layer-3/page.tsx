import { getInsight2Layer3Content } from "@/lib/markdown-loader";
import { Insight2Layer3Client } from "@/components/Insight2Layer3Client";

export default function Insight2Layer3Page() {
  const content = getInsight2Layer3Content();

  return <Insight2Layer3Client content={content} />;
}
