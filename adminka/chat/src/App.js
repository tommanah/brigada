import React, { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = async () => {
    if (inputText.trim() !== "") {
      const userMessage = {
        // mode: 'no-cors',
        type: "user-message",
        content: inputText.trim(),
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);

      console.log("Sending message:", userMessage);

      try {
        // Отправляем сообщение на сервер
        const response = await fetch(
          "http://80.93.190.50:12060/api/admin/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json", //хз можно ли accept просто захерачить
            },
            body: JSON.stringify(userMessage),
          }
        );


        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Получаем ответ от сервера
        const data = await response.json();

        // Создаем сообщение от бота и добавляем его в состояние
        const botMessage = {
          type: "bot-message",
          content: data.data,
        };

      

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error sending message:", error.message);
      }

      setInputText("");
    }
  };



  return (
    <div className="App">
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.content}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;