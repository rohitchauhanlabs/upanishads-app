import { getInsight3Layer2Content } from "@/lib/markdown-loader";
import { Insight3Layer2Client } from "@/components/Insight3Layer2Client";

export default function Insight3Layer2Page() {
  const content = getInsight3Layer2Content();

  return <Insight3Layer2Client content={content} />;
}
