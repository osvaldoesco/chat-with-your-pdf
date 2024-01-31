import Chat from "../components/Chat";
import Layout from "../components/Layout";
import PdfViewer from "../components/PdfViewer";

function Home() {

  return (
      <Layout>
        <div className='overflow-y-auto h-3/6 xl:h-full xl:w-1/2 xl:inset-y-0 '>
          <PdfViewer />
        </div>
        <div className='overflow-y-auto h-3/6 xl:h-full xl:mb-0 xl:w-1/2 xl:inset-y-0 xl:border-r xl:border-gray-200 bg-gray-50'>
          <Chat />
        </div>
      </Layout>
  )
}

export default Home;
