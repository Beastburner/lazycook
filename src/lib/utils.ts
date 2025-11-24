import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Copy text to clipboard with fallback for older browsers.
 * Returns a Promise that resolves to true on success, false on failure.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback: create a temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    // Move it off-screen
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    const successful = document.execCommand && document.execCommand('copy');
    document.body.removeChild(textarea);
    return !!successful;
  } catch (e) {
    return false;
  }
}

/**
 * Simple hook for components that need copy + temporary feedback state.
 * Usage:
 * const { copy, copied, clear } = useCopyToClipboard(2000);
 * copy('some text');
 */
import { useState, useRef, useCallback } from 'react';

export function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  const clear = useCallback(() => {
    setCopied(false);
    if (timer.current) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const copy = useCallback(async (text: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), timeout);
    }
    return ok;
  }, [timeout]);

  return { copy, copied, clear } as const;
}
