import React, { useState } from "react";
import useClipboard from "../../hooks/useClipboard";
import Button from "../../components/button";

function CopyToClipboard() {
  const [textToCopy, setTextToCopy] = useState("");
  const { copied, copyToClipboard, pasteFromClipboard } = useClipboard();

  const handleCopy = () => {
    copyToClipboard(textToCopy);
  };

  const handlePaste = async () => {
    const pastedText = await pasteFromClipboard();
    console.log(textToCopy);
    setTextToCopy(...textToCopy, pastedText);
    console.log("Pasted text:", pastedText);
  };

  return (
    <div className="container">
      <h1>CopyToClipboard Example</h1>
      <input
        type="text"
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
      />
      <Button onClick={handleCopy}>Copy to Clipboard</Button>
      <Button onClick={handlePaste}>Paste from Clipboard</Button>
      {copied && <p>Copied to clipboard!</p>}
    </div>
  );
}

export default CopyToClipboard;
