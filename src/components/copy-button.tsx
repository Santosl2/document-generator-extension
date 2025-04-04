import { Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text }: { text?: string }) {
  const [isCopied, setIsCopied] = useState<boolean>();

  const handleCopy = async () => {
    try {
      if (!navigator?.clipboard || !text) {
        console.warn("Clipboard not supported");
        throw new Error("Clipboard not supported");
      }

      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.warn("Copy failed", error);
      setIsCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Copy size={16} onClick={handleCopy} />
      {isCopied && <span className="text-sm text-gray-500">Texto copiado</span>}
    </div>
  );
}
