import React, { useState, useEffect, useRef } from "react"; // Added useRef and useEffect
import { Assets } from "../../assets/Asset";
import { X, Send, Sparkles } from "lucide-react";

const ChatAssistant = ({ isOpen, setIsOpen }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome! How can I help you understand our Federated Learning solutions?" }
  ]);

  // 1. Create the reference for the bottom of the chat
  const messagesEndRef = useRef(null);

  // 2. Function to scroll to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 3. Trigger scroll every time messages change or chat opens
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const newMessages = [...messages, { role: "user", content: inputText }];
    setMessages(newMessages);
    setInputText("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Our Federated Learning approach ensures that your raw data never leaves its source. We only move the model gradients!" 
      }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-2 sm:right-6 z-[100]">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="relative bg-SecondaryBlue p-4  rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-white/20"
        >
          <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-PrimaryGreen p-4 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-3">
              <img src={Assets.Icons.Icon2} alt="Logo" className="w-8 h-8" />
              <span className="font-semibold text-sm">AEH Support</span>
            </div>
            <button onClick={toggleChat} className="hover:bg-white/10 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 flex-shrink-0  ">
                    <img src={Assets.Icons.Icon2} alt="AI" className="w-full h-full object-contain" />
                  </div>
                )}

                <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#2E9E8F] text-white rounded-tr-none' 
                  : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {/* 4. This empty div is the target for auto-scrolling */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white shrink-0">
            <div className="relative">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question here..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9E8F]/50"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-PrimaryGreen hover:text-[#2E9E8F]">
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;