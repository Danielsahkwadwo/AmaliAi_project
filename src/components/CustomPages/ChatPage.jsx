import { useState } from "react";
import { MessageList, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import "./styles.css"
import Navbar from "../HomePage/Navbar";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message to the chat
    const userMessage = {
      position: "right",
      type: "text",
      text: inputText,
      date: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");

    // Simulate message loading
    setIsLoading(true);
    setTimeout(() => {
      // Add bot response to the chat (replace this with actual API integration)
      const botMessage = {
        position: "left",
        type: "text",
        text: "This is a simulated response. Please replace this with your ML model's output.",
        date: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-purple-200 flex flex-col">
      <Navbar/>
      {/* Header Section */}
      <div className="bg-pink-500 text-white py-4 px-6 text-center shadow-md ">
        <h1 className="text-2xl font-semibold">Breast Cancer AI Chatbot</h1>
        <p className="text-sm mt-1">
          Ask questions or get advice about breast health.
        </p>
      </div>

      {/* Chat Section */}
      <div className="flex-grow p-6 lg:px-20 py-10">
        <div className="bg-white shadow-lg rounded-lg p-4 lg:p-6">
          {/* Message List */}
          <div className="overflow-y-auto h-96 mb-4 border rounded-lg bg-purple-50 p-4 max-sm:h-[72dvh]">
            <MessageList
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={messages}
            />
            {/* Message Loader */}
            {isLoading && (
              <div className="flex items-center space-x-2 mt-4 loader">
                <div className="w-6 h-6 rounded-full bg-pink-500 animate-bounce"></div>
                <div className="w-6 h-6 rounded-full bg-pink-400 animate-bounce delay-150"></div>
                <div className="w-6 h-6 rounded-full bg-pink-300 animate-bounce delay-300"></div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Type your message..."
              multiline={false}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              rightButtons={
                <button
                  onClick={handleSendMessage}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  Send
                </button>
              }
              inputStyle={{
                borderRadius: "8px",
                padding: "8px",
                border: "1px solid #e5e5e5",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
