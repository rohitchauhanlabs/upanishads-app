import { getLayer3Content } from "@/lib/markdown-loader";
import { Layer3Client } from "@/components/Layer3Client";

export default function Layer3Page() {
  const content = getLayer3Content();

  return <Layer3Client content={content} />;
}
