import { useState } from "react";

export default function EmailButton() {
  const [copied, setCopied] = useState("");
  const email = " Your Email address";
  return (
    <button className="relative py-2 font-extralight px-4 text-sm cursor-pointer rounded-full bg-primary text-center overflow-hidden">
      <p className="flex items-center justify-center gap-2">
        <img src="assets/copy.svg" className="w-5" alt="copy icon" />
        Copy Email Addresss
      </p>
    </button>
  );
}
