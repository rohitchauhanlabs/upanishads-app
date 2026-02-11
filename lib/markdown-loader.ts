import fs from "fs";
import path from "path";
import { InsightCard } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

/**
 * Safely read a markdown file. Returns empty string on failure.
 */
function readMarkdownFile(filename: string): string {
  try {
    const filePath = path.join(CONTENT_DIR, filename);
    return fs.readFileSync(filePath, "utf-8");
  } catch (e) {
    console.error(`Failed to read markdown file: ${filename}`, e);
    return "";
  }
}

/**
 * Parse Layer 1 markdown into InsightCard[].
 *
 * The file uses this format:
 *   ### **CARD N**
 *   ```
 *   Card text here
 *   ```
 *
 * We extract the text inside each code block, strip navigation markers
 * like [→] and [Swipe to continue →], then split into content + subtext.
 */
export function getLayer1Cards(): InsightCard[] {
  const raw = readMarkdownFile("insight-1-layer-1.md");
  if (!raw) return [];

  const cards: InsightCard[] = [];

  // Split on CARD headers
  const cardSections = raw.split(/### \*\*CARD \d+\*\*/);

  for (let i = 1; i < cardSections.length; i++) {
    const section = cardSections[i];

    // Extract text from the first code block in this section
    const codeBlockMatch = section.match(/```\n([\s\S]*?)```/);
    if (!codeBlockMatch) continue;

    let blockText = codeBlockMatch[1].trim();

    // Strip navigation markers
    blockText = blockText
      .replace(/\[Swipe to continue →\]/g, "")
      .replace(/\[Continue to Full Insight\]/g, "")
      .replace(/\[→\]/g, "")
      .trim();

    // Split into lines, filter empty
    const lines = blockText
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    if (lines.length === 0) continue;

    // First line (or first meaningful chunk) is the main content.
    // Remaining lines become subtext.
    const content = lines[0];
    const subtext = lines.length > 1 ? lines.slice(1).join("\n") : undefined;

    // Card 4 (SHREYA vs. PREYA) is emphasized
    const emphasis = content.includes("SHREYA") && content.includes("PREYA");

    cards.push({
      id: i,
      content,
      subtext,
      emphasis,
    });
  }

  return cards;
}

/**
 * Get Layer 2 markdown content.
 * Strips the file header/metadata and the trailing "Technical Implementation" section
 * so only the reader-facing article content is returned.
 */
export function getLayer2Content(): string {
  const raw = readMarkdownFile("insight-1-layer-2.md");
  if (!raw) return "";

  // Remove the top metadata block (everything before the first "---" separated content section)
  // The file starts with a title block, then "---", then the real content starts with "## The Choice..."
  let content = raw;

  // Find the start of real content: the first "## " heading after the intro metadata
  const firstSectionMatch = content.match(/\n(## The Choice You're Missing)/);
  if (firstSectionMatch && firstSectionMatch.index !== undefined) {
    content = content.substring(firstSectionMatch.index).trim();
  }

  // Cut off before "## **Technical Implementation:**" and everything after
  const techImplIndex = content.indexOf("## **Technical Implementation:");
  if (techImplIndex !== -1) {
    content = content.substring(0, techImplIndex).trim();
  }

  // Also strip the ASCII-art button boxes (┌─...─┐ blocks) — we have real buttons
  content = content.replace(/┌[\s\S]*?┘/g, "").trim();

  // Remove trailing metadata (word count, reading time, key outcome)
  const wordCountIndex = content.indexOf("**Word count:**");
  if (wordCountIndex !== -1) {
    content = content.substring(0, wordCountIndex).trim();
  }

  // Strip the "Your Next Step" section since we have real buttons for that
  const nextStepIndex = content.indexOf("## Your Next Step");
  if (nextStepIndex !== -1) {
    content = content.substring(0, nextStepIndex).trim();
  }

  // Clean up any trailing "---"
  content = content.replace(/\n---\s*$/, "").trim();

  return content;
}

/**
 * Get Layer 3 markdown content — the full insight article.
 * This is already clean reader-facing content, so minimal trimming needed.
 */
export function getLayer3Content(): string {
  const raw = readMarkdownFile("insight-1-layer-3.md");
  if (!raw) return "";

  return raw.trim();
}

// ─────────────────────────────────────────────────────────
// INSIGHT #2: The Witness Self
// ─────────────────────────────────────────────────────────

/**
 * Get Insight 2 intro content — single-page format (not cards).
 * Returns the full markdown as-is since it's already clean user-facing content.
 */
export function getInsight2IntroContent(): string {
  const raw = readMarkdownFile("insight-2-intro.md");
  if (!raw) return "";

  return raw.trim();
}

/**
 * Get Insight 2 Layer 2 markdown content.
 * Strips metadata and technical sections, keeping only reader-facing content.
 */
export function getInsight2Layer2Content(): string {
  const raw = readMarkdownFile("insight-2-layer-2.md");
  if (!raw) return "";

  let content = raw;

  // Find the start of real content
  const firstSectionMatch = content.match(/\n(## The Storm Inside)/);
  if (firstSectionMatch && firstSectionMatch.index !== undefined) {
    content = content.substring(firstSectionMatch.index).trim();
  }

  // Cut off before Technical Implementation
  const techImplIndex = content.indexOf("## **Technical Implementation");
  if (techImplIndex !== -1) {
    content = content.substring(0, techImplIndex).trim();
  }

  // Strip ASCII-art button boxes
  content = content.replace(/┌[\s\S]*?┘/g, "").trim();

  // Remove trailing metadata
  const wordCountIndex = content.indexOf("**Word count:**");
  if (wordCountIndex !== -1) {
    content = content.substring(0, wordCountIndex).trim();
  }

  // Strip "Your Move" section (we have real buttons)
  const yourMoveIndex = content.indexOf("## Your Move");
  if (yourMoveIndex !== -1) {
    content = content.substring(0, yourMoveIndex).trim();
  }

  // Clean up trailing "---"
  content = content.replace(/\n---\s*$/, "").trim();

  return content;
}

/**
 * Get Insight 2 Layer 3 markdown content — full wisdom article.
 */
export function getInsight2Layer3Content(): string {
  const raw = readMarkdownFile("insight-2-layer-3.md");
  if (!raw) return "";

  return raw.trim();
}

// ─────────────────────────────────────────────────────────
// INSIGHT #3: The Two Birds
// ─────────────────────────────────────────────────────────

/**
 * Get Insight 3 intro content — single-page format (not cards).
 * Returns the full markdown as-is since it's already clean user-facing content.
 */
export function getInsight3IntroContent(): string {
  const raw = readMarkdownFile("insight-3-intro.md");
  if (!raw) return "";

  return raw.trim();
}

/**
 * Get Insight 3 Layer 2 markdown content.
 * Already clean user-facing content, minimal stripping needed.
 */
export function getInsight3Layer2Content(): string {
  const raw = readMarkdownFile("insight-3-layer-2.md");
  if (!raw) return "";

  let content = raw;

  // Find the start of real content
  const firstSectionMatch = content.match(/\n(## The Dinner Party)/);
  if (firstSectionMatch && firstSectionMatch.index !== undefined) {
    content = content.substring(firstSectionMatch.index).trim();
  }

  // Strip "Your Move" section (we have real buttons)
  const yourMoveIndex = content.indexOf("## Your Move");
  if (yourMoveIndex !== -1) {
    content = content.substring(0, yourMoveIndex).trim();
  }

  // Clean up trailing "---"
  content = content.replace(/\n---\s*$/, "").trim();

  return content;
}

/**
 * Get Insight 3 Layer 3 markdown content — full wisdom article.
 */
export function getInsight3Layer3Content(): string {
  const raw = readMarkdownFile("insight-3-layer-3.md");
  if (!raw) return "";

  return raw.trim();
}
