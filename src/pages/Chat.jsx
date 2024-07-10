import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Hello! How can I assist you with your skincare routine today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      // Simulate assistant response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "assistant", text: "Thank you for your message. Here's a product recommendation for you." },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4 flex items-center justify-between">
        <img src="/placeholder.svg" alt="Logo" className="mx-auto object-cover w-8 h-8" />
        <h1 className="text-xl font-bold">Skincare Assistant</h1>
      </header>
      <div className="flex-grow p-4 overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-2 rounded ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-100 flex items-center">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow mr-2"
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
};

export default Chat;