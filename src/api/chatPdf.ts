const chatPDFURL = "https://prosper-conversations-beta.onrender.com/assistant/ask_question"
export const fetchChatPDF = async(question: string) => {
  const chatPDFBody = {
    question
  }

const chatPDFResponse = await fetch(chatPDFURL,{
  method: "POST",
  headers:{
    "accept": "application/json",
    "Content-Type": "application/json",
    "X-Api-Key" : "test-challenge",
    "X-Organization": "test",
  },
  body: JSON.stringify(chatPDFBody)
})

return chatPDFResponse.json()
}