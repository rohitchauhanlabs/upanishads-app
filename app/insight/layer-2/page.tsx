import { getLayer2Content } from "@/lib/markdown-loader";
import { Layer2Client } from "@/components/Layer2Client";

export default function Layer2Page() {
  const content = getLayer2Content();

  return <Layer2Client content={content} />;
}
