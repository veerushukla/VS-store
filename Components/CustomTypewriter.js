import React, { useState, useEffect } from 'react';

export default function CustomTypewriter({ text, speed = 400, cursor = true, cursorStyle = '|' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsDone(true);
    }
  }, [index, text, speed]);

  return (
    <span className="font-mono text-cyan-400 whitespace-pre-wrap text-lg max-w-4xl">
      {displayedText}
      {cursor && !isDone && <span className="animate-blink">{cursorStyle}</span>}
    </span>
  );
}
