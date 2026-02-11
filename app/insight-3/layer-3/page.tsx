import { getInsight3Layer3Content } from "@/lib/markdown-loader";
import { Insight3Layer3Client } from "@/components/Insight3Layer3Client";

export default function Insight3Layer3Page() {
  const content = getInsight3Layer3Content();

  return <Insight3Layer3Client content={content} />;
}
