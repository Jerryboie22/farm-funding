"use client";

import { useEffect } from "react";

const REPLACEMENTS: [RegExp, string][] = [
  [/Farm Funders/g, "Farm Funding"],
  [/Farm Fundy/g, "Farm Funding"],
  [/Farm Credit East/g, "Farm Funding"],
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
  useEffect(() => {
    normalize(document.body);

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
