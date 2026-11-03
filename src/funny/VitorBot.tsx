import { FormEvent, useEffect, useRef, useState } from "react";

import { botLines } from "./content";

interface Message {
  from: "bot" | "you";
  text: string;
}

export function VitorBot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "hiii i am VitorBot 9000!!! ask me anyting (i wont help)",
    },
  ]);
  const lineIndex = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, typing]);

  const send = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();

    if (!text || typing) return;
    setMessages((m) => [...m, { from: "you", text }]);
    setInput("");
    setTyping(true);
    window.setTimeout(
      () => {
        const reply = botLines[lineIndex.current % botLines.length];

        lineIndex.current += 1;
        setMessages((m) => [...m, { from: "bot", text: reply }]);
        setTyping(false);
      },
      700 + Math.random() * 900,
    );
  };

  if (!open) {
    return (
      <button
        aria-label="Open VitorBot chat"
        className="fn-bot-blob fixed bottom-28 right-5 z-[1100] flex h-20 w-24 cursor-pointer flex-col items-center justify-center text-white md:bottom-24"
        onClick={() => setOpen(true)}
      >
        <span className="text-3xl leading-none">🤖</span>
        <span className="fn-impact text-sm [text-shadow:1px_1px_0_#111]">
          VitorBot
        </span>
        <span className="fn-blink absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-red-600 text-xs font-bold">
          1
        </span>
      </button>
    );
  }

  return (
    <div className="fn-pop fixed bottom-28 right-4 z-[1100] w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border-4 border-black bg-[var(--fn-cream)] shadow-[6px_6px_0_#111] md:bottom-24">
      <div className="flex items-center justify-between bg-[var(--fn-pink)] px-4 py-2 text-white">
        <span className="font-bold">🤖 VitorBot 9000 · 🟢 onlien (probly)</span>
        <button
          aria-label="Close chat"
          className="rounded-full border-2 border-black bg-white px-2 font-bold text-black"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      </div>
      <div ref={listRef} className="h-56 space-y-2 overflow-y-auto p-3 text-sm">
        {messages.map((m, i) => (
          <p
            key={i}
            className={
              m.from === "bot"
                ? "mr-8 rounded-2xl rounded-bl-none border-2 border-black bg-[var(--fn-pink)] px-3 py-2 text-white"
                : "ml-8 rounded-2xl rounded-br-none border-2 border-black bg-white px-3 py-2 text-right"
            }
          >
            {m.text}
          </p>
        ))}
        {typing && (
          <p className="fn-blink text-gray-600">VitorBot is typeing...</p>
        )}
      </div>
      <form className="flex gap-2 border-t-4 border-black p-2" onSubmit={send}>
        <input
          aria-label="Message VitorBot"
          className="min-w-0 flex-1 rounded-full border-2 border-black bg-white px-3 py-1 text-sm"
          placeholder="type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="rounded-full border-2 border-black bg-[var(--fn-pink)] px-3 font-bold text-white"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
