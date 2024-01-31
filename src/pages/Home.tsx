import { useState } from "react";
import Chat from "../components/Chat";
import Layout from "../components/Layout";
import PdfViewer from "../components/PdfViewer";
import { Messages } from "../types";
import { PageProvider } from "../contexts/PageContext";

function Home() {
  const [messages, setMessages] = useState<Messages[]>([])
  return (
    <PageProvider>
      <Layout>
        <div className='overflow-y-auto h-3/6 xl:h-full xl:w-1/2 xl:inset-y-0 '>
          <PdfViewer />
        </div>
        <div className='overflow-y-auto h-3/6 xl:h-full xl:mb-0 xl:w-1/2 xl:inset-y-0 xl:border-r xl:border-gray-200 bg-gray-50'>
          <Chat messages={messages}  setMessages={setMessages} />
        </div>
      </Layout>
    </PageProvider>
  )
}

export default Home;
