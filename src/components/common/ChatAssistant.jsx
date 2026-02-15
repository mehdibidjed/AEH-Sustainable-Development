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
    
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInputText("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await sendChatbotMessage(userMessage);
      
      let botResponse = "";
      
      if (typeof response === 'string') {
        botResponse = response;
      } else if (response && typeof response === 'object') {
        botResponse = response.reply ||    
                      response.message ||  
                      response.response || 
                      response.text ||     
                      response.content ||  
                      JSON.stringify(response);
      } else {
        botResponse = "Thank you for your message. Our team will get back to you soon.";
      }
      
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: botResponse
      }]);
      
    } catch (error) {
      console.error('Error in chat:', error);
      
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
    <>
      {/* Bouton d'ouverture - toujours visible en bas à droite sur mobile ET desktop */}
      <div className="fixed top-[20%] sm:top-auto  right-2 sm:bottom-6 sm:right-6 z-[100]">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="relative bg-SecondaryBlue p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border border-white/20"
            aria-label="Open chat"
          >
            <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
          </button>
        )}
      </div>

      {/* Fenêtre de chat - indépendante du bouton */}
      {isOpen && (
        <>
          {/* Overlay pour mobile - optionnel, peut être retiré si vous préférez */}
          <div 
            className="fixed inset-0 bg-black/50 z-[150] sm:hidden"
            onClick={toggleChat}
            aria-label="Close chat"
          />
          
          {/* Chat window */}
          <div className={`
            fixed 
            // Sur mobile : plein écran
            inset-4 h-[500px] sm:inset-auto
            // Sur desktop :  standard
            sm:bottom-6 sm:right-6
            sm:w-[400px] md:h-[490px] lg:h-[500px]
            bg-white rounded-2xl shadow-2xl 
            flex flex-col overflow-hidden
            border border-gray-200
            z-[200] animate-in slide-in-from-bottom-5
          `}>
            {/* Header */}
            <div className="bg-PrimaryGreen p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <img src={Assets.Icons.Icon2} alt="Logo" className="w-8 h-8" />
                <span className="font-semibold text-sm">AEH Support</span>
              </div>
              <button 
                onClick={toggleChat} 
                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto bg-gray-50">
              <div className="p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                        <img src={Assets.Icons.Icon2} alt="AI" className="w-full h-full object-contain" />
                      </div>
                    )}

                    <div className={`max-w-[85%] sm:max-w-[75%] p-3 rounded-2xl text-sm break-words ${
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
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
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
        </>
      )}
    </>
  );
};

export default ChatAssistant;