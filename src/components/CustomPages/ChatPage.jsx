import { useState } from "react";
import { MessageList, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import ReactMarkdown from "react-markdown";
import "./styles.css";
import Navbar from "../HomePage/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import useRedirect from "../../CustomHooks/useRedirect";
import Disclaimer from "../Reusable/Disclaimer";

function ChatPage() {
  useRedirect("/login");
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    let response;
    setIsLoading(true);
    try {
      const res = await axios({
        url: "https://ai-api.amalitech.org/api/v1/public/chat",
        method: "POST",
        headers: { "X-Api-Key": "ZEXeGOk5_kMel9l7EzrWblpzbHM2P5FZ" },
        data: {
          prompt: `as a breast cancer specialist, provide answer for this prompt: ${inputText}`,
          modelId: "a58c89f1-f8b6-45dc-9727-d22442c99bc3",
          stream: false,
        },
      });
      if (res.data) {
        // console.log(res.data.data);
        response = res.data.data.content;
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      return toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }

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
    const botMessage = {
      position: "left",
      type: "text",
      text: response,
      date: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const preprocessMessages = (messages) =>
    messages.map((message) => ({
      ...message,
      text: <ReactMarkdown className="markdown">{message.text}</ReactMarkdown>,
    }));

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-purple-200 flex flex-col">
      <Navbar />
      {/* Header Section */}
      <div className="bg-pink-500 text-white py-4 px-6 text-center shadow-md max-md:mt-20">
        <h1 className="text-2xl font-semibold"> AI Chatbot</h1>
        <p className="text-sm mt-1">
          Ask questions or get advice about breast health.
        </p>
      </div>

      {/* Chat Section */}
      <div className="flex-grow p-6 lg:px-20 py-10 max-sm:px-4">
        <div className="bg-white shadow-lg rounded-lg p-4 lg:p-6">
          {/* Message List */}
          <div className="overflow-y-auto h-96 mb-4 border rounded-lg bg-purple-50 p-4 px-2 max-sm:h-[72dvh]">
            <MessageList
              className="message-list"
              lockable={true}
              toBottomHeight={"100%"}
              dataSource={preprocessMessages(messages)}
            />
            {/* Message Loader */}
            {isLoading && (
              <div className="flex items-center space-x-2 mt-4 loader">
                <div className="w-6 h-6 max-sm:w-3 max-sm:h-3 rounded-full bg-pink-500 animate-bounce"></div>
                <div className="w-6 h-6 max-sm:w-3 max-sm:h-3 rounded-full bg-pink-400 animate-bounce delay-150"></div>
                <div className="w-6 h-6 max-sm:w-3 max-sm:h-3 rounded-full bg-pink-300 animate-bounce delay-300"></div>
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
        <div className="mt-5 text-center font-semibold capitalize">
          powered by Amali-Ai
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
