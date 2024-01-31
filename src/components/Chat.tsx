import { Dispatch, SetStateAction, KeyboardEvent, useState, useRef } from "react";
import { Messages, SenderType } from "../types";
import MessageWrapper from "./MessageWrapper";

interface ChatProps {
  messages: Messages[];
  setMessages: Dispatch<SetStateAction<Messages[]>>
}

const scrollbarStyle = {
  scrollbarColor: '#6b7280 #334155'
}

const Chat = ({messages, setMessages}: ChatProps) => {

  const [messageValue, setMessageValue] = useState<string>('')
  const messageTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleOnChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessageValue(event.target.value)
  const hadleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setMessages((prevValue) => [...prevValue, {type: SenderType.USER, content: messageValue}])
      setMessageValue('')
    }
  }
  const onButtonSend = () => {
    setMessages((prevValue) => [...prevValue, {type: SenderType.USER, content: messageValue}])
    setMessageValue('')
    if (messageTextAreaRef.current) {
      messageTextAreaRef.current.focus();
    }
  }

  return (
    <div className="w-full h-full bg-slate-700 overflow-x-hidden" style={scrollbarStyle}>
      <div className="w-full h-[85%] xl:h-[90%] overflow-x-hidden" style={scrollbarStyle}>
        <div className="p-5 h-full text-white flex flex-col">
          {messages.length > 0 ? (messages?.map((message: Messages, key: number) => {
            return(
              <MessageWrapper key={key} type={message.type} content={message.content}></MessageWrapper>
            )
          })): ''}
        </div>
      </div>
      <div className="w-full h-[15%] xl:h-[10%] flex justify-center">
        <div className="h-12 flex flex-row items-center w-full max-w-3xl ml-5 mr-5 border rounded-lg border-gray-500">
          <textarea
            className="h-10 w-full p-2 resize-none text-white overflow-x-hidden outline-none bg-slate-700 rounded-lg"
            placeholder="Chat with your PDF"
            onChange={handleOnChangeMessage}
            onKeyDown={hadleKeyDown}
            ref={messageTextAreaRef}
            value={messageValue}
          />
          <button
            className=" m-2 flex justify-center items-center bg-gray-500 h-9 w-9 rounded-lg"
            onClick={() => onButtonSend()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="bg-transparent"
            >
              <path
                d="M7 11L12 6L17 11M12 18V7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat;