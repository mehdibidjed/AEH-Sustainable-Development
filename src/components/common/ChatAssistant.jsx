import React, { useState, useEffect, useRef } from "react";
import { Assets } from "../../assets/Asset";
import { X, Send, Sparkles, Loader2 } from "lucide-react";
import { sendChatbotMessage } from "../../api/assistant"; // Adjust path as needed

const ChatAssistant = ({ isOpen, setIsOpen }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome! How can I help you understand our Federated Learning solutions?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async (e) => {
    e.preventDefault();  
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText.trim();
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInputText("");
    setIsLoading(true);
    setError(null);

    try {
      // Send message to API
      const response = await sendChatbotMessage(userMessage);
      
      // IMPORTANT: Extract the string from the response object
      // Check what your API returns and extract the text properly
      let botResponse = "";
      
      if (typeof response === 'string') {
        // If response is already a string
        botResponse = response;
      } else if (response && typeof response === 'object') {
        // If response is an object, extract the text from the appropriate property
        // Common patterns:
        botResponse = response.reply ||    // If API returns { reply: "text" }
                      response.message ||  // If API returns { message: "text" }
                      response.response || // If API returns { response: "text" }
                      response.text ||     // If API returns { text: "text" }
                      response.content ||  // If API returns { content: "text" }
                      JSON.stringify(response); // Fallback: convert to string
      } else {
        botResponse = "Thank you for your message. Our team will get back to you soon.";
      }
      
      // Add bot response to chat (ensure it's a string)
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: botResponse
      }]);
      
    } catch (error) {
      console.error('Error in chat:', error);
      
      // Add error message to chat
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: error.message || "Sorry, I'm having trouble connecting right now. Please try again later.",
        isError: true
      }]);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-2 sm:right-6 z-[100]">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="relative bg-SecondaryBlue p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-white/20"
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
                  <div className="w-8 h-8 flex-shrink-0">
                    <img src={Assets.Icons.Icon2} alt="AI" className="w-full h-full object-contain" />
                  </div>
                )}

                <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#2E9E8F] text-white rounded-tr-none' 
                  : msg.isError
                    ? 'bg-red-50 border border-red-200 text-red-600 rounded-tl-none shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 flex-shrink-0">
                  <img src={Assets.Icons.Icon2} alt="AI" className="w-full h-full object-contain" />
                </div>
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 className="w-5 h-5 animate-spin text-PrimaryGreen" />
                </div>
              </div>
            )}
            
            {/* Scroll anchor */}
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
                disabled={isLoading}
                className="w-full pl-4 pr-12 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#2E9E8F]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputText.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-PrimaryGreen hover:text-[#2E9E8F] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
            
            {/* Error message */}
            {error && (
              <p className="text-xs text-red-500 mt-2">{error}</p>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;