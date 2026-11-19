import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied");
    } catch {
      setStatus("Copy unavailable. Select and copy the text manually.");
    }
  }
  return <div className="guide-copy"><button onClick={copy}><MdContentCopy aria-hidden />{label}</button><span role="status">{status}</span></div>;
}

