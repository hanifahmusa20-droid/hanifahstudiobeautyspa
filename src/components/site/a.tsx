"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * Plain anchor for hash based routes (e.g. #/about).
 * Native anchors keep the URL hash in sync and fire hashchange,
 * which Next's Link intercepts with pushState (no hashchange event).
 */
type AProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function A({ children, ...rest }: AProps) {
  return <a {...rest}>{children}</a>;
}
