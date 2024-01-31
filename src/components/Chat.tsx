const scrollbarStyle = {
  scrollbarColor: '#6b7280 #334155'
}

const Chat = () => {
  return (
    <div className="w-full h-full bg-slate-700 overflow-x-hidden" style={scrollbarStyle}>
      <div className="w-full h-[85%] xl:h-[90%] overflow-x-hidden" style={scrollbarStyle}>
        <div className="p-5 h-full text-white"></div>
      </div>
      <div className="w-full h-[15%] xl:h-[10%] flex justify-center">
        <div className="h-12 flex flex-row items-center w-full max-w-3xl ml-5 mr-5 border rounded-lg border-gray-500">
          <textarea
            className="h-10 w-full p-2 resize-none text-white overflow-x-hidden outline-none bg-slate-700 rounded-lg"
            placeholder="Chat with your PDF"
          />
          <button className=" m-2 flex justify-center items-center bg-gray-500 h-9 w-9 rounded-lg">
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