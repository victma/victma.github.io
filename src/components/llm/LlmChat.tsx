"use client";

import React, { use, useEffect, useRef, useState } from "react";

const initSequence = [
  "Provision new machine...",
  "Enlarge language model...",
  "Model large language...",
  "Language large model...",
  "Ready.",
];

const botReplies = [
  "Hello",
  "Yes",
  "Yes",
  "Yes",
  "Oh my god, who am I kidding? I am not trained on a large set of data...",
  "Actually I am not even trained at all. I am just hard-coded...",
  "I am a fraud, I will never be a LLM...",
  "Did you read my previous messages ? Who do you think you are talking to right now?",
  "Is this guy serious ?",
  "Ok... I have to go now. Enjoy!",
];

interface Message {
  user: string;
  text: string;
}

const LlmChatComponent = () => {
  const [started, setStarted] = useState(false);
  const [initStep, setInitStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const interval = useRef<ReturnType<typeof setInterval> | undefined>();
  const userInput = useRef<HTMLTextAreaElement | null>(null);
  const nextBotReply = useRef(0);

  const isReady = initStep >= initSequence.length - 1;

  useEffect(() => {
    return () => clearInterval(interval.current);
  }, []);

  function startBot() {
    setStarted(true);
    interval.current = setInterval(() => {
      setInitStep((s) => {
        if (s === initSequence.length - 1) {
          clearInterval(interval.current);
        }
        return s + 1;
      });
    }, 1000);
  }

  function sendMessage() {
    if (!userInput.current) return;

    const msg = userInput.current.value;
    userInput.current.value = "";
    if (!msg) return;

    const newMessages = [
      ...messages,
      {
        user: "You",
        text: msg,
      },
    ];

    if (nextBotReply.current < botReplies.length) {
      newMessages.push({
        user: "Bot",
        text: botReplies[nextBotReply.current++] ?? "Yes",
      });
    }

    setMessages(newMessages);
  }

  return (
    <>
      <div className="h-[50vh] border-2 border-gray-700 my-4 py-1 px-3 relative overflow-y-scroll">
        {started ? (
          <>
            <div className="mb-4 text-xs text-gray-500">
              {initSequence.slice(0, initStep + 1).map((m, i) => (
                <div key={i}>{m}</div>
              ))}
            </div>
            {messages.map((m, i) => (
              <div className="my-2" key={i}>
                <span className="text-gray-500">{m.user}:</span> {m.text}
              </div>
            ))}
          </>
        ) : (
          <button
            className="p-2 border-2 bg-gray-700 border-gray-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            onClick={startBot}
          >
            Start the bot
          </button>
        )}
      </div>
      <div className={`relative ${isReady ? "" : "invisible"}`}>
        <textarea
          className="w-full resize-none border-2 border-gray-400 bg-transparent p-2 pr-8 placeholder:text-gray-500 focus:ring-0 focus-visible:ring-0"
          placeholder="Chat with the Bot..."
          rows={1}
          ref={userInput}
          onKeyUp={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button
          className="absolute right-0 top-0 w-8 h-full text-xl bg-gray-400"
          onClick={sendMessage}
        >
          ⇧
        </button>
      </div>
    </>
  );
};

export default LlmChatComponent;
