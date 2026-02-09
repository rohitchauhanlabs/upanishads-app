"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl sm:text-4xl font-serif font-bold text-earth-900 mt-10 mb-4 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl sm:text-2xl font-serif font-semibold text-earth-900 mt-10 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg sm:text-xl font-serif font-semibold text-earth-800 mt-8 mb-2">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold text-earth-800 mt-6 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-earth-800 leading-relaxed mb-4 last:mb-0">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-earth-900">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-earth-700">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-[3px] border-earth-300 pl-4 py-2 my-6 bg-earth-50/30 rounded-r-lg">
      <div className="italic text-earth-600">{children}</div>
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 my-4 ml-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 my-4 ml-1 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-earth-800 leading-relaxed flex items-start gap-2">
      <span className="text-earth-400 mt-1.5 shrink-0 text-[8px]">●</span>
      <span>{children}</span>
    </li>
  ),
  hr: () => (
    <div className="my-8 flex justify-center">
      <div className="w-16 h-px bg-earth-300" />
    </div>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-earth-600 underline underline-offset-2 hover:text-earth-800 transition-colors"
    >
      {children}
    </a>
  ),
  code: ({ children, className }) => {
    // Inline code vs code blocks
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="block bg-earth-50 rounded-xl p-4 my-4 text-sm text-earth-700 font-mono overflow-x-auto">
          {children}
        </code>
      );
    }
    return (
      <code className="bg-earth-100/60 text-earth-700 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-earth-50 rounded-xl p-4 my-4 overflow-x-auto">
      {children}
    </pre>
  ),
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-earth-400">Content could not be loaded.</p>
        <p className="text-earth-300 text-sm mt-2">
          Please check that the markdown files exist in /content/insights/
        </p>
      </div>
    );
  }

  return (
    <div className="prose-upanishads">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
