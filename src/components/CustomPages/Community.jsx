import React, { useState, useEffect } from "react";
import { MessageList, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { AiOutlineSearch, AiOutlineSend } from "react-icons/ai";
import ReactMarkdown from "react-markdown";
import EmojiPicker from "emoji-picker-react";
import Navbar from "../HomePage/Navbar";
import io from "socket.io-client";
import useRedirect from "../../CustomHooks/useRedirect";

const socket = io("http://localhost:4000");

function Community() {
  useRedirect("/login");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [activeUsers, setActiveUsers] = useState([
    "Amali",
    "James",
    "Sophia",
    "Elena",
    "Amali",
    "James",
    "Sophia",
    "Elena",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(activeUsers);
  const [showEmojis, setShowEmojis] = useState(false);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("chatMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("chatMessage");
  }, []);

  useEffect(() => {
    setFilteredUsers(
      activeUsers.filter((user) =>
        user.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        position: "right",
        type: "text",
        text: input,
        sender: "You",
        date: new Date(),
      };

      // Send message via Socket.IO
      socket.emit("sendMessage", newMessage);

      setMessages((prev) => [...prev, newMessage]);
      setInput("");

      if (input.includes("@amali")) {
        // Simulate AI Response
        setTimeout(() => {
          const aiMessage = {
            position: "left",
            type: "text",
            text: "**Amali's Response:** Here's my answer to your query.",
            sender: "Amali",
            date: new Date(),
          };

          setMessages((prev) => [...prev, aiMessage]);
        }, 2000);
      }
    }
  };

  const handleEmojiSelect = (emojiObject) => {
    setInput((prev) => prev + emojiObject.emoji);
    setShowEmojis(false);
  };

  return (
    <div>
      <Navbar />
      <div className="max-md:pt-20 flex flex-col lg:flex-row w-full h-screen bg-pink-100">
        {/* Active Users Section */}
        <div className="lg:w-1/4 w-full bg-pink-200 p-4 overflow-auto">
          <div className="hidden lg:flex items-center mb-4">
            <input
              type="text"
              placeholder="Search users..."
              className="p-2 rounded-md border w-full focus:outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AiOutlineSearch className="text-xl ml-2 text-pink-600" />
          </div>
          <div className="flex lg:flex-col lg:space-y-3 space-x-3 lg:space-x-0 overflow-x-auto">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="flex items-center lg:p-2 lg:bg-pink-300 lg:rounded-md text-pink-600 lg:font-semibold"
                title={user}
              >
                <div
                  className={`${
                    window.innerWidth < 768
                      ? "w-12 h-12 bg-pink-400 text-white"
                      : ""
                  } rounded-full flex items-center justify-center font-bold`}
                >
                  {window.innerWidth < 768
                    ? user.substring(0, 2).toUpperCase()
                    : user}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="lg:w-3/4 w-full flex flex-col h-full bg-white">
          {/* Message List */}
          <div className="flex-grow p-4 overflow-auto">
            <MessageList
              className="message-list"
              lockable={true}
              dataSource={messages.map((msg) => ({
                position: msg.position,
                type: msg.type,
                text: <ReactMarkdown>{msg.text}</ReactMarkdown>,
                title: msg.sender,
                dateString: msg.date.toLocaleString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              }))}
            />
          </div>

          {/* Input Section */}
          <div className="flex items-center p-4 border-t bg-pink-200 relative">
            <button
              className="p-2 bg-pink-400 text-white rounded-md mr-2"
              onClick={() => setShowEmojis(!showEmojis)}
            >
              😀
            </button>
            {showEmojis && (
              <div className="absolute bottom-20 z-10">
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </div>
            )}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 rounded-md border focus:outline-none"
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="p-2 bg-pink-600 text-white rounded-md ml-2 flex items-center"
              onClick={handleSend}
            >
              <AiOutlineSend />
            </button>
          </div>
        </div>
      </div>
      {/* <AppLoader/> */}
    </div>
  );
}

export default Community;
