import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatHistory from "./ChatHistory";
import Loading from "./Loading";
import Prompts from "./Prompts";

const ChatbotComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genAI, setGenAI] = useState(null);
  const [model, setModel] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY;
    if (apiKey) {
      const ai = new GoogleGenerativeAI(apiKey);
      setGenAI(ai);
      setModel(ai.getGenerativeModel({ model: "gemini-1.5-flash" }));
    } else {
      console.error("API Key not found in environment variables");
    }
  }, []);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handlePromptSelect = (prompt) => {
    setUserInput(prompt);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "" || !model) return;
    setIsLoading(true);
    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;
      setChatHistory((prev) => [
        ...prev,
        { type: "user", message: userInput },
        { type: "bot", message: response.text() },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prev) => [
        ...prev,
        { type: "user", message: userInput },
        { type: "bot", message: "Sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="flex border rounded-xl ml-5 mr-5 p-3">
      <div className="w-1/4 p-4 bg-gray-500 rounded-3xl">
        <Prompts onPromptSelect={handlePromptSelect} />
      </div>
      <div className="w-3/4 p-4 flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-4 text-white border rounded-2xl">Health Assistant</h2>
        <div className="chat-container rounded-lg shadow-md p-4 flex-grow overflow-auto" ref={chatContainerRef}>
          <ChatHistory chatHistory={chatHistory} />
          <Loading isLoading={isLoading} />
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask about your health..."
            value={userInput}
            onChange={handleUserInput}
          />
          <button
            className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            onClick={sendMessage}
            disabled={isLoading || !model}
          >
            Send
          </button>
        </div>
        <button
          className="mt-4 block px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 focus:outline-none"
          onClick={clearChat}
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default ChatbotComponent;