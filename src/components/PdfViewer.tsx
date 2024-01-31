import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDF_URL = 'https://prosper-assist-llm.s3.amazonaws.com/corpus_documents/policy_documents/hiscox_gl.pdf'

const PdfViewer = () => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <Viewer
        fileUrl={PDF_URL}
        plugins={[defaultLayoutPluginInstance, pageNavigationPluginInstance]}
      />
    </div>
  )
}

export default PdfViewer;