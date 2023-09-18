import { useState, useCallback } from "react";

function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback((text) => {
    if (!text) return;

    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      },
      (error) => {
        console.error("Failed to copy: ", error);
      }
    );
  }, []);

  const pasteFromClipboard = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (error) {
      console.error("Failed to paste: ", error);
      return "";
    }
  }, []);

  return { copied, copyToClipboard, pasteFromClipboard };
}

export default useClipboard;
