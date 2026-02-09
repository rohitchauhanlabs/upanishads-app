import { getLayer1Cards } from "@/lib/markdown-loader";
import { Layer1Client } from "@/components/Layer1Client";

export default function Layer1Page() {
  const cards = getLayer1Cards();

  return <Layer1Client cards={cards} />;
}
