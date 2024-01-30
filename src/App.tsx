import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" />
      <Layout>
        <div className='overflow-y-auto xl:absolute xl:w-1/2 xl:inset-y-0 xl:left-0'>
          <Viewer fileUrl={'/src/assets/hiscox_gl.pdf'} />
        </div>
        <div className='overflow-y-auto xl:mb-0 xl:absolute xl:w-1/2 xl:inset-y-0 xl:right-0 xl:border-r xl:border-gray-200 bg-gray-50'>
          {'Chat over here'}
        </div>
      </Layout>
    </>
  )
}

export default App
