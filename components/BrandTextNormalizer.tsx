"use client";

import { useEffect, useLayoutEffect } from "react";

const REPLACEMENTS: [RegExp, string][] = [
  [/Farm\s+Funders/gi, "Farm Funding"],
  [/Farm\s+Fundy/gi, "Farm Funding"],
  [/Farm\s+Credit\s+East/gi, "Farm Funding"],
];

function normalizeTextNode(node: Text) {
  let value = node.nodeValue ?? "";
  for (const [pattern, replacement] of REPLACEMENTS) {
    value = value.replace(pattern, replacement);
  }
  if (value !== node.nodeValue) node.nodeValue = value;
}

function normalize(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) nodes.push(node as Text);
  nodes.forEach(normalizeTextNode);
}

export default function BrandTextNormalizer() {
  const normalizeBody = () => {
    if (typeof document !== "undefined" && document.body) normalize(document.body);
  };

  // Run before the browser paints after hydration so legacy branding does not
  // remain visible while the normal client effect is waiting to run.
  useLayoutEffect(() => {
    normalizeBody();
  }, []);

  useEffect(() => {
    normalizeBody();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) normalizeTextNode(node as Text);
          else if (node.nodeType === Node.ELEMENT_NODE) normalize(node);
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
